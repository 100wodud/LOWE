import { Component } from "react";
import Header from "../nav/SubHeader";
import Firstsec from "./C_Firstsec";
import Secondsec from "./C_Secondsec";
import Thirdsec from "./C_Thirdsec";
import Fourthsec from "./C_Fourthsec";
import Fifthsec from "./C_Fifthsec";
import Sixthsec from "./C_Sixthsec";
import Seventhsec from "./C_Seventhsec";
import Review from "./C_Review";
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
        <Firstsec />
        <Secondsec />
        <Thirdsec />
        <Fourthsec />
        <Fifthsec />
        <Sixthsec />
        <Seventhsec />
        <Review />
        <Footer />
      </>
    )
  }
}

export default Mainpage;