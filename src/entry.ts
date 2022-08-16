import { App } from "vue";
import SFCButton from "./button/src/SFCButton.vue";
import TSXButton from "./button/src/TSXButton";
// 导出单独组件
export { SFCButton, TSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    app.component(SFCButton.name, SFCButton);
    app.component(TSXButton.name, TSXButton);
  },
};
