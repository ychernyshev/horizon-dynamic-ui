export const AddEntry = () => {
    const input = document.getElementById("noteInput");
    const button = document.getElementById("addNoteBtn");
    const list = document.getElementById("notesList");

    const renderNotes = notes => {
        list.innerHTML = "";
        notes.forEach(note => {
            const li = document.createElement("li");
            li.textContent = note;
            list.appendChild(li);
        });
    };

    const notes = SceneDispatcher.get("demoNotes") || [];
    renderNotes(notes);

    button.onclick = () => {
        const value = input.value.trim();
        if (!value) return;

        const updated = [...notes, value];
        SceneDispatcher.set("demoNotes", updated);
        SceneDispatcher.dispatch("demoNotesUpdated", updated);
        input.value = "";
    };

    SceneDispatcher.subscribe("demoNotesUpdated", renderNotes);

    // mount(params = {})
    // {
    //     const container = document.getElementById("add-entry");
    //
    //     if (!container) {
    //         console.warn("[AddEntry] Container #add-entry not found - component not mounted.");
    //         return;
    //     }
    //
    //     container.innerHTML = `
    //         <div class="col-xl-6 d-flex flex-row">
    //           <input class="form-control" id="noteInput" type="text" placeholder="Write something..." />
    //           <button class="btn btn-white" id="addNoteBtn">Add</button>
    //
    //           <ul id="notesList"></ul>
    //         </div>
    //     `;
    // }
}