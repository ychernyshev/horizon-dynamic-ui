import {useHighlight} from "../core/helpers/useHighlight.js";

export const ExamplesList = {
    mount(params = {}) {
        const container = document.getElementById("examples-list");

        if (!container) {
            console.warn("[ExamplesList] Container #examples-list not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="col-xl-10">
                <h4 style="font-weight:400;" class="text-center mb-4">Examples for your inspiration</h4>
                <div class="card-group">
                  <div class="card">
                    <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                      <a href="javascript:;" class="d-block">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-z02kttv2Q0MAjnTOBMn4EzT0Li1WJzK9A&s" width="100%" class="img-fluid border-radius-lg">
                      </a>
                    </div>
                
                    <div class="card-body pt-2">
                      <span class="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2">House</span>
                      <a href="javascript:;" class="card-title h5 d-block text-darker">
                        Shared Coworking
                      </a>
                      <p class="card-description mb-4">
                        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
                      </p>
                      <div class="author align-items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-z02kttv2Q0MAjnTOBMn4EzT0Li1WJzK9A&s" width="100%" alt="..." class="avatar shadow">
                        <div class="name ps-3">
                          <span>Mathew Glock</span>
                          <div class="stats">
                            <small>Posted on 28 February</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                      <a href="javascript:;" class="d-block">
                        <img src="https://www.appacademy.io/wp-content/uploads/2023/12/6578840df7bf9fac056e8700_what-is-javascript-blog-hero-image.webp" width="100%" class="img-fluid border-radius-lg">
                      </a>
                    </div>
                
                    <div class="card-body pt-2">
                      <span class="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2">House</span>
                      <a href="javascript:;" class="card-title h5 d-block text-darker">
                        Shared Coworking
                      </a>
                      <p class="card-description mb-4">
                        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
                      </p>
                      <div class="author align-items-center">
                        <img src="https://www.appacademy.io/wp-content/uploads/2023/12/6578840df7bf9fac056e8700_what-is-javascript-blog-hero-image.webp" width="100%" alt="..." class="avatar shadow">
                        <div class="name ps-3">
                          <span>Mathew Glock</span>
                          <div class="stats">
                            <small>Posted on 28 February</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-header p-0 mx-3 mt-3 position-relative z-index-1">
                      <a href="javascript:;" class="d-block">
                        <img src="https://www.appacademy.io/wp-content/uploads/2024/01/6578e3a5dfba7eb6b0c223b3_javascript-for-software-engineers-blog-hero-image.webp" width="100%" class="img-fluid border-radius-lg">
                      </a>
                    </div>
                
                    <div class="card-body pt-2">
                      <span class="text-gradient text-primary text-uppercase text-xs font-weight-bold my-2">House</span>
                      <a href="javascript:;" class="card-title h5 d-block text-darker">
                        Shared Coworking
                      </a>
                      <p class="card-description mb-4">
                        Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.
                      </p>
                      <div class="author align-items-center">
                        <img src="https://www.appacademy.io/wp-content/uploads/2024/01/6578e3a5dfba7eb6b0c223b3_javascript-for-software-engineers-blog-hero-image.webp" alt="..." class="avatar shadow">
                        <div class="name ps-3">
                          <span>Mathew Glock</span>
                          <div class="stats">
                            <small>Posted on 28 February</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        `;
    }
}