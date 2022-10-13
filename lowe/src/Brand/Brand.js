import { Component } from "react";
import Header from "../nav/SubHeader";
import Firstsec from "./Firstsec";
import Requestsec from "../Home/Requestsec";
import Footer from "../nav/Footer";

class Brand extends Component {
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
        <Firstsec />
        <Requestsec />
        <Footer />
      </>
    )
  }
}

export default Brand;
