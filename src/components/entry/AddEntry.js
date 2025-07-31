import {renderTemplate} from "../../core/helpers/renderTemplate.js";
import {dispatcher} from "../../core/helpers/useDispatcher.js";
import {useMessages} from "../../core/helpers/useMessages.js";

export const AddEntry = {
    template: `
    <div class="col-xl-12 d-flex flex-column">
      <div class="d-flex flex-row mb-2">
        <input class="form-control me-2" id="entry-text" type="text" placeholder="Write something..." />
        <button class="btn btn-white" id="submit-entry">Add</button>
      </div>
    </div>
  `,
    mount(config = {}) {
        const container = document.getElementById("add-entry");
        if (!container) {
            console.warn("[AddEntry] Container #add-entry not found - component not mounted.");
            return;
        }

        container.innerHTML = renderTemplate(this.template, config);
        this.onMount();
    },
    onMount() {
        const input = document.getElementById("entry-text");
        const button = document.getElementById("submit-entry");

        const STORAGE_KEY = "notes";

        button.addEventListener("click", () => {
            const value = input.value.trim();
            if (!value) return;
            const existing = dispatcher.get(STORAGE_KEY) || [];
            // dispatcher.set(STORAGE_KEY, [...existing, value]);
            const newEntry = {
                id: Date.now(),
                text: value,
                timestamp: new Date().toISOString()
            };
            dispatcher.set(STORAGE_KEY, [...existing, newEntry]);

            input.value = "";

            const messages = useMessages();
            messages.success("saved");
        });
    },
};
