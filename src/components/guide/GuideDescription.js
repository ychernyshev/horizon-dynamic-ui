import {renderTemplate} from "../../core/helpers/renderTemplate.js";

export const GuideDescription = {
    template: `
        <h3>GuideDescription</h3>
    `,
    mount(config = {}) {
        const container = document.getElementById("guide-description");

        if (!container) {
            console.warn("[GuideDescription] Container #guide-description not found - component not mounted.");
            return;
        }

        container.innerHTML = renderTemplate(this.template, config);

        this.onMount();
    },
    onMount() {},
}