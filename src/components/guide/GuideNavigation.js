export const GuideNavigation = {
    mount(config = {}) {
        const container = document.getElementById("guide-navigation");

        if (!container) {
            console.warn("[GuideNavigation] Container #guide-navigation not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="row align-items-center">
                <div class="col-xl-6">
                    <button type="button" class="btn btn-white border p-2 my-auto">EN</button>
                </div>
                <div class="col-xl-6 text-end">
                    <span style="font-weight: 300">v0.1.19</span>
                </div>
            </p>
            <div id="guide-menu-item"></div>
        `;
    }
}