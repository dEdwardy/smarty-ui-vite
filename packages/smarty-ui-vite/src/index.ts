import { App } from "vue";
import { TSXButton } from "./button";
import "uno.css";

// 导出单独组件
export { TSXButton };

// 编写一个插件，实现一个install方法

export default {
  install(app: App): void {
    console.error("allCmp TSXButton ", TSXButton, TSXButton.name);
    app.component(TSXButton.name, TSXButton);
  },
};
