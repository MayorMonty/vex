import { h, Component } from "preact";
import style from "./style";
import Load from "../../components/load";
import vexdb from "vexdb";

export default class Home extends Component {
  render() {
    return (
      <Load
        content={{
          events: vexdb.get("events", {
            date: new Date("03/10/2018").toISOString()
          })
        }}
      >
        {({ events }) => (
          <ul>
            {events.map(event => (
              <li>
                <a href={`/event/${event.sku}`}>{event.name}</a>
              </li>
            ))}
          </ul>
        )}
      </Load>
    );
  }
}
