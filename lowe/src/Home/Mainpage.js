import { Component } from "react";
import Firstsec from "./Firstsec";
import Secondsec from "./Secondsec";
import Thirdsec from "./Thirdsec";

class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }

  render() {
    return (
      <>
          <Firstsec />
          <Secondsec />
          <Thirdsec />
      </>
    )
  }
}

export default Mainpage;





