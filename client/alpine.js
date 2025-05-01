import Alpine from "alpinejs";

window.Alpine = Alpine;

document.addEventListener("alpine:init", () => {
    window.Alpine.data("application", () => ({
        application: window.application.alpine,
    }));
});

window.Alpine.start();