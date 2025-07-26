import {SceneDispatcher} from "../dispatcher/SceneDispatcher.js";
import {LayoutRegistryScheme} from "./RegistryLayoutScheme.js";
import {LayoutRegistryComponents} from './LayoutRegistryComponents.js';

// Helpers
import {useAssets} from "../helpers/useAssets.js";

export class SceneManager {
    constructor() {
        SceneDispatcher.subscribe("go", sceneName => {
            const scene = LayoutRegistryScheme[sceneName];
            if (scene) {
                this.mountScene(scene);
            } else {
                console.warn("Scene not found", sceneName);
            }
        })
    };

    mountScene(sceneName, targetId = "app") {
        const root = document.getElementById(targetId);
        const scene = LayoutRegistryScheme[sceneName];
        if (!scene) return this.mountScene("page_404");

        useAssets(sceneName);

        this.triggerLifecycle(scene, "onDestroy");
        this.activeScene = scene;

        root.innerHTML = scene.primary_structure || "";

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