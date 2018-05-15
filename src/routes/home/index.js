import { h, Component } from "preact";
import style from "./style";

import EventView from "./views/event";
import SelectView from "./views/select";

export default class Home extends Component {
  render() {
    let event = localStorage.getItem("event");
    return (
      <div class={style.home}>
        {event ? (
          <EventView event={event} />
        ) : (
          <SelectView onSelect={event => this.setState({ event })} />
        )}
      </div>
    );
  }
}
