class Entry {
    constructor({
                    newCard,
                    senderName,
                    senderAddress,
                    senderCity,
                    postcode,
                    recipientRTCK,
                    recipientVLK,
                    dateField,
                    trackNumber,
                    returnMailNumber
                }) {
        this.senderName = senderName;
        this.senderAddress = senderAddress;
        this.senderCity = senderCity;
        this.postcode = postcode;
        this.recipient = recipientRTCK ? "РТЦК" : recipientVLK ? "ВЛК" : "—";
        this.dateField = dateField;
        this.trackNumber = trackNumber;
        this.returnMailNumber = returnMailNumber;
    }

    render() {
        const link = document.createElement("a");
        link.href = "entry_details.html";
        link.className = "text-decoration-none d-block";

        const card = document.createElement("div");
        card.className = "card w-100 p-3 navigation-card mb-3 active";

        card.innerHTML = `
          <div class="row">
            <div class="col-xl-6">
              <small><b>${this.recipient}</b></small>
            </div>
            <div class="col-xl-6 text-end">
              <small><b>${this.dateField}</b></small>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col-xl-7">
              <p>${this.senderName}</p>
            </div>
            <div class="col-xl-5 text-end">
              <p>${this.trackNumber}</p>
            </div>
          </div>
        `;

        link.appendChild(card);
        return link;
    }
}