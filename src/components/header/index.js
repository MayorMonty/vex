import { h, Component } from "preact";
import { Link } from "preact-router/match";
import Theme from "../../Theme";
import style from "./style";

export default class Header extends Component {
  render() {
    return (
      <Theme.Consumer>
        {theme => (
          <header class={style.header} style={{ backgroundColor: theme.red }} />
        )}
      </Theme.Consumer>
    );
  }
}
