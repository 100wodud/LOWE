import { Component } from "react";
import Firstsec from "./Firstsec";
import Secondsec from "./Secondsec";
// import Thirdsec from "./Thirdsec";
import Fifthsec from "./Fifthsec";
import Fourthsec from "./Fourthsec";
import Sixthsec from "./Sixthsec";
import Requestsec from "./Requestsec";
import RequestNav from "../nav/RequestNav";
import Header from "../nav/Header";
import Footer from "../nav/Footer";

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
        <div id="header_trigger" />
        <RequestNav />
        <Firstsec />
        <Secondsec />
        {/* <Thirdsec /> */}
        <Fourthsec />
        <Fifthsec />
        <Sixthsec />
        <Requestsec />
        <Footer />
      </>
    )
  }
}

export default Mainpage;
