import { dirname, join } from "path";
module.exports = {
  stories: ["../src/pages/**/*.mdx", "../src/stories/**/*.stories.tsx"],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-mdx-gfm")
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {}
  },

  // Prod Configuration
  viteFinal: (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.base = "/bees-grow-ui/";
    }

    return config;
  },

  docs: {
    autodocs: true
  }
};

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
