import Theme from "vitepress/dist/client/theme-default";
import SmartyUI from "../../../src/index";

console.log("SmartyUI", SmartyUI);
console.log("Theme", Theme);
export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(SmartyUI);
  },
};
