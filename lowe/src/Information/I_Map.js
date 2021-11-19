import { Component } from "react";
import "./I_Map.css";


class D_Firstsec extends Component {
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
      <section className="Map_section">
        <div id="map"></div>
      </section>
    )
  }
}

export default D_Firstsec;