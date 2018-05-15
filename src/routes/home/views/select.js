import { h, Component } from "preact";
import Load from "../../../components/load";
import style from "../style";

export default class SelectView extends Component {
  render() {
    return (
      <Load
        content={{
          events: vexdb.get("events", { region: "South Carolina" })
        }}
      >
        {({ events }) => <p>There are {events.length} events available</p>}
      </Load>
    );
  }
}
