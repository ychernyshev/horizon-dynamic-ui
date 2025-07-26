See the [🇺🇸 English](CHANGELOG.en-us.md) of the changelog.

# 📝 CHANGELOG — P4.1 Horizon

Цей журнал змін фіксує основні етапи розвитку проєкту, нові функціональні модулі, оновлення архітектури та документації.

---

## [0.1.0] — 2024-07-10

### 🚀 Added
- 📁 Створено гілку `feature/ui-prototype` для шаблону інтерфейсу
- 📦 Додано папку `prototype_ui/` зі Soft UI Dashboard (Creative Tim)
- 📝 Створено `prototype_ui/README.md` із описом шаблону та використання
- 📘 Додано англомовну версію документації (`README.en.md`)
- 📄 Оновлено головний `LICENSE.md` із зазначенням Creative Tim

### ✏️ Changed
- 🧾 Головний `README.md`: фінальна структура, навігація, прев’ю, коментар автора

### 📌 Notes
- 🔱 Гілки розділено: `main` для документації, `feature/ui-prototype` для шаблону
- 🎨 Наступний етап: перенесення UI в Vue — буде у гілці `ui-dev`

---

## 🔮 Coming Up

- [ ] Створити `ui-dev` гілку для Vue 3 інтерфейсу
- [ ] Реалізувати `TriPanelLayout.vue` з Composition API
- [ ] Інтеграція з бекендом через DRF endpoint
- [ ] Створити `CHANGELOG.md` для API та сервісної логіки

---

## [v0.1.1] – 2025-07-13

### 📁 Structure
- Added folder `mail` with templates:
  - `add_mail.html`
  - `update_mail.html`
- Added folder `reports` with template:
  - `upload_errors.html`

### ✨ Features
- Max section height added and scrolling enabled.
- Dashboard page design has been completed.
- “Add mail” page updated: saving form for mail item added.

### 🎨 Styles
- Scrolling styles added in `scrolling_stiles.css`.
- Toast styles added in `toasts.css`.
- Styles for Navigation Panel cards added in `navigation-cards.css`.

### 🧭 Navigation Panel
- Basic structure of the Navigation Panel has been added.
- Example cards have been implemented for interface testing.
- Search panel and filter buttons are now available.
- Search form has been added.
- Active-style card now has its own styling and animation.

---

## [v0.1.2] – 2025-07-14

### 🔧 Updates
- Updated styles for Navigation Panel cards in "active" state.
- Improved animation for active card behavior.
- Ensured design consistency of the “Add mail” form.
- Renamed template `add_mail.html` to `add_entry.html`.
- Replaced diamond icon with P4 logo in the Documentation component (Navigation Bar).

### 🚀 New Components
- Added Upload Cheatsheet modal.
- Added Upload Images modal.

---

## [v0.1.3] — 2025.07.18

#### Postman 4 Dynamic UI. Початок інтеграції

### ✏️ Змінено
- Файл `route/main.js` тепер виконує логіку запуску застосунку
- Клас `Routing` доповнено маршрутом для 404

### 🔧 Створено
- Основна точка входу `index_d.html` — тимчасова версія для інтеграції динамічного UI.
- Файл `main.js` — головний контролер SPA-архітектури.
- Компоненти ядра:
  - `useLocalStorage.js` — керування станом зберігання.
  - `useDispatcher.js` — реактивний in-memory стан.
  - `useRouting.js` — навігація між розділами.
  - `layout.js` — генерація трипанельного каркасу.
  - `SceneManager.js` — динамічне оновлення вмісту панелей.
- Створено базову структуру порожніх файлів для сторінок:
  - DashboardView.
  - account:
     - ProfileSetupView
     - ProfileView
     - SignInView
  - entry:
     - AddEntryView
     - EntryDetailsView
     - UpdateEntryView
  - reports:
     - Collection8View
     - Collection22aView
     - ReceiptsListView
     - UploadErrorDetailsView
- Ініціалізовано шаблони документації (для майбутнього заповнення):
  - DocumentationView
  - Routing.md
  - SimulationGuide
  - StorageTutorial
- Налаштовано систему маршрутизації (SPA, хеш-роутинг)

> 🧪 Примітка: _Відображення головної сторінки наразі тестове_

### ⚙️ Ініціалізовано
- `MainController` — централізоване керування логікою SPA.
- Dispatcher → тема `theme` отримується із Local Storage, з fallback на `light`.
- Layout рендериться в `#app` та підключає `SceneManager`.


### 📌 Підготовлено для
- Повної симуляції компонентної логіки в шаблоні без Vue.
- Додавання темізації, симуляцій, карток повідомлень і внутрішньої маршрутизації.

> 🔥 _Це початок інтеграції живої логіки в статичну структуру._

### 🚧 Наступні дії
- Інтеграція сторінок: AddEntryView, EntryDetailsView
- Компоненти картки повідомлення з симуляцією збереження
- Темізація через Dispatcher (у майбутньому)


---

## [0.1.4] – 2025-07-19

### 🧩 Додано
- Інтегровані layout-компоненти:
  - `TopBar`
  - `ControlBar`
  - `SectionNavigator`
  - `DetailsDisplay`

### ✏️ Оновлено
- `dashboard.js` тепер рендериться через модульну структуру layout-компонентів
- Додано початкову версію `SceneManager.js` — вставляє структуру layout безпосередньо у DOM

### 📌 Запланований функціонал `SceneManager.js`
👉 Компонентний координатор — слухає події Dispatcher та тригерить оновлення панелей  
👉 Сервіс-логіка — керує станом записів, фільтрацією, вибором  
👉 Внутрішній контролер — монтує, оновлює, прибирає окремі панелі  
👉 Рендер структури — вставка layout у DOM  
👉 Реактивна синхронізація — реагує на зміну теми та активного запису  
👉 Публічні методи — `init()`, `mountPanels(data)`, `updatePanel()`

---

## [0.1.5] – 2025-07-20

### 🧠 Реалізовано Horizon Scene Engine (SceneManager)
- Додано `SceneManager.js`: конструктор сторінок на основі маршруту
- Метод `mountScene(sceneName)` вставляє базову структуру та монтує компоненти

### 📦 Уніфіковано компонування через `LayoutRegistryScheme.js`
- Зберігає:
  - `structure` — HTML-шаблон контейнерів
  - `layout` — порядок компонентів
  - `config` — параметри до `mount()`

### 🔄 Всі сторінки (dashboard, sign_in, add_entry і т.д.) тепер рендеряться через LayoutRegistry + SceneManager

---

# 📦 Changelog — Horizon Dynamic UI

> Horizon — JavaScript micro-фреймворк для створення динамічного інтерфейсу без білду, бекенду чи npm.  
> *“Improvise on your own stage”*

---

## 🗓️ Версія 0.1.6 — Стартова сцена *(липень 2025)*

### 🔧 Рефактор ядра
- Відокремлено фреймворк від шаблону Postman 4
- Визначено незалежну структуру ядра Horizon Dynamic UI

### 🎭 Архітектура сцен
- Впроваджено структуру `structure`, `layout`, `config` як основу сцени
- Перейменовано компоненти з `View` на `Scene` — як акт сценічної логіки

### 🧩 Стартова сцена `WelcomeScene`
- Вітальний блок з `title`, `subtitle`, `tagline`, `CTA`
- Галерея прикладів (`ExamplesBlock`)
- Підсвічування коду (`code-block`) з нумерацією
- Футер з логотипом, авторством та ліцензією

### 📁 Додано helpers
- `useAssets.js` — підключення скриптів і стилів із Registry
- `useHighlight.js` — активація Prism для підсвічування коду
- Створено папку `core/helpers/`
- Написано `helpers/README.md` з поясненням ролі та стилю helpers

### 🎨 Підсвічування коду
- Інтегровано Prism.js з плагіном `line-numbers`
- Введено формат `codeSnippets` — словник для мульти-блоків
- Компонент `CodeBlock.js` обробляє вставку коду й викликає `useHighlight()`

### 📘 Документація та репозиторій
- Створено англомовний опис репозиторію:  
  *"Horizon Dynamic UI is a JavaScript micro-framework for building dynamic, declarative web interfaces without the need for a backend or build tools..."*
- Вибрана ліцензія MIT
- Додано футер: *Built with Horizon Dynamic UI · Improvise on your own stage*

---

## ⏭️ Наступні плани

- `version.js` для трекінгу версій
- `DocsIntroScene` — сцена-вступ до фреймворку
- `Scenes.md`, `DeveloperExperience.md`, `Why Horizon.md`
- Нові helpers: `useCopy()`, `useFont()`, `useSEO()`

---


