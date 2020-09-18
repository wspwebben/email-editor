import kebabToCamel from './kebabToCamel';

export default (editor) => {
  const { BlockManager: bm } = editor;
  const allBlocks = {
    category: editor.I18n.t("grapesjs-mjml.category"),
  };

  bm.getAll().reset();

  const blocks = {
    'wrapper': {class: "fa fa-window-maximize" },
    'divider': { class: "gjs-fonts gjs-f-divider" },
    'one-column': { class: "gjs-fonts gjs-f-b1" },
    'two-column': { class: "gjs-fonts gjs-f-b2" },
    'text': { class: "gjs-fonts gjs-f-text" },
    'image': { class: "fa fa-image" },
    'button': { class: "gjs-fonts gjs-f-button" }
  };

  const blockNames = Object.keys(blocks)

  Promise.all(
    blockNames.map((block) =>
      fetch(`blocks/${block}.mjml`).then((res) => res.text())
    )
  ).then((blocksContent) => {
    blocksContent.forEach((content, index) => {
      const blockName = blockNames[index];
      const block = blocks[blockName];

      bm.add(`mj-${blockName}`, {
        ...allBlocks,
        label: editor.I18n.t(`grapesjs-mjml.components.names.${kebabToCamel(blockName)}`),
        content,
        attributes: { ...block },
      });
    })
  });
} 
