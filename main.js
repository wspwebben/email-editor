import "grapesjs/dist/css/grapes.min.css";
import grapesJS from "grapesjs";
import grapesJSMJML from "grapesjs-mjml";

grapesJS.init({
  fromElement: 1,
  container : '#gjs',
  avoidInlineStyle : false,
  plugins: [grapesJSMJML],
  pluginsOpts: {
     [grapesJSMJML]: {/* ...options */}
  },
});
