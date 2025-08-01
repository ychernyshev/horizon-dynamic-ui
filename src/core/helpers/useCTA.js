function useCTA(CTA, version, options = {}) {
  const label = CTA?.label || "Explore";
  const href = CTA?.link?.trim();
  const {
    elementType = href ? "a" : "button", // якщо є лінк — робимо <a>
    target,
    className = "btn btn-primary",
    id,
    rel,
    ariaLabel,
    title,
    onClick
  } = options;

  const el = document.createElement(elementType);
  el.className = className;
  el.innerHTML = `${label} <span class="badge">${version}</span>`;

  if (id) el.id = id;
  if (ariaLabel) el.setAttribute("aria-label", ariaLabel);
  if (title) el.setAttribute("title", title);

  if (elementType === "a") {
    el.href = href || "#";
    if (target) el.setAttribute("target", target);
    if (rel || target === "_blank") el.setAttribute("rel", rel || "noopener noreferrer");
  } else if (elementType === "button" && typeof onClick === "function") {
    el.addEventListener("click", onClick);
  }

  return el;
}
