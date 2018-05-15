import { h } from "preact";
import AsyncComponent from "../../../components/AsyncComponent";
import vexdb from "../../../../../vexdb";
import style from "../style";

window.vexdb = vexdb;

export default class EventView extends AsyncComponent {
  state = {
    event: {}
  };

  componentWillReceiveProps({ event }) {
    this.setState({
      event: vexdb.get("events", { sku: event })[0]
    });
  }

  render({}, { event }) {
    console.log(vexdb);
    return <p>{event.name} has been selected!</p>;
  }
}
