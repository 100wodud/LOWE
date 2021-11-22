import { Component } from "react";
import "./Fourthsec.css";
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 999 })
  return isMobile ? children : null
}


class Fourthsec extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <section className="Mainpage_Fourth_section">
        <Desktop>
          <div id="Fourth_section_content">
            <div  data-aos="fade-up" data-aos-duration="3000" >
              <div id="Fourth_Section_title_text">
                <div className="Fourth_Section_title_text_bold">
                  초 역세권 입지
                </div>
              </div>
              <div id="Fourth_Section_title_content">
                <div>
                  고객님이 찾아오기 어려운 매장의 위치가 고민이셨나요?
                </div>
                <div>
                  고객과 디자이너 모두가 만족하는 초역세권, 핵심상권에 입점하고 있습니다.
                </div>
              </div>
            </div>


            <div className="Fourth_Section_div">
              <div  data-aos="fade-up" data-aos-duration="3000" className="Fourth_Section_content" >
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main4_1.png"} alt="로위 주요 역" className="Fourth_Section_content_img" />
                <div className="Fourth_Section_content_text">
                  <div className="Fourth_Section_content_text_content">전 지점이 주요 역에서</div>
                  <div className="Fourth_Section_content_text_content">도보 5분 이내에 위치하고</div>
                  <div className="Fourth_Section_content_text_content">있습니다.</div>
                </div>
              </div>
              <div  data-aos="fade-up" data-aos-duration="3000" className="Fourth_Section_content" >
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main4_2.png"} alt="로위 출퇴근" className="Fourth_Section_content_img" />
                <div className="Fourth_Section_content_text">
                  <div className="Fourth_Section_content_text_content">복합 쇼핑몰,대중교통 등</div>
                  <div className="Fourth_Section_content_text_content">근무 중에도 어디에서나</div>
                  <div className="Fourth_Section_content_text_content">접근이 편리한 주변 인프라를</div>
                  <div className="Fourth_Section_content_text_content">갖고 있습니다.</div>
                </div>
              </div>
              <div  data-aos="fade-up" data-aos-duration="3000" className="Fourth_Section_content">
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main4_3.png"} alt="로위 프라이빗" className="Fourth_Section_content_img" />
                <div className="Fourth_Section_content_text">
                  <div className="Fourth_Section_content_text_content">카페, 병원 등 핵심 상권이</div>
                  <div className="Fourth_Section_content_text_content">밀접한 프라임빌딩에</div>
                  <div className="Fourth_Section_content_text_content">입점하고 있습니다</div>
                  <div className="Fourth_Section_content_text_content"> </div>
                </div>
              </div>
              <div  data-aos="fade-up" data-aos-duration="3000" className="Fourth_Section_content">
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main4_4.png"} alt="로위 초역세권" className="Fourth_Section_content_img" />
                <div className="Fourth_Section_content_text">
                  <div className="Fourth_Section_content_text_content">로비,엘리베이터 등</div>
                  <div className="Fourth_Section_content_text_content">고객과 디자이너 모두가</div>
                  <div className="Fourth_Section_content_text_content">만족할 수 있는 편의시설을</div>
                  <div className="Fourth_Section_content_text_content">갖추고 있습니다.</div>
                </div>
              </div>
            </div>
          </div>
        </Desktop>
        <Mobile>
          <div id="Fourth_section_content">
            <div  data-aos="fade-up" data-aos-duration="3000" >
              <div id="Fourth_Section_title_text">
                <div className="Second_Section_title_text">
                  모두가 만족할
                </div>
                <div className="Fourth_Section_title_text_bold">
                  초역세권 입지
                </div>
              </div>
              <div id="Fourth_Section_title_content">
                <div>
                  로위 전 지점은 고객과 디자이너가 <span style={{ fontWeight: "bold" }}>모두 만족하는 </span>
                </div>
                <div>
                  <span style={{ fontWeight: "bold" }}>초역세권, 핵심 상권에 입점</span>해있습니다.
                </div>
              </div>
            </div>


            <div className="Fourth_Section_div">
              <div  data-aos="fade-up" data-aos-duration="3000" className="Fourth_Section_content" >
                <img src={process.env.PUBLIC_URL + "/image/mainpage/M_main4_1.png"} alt="로위 주요 역" className="Fourth_Section_content_img" />
                <div className="Fourth_Section_content_text">
                  <div className="Fourth_Section_content_text_content">전 지점이 주요 <span style={{ fontWeight: "bold" }}>역에서</span> </div>
                  <div className="Fourth_Section_content_text_content"><span style={{ fontWeight: "bold" }}>도보로 5분이내에 위치</span>하고 있습니다.</div>
                </div>
              </div>
              <div  data-aos="fade-up" data-aos-duration="3000" className="Fourth_Section_content" >
                <img src={process.env.PUBLIC_URL + "/image/mainpage/M_main4_2.png"} alt="로위 출퇴근" className="Fourth_Section_content_img" />
                <div className="Fourth_Section_content_text">
                  <div className="Fourth_Section_content_text_content">식당, 복합 쇼핑몰, 대중교통 등 </div>
                  <div className="Fourth_Section_content_text_content"><span style={{ fontWeight: "bold" }}>어디에서나 편리한 주변 인프라</span>를 갖고 있습니다.</div>
                </div>
              </div>
              <div  data-aos="fade-up" data-aos-duration="3000" className="Fourth_Section_content">
                <img src={process.env.PUBLIC_URL + "/image/mainpage/M_main4_3.png"} alt="로위 프라이빗" className="Fourth_Section_content_img" />
                <div className="Fourth_Section_content_text">
                  <div className="Fourth_Section_content_text_content">카페, 병원 등 핵심 상권이 입점한</div>
                  <div className="Fourth_Section_content_text_content"><span style={{ fontWeight: "bold" }}>프라임빌딩에 입점</span>하고 있습니다</div>
                </div>
              </div>
              <div  data-aos="fade-up" data-aos-duration="3000" className="Fourth_Section_content">
                <img src={process.env.PUBLIC_URL + "/image/mainpage/M_main4_4.png"} alt="로위 초역세권" className="Fourth_Section_content_img" />
                <div className="Fourth_Section_content_text">
                  <div className="Fourth_Section_content_text_content">로비,엘리베이터 등 고객과 디자이너 모두가 </div>
                  <div className="Fourth_Section_content_text_content"><span style={{ fontWeight: "bold" }}>만족할 수 있는 좋은 시설</span>을 갖추고 있습니다.</div>
                </div>
              </div>
            </div>
          </div>
        </Mobile>
      </section>
    )
  }
}

export default Fourthsec;





