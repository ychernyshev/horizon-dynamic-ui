import {renderTemplate} from "../../core/helpers/renderTemplate.js";

export const EntriesList = {
    template: ``,
    mount(config = {}) {
        const container = document.getElementById("entries-list");

        if (!container) {
            console.warn("[EntriesList] #entries-list not found during mount.");
            return;
        }

        container.innerHTML = renderTemplate(this.template, config);

        this.onMount(config);
    },
    onMount({entries = [], mode, onEdit = () => {
        }, onDelete = () => {
        }
            }) {
        const ul = document.getElementById("entries-list");

        if (!ul) {
            console.warn("[EntriesList] #entries-list not found during onMount.");
            return;
        }

        ul.innerHTML = "";

        entries.forEach(entry => {
            if (!entry || !entry.text) return;

            const li = document.createElement("li");
            li.textContent = entry.text;

            if (mode === "editable") {
                const editBtn = document.createElement("button");
                editBtn.textContent = "✏️";
                editBtn.onclick = () => onEdit(entry.id);

                const delBtn = document.createElement("button");
                delBtn.textContent = "🗑️";
                delBtn.onclick = () => onDelete(entry.id);

                li.appendChild(editBtn);
                li.appendChild(delBtn);
            }

            ul.appendChild(li);
        });
    }
};
