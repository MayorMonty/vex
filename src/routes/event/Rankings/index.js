import { h, Component } from "preact";
import Load from "../../../components/load";
import vexdb from "vexdb";

export default class Rankings extends Component {
  render({ division, sku }) {
    console.log(division, sku);
    if (!division) return undefined;
    return (
      <Load content={{ ranks: vexdb.get("rankings", { sku, division }) }}>
        {({ ranks }) => (
          <ol>{ranks.map(rank => <li key={rank.team}>{rank.team}</li>)}</ol>
        )}
      </Load>
    );
  }
}
