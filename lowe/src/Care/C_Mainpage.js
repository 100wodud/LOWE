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

  componentDidMount = () =>{
    window.localStorage.setItem("route", "디자이너 혜택");
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
        <div id="script"></div>
        <Footer />
      </>
    )
  }
}

export default Mainpage;