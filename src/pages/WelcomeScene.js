import {SceneDispatcher} from "../core/dispatcher/SceneDispatcher.js";

// Helpers
import {renderTemplate} from "../core/helpers/renderTemplate.js";
import {dispatcher} from "../core/helpers/useDispatcher.js";

export const WelcomeScene = {
    template: ` <div class="container-fluid d-flex align-items-center" style="height: 95vh">
                    <div class="row justify-content-center">
                        <div class="col-xxl-4 col-xl-6 col-lg-10 text-center mt-5 mb-4">
                            <p class="col-xl-5 display-6">Welcome</p>
                            <div>
                                <p class="text-gradient text-info mb-3 display-4">{title}</p>
                                <p class="col-xl-10 lead mx-auto text-end">Let\`s go improvise on your stage</p>
                            </div>
                        </div>
                        <div class="row justify-content-center">
                            <div class="card col-xxl-4 col-xl-6 bg-soft-ui p-2 text-center">
                                <h5>It is a JavaScript framework to develop static templates and websites for static hosting like GitHub or Netlify, with dynamic functionality, without Node.js</h5>
                            </div>
                        </div>
                        <div class="row justify-content-center mt-5 mb-4">
                            <div class="col-xl-6 text-center">
                                <p>
                                    <span class="lead">The philosophy: </span>
                                    <span class="text-secondary">{subtitle}.</span>
                                </p>
                                <p class="lead">{tagline}</p>
        
                                {CTA_button}
                            </div>
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
                        <div class="col-xl-6">
                            <section id="add-entry"></section>
                        </div>
                        <div class="col-xl-6">
                            <div class="row">
                                <div class="col-xl-10">
                                    <section id="edit-entry"></section>
                                </div>
                                <div class="col-xl-2" style="display: none">
                                    <ul id="entries-list"></ul>
                                </div>
                            </div>
                            <section id="edit-entry"></section>
                        </div>
                    </div>
                    <div class="row justify-content-center mb-5" id="examples-list"></div>
                </div>
                <div id="horizon-messages"></div>
                <section id="footer"></section>

    `,
    mount(config = {}) {
        const container = document.getElementById("welcome-block");

        if (!container) {
            console.warn("[WelcomeScene] Container #welcome-block not found - component not mounted.");
            return;
        }

        const {title, subtitle, version, tagline, CTA} = config;

        const CTA_label = config.CTA?.label || "Explore";
        const CTA_link = config.CTA?.link?.trim() ? config.CTA.link : "#page404";

        const processedConfig = {
            ...config,
            CTA_button: `<a href="${CTA_link}" class="btn bg-gradient-info mt-3 fs-6">
                 ${CTA_label}
                 <span class="badge">${config.version}</span>
               </a>`
        };


        container.innerHTML = renderTemplate(this.template, processedConfig);

        if (typeof this.onMount === "function") {
            this.onMount();
        }
    },

    onMount() {
        const STORAGE_KEY = "notes";

        SceneDispatcher.subscribe("add-entry/save", payload => {
            const notes = dispatcher.get(STORAGE_KEY) || [];

            const newEntry = typeof payload === "string"
                ? {id: Date.now(), text: payload, timestamp: new Date().toISOString()}
                : {
                    id: Date.now(),
                    text: payload.text,
                    timestamp: new Date().toISOString()
                };

            const updatedNotes = [...notes, newEntry];

            console.log("[Debug] Notes before saving:", updatedNotes);

            localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedNotes));
            dispatcher.set(STORAGE_KEY, updatedNotes);
        });
    }
}