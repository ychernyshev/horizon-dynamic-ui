/**🔹 У документації можна буде показати:

логіку SPA-компонентів

структуру UI-рендерингу

приклади симуляції даних (EntryStore)

стилі та темізацію

debug-секції або changelog**/
import {renderTemplate} from "../../core/helpers/renderTemplate.js";

export const GuideMain = {
    template: `
        <div class="row">
            <div class="col-xl-3">
                <div class="row">
                    <div class="col-xl-12">
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12" id="guide-navigation"></div>
                </div>
            </div>
            <div class="col-xl-8" id="guide-description">Description</div>
        </div> 
    `,
    mount(config = {}) {
        const container = document.getElementById("guide-container");

        if (!container) {
            console.warn("[GuideMain] Container #guide-container not found - component not mounted.");
            return;
        }

        container.innerHTML = renderTemplate(this.template, config);
    },
    onMount() {},
}