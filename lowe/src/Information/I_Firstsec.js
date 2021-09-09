import { Component } from "react";
import "./I_Firstsec.css";


class D_Firstsec extends Component {
  constructor(props) {
    super(props);
    this.state = {
        location: ''
    };
  }

  componentDidMount = () => {
    this.props.kakaoMap()
  }
  
  render() {
    return (
      <section className="first_section">
          <div id="map" onClick={this.props.clickLocation}></div>
      </section>
    )
  }
}

export default D_Firstsec;