import { h, Component } from "preact";

export default class SelectDivision extends Component {
  render({ divisions, set }) {
    if (divisions.length == 1) return undefined;
    return (
      <select onChange={e => set(e.target.value)}>
        {divisions.map(div => (
          <option key={div} value={div}>
            {div}
          </option>
        ))}
      </select>
    );
  }
}
