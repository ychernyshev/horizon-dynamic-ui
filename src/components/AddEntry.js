import {SceneDispatcher} from "../core/dispatcher/SceneDispatcher.js";

// Helpers
import {renderTemplate} from "../core/helpers/renderTemplate.js";

export const AddEntry = {
    template: `
        <div class="col-xl-6 d-flex flex-row">
          <input class="form-control" id="entry-text" type="text" placeholder="Write something..." />
          <button class="btn btn-white" id="submit-entry">Add</button>

          <ul id="notes-list"></ul>
        </div>
    `,
    mount(config = {}) {
        const container = document.getElementById("add-entry");

        if (!container) {
            console.warn("[AddEntry] Container #add-entry not found - component not mounted.");
            return;
        }

        // container.innerHTML = `
        // <div class="col-xl-6 d-flex flex-row">
        //   <input class="form-control" id="entry-text" type="text" placeholder="Write something..." />
        //   <button class="btn btn-white" id="submit-entry">Add</button>
        //
        //   <ul id="notes-list"></ul>
        // </div>
        // `

        container.innerHTML = renderTemplate(this.template, config);
    },
    onMount() {
        console.log("entry onMount");

        const input = document.getElementById("entry-text");
        const btn = document.getElementById("submit-entry");
        const list = document.getElementById("notes-list");
        if (!btn) {
            console.warn("[AddEntry] submit-entry не знайдено");
            return;
        }

        // 1. Завантаження нотаток із Local Storage
        const notes = JSON.parse(localStorage.getItem("notes") || "[]");
        notes.forEach(note => {
            const li = document.createElement("li");
            li.textContent = note;
            list.appendChild(li);
        });

        // 2. Обробка кліку
        btn.onclick = () => {
            const text = input.value.trim();
            if (!text) return;

            console.log("[AddEntry] dispatching:", {text});

            SceneDispatcher.dispatch("add-entry/save", {text});

            const li = document.createElement("li");
            li.textContent = text;
            list.appendChild(li);

            input.value = "";
        };

        SceneDispatcher.subscribe("notes", updatedNotes => {
            list.innerHTML = ""; // очищає список
            updatedNotes.forEach(note => {
                const li = document.createElement("li");
                li.textContent = typeof note === "string" ? note : note.text;
                list.appendChild(li);
            });
        });

    }
}
