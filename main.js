import "grapesjs/dist/css/grapes.min.css";
import grapesJS from "grapesjs";
import grapesJSMJML from "grapesjs-mjml";

import loadBlocks from './blocks';

const editor = grapesJS.init({
  container : '#gjs',
  fromElement: true,
  plugins: [grapesJSMJML],
});

loadBlocks(editor);
