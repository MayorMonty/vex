import { h, Component } from "preact";
import Load from "../../../components/load";
import Team from "../../../components/team";
import vexdb from "vexdb";

import List from "preact-material-components/List";
import "preact-material-components/List/style.css";
import Checkbox from "preact-material-components/Checkbox";
import "preact-material-components/Checkbox/style.css";

export default ({ division, sku }) =>
  division ? (
    <Load
      content={{
        ranks: vexdb
          .get("rankings", {
            sku,
            division
          })
          .then(ranks =>
            Promise.all(
              ranks.map(async rank => ({
                ...rank,
                team: await vexdb
                  .get("teams", { team: rank.team })
                  .then(t => t[0])
              }))
            )
          )
      }}
    >
      {({ ranks }) => (
        <List compact>
          <List.Item>
            <List.ItemGraphic>
              <Checkbox />
            </List.ItemGraphic>
          </List.Item>
          {ranks.map(rank => <Team team={rank.team} />)}
        </List>
      )}
    </Load>
  ) : (
    undefined
  );
