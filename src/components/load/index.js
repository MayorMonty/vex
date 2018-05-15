import { h, Component } from "preact";

export default class Load extends Component {
  state = {
    loading: true,
    error: null,
    content: {}
  };

  async componentWillMount() {
    let content = this.props.content;
    let keys = Object.keys(content);

    this.setState({
      loading: true
    });

    let out = await Promise.all(Object.values(content))
      .then(res =>
        res
          .map((r, i) => ({ [keys[i]]: r }))
          .reduce((a, b) => ({ ...a, ...b }), {})
      )
      .catch(error => this.setState({ loading: false, error }));

    this.setState({
      loading: false,
      content: out
    });
  }

  render({ children }, { loading, error, content }) {
    if (error) {
      return <p>Uh oh: {error.toString()}</p>;
    }
    if (loading) {
      return <p>Loading...</p>;
    }

    return children[0](content);
  }
}
