import TSXButton from "./src/TSXButton.tsx";
import { App } from "vue";

// 导出Button组件
export { TSXButton };

// 导出Vue插件
export default {
  install(app: App.options = {}) {
    console.error("ondemand TSXButton ");
    app.component(TSXButton.name, TSXButton);
  },
};
