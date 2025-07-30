import {renderTemplate} from "../../core/helpers/renderTemplate.js";
import {dispatcher} from "../../core/helpers/useDispatcher.js";
import {EntriesList} from "./EntriesList.js";

export const EditEntry = {
    template: ``,
    mount(config = {}) {
        const container = document.getElementById("edit-entry");

        if (!container) {
            console.warn("[EditEntry] Container #edit-entry not found - component not mounted.");
            return;
        }

        container.innerHTML = renderTemplate(this.template, config);
        this.onMount();
    },
    onMount() {
        const button = document.getElementById("submit-entry");
        const input = document.getElementById("entry-text");
        const list = document.getElementById("edit-entry");

        const STORAGE_KEY = "notes";

        button.addEventListener("click", () => {
            const value = input.value.trim();
            if (!value) return;
            const existing = dispatcher.get(STORAGE_KEY) || [];

            const newEntry = {
                id: Date.now(),
                text: value,
                timestamp: new Date().toISOString()
            };

            dispatcher.set(STORAGE_KEY, [...existing, newEntry]);
            input.value = "";
        });

        dispatcher.subscribe(STORAGE_KEY, (entries) => {
            list.innerHTML = "";
            if (!Array.isArray(entries)) return;

            entries.forEach((entry) => {
                const li = document.createElement("li");

                const span = document.createElement("span");
                span.textContent = entry.text;

                const editBtn = document.createElement("button");
                editBtn.textContent = "✏️";
                editBtn.addEventListener("click", () => {
                    const newText = prompt("Редагувати запис:", entry.text);
                    if (newText !== null) {
                        const updated = entries.map(e => e.id === entry.id ? {...e, text: newText} : e);
                        dispatcher.set(STORAGE_KEY, updated);
                    }
                });

                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "🗑️";
                deleteBtn.addEventListener("click", () => {
                    const filtered = entries.filter(e => e.id !== entry.id);
                    dispatcher.set(STORAGE_KEY, filtered);
                });

                li.appendChild(span);
                li.appendChild(editBtn);
                li.appendChild(deleteBtn);
                list.appendChild(li);
            });
        });

        const promptEdit = (id) => {
            const notes = dispatcher.get("notes") || [];
            const entry = notes.find(e => e.id === id);
            const newText = prompt("Редагувати запис:", entry?.text);
            if (newText !== null && entry) {
                const updated = notes.map(e => e.id === id ? {...e, text: newText} : e);
                dispatcher.set("notes", updated);
            }
        };

        const deleteEntry = (id) => {
            const notes = dispatcher.get("notes") || [];
            const filtered = notes.filter(e => e.id !== id);
            dispatcher.set("notes", filtered);
        };

        dispatcher.hydrate(STORAGE_KEY);

        let currentMode = "readonly";

        dispatcher.subscribe("notes", entries => {
            if (currentMode === "readonly") {
                EntriesList.onMount({entries, mode: "readonly"});
            } else if (currentMode === "editable") {
                EntriesList.mount({
                    entries,
                    mode: "editable",
                    onEdit: promptEdit,
                    onDelete: deleteEntry
                });
            }
        });

    }
}