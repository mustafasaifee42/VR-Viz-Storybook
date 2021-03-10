// .storybook/manager.js

import { addons } from "@storybook/addons";
import theme from "./theme";

window.STORYBOOK_GA_ID = "UA-145184614-1";
window.STORYBOOK_REACT_GA_OPTIONS = { anonymizeIp: true };

addons.setConfig({
  theme: theme,
});
