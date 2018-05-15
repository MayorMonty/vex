import { h, Component } from "preact";
import vexdb from "vexdb";
import Load from "../../../components/load";
import style from "../style";

window.vexdb = vexdb;

export default class EventView extends Component {
  render({ event }) {
    return (
      <Load
        content={{
          event: vexdb.get("events", { sku: event }).then(res => res[0]),
          teams: vexdb.size("teams", {
            sku: event
          }),
          rankings: vexdb.get("rankings", { sku: event, rank: 1 }).then(a =>
            a.map(e => (
              <li>
                <a href={`https://vexdb.io/teams/view/${e.team}`}>{e.team}</a>
              </li>
            ))
          )
        }}
      >
        {({ event, teams, rankings }) => (
          <p>
            You picked <strong>{event.name}</strong> located at{" "}
            <i>{event.loc_venue}</i> in {event.loc_city}, {event.loc_region},{" "}
            {event.loc_country}. There were {teams} teams in attendance, most
            notably:
            <ul>{rankings}</ul>
          </p>
        )}
      </Load>
    );
  }
}
