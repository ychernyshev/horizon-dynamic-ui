import {SceneDispatcher} from "../core/dispatcher/SceneDispatcher.js";

// Helpers
import {renderTemplate} from "../core/helpers/renderTemplate.js";

// Components
import {AddEntry} from "../components/AddEntry.js";

// AddEntry.mount();
// AddEntry.onMount();


export const WelcomeScene = {
    template: ` <div class="container-fluid mt-5">
                    <div class="row justify-content-center align-items-center" style="height: 100vh">
                        <div class="col-xl-6 col-md-10 text-center">
                            <p class="display-6">Welcome to</p>
                            <div>
                            <p class="text-gradient text-info mb-2 display-4">{title}</p>
                            <p class="col-xl-7 lead mx-auto text-end">Let\`s go improvise on your stage</p>
                        </div>
                        <div class="card bg-soft-ui p-2 text-center mt-5 mb-5">
                            <h5>It is a JavaScript micro-framework to develop static templates and websites for GitHub or Netlify with dynamic functionality</h5>
                        </div>
                            <p>
                                <span class="text-secondary">{subtitle}.</span>
                                <span class="lead">{tagline}</span>
                            </p>
    
                            {CTA_button}
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row mt-5 mb-5">
                        <div class="col-xl-9">
                            <section id="code-block"></section>
                        </div>
                        <div class="col-xl-3">
                            <section id="quick-docs"></section>
                        </div>
                    </div>
                    <div class="row mt-5 mb-5">
                        <section id="add-entry"></section>
                    </div>
                    <div class="row justify-content-center mb-5" id="examples-list"></div>
                </div>
                <section id="footer"></section>
    `,
    mount(config = {}) {
        const container = document.getElementById("welcome-block");

        if (!container) {
            console.warn("[WelcomeScene] Container #welcome-block not found - component not mounted.");
            return;
        }

        const {title, subtitle, version, tagline, CTA} = config;

        const processedConfig = {
            ...config,
            CTA_button: config.CTA
                ? `<a href="${config.CTA.split("→ ")[1]}" class="btn bg-gradient-info mt-3 fs-6">
                ${config.CTA.split("→ ")[0]}
                <span class="badge">${config.version}</span>
               </a>` : ""
        };

        container.innerHTML = renderTemplate(this.template, processedConfig);
    },
    onMount() {
        console.log("welcome onMount");

        SceneDispatcher.subscribe("add-entry/save", payload => {
            const notes = JSON.parse(localStorage.getItem("notes") || "[]");
            const updatedNotes = [...notes, typeof payload === "string" ? payload : payload.text];

            // 1. Зберегти в Local Storage
            localStorage.setItem("notes", JSON.stringify(updatedNotes));

            // 2. Синхронізувати Dispatcher
            SceneDispatcher.set("notes", updatedNotes);
        });
    }
}