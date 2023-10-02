import type { App } from "vue";
import Toast from "vue-toastification";
// Toast styles

export default (app: App) => {
  app.use(Toast);
};
