import { Component } from "react";
import Firstsec from "./E_Firstsec";
// import Secondsec from "./E_Secondsec";
// import Thirdsec from "./E_Thirdsec";

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
      </>
    )
  }
}

export default Mainpage;