import { Component } from "react";
import "./P_Map.css";


class P_Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }

  componentDidMount = () => {
    this.props.kakaoMap();
  }

  render() {
    return (
      <section className="P_Map_section">
        <div id="promtion_map"></div>
      </section>
    )
  }
}

export default P_Map;