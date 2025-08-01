export const GuideNavigation = {
    mount(config = {}) {
        const container = document.getElementById("guide-navigation");

        if (!container) {
            console.warn("[GuideNavigation] Container #guide-navigation not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <p class="d-inline-flex gap-1">
              <a class="" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Початок</a>
              </p>
            <div class="row mb-4">
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                  <div class="card card-body h-100">
                    <p class="d-flex my-auto"><a class="" href="" role="button">Вступ</a></p>
                    <p class="d-flex my-auto"><a class="" href="" role="button">Швидкий старт</a></p>
                  </div>
                </div>
              </div>
            </div>
            <p class="d-inline-flex gap-1">
                <a class="" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Основи роботи</a>
            </p>
            <div class="row">
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample2">
                  <div class="card card-body">
                    <p class=""><a class="" href="" role="button">Синтаксис шаблону</a></p>
                    <p class=""><a class="" href="" role="button">Налаштування сцени/компоненту у RegistryLayoutScheme (Макет, що тримає реєстр компонентів)</a></p>
                    <p class=""><a class="" href="" role="button">Реєстрація сцени/компоненту у LayoutRegistryComponents (Реєстр схем макетів)</a></p>
                    <p class=""><a class="" href="" role="button">Прив'язування стилів та скриптів</a></p>
                    <p class=""><a class="" href="" role="button">Створення посилань та кнопок</a></p>
                    <p class=""><a class="" href="" role="button">Виклик messages</a></p>
                    <p class=""><a class="" href="" role="button">Блок коду</a></p>
                  </div>
                </div>
              </div>
            </div>
            <p class="d-inline-flex gap-1">
                <a class="" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">Глибше занурення у компоненти</a>
            </p>
            <div class="row">
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample3">
                  <div class="card card-body">
                    <p class=""><a class="" href="" role="button">renderTemplate</a></p>
                    <p class=""><a class="" href="" role="button">mount()</a></p>
                    <p class=""><a class="" href="" role="button">onMount()</a></p>
                  </div>
                </div>
              </div>
            </div>
            <p class="d-inline-flex gap-1">
                <a class="" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample4" aria-expanded="false" aria-controls="multiCollapseExample4">Роутинг</a>
            </p>
            <div class="row">
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample4">
                  <div class="card card-body">
                    <p class=""><a class="" href="" role="button">Хеш-посилання</a></p>
                    <p class=""><a class="" href="" role="button">Створення {CTA_button}</a></p>
                    <p class=""><a class="" href="" role="button">Використання useCTA() хелпера</a></p>
                  </div>
                </div>
              </div>
            </div>
            <p class="d-inline-flex gap-1">
                <a class="" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample5" aria-expanded="false" aria-controls="multiCollapseExample5">Реактивна підсистема</a>
            </p>
            <div class="row">
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample5">
                  <div class="card card-body">
                    <p class=""><a class="" href="" role="button">Робота з Dispatcher</a></p>
                    <p class=""><a class="" href="" role="button">SceneMount</a></p>
                    <p class=""><a class="" href="" role="button">MessagesAgent</a></p>
                  </div>
                </div>
              </div>
            </div>
            <p class="d-inline-flex gap-1">
                <a class="" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample6" aria-expanded="false" aria-controls="multiCollapseExample2">Робота з localStorage</a>
            </p>
            <div class="row">
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample6">
                  <div class="card card-body">
                    <p class=""><a class="" href="" role="button">Додавання</a></p>
                    <p class=""><a class="" href="" role="button">Завантаження</a></p>
                    <p class=""><a class="" href="" role="button">Видалення</a></p>
                  </div>
                </div>
              </div>
            </div>
        `;
    }
}