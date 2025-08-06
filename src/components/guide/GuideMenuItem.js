export const GuideMenuItem = {
    async mount() {
        const container = document.getElementById("guide-menu-item");
        const response = await fetch("./src/components/guide/guide_data.json");
        const guide_data = await response.json();

        if (!container) {
            console.warn("[GuideMenuItem] Container #guide-menu-item not found - component not mounted.");
            return;
        }

        const language = "uk";
        const topics = guide_data[language];
        let menuHTML = "";

        Object.entries(topics).forEach(([sectionTitle, subtitles], index) => {
            const collapseID = `collapse-${index}`;
            let subtitleHTML = "";

            Object.entries(subtitles).forEach(([subkey, blocks]) => {
                const hasContent = Array.isArray(blocks) && blocks.length > 0;

                if (hasContent) {
                    subtitleHTML += `
                        <p class="d-flex my-auto">
                          <a href="#" data-topic="${sectionTitle}::${subkey}" role="button">
                            ${subkey}
                          </a>
                        </p>
                     `;
                }
            });

            if (subtitleHTML !== "") {
                menuHTML += `
                  <p class="d-inline-flex gap-1">
                    <a data-bs-toggle="collapse" href="#${collapseID}" role="button"
                       aria-expanded="false" aria-controls="${collapseID}">
                      ${sectionTitle}
                    </a>
                  </p>
                  <div class="row">
                    <div class="col">
                      <div class="collapse multi-collapse" id="${collapseID}">
                        <div class="card card-body h-100">
                          ${subtitleHTML}
                        </div>
                      </div>
                    </div>
                  </div>
                `;
            }
        });

        container.innerHTML = menuHTML;

        const firstTopic = container.querySelector("[data-topic]");
        if (firstTopic) {
            firstTopic.click();
        }
    }
}
