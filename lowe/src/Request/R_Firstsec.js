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
      <div className="Request_first_section">
          <div>
              <div className="Request_first_title" >
                  <div>입점문의</div>
              </div>
              <img src={process.env.PUBLIC_URL + "/image/request/request1_1.png"} alt="lowe request" />
              <div className="Request_first_text">
                  <div style={{fontSize: "1.25vw", fontWeight: "bold", lineHeight: "150%"}}>
                      <div>로위에</div>
                      <div>입점문의 신청해 보세요.</div>
                  </div>
                  <div style={{fontSize: "1.041667vw", fontWeight: "500", lineHeight: "150%"}}>
                      <div>당신을 빛내줄 로위에서</div>
                      <div>본인의 잠재력과 매력을 맘껏 펼쳐보세요!</div>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default R_Firstsec;

