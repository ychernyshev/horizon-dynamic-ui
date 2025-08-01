export const RoutingExample = {
    mount() {
        const container = document.getElementById("routing-example");

        if (!container) {
            console.warn("[RoutingExample] Container #routing-example not found - component not mounted.");
            return;
        }

        container.innerHTML = `
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
              <label class="btn btn-outline-primary" for="btnradio1">Radio 1</label>
            
              <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
              <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>
            
              <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
              <label class="btn btn-outline-primary" for="btnradio3">Radio 3</label>
            </div>
        `;
    }
}