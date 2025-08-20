import {renderTemplate} from "../../core/helpers/renderTemplate.js";
import {dispatcher} from "../../core/helpers/useDispatcher.js";
import {EntriesList} from "./EntriesList.js";


export const ShowEntry = {
    template: `
        <ul id="notes-list"></ul>
    `,
    mount(config = {}) {
        const container = document.getElementById("show-entry");

        if (!container) {
            console.warn("[ShowEntry] Container #show-entry not found - component not mounted.");
            return;
        }

        container.innerHTML = renderTemplate(this.template, config);
        this.onMount();
    },
    onMount() {
        const list = document.getElementById("notes-list");

        const STORAGE_KEY = "notes";

        dispatcher.subscribe(STORAGE_KEY, (entries) => {
            list.innerHTML = "";
            if (!Array.isArray(entries)) return;
        });

        dispatcher.hydrate(STORAGE_KEY);

        dispatcher.subscribe("notes", entries => {
            EntriesList.onMount({
                entries,
                mode: "readonly",
            });
        });
    },
}