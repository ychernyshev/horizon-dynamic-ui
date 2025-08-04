- Власний `useRouting()` — без зовнішніх router-бібліотек
- Прості маршрути через хеши (`#dashboard`, `#projects`, `#home`)
- Відсутність сцени автоматично веде до `page_404`

```javascript
routing.add("home", () => panelManager.mountScene("guide"));
```