document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("entryForm");
  if (!form) {
    console.warn("Форма не знайдена");
    return;
  }

  const formIds = [
    "senderName", "senderAddress", "senderCity", "postcode",
    "recipientRTCK", "recipientVLK", "dateField", "trackNumber"
  ];

  new EntryManager(formIds, "newCard");
});
