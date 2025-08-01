import { RegistryLayoutScheme } from "../tce/RegistryLayoutScheme.js";

export function useAssets(sceneName) {
    const scene = RegistryLayoutScheme[sceneName];
    if (!scene || !scene.scriptSrc) return;

    // Scripts
    const sources = Array.isArray(scene.scriptSrc)
        ? scene.scriptSrc
        : [scene.scriptSrc];

    sources.forEach(src => {
        if (document.querySelector(`script[src="${src}"]`)) return;

        const script = document.createElement("script");
        script.src = src;
        script.defer = true;
        document.head.appendChild(script);
    })

    // Styles / Links
    const links = Array.isArray(scene.linkHref)
        ? scene.linkHref
        : scene.linkHref ? [scene.linkHref] : [];

    links.forEach(href => {
        if (document.querySelector(`link[href="${href}"]`)) return;
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    });
}