import { h, Component } from "preact";
import { Link } from "preact-router/match";
import General from "../../context/General";
import style from "./style";

export default class Header extends Component {
  render() {
    return (
      <General.Consumer>
        {({ theme }) => (
          <header class={style.header} style={{ backgroundColor: theme.red }} />
        )}
      </General.Consumer>
    );
  }
}
