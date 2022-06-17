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
          <div data-aos="fade-up" data-aos-duration="3000" id="second_section_content">

            <div>
              <div id="Second_Section_title_text">
                <div className="Second_Section_title_text">
                  위로의 시간을 선물합니다
                </div>
                <div className="Second_Section_title_text_bold">
                  위로, 로위 <span style={{ fontFamily: "Montserrat" }}>LOWE</span>
                </div>
              </div>
            </div>

            <img src={process.env.PUBLIC_URL + "/image/mainpage/main2_5.png"} alt="로위 인센티브" />
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" id="second_section_content">

            <div>
              <div id="Second_Section_title_text">
                <div className="Second_Section_title_text" style={{ fontFamily: "Montserrat" }}>
                  LOWE
                </div>
                <div className="Second_Section_title_text_bold" style={{ fontFamily: "Montserrat" }}>
                  MISSION
                </div>
              </div>
              <div id="Second_Section_title_content">
                <div>
                  로위는 건강하고 지속가능한 미용생태계를 만들고<br />
                  더 많은 사람들이 더 좋은 미용을 하도록 돕는 것 입니다.
                </div>
                <div style={{ marginTop: "1.25vw" }}>
                  비합리적이고, 멈춰있는 기존 미용환경이 아닌, 누구에게나 합리적이고<br />
                  원하는 디자인을 그리며  디자이너가 만족할 미용 생태계를 만드는 것이 <br />
                  로위의 존재 이유입니다.
                </div>
              </div>
            </div>
            <img src={process.env.PUBLIC_URL + "/image/mainpage/main2_6.png"} alt="로위 인센티브" />
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" id="second_section_content">

            <div>
              <div id="Second_Section_title_text">
                <div className="Second_Section_title_text" style={{ fontFamily: "Montserrat" }}>
                  LOWE
                </div>
                <div className="Second_Section_title_text_bold" style={{ fontFamily: "Montserrat" }}>
                  DESIGNER
                </div>
              </div>
              <div id="Second_Section_title_content">
                <div>
                  사람들에게 숨겨진 고유한 매력을 찾아내는 헤어 디자이너로서<br />
                  나날이 바뀌는 트렌드를 분석하고, 고객 만족을 위해 노력하고, <br />
                  나를 알리는 콘텐츠를 만들고, 다양한 고객들과 소통하고, <strong>더 나은<br />
                    미용 환경을 함께 만들어가며 앞으로 더 나아갈 우리는 로위의 디자이너입니다.</strong>
                </div>
                <div style={{ marginTop: "1.25vw" }}>
                  디자이너로서, 전문가로서, 예술가로서 인정받고 존경받을 수 있도록<br />
                  <strong>로위 디자이너는 로위팀으로, 언제나 함께하며 발전할 것입니다. </strong>
                </div>
              </div>
            </div>
            <div className="Second_Section_img_div">
              <div>

            <img src={process.env.PUBLIC_URL + "/image/mainpage/main6_1.png"} alt="로위 인센티브" />
              </div>
              <div>

            <img src={process.env.PUBLIC_URL + "/image/mainpage/main6_2.png"} alt="로위 인센티브" style={{marginTop: "12.5vw", paddingBottom: "8.3333vw"}}/>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" id="second_section_content">

            <div>
              <div id="Second_Section_title_text">
                <div className="Second_Section_title_text_bold" style={{ fontFamily: "Montserrat" }}>
                  Why
                </div>
                <div className="Second_Section_title_text_bold" style={{ fontFamily: "Montserrat", marginBottom: "8.333333vw" }}>
                  LOWE
                </div>
              </div>
            </div>
            <div className="Second_Section_last_div">
              <div>
                <div className="Second_Section_last_title">높은 인센티브</div>
                <div className="Second_Section_last_content"><strong>최대 42~60%로</strong> 일한만큼 보상받는<br />로위만의 <strong>합리적인 인센티브</strong></div>
                <div><img src={process.env.PUBLIC_URL + "/image/mainpage/main2_1.png"} alt="로위 인센티브" style={{ marginTop: "1.3vw" }} /></div>
              </div>
              <div>
                <div className="Second_Section_last_title">프라이빗한 공간 <br /><span>(일부 지점 제외)</span></div>
                <div className="Second_Section_last_content">고객이 더 만족하는 프라이빗룸으로<br /><strong>나만의 미용공간을 가져보세요</strong></div>
                <div><img src={process.env.PUBLIC_URL + "/image/mainpage/main2_3.png"} alt="로위 인센티브" style={{ marginTop: "1.3vw" }} /></div>
              </div>
              <div>
                <div className="Second_Section_last_title">초역세권 매장 위치</div>
                <div className="Second_Section_last_content">초역세권 프라임빌딩에<br /><strong>나만의 숍을 부담없이 오픈하세요</strong></div>
                <div><img src={process.env.PUBLIC_URL + "/image/mainpage/main2_4.png"} alt="로위 인센티브" style={{ marginTop: "1.3vw" }} /></div>
              </div>
            </div>
          </div>
        </Desktop>
        <Mobile>
          <div id="second_section_identity">
            <div>
              <div className="Second_Section_title_text">위로의 시간을 선물합니다</div>
              <div className="Second_Section_title_text_bold">위로, 로위 LOWE</div>
            </div>
            <img style={{ marginTop: "10.666666vw" }} src={process.env.PUBLIC_URL + "/image/mainpage/M_main2_1.png"} alt="로위 인센티브" className="Second_Section_content_img" />
          </div>
          <div id="second_section_content">
            <div>
              <div id="Second_Section_title_text">
                <div style={{ fontFamily: "'Montserrat" }} className="Second_Section_title_text">
                  LOWE
                </div>
                <div style={{ fontFamily: "'Montserrat" }} className="Second_Section_title_text_bold">
                  MISSION
                </div>
                <div style={{ marginTop: "10.666666vw" }} className="Second_Section_second_content">
                  로위는<br />건강하고 지속가능한 미용생태계를 만들고 <br />더 많은 사람들이 더 좋은 미용을 하도록 돕는 것 입니다.
                </div>
                <div style={{ marginTop: "4.26666vw" }} className="Second_Section_second_content">
                  비합리적이고, 멈춰있는 기존 미용환경이 아닌,<br />누구에게나 합리적이고 원하는 디자인을 그리며<br />디자이너가 만족할 미용 생태계를 만드는 것이<br /> 로위의 존재 이유입니다.
                </div>
                <img style={{ margin: "10.666666vw 0" }} src={process.env.PUBLIC_URL + "/image/mainpage/M_main2_2.png"} alt="로위 인센티브" className="Second_Section_content_img" />
              </div>
            </div>
          </div>

          <div id="second_section_content_third">
            <div>
              <div id="Second_Section_title_text">
                <div style={{ fontFamily: "'Montserrat" }} className="Second_Section_title_text">
                  LOWE
                </div>
                <div style={{ fontFamily: "'Montserrat" }} className="Second_Section_title_text_bold">
                  DESIGNER
                </div>
                <div style={{ marginTop: "10.666666vw", }} className="Second_Section_second_content">
                  사람들에게 숨겨진 고유한 매력을 찾아내는<br />헤어 디자이너로서 나날이 바뀌는 트렌드를<br /> 분석하고, 고객 만족을 위해 노력하고,<br />나를 알리는 콘텐츠를 만들고, 다양한 고객들과 소통하고, <br /><strong>더 나은 미용 환경을 함께 만들어가며 앞으로<br />더 나아갈 우리는 로위의 디자이너입니다.</strong>
                </div>
                <div style={{ marginTop: "4.26666vw" }} className="Second_Section_second_content">
                  디자이너로서, 전문가로서, 예술가로서 인정받고 <br />존경받을 수 있도록 <strong>로위 디자이너는 로위팀으로,<br />언제나 함께하며 발전할 것입니다. </strong>
                </div>
                <img style={{ margin: "10.666666vw 0" }} src={process.env.PUBLIC_URL + "/image/mainpage/M_main2_3.png"} alt="로위 인센티브" className="Second_Section_content_img" />
              </div>
            </div>
          </div>
          <div id="second_section_content_forth">
            <div className="Second_Section_div">

              <div id="Second_Section_title_text">
                <div style={{ fontFamily: "'Montserrat" }} className="Second_Section_title_text_bold">
                  Why
                </div>
                <div style={{ fontFamily: "'Montserrat" }} className="Second_Section_title_text_bold">
                  LOWE
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="Second_Section_content" >
                <div className="Second_Section_content_text_title">높은 인센티브</div>
                <div className="Second_Section_content_text_content"><strong>최대 42~60%로</strong> 일한만큼 보상받는<br />로위만의 <strong>합리적인 인센티브</strong></div>
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main2_1.png"} alt="로위 인센티브" className="Second_Section_content_img" />
              </div>
              <div data-aos="fade-up" data-aos-duration="3000" className="Second_Section_content" >
                <div className="Second_Section_content_text_title" style={{ lineHeight: "80%" }}>프라이빗한 공간<br /><span style={{ font: "400 4.26666vw 'Noto Sans", color: "#9c9c9c" }}>(일부 지점 제외)</span></div>
                <div className="Second_Section_content_text_content">고객이 더 만족하는 프라이빗룸으로<br /><strong>나만의 미용공간을 가져보세요</strong></div>
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main2_3.png"} alt="로위 인센티브" className="Second_Section_content_img" />
              </div>
              <p id="Chart_start"></p>
              <div data-aos="fade-up" data-aos-duration="3000" className="Second_Section_content" >
                <div className="Second_Section_content_text_title">초역세권 매장 위치</div>
                <div className="Second_Section_content_text_content">초역세권 프라임빌딩에<br /><strong>나만의 숍을 부담없이 오픈하세요</strong></div>
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main2_4.png"} alt="로위 인센티브" className="Second_Section_content_img" />
              </div>
            </div>
          </div>
        </Mobile>
      </section>
    )
  }
}

export default Secondsec;