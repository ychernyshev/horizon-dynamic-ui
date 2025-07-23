class EntryManager {
    constructor(formIDs, outputContainerID) {
        this.formIDs = formIDs;
        this.output = document.getElementById(outputContainerID);
        this.database = [];
        this._bindAddButton();
    }

    _bindAddButton() {
        const button = document.getElementById("addEntry");
        button.addEventListener("click", () => this._handleAdd());
    }

    _handleAdd() {
        const getValue = id => document.getElementById(id)?.value || "";
        const recipient = document.getElementById("recipientRTCK").classList.contains("active")
            ? "РТЦК"
            : document.getElementById("recipientVLK").classList.contains("active")
                ? "ВЛК"
                : "—";

        return {
            senderName: getValue("senderName"),
            senderAddress: getValue("senderAddress"),
            senderCity: getValue("senderCity"),
            postcode: getValue("postcode"),
            recipient,
            date: getValue("dateField"),
            trackNumber: getValue("trackNumber"),
        };
    }
}