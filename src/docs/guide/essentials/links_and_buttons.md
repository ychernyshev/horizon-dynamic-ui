- ручне створення посилань та кнопок
- оголошення кнопок у межах mount() та виклик у шаблоні без необхідності дублювання коду - {CTA_button}:
```js
const CTA_label = config.CTA?.label || "Explore";
    const CTA_link = config.CTA?.link?.trim() ? config.CTA.link : "#page404";

    const processedConfig = {
        ...config,
        CTA_button: `<a href="${CTA_link}" class="btn bg-gradient-info mt-3 fs-6">
             ${CTA_label}
             <span class="badge">${config.version}</span>
           </a>`
    };
```
- генерація посилань та кнопок за допомогою хелпера, у котрих необхідна особливо налаштована логіка події:
```js
const btn = useCTA({ label: "Дізнатися більше", link: "/pricing" }, "v1.2", {
  target: "_blank",
  className: "btn btn-info",
  title: "Перейти до тарифів"
});
document.querySelector("#cta-holder").appendChild(btn);
```
