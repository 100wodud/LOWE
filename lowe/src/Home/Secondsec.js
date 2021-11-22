import { Component } from "react";
import "./Secondsec.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 999 })
  return isMobile ? children : null
}


AOS.init();

class Secondsec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      definition: '공간'
    };
  }

  handleChangeDef = (key) => (e) => {
    this.setState({ definition: key })
  }

  render() {
    return (
      <section className="Mainpage_second_section">
        <Desktop>
          <div id="second_section_identity">
            <div data-aos="fade-up" data-aos-duration="3000" >
              <div className="identity_First_content">로위(LOWE)는 헤어디자이너가 최소한의 비용으로,</div>
              <div className="identity_First_content">하루 만에 나만의 샵을 가질 수 있는 공유미용실 서비스입니다.</div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" style={{ marginBottom: "120px" }}>
              <div className="identity_Second_content">미용 핵심 상권 중 홍대, 신촌, 합정에 위치한 로위는 국내 대표 공유미용실로서</div>
              <div className="identity_Second_content">건강하고 지속 가능한 미용 생태계를 만들고</div>
              <div className="identity_Second_content">더 많은 사람들이 더 나은 미용을 하도록 돕는 것이 로위의 미션입니다.</div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" id="second_section_content">

            <div>
              <div className="Second_Section_title">
                Why LOWE
              </div>
              <div id="Second_Section_title_text">
                <div className="Second_Section_title_text">
                  더 나은 미용생태계를 위한
                </div>
                <div className="Second_Section_title_text_bold">
                  로위의 핵심 4가지
                </div>
              </div>
              <div id="Second_Section_title_content">
                <div>
                  미용인들이 만족하며 일할 수 있도록,
                </div>
                <div>
                  로위는 미용생태계 변화를 위한 네 가지를 약속합니다.
                </div>
              </div>
            </div>


            <div className="Second_Section_div">
              <div data-aos="fade-up" data-aos-duration="3000" className="Second_Section_content" >
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main2_1.png"} alt="로위 인센티브" className="Second_Section_content_img" />
                <div className="Second_Section_content_text">
                  <div className="Second_Section_content_text_title">높은 인센티브</div>
                  <div className="Second_Section_content_text_content">일한 만큼 가져갈 수 있는 합리적인 수익구조로, </div>
                  <div className="Second_Section_content_text_content">최소 60%부터 시작하는 로위만의 인센티브를 가져보세요</div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="Second_Section_content" >
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main2_2.png"} alt="로위 출퇴근" className="Second_Section_content_img" />
                <div className="Second_Section_content_text">
                  <div className="Second_Section_content_text_title">자율 출퇴근제</div>
                  <div className="Second_Section_content_text_content">이제부터 내가 내 삶의 주체가 될 수 있도록,</div>
                  <div className="Second_Section_content_text_content">원하는 스케줄로 자유롭게 근무하세요</div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="Second_Section_content">
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main2_3.png"} alt="로위 프라이빗" className="Second_Section_content_img" />
                <div className="Second_Section_content_text">
                  <div className="Second_Section_content_text_title">1인 1프라이빗룸</div>
                  <div className="Second_Section_content_text_content">내 고객이 더 만족하는 로위 프라이빗룸으로</div>
                  <div className="Second_Section_content_text_content">내 미용 공간을 가져보세요</div>
                </div>
              </div>
              <p id="Chart_start"></p>
              <div data-aos="fade-up" data-aos-duration="3000" className="Second_Section_content">
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main2_4.png"} alt="로위 초역세권" className="Second_Section_content_img" />
                <div className="Second_Section_content_text">
                  <div className="Second_Section_content_text_title">초역세권 입지</div>
                  <div className="Second_Section_content_text_content">좋은 시설, 인프라가 모두 갖춰진 초역세권 프라임 빌딩에</div>
                  <div className="Second_Section_content_text_content">나만의 숍을 부담 없이 오픈할 수 있어요</div>
                </div>
              </div>
            </div>
          </div>
        </Desktop>
        <Mobile>
          <div id="second_section_identity">
            <div>
              <div className="identity_First_content">로위는 디자이너가 최소한의 비용으로</div>
              <div className="identity_First_content">하루 만에 나만의 샵을 가질 수 있는 공유미용실 서비스입니다.</div>
            </div>
            <div>
              <div className="identity_Second_content">국내 대표 공유미용실로서 </div>
              <div className="identity_Second_content">건강하고 지속 가능한 미용 생태계를 만들고</div>
              <div className="identity_Second_content">더 많은 사람들이 더 좋은 미용을 하도록 돕는 것이</div>
              <div className="identity_Second_content">로위의 미션입니다.</div>
            </div>
          </div>
          <div id="second_section_content">

            <div>
              <div className="Second_Section_title">
                Why LOWE
              </div>
              <div id="Second_Section_title_text">
                <div className="Second_Section_title_text">
                  건강하고 지속가능한,
                </div>
                <div className="Second_Section_title_text_bold">
                  미용생태계를 위한 약속
                </div>
              </div>
              <div id="Second_Section_title_content">
                <div>
                  로위는 <span style={{ fontWeight: "bold" }}>더 나은 미용생태계를 위해</span>
                </div>
                <div>
                  네 가지 항목을 <span style={{ fontWeight: "bold" }}>약속</span>합니다.
                </div>
              </div>
            </div>
            <div className="Second_Section_div">
              <div className="Second_Section_content" >
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main2_1.png"} alt="로위 인센티브" className="Second_Section_content_img" />
                <div className="Second_Section_content_text">
                  <div className="Second_Section_content_text_title">높은 인센티브</div>
                  <div className="Second_Section_content_text_content" style={{ fontWeight: "bold" }}>일한 만큼 가져가는 합리적인 수익구조. </div>
                  <div className="Second_Section_content_text_content">로위만의 높은 인센티브를 가져보세요</div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="Second_Section_content" >
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main2_2.png"} alt="로위 출퇴근" className="Second_Section_content_img" />
                <div className="Second_Section_content_text">
                  <div className="Second_Section_content_text_title">자율 출퇴근제</div>
                  <div className="Second_Section_content_text_content">이제부터 내가 내 삶의 주체가 될 수 있도록,</div>
                  <div className="Second_Section_content_text_content"><span style={{ fontWeight: "bold" }}>원하는 스케줄로 자유롭게 근무</span>하세요</div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="Second_Section_content">
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main2_3.png"} alt="로위 프라이빗" className="Second_Section_content_img" />
                <div className="Second_Section_content_text">
                  <div className="Second_Section_content_text_title">1인 1프라이빗룸</div>
                  <div className="Second_Section_content_text_content"><span style={{ fontWeight: "bold" }}>내 고객이 더 만족하는 로위 프라이빗룸</span>으로</div>
                  <div className="Second_Section_content_text_content">내 미용 공간을 가져보세요</div>
                </div>
              </div>
              <p id="Chart_start"></p>
              <div data-aos="fade-up" data-aos-duration="3000" className="Second_Section_content">
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main2_4.png"} alt="로위 초역세권" className="Second_Section_content_img" />
                <div className="Second_Section_content_text">
                  <div className="Second_Section_content_text_title">초역세권 입지</div>
                  <div className="Second_Section_content_text_content"><span style={{ fontWeight: "bold" }}>인프라가 갖춰진 초역세권 프라임 빌딩에</span></div>
                  <div className="Second_Section_content_text_content">나만의 숍을 부담 없이 오픈할 수 있어요</div>
                </div>
              </div>
            </div>
          </div>
        </Mobile>
      </section>
    )
  }
}

export default Secondsec;