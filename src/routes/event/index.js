import { h, Component } from "preact";
import style from "./style";
import General from "../../context/General";
import vexdb from "vexdb";
import Load from "../../components/load";
import SelectDivision from "./SelectDivison";
import Rankings from "./Rankings";

export default class Event extends Component {
  state = {
    division: null
  };

  loadData({ sku, division }) {
    if (!division)
      return {
        event: vexdb.get("events", { sku }).then(events => events[0])
      };
    return {
      event: vexdb.get("events", { sku }).then(events => events[0]),
      ranks: vexdb.get("rankings", { sku, division })
    };
  }

  render({ sku }, { division }) {
    return (
      <div class={style.home}>
        <Load content={this.loadData({ sku, division })}>
          {({ event, ranks }) => (
            <div>
              <h3 class={style.header}>
                <div>{event.name}</div>
                <SelectDivision
                  divisions={event.divisions}
                  set={div => this.setState({ division: div })}
                />
              </h3>
              <Rankings
                division={division ? division : event.divisions[0]}
                sku={sku}
              />
            </div>
          )}
        </Load>
      </div>
    );
  }
}
