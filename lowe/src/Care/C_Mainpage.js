import { Component } from "react";
import Header from "../nav/SubHeader";
import Firstsec from "./C_Firstsec";
import Thirdsec from "./C_Thirdsec";
// import Fourthsec from "./C_Fourthsec";
import Fifthsec from "./C_Fifthsec";
import Seventhsec from "./C_Seventhsec";
import RequestNav from "../nav/RequestNav";
import Secondsec2 from "../Member/M_Secondsec";
import Thirdsec2 from "../Member/M_Thirdsec";
import Footer from "../nav/Footer";
import "./C_Mainpage.css"

class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <Header />
        <RequestNav />
        <Firstsec />
        <Thirdsec />
        <Seventhsec />
        {/* <Fourthsec /> */}
        <Fifthsec />
        <Secondsec2 />
        <Thirdsec2 />
        <Footer />
      </>
    )
  }
}

export default Mainpage;