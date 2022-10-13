import { Component } from "react";
import Header from "../nav/SubHeader";
import Firstsec from "./Firstsec";
import RequestNav from "../nav/RequestNav";
import Requestsec from "../Home/Requestsec";
import Footer from "../nav/Footer";

class FAQ extends Component {
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
        <Requestsec />
        <Footer />
      </>
    )
  }
}

export default FAQ;
