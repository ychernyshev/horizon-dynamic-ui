## useCTA()

### Опис

`useCTA` — універсальний хелпер для створення HTML-елементу типу `<a>` або `<button>`, який представляє Call-To-Action: заклик до дії. Використовується для навігації або запуску дії у UI.

### Особливості

- ✅ Генерує `<a>` або `<button>` в залежності від `elementType` або наявності `link`
- 🎯 Додає клас, ідентифікатор, атрибути доступності
- 🔐 Автоматично застосовує `rel="noopener noreferrer"` при `target="_blank"`
- 💥 Додає обробник `onClick` для `button`
- 💅 Можна додати `data-*`, `aria-*`, стилі, `tooltip`

### 🔧 API

```js
useCTA(CTA: { label: string; link?: string }, version: string, options?: {
  elementType?: 'a' | 'button';
  className?: string;
  id?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  title?: string;
  onClick?: () => void;
}): HTMLAnchorElement | HTMLButtonElement
```

### 📦 Приклади

```js
// <a> з переходом у новій вкладці
useCTA({ label: "Дізнатися більше", link: "/pricing" }, "v1.2", {
  className: "btn btn-info",
  target: "_blank",
  title: "Перейти на сторінку"
});

// <button> для інтерактивної дії
useCTA({ label: "Натисни мене" }, "v1.2", {
  elementType: "button",
  className: "btn btn-success",
  onClick: () => showModal()
});
```