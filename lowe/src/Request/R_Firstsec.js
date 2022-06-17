import { Component } from "react";
import "./R_Firstsec.css"

class R_Firstsec extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <section className="R_Firstsec_section">
        <div className="R_Firstsec_div">
          <div className="R_Firstsec_banner_div">
            <div className="R_Firstsec_banner_box">
              <div className="R_Firstsec_banner_text" >
                <div><strong>입점형</strong> 디자이너</div>
                <div className="R_Firstsec_banner_button">
                  <a href="/requests/enterstore" style={{height: "fit-content"}}>
                    <img style={{height: "56px"}} src={process.env.PUBLIC_URL + "/image/request/arrow.png"} alt="Lowe request" />
                  </a>
                </div>
              </div>
            </div>
            <img className="R_Firstsec_banner_img" src={process.env.PUBLIC_URL + "/image/request/M_request1.png"} alt="Lowe request" />
          </div>
          <div className="R_Firstsec_banner_div" style={{marginTop: "-3px"}}>
            <div className="R_Firstsec_banner_box">
              <div className="R_Firstsec_banner_text" >
                <div><strong>채용형</strong> 디자이너</div>
                <div className="R_Firstsec_banner_button">
                  <a href="/requests/recruitment" style={{height: "fit-content"}}>
                    <img style={{height: "56px"}} src={process.env.PUBLIC_URL + "/image/request/arrow.png"} alt="Lowe request" />
                  </a>
                </div>
              </div>
            </div>
            <img className="R_Firstsec_banner_img" src={process.env.PUBLIC_URL + "/image/request/M_request2.png"} alt="Lowe request" />
          </div>
        </div>
      </section>
    )
  }
}

export default R_Firstsec;

