import tokensHexaUI from "@hexa-ui/tokens/dist/json/nested.json";

export const tokens = Object.assign({}, tokensHexaUI, {
  fonts: {
    ...tokensHexaUI.fonts,
    "font-family": {
      ...tokensHexaUI.fonts["font-family"],
      "grow-title": "Barlow",
      "grow-default": "Work Sans",
    },
  },

  color: {
    ...tokensHexaUI.color,
    "grow-alert": "#FFD700",
  },
});
