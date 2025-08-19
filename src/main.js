import { LocalStorage } from "./core/helpers/useLocalStorage.js";
import { Routing } from "./core/helpers/useRouting.js";
import { init } from "./router/index.js";
import { SceneManager } from "./core/tce/SceneManager.js";
import {Dispatcher} from "./core/helpers/useDispatcher.js";

//  Interface Layout
// import { layout } from "./components/layout/MainLayout.js";

class MainController {
    constructor(rootId) {
        this.root = document.getElementById(rootId);
        this.localStorage = new LocalStorage();
        this.routing = new Routing();
        this.sceneManager = new SceneManager();
        this.dispatcher = new Dispatcher();
    }

    renderLayout() {
        this.sceneManager.mountScene();
    }

    navigateTo(view) {
        this.routing.navigate(view);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const app = new MainController("app");
    init(app);
});
