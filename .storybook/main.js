module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-notes/register",
    "@storybook/addon-google-analytics",
    {
      name: "@storybook/addon-links",
      options: {
        backgrounds: false,
      },
    },
    {
      name: "@storybook/addon-essentials",
      options: {
        controls: false,
        actions: false,
      },
    },
  ],
};
