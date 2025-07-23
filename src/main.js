import { LocalStorage } from "./core/helpers/useLocalStorage.js";
import { Routing } from "./core/helpers/useRouting.js";
import { init } from "./router";

//  Interface Layout
// import { layout } from "./components/layout/MainLayout.js";

// Theme control
import { PanelManager } from "./core/tce/PanelManager.js";

class MainController {
    constructor(rootId) {
        this.root = document.getElementById(rootId);
        this.localStorage = new LocalStorage();
        this.routing = new Routing();
        this.panelManager = new PanelManager();
    }

    renderLayout() {
        this.panelManager.mountScene();
    }

    navigateTo(view) {
        this.routing.navigate(view);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const app = new MainController("app");
    init(app);
});
