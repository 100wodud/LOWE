import { Component } from "react";
import "./Requestsec.css";
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 })
  return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 999 })
  return isMobile ? children : null
}


class Requestsec extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <section className="Mainpage_Request_section">
        <Desktop>
          <div>
            <img src={process.env.PUBLIC_URL + "/image/mainpage/request_logo.svg"} alt="lowe request logo" />
            <div style={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Contact us</div>
            <div style={{ fontFamily: "Noto Sans", fontSize: "46px", fontWeight: "normal", marginBottom: "36px" }}>로위에 <strong>지원</strong>해보세요</div>
            <div style={{ fontFamily: "Noto Sans", fontSize: "22px", fontWeight: "normal", marginBottom: "80px" }}>
              <div>로위를 더 자세히 알고 싶으신가요?</div>
              <div>로위는 미용인 여러분들께 항상 열려있습니다. 아래버튼을 눌러 신청해주세요.</div>
            </div>
            <a data-tag-index="Main" data-tag-cate="bottom_apply" href="/requests/recruitment" >
              <div id="Mainpage_request_button">
                지원하기
              </div>
            </a>
          </div>
        </Desktop>
        <Mobile>
          <div>
            <img src={process.env.PUBLIC_URL + "/image/mainpage/request_logo.svg"} alt="lowe request logo" />
            <div style={{ fontFamily: "Montserrat", fontSize: "3.4666vw", fontWeight: "bold", marginBottom: "1.1vw" }}>Contact us</div>
            <div style={{ fontFamily: "Noto Sans", fontSize: "5.33333vw", marginBottom: "3.4666vw" }}><span style={{ fontWeight: "bold" }}>지원하기</span></div>
            <div style={{ fontFamily: "Noto Sans", fontSize: "3.7333vw", fontWeight: "normal", marginBottom: "7.4666vw" }}>
              <div>로위는 미용인 여러분들께 항상 열려있습니다. </div>
              <div>아래 버튼을 클릭하여 신청해 주세요!</div>
            </div>
            <a data-tag-index="Main" data-tag-cate="bottom_apply" href="/requests/recruitment" >
              <div id="Mainpage_request_button">
                지원하기
              </div>
            </a>
          </div>
        </Mobile>
      </section>
    )
  }
}

export default Requestsec;