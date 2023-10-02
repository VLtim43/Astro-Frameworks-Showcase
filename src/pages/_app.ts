import type { App } from "vue";
import Toast from "vue-toastification";
// Toast styles
import "vue-toastification/dist/index.css";

export default (app: App) => {
  app.use(Toast);
};
