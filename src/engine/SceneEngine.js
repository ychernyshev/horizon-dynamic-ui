import {LayoutRegistryScheme} from "../core/tce/RegistryLayoutScheme.js";

export function mountScene(scene, targetId = "app") {
    const target = document.getElementById(targetId);
    if (!target) return;

    if (scene.primary_structure) {
        target.innerHTML = scene.primary_structure;
    }

    scene.layout?.forEach((sceneName) => {
        const component = LayoutRegistryScheme[sceneName];
        const config = scene.config?.[sceneName] || {};

        if (typeof component.mount === "function") {
            component.mount(config);
        }
    })

    if (scene.linkHref) {
        target.innerHTML = scene.linkHref;
    }

    if (scene.scriptSrc) {
        target.innerHTML = scene.scriptSrc;
    }

    if (typeof scene.onMount === "function") {
        scene.onMount();
    }
}

export function onReady() {
}

export function onDestroy() {
}
