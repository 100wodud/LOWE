import { Component } from "react";
import IDesigners from "./I_Designers"
import "./I_Thirdsec.css";


class I_Thirdsec extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
  render() {
    console.log(this.props.location)
    return (
      <section className="third_section">
            <IDesigners location={this.props.location} />
      </section>
    )
  }
}

export default I_Thirdsec;