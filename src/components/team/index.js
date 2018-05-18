import { h, Component } from "preact";

import List from "preact-material-components/List";
import "preact-material-components/List/style.css";
import Checkbox from "preact-material-components/Checkbox";
import "preact-material-components/Checkbox/style.css";

export default class Team extends Component {
  state = {
    selected: false
  };
  render({ team }, { selected }) {
    return (
      <List.LinkItem
        ripple={true}
        key={team.number}
        onClick={() => this.setState({ selected: !this.state.selected })}
      >
        <List.ItemGraphic>
          <Checkbox ref={check => (this.check = check)} checked={selected} />
        </List.ItemGraphic>
        <List.TextContainer>
          <List.PrimaryText>{team.team_name}</List.PrimaryText>
          <List.SecondaryText>{team.number}</List.SecondaryText>
        </List.TextContainer>
      </List.LinkItem>
    );
  }
}
