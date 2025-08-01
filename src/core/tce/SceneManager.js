import {SceneDispatcher} from "../dispatcher/SceneDispatcher.js";
import {dispatcher} from "../helpers/useDispatcher.js";
import {RegistryLayoutScheme} from "./RegistryLayoutScheme.js";
import {LayoutRegistryComponents} from './LayoutRegistryComponents.js';

// Helpers
import {useAssets} from "../helpers/useAssets.js";

// Scenes
import {WelcomeScene} from "../../pages/WelcomeScene.js";
import {DebugCatch} from "../debug/DebugCatch.js";
import {DebugView} from "../debug/DebugView.js";

// WelcomeScene.mount();
// WelcomeScene.onMount();

export class SceneManager {
    constructor() {
        DebugCatch.init();

        setTimeout(() => {
            if (DebugCatch.debugLogs?.error?.length > 0 ||
                DebugCatch.debugLogs?.warn?.length > 0 ||
                DebugCatch.debugLogs?.info?.length > 0 ||
                DebugCatch.debugLogs?.log?.length > 0) {
                DebugView();
            }
        }, 500);

        SceneDispatcher.subscribe("go", sceneName => {
            const scene = RegistryLayoutScheme[sceneName];
            if (scene) {
                this.mountScene(scene);
            } else {
                console.warn("Scene not found", sceneName);
            }
        })

        dispatcher.subscribe("theme", theme => {
            document.body.setAttribute("data-theme", theme);
        });

    };

    mountScene(sceneName, targetId = "app") {
        const root = document.getElementById(targetId);
        const scene = RegistryLayoutScheme[sceneName];
        if (!scene) return this.mountScene("page_404");

        useAssets(sceneName);

        this.triggerLifecycle(scene, "onDestroy");
        this.activeScene = scene;

        try {
            root.innerHTML = scene.primary_structure || "";
        } catch (e) {
            console.warn(`⚠️ Scene ${phaseName} error: `, e);

            ErrorConsole.renderFatal({
                message: e.message || "Помилка без повідомлення",
                hint: `Помилка в фазі ${phaseName}`,
                code: e.stack || "No stack trace"
            });
        }


        requestAnimationFrame(() => {
            scene.layout?.forEach(sceneName => {
                this.mountComponent(sceneName, scene.config?.[sceneName] || {});
            });
            this.triggerLifecycle(scene, "onMount", scene.config);
        });

        requestAnimationFrame(() => {
            this.triggerLifecycle(scene, "onReady");
        });

    }

    triggerLifecycle(scene, phaseName, config) {
        if (typeof scene[phaseName] === "function") {
            try {
                scene[phaseName](config);
            } catch (e) {
                console.warn(`⚠️ Scene ${phaseName} error: `, e);
            }
        }
    }

    mountComponent(name, config) {
        const component = LayoutRegistryComponents.ComponentMap[name];
        if (component?.mount) {
            component.mount(config);
        }
    }
}