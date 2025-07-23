export const WelcomeScene = {
    mount(params = {}) {
        const container = document.getElementById("welcome-block");

        if (!container) {
            console.warn("[WelcomeScene] Контейнер #home-item не знайдено — компонент не змонтовано.");
            return;
        }

        const { title, subtitle, version, tagline, CTA } = params;

        container.innerHTML = `
            <div class="container-fluid mt-5">
                <div class="row justify-content-center align-items-center" style="height: 100vh">
                    <div class="col-xl-6 col-md-10 text-center">
                        <p class="display-6">Welcome to</p>
                        <div>
                        <p class="text-gradient text-info mb-2 display-4">${title}</p>
                        <p class="col-xl-7 lead mx-auto text-end">Let\`s go improvise on your stage</p>
                    </div>
                    <div class="card bg-soft-ui p-2 text-center mt-5 mb-5">
                        <h5>It is a JavaScript micro-framework to develop static templates and websites for GitHub or Netlify with dynamic functionality</h5>
                    </div>
                        <p>
                            <span class="text-secondary">${subtitle}.</span>
                            <span class="lead">${tagline}</span>
                        </p>
                        
                        ${CTA ? `<a href="${CTA.split("→ ")[1]}" class="btn bg-gradient-info mt-3 fs-6">
                            ${CTA.split("→ ")[0]}
                            <span class="badge">${version}</span>
                        </a>` : ""}
                    </div>
                </div>
                <div class="row mt-5 mb-5">
                    <div class="col-xl-9">
                        <section id="code-block"></section>
                    </div>
                    <div class="col-xl-3">
                        <section id="quick-docs"></section>
                    </div>
                </div>
                <div class="row justify-content-center mb-5" id="examples-list"></div>
            </div>
            <section id="footer"></section>
        `
    }
}