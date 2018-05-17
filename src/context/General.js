import { createContext } from "preact-context";

const General = createContext({
  theme: {
    red: "#EB5757",
    white: "#FFF"
  },
  sku: "RE-VRC-17-3805"
});

export default General;
