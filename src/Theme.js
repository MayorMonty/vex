import { h } from "preact";
import { createContext } from "preact-context";

const Theme = createContext({
  red: "#EB5757",
  white: "#FFF"
});

export default Theme;
