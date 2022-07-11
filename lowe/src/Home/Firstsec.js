import { Component } from "react";
import "./Firstsec.css"
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 999 })
  return isMobile ? children : null
}

class Firstsec extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    // document.getElementById("myBar2").style.width = '0%';
    // document.getElementById("myBar3").style.width = '0%';
    // this.Barstart();
  }

  // Barstart = () => {
  //   clearInterval(id)
  //   let goto = this.slider.slickGoTo
  //   goto(0)
  //   width1 = 0;
  //   width2 = 0;
  //   width3 = 0;
  //   document.getElementById("myBar1").style.width = '0%';
  //   document.getElementById("myBar2").style.width = '0%';
  //   document.getElementById("myBar3").style.width = '0%';
  //   var elem1 = document.getElementById("myBar1");
  //   id = setInterval(frame, 0.5);
  //   let secondBarstart = this.secondBarstart;
  //   function frame() {
  //     if (width1 >= 100) {
  //       width1 = 0;
  //       clearInterval(id);
  //       elem1.style.width = width1 + '%';
  //       goto(1)
  //       secondBarstart()
  //     } else {
  //       width1 = width1 + 0.1;
  //       elem1.style.width = width1 + '%';
  //     }

  //   }
  // }


  // secondBarstart = () => {
  //   clearInterval(id)
  //   let goto = this.slider.slickGoTo
  //   goto(1)
  //   width1 = 0;
  //   width2 = 0;
  //   document.getElementById("myBar1").style.width = '0%';
  //   document.getElementById("myBar2").style.width = '0%';
  //   document.getElementById("myBar3").style.width = '0%';
  //   var elem2 = document.getElementById("myBar2");
  //   id = setInterval(frame, 0.5);
  //   let thirdBarstart = this.thirdBarstart;
  //   function frame() {
  //     if (width2 >= 100) {
  //       width2 = 0;
  //       clearInterval(id);
  //       elem2.style.width = width2 + '%';
  //       goto(2)
  //       thirdBarstart();
  //     } else {
  //       width2 = width2 + 0.1;
  //       elem2.style.width = width2 + '%';
  //     }
  //   }
  // }

  // thirdBarstart = () => {
  //   clearInterval(id)
  //   let goto = this.slider.slickGoTo
  //   goto(2)
  //   width1 = 0;
  //   width2 = 0;
  //   document.getElementById("myBar1").style.width = '0%';
  //   document.getElementById("myBar2").style.width = '0%';
  //   document.getElementById("myBar3").style.width = '0%';
  //   var elem2 = document.getElementById("myBar3");
  //   id = setInterval(frame, 0.5);
  //   let Barstart = this.Barstart;
  //   function frame() {
  //     if (width3 >= 100) {
  //       width3 = 0;
  //       clearInterval(id);
  //       elem2.style.width = width3 + '%';
  //       goto(0)
  //       Barstart();
  //     } else {
  //       width3 = width3 + 0.1;
  //       elem2.style.width = width3 + '%';
  //     }
  //   }
  // }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      touchMove: true,
      draggable: true,
      arrows: false,
    };
    return (
      <section className="Mainpage_first_section" id="Mainpage_first_section">
        <Desktop>
          <Slider {...settings}>
            <div className="Mainpage_banner_div">
              <div className="Mainpage_banner_box">
                <div className="Mainpage_banner_text" >
                  <div style={{ fontWeight: "400", fontSize: "72px" }} ><span style={{ fontFamily: "Montserrat" }}>2022</span> 로위헤어</div>
                  <div style={{ fontSize: "72px" }} >상반기 헤어디자이너 대규모 채용</div>
                  <div style={{ fontSize: "30px", marginBottom: "48px", marginTop: "28px", fontWeight: "400" }}>성수점/이수역점/L7홍대점/강남점/홍대입구역점/합정점/신촌점</div>
                  <div className="Mainpage_banner_button" style={{ borderColor: "#9c9c9c", width: "263px" }}>
                    <a href="/request" >지원하기</a>
                  </div>
                </div>
              </div>
              <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/main1_3.png"} alt="Lowe main" />
            </div>
            <div className="Mainpage_banner_div">
              <div className="Mainpage_banner_box">
                <div className="Mainpage_banner_text" >
                  <div style={{ fontSize: "42px", marginBottom: "24px", fontWeight: "400" }} >디자이너 성장을 위해 지원하는</div>
                  <div style={{ fontSize: "72px", marginBottom: "80px" }} >로위 디자이너 혜택</div>
                  <div className="Mainpage_banner_button" style={{ borderColor: "#9c9c9c", width: "263px" }}>
                    <a style={{ color: "#fff" }} href="/care" >지원혜택</a>
                  </div>
                </div>
              </div>
              <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/main1_4.png"} alt="Lowe main" />
            </div>
            <div className="Mainpage_banner_div">
              <div className="Mainpage_banner_box">
                <div className="Mainpage_banner_text" style={{ lineHeight: "180%" }} >
                  <div style={{ fontWeight: "400", marginBottom: "24px", fontSize: "42px" }}>로위에서의 안정적 근무를 위해</div>
                  <div style={{ fontWeight: "400", fontSize: "72px" }}>정착지원금
                  </div>
                  <div style={{ fontSize: "72px" }}><span style={{ fontFamily: "Montserrat" }}>6</span>개월 지원 최대 <span style={{ fontFamily: "Montserrat" }}>300</span>만원</div>
                </div>
              </div>
              <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/main1_1.png"} alt="Lowe main" />
            </div>
          </Slider>

          {/* <div className="taskbar_div">
          <div id="taskbar_group1" onClick={this.Barstart}>
            <div className="taskbar_name">OPEN PROMOTION</div>
            <div id="myProgress1">
              <div id="myBar1"></div>
            </div>
          </div>
          <div id="taskbar_group3" onClick={this.thirdBarstart}>
            <div className="taskbar_name">DESIGNER REVIEW</div>
            <div id="myProgress3">
              <div id="myBar3"></div>
            </div>
          </div>

          <div id="taskbar_group2" onClick={this.secondBarstart}>
            <div className="taskbar_name">투어신청</div>
            <div id="myProgress2">
              <div id="myBar2"></div>
            </div>
          </div>
        </div> */}
        </Desktop>
        <Mobile>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            <div className="Mainpage_banner_div">
              <div className="Mainpage_banner_box">
                <div className="Mainpage_banner_text" >
                  <div>2022 로위헤어</div>
                  <div><strong>상반기</strong></div>
                  <div><strong>헤어디자이너</strong></div>
                  <div><strong>대규모 채용</strong></div>
                  <div style={{ font: "400 4vw 'Noto Sans'", marginTop: "3.2vw" }}>성수점/이수역점/L7홍대점/강남점/<br />홍대입구역점/합정점/신촌점</div>
                  <div className="Mainpage_banner_button" style={{ borderColor: "#ccc", fontSize: "5.33333vw" }}>
                    <a href="/request" >ㅤ ㅤ지원하기ㅤ ㅤ </a>
                  </div>
                </div>
              </div>
              <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/M_main1_3.png"} alt="Lowe main" />
            </div>
            <div className="Mainpage_banner_div">
              <div className="Mainpage_banner_box" style={{ top: "40%" }}>
                <div className="Mainpage_banner_text">
                  <div style={{ font: "400 5.6vw 'Noto Sans'", marginBottom: "3.2vw" }}>로위에서의<br />안정적 근무를 위해</div>
                  <div>정착지원금</div>
                  <div><strong>6개월 지원</strong></div>
                  <div><strong>최대 300만원</strong></div>
                </div>
              </div>
              <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/M_main1_2.png"} alt="Lowe main" />
            </div>
            <div className="Mainpage_banner_div">
              <div className="Mainpage_banner_box" style={{ top: "40%" }}>
                <div className="Mainpage_banner_text">
                  <div style={{ font: "400 5.6vw 'Noto Sans'", marginBottom: "3.2vw" }}>디자이너 성장을 위해<br />로위가 지원하는</div>
                  <div><strong>디자이너 혜택</strong></div>
                  <div className="Mainpage_banner_button" style={{ borderColor: "#ccc", fontSize: "5.33333vw" }}>
                    <a href="/care" > ㅤ지원 혜택ㅤ </a>
                  </div>
                </div>
              </div>
              <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/M_main1_4.png"} alt="Lowe main" />
            </div>
          </Slider>

          {/* <div className="taskbar_div">
          <div id="taskbar_group1" onClick={this.Barstart}>
            <div className="taskbar_name">로위 5호점 OPEN</div>
            <div id="myProgress1">
              <div id="myBar1"></div>
            </div>
          </div>
          <div id="taskbar_group3" onClick={this.thirdBarstart}>
            <div className="taskbar_name">DESIGNER REVIEW</div>
            <div id="myProgress3">
              <div id="myBar3"></div>
            </div>
          </div>

          <div id="taskbar_group2" onClick={this.secondBarstart}>
            <div className="taskbar_name">OPEN PROMOTION</div>
            <div id="myProgress2">
              <div id="myBar2"></div>
            </div>
          </div>
        </div> */}
        </Mobile>
      </section>
    )
  }
}

export default Firstsec;