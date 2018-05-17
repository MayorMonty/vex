import { h, Component } from "preact";
import style from "./style";
import General from "../../context/General";
import vexdb from "vexdb";
import Load from "../../components/load";

export default class Home extends Component {
  loadData(sku) {
    console.log("loadData", sku);
    return {
      event: vexdb.get("events", { sku }).then(events => events[0])
    };
  }

  render({ sku }) {
    return (
      <div class={style.home}>
        <General.Consumer>
          {({ sku }) => (
            <Load content={this.loadData(sku)}>
              {({ event }) => <p>{event.name}</p>}
            </Load>
          )}
        </General.Consumer>
      </div>
    );
  }
}
