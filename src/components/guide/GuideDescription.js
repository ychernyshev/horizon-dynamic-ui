import {renderTemplate} from "../../core/helpers/renderTemplate.js";
import {SceneDispatcher} from "../../core/dispatcher/SceneDispatcher.js";
import {dispatcher} from "../../core/helpers/useDispatcher.js";
import {AddEntry} from "../entry/AddEntry.js";
import {EntriesList} from "../entry/EntriesList.js";
import {EditEntry} from "../entry/EditEntry.js";

export const GuideDescription = {
    template: `
    <section id="code-block"></section>
  `,

    async mount(config = {}) {
        const container = document.getElementById("guide-description");
        if (!container) {
            console.warn("[GuideDescription] Container #guide-description not found - component not mounted.");
            return;
        }

        container.innerHTML = renderTemplate(this.template, config);

        // this.onMount();
        await this.loadGuide();
    },

    async loadGuide() {
        document.addEventListener("click", async (e) => {
            const target = e.target.closest("[data-topic]");
            if (!target) return;

            e.preventDefault();
            const dataTopic = target.getAttribute("data-topic");
            const [section, subtitle] = dataTopic.split("::");

            try {
                const response = await fetch("./src/components/guide/guide_data.json");
                const guide_data = await response.json();

                const blocks = guide_data.uk?.[section]?.[subtitle];
                const descContainer = document.getElementById("guide-description");

                if (!descContainer) {
                    console.warn("[Guide] Container #guide-description not found.");
                    return;
                }

                let html = `<h4>${subtitle}</h4>`;

                if (Array.isArray(blocks) && blocks.length > 0) {
                    blocks.forEach(block => {
                        switch (block.type) {
                            case "text":
                                html += `<p>${block.content}</p>`;
                                break;
                            case "code":
                                html += `<pre><code class="language-${block.language}">${block.content}</code></pre>`;
                                break;
                            case "note":
                                html += `<div class="alert alert-info">${block.content}</div>`;
                                break;
                            case "quote":
                                html += `<blockquote>${block.content}</blockquote>`;
                                break;
                            case "list":
                                html += `<ul>${block.items.map(item => `<li>${item}</li>`).join("")}</ul>`;
                                break;
                            default:
                                html += `<p class="text-muted">[Unsupported block type: ${block.type}]</p>`;
                        }
                    });
                } else {
                    html += `<p class="text-muted">Опис відсутній.</p>`;
                }

                descContainer.innerHTML = html;

                // 🔥 ВАЖЛИВО: викликаємо логіку після вставки
                this.afterGuideMount();

            } catch (error) {
                console.error("[Guide] Error loading guide_data.json:", error);
            }
        });
    },

    afterGuideMount() {
        const addEntryContainer = document.getElementById("add-entry");
        if (addEntryContainer) {
            AddEntry.mount();
        }
        const entriesListContainer = document.getElementById("entries-list");
        if (entriesListContainer) {
            EntriesList.mount();
        }
        const editEntryContainer = document.getElementById("edit-entry");
        if (editEntryContainer) {
            EditEntry.mount();
        }


        const STORAGE_KEY = "notes";

        SceneDispatcher.subscribe("add-entry/save", payload => {
            const notes = dispatcher.get(STORAGE_KEY) || [];

            const newEntry = typeof payload === "string"
                ? {id: Date.now(), text: payload, timestamp: new Date().toISOString()}
                : {
                    id: Date.now(),
                    text: payload.text,
                    timestamp: new Date().toISOString()
                };

            const updatedNotes = [...notes, newEntry];

            console.log("[Debug] Notes before saving:", updatedNotes);

            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
            dispatcher.set(STORAGE_KEY, updatedNotes);
        });
    }
}
