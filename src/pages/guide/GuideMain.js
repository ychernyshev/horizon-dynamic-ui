/**🔹 У документації можна буде показати:

логіку SPA-компонентів

структуру UI-рендерингу

приклади симуляції даних (EntryStore)

стилі та темізацію

debug-секції або changelog**/
import {renderTemplate} from "../../core/helpers/renderTemplate.js";

export const GuideMain = {
    template: `
        <div class="row border-bottom">
            <a href="#welcome" class="mt-3">
                <p class="text-gradient text-info display-6">{title}</p>
            </a>
        </div>
        <div class="row">
            <div class="col-xl-3" style="height: 91vh">
                <div style="overflow-y: scroll" class="col-xl-12 border-end h-100 p-3" id="guide-navigation"></div>
            </div>
            <div class="col-xl-9" style="height: 91vh">
                <div style="overflow-y: scroll" class="col-xl-12 h-100 p-3" id="guide-description"></div>
            </div>
        </div> 
    `,
    mount(config = {}) {
        const container = document.getElementById("guide-container");

        if (!container) {
            console.warn("[GuideMain] Container #guide-container not found - component not mounted.");
            return;
        }

        const {title} = config

        container.innerHTML = renderTemplate(this.template, config);
    },
    onMount() {},
}