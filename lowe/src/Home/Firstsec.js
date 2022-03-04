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
      autoplaySpeed: 10000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      touchMove : true, 
      draggable : true,
      arrows: false,
    };
    return (
      <section className="Mainpage_first_section" id="Mainpage_first_section">
        <Desktop>
        <Slider {...settings}>
          <div className="Mainpage_banner_div">
            <div className="Mainpage_banner_box">
              <div className="Mainpage_banner_text" style={{color: "#333333"}} >
                <div style={{fontSize: "24px", fontFamily: "Montserrat", marginBottom: "8px"}}>New</div>
                <div style={{lineHeight: "66px"}} >로위 강남점 오픈 멤버</div>
                <div style={{lineHeight: "66px"}} >디자이너 모집</div>
                <div className="Mainpage_banner_button" style={{borderColor: "#9c9c9c"}}>
                  <a style={{color: "#333"}} href="/promotion/lowe5th" >강남점 지원하기</a>
                </div>
              </div>
            </div>
            <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/main1_2.png"} alt="Lowe main" />
          </div>
          <div className="Mainpage_banner_div">
            <div className="Mainpage_banner_box">
              <div className="Mainpage_banner_text" style={{lineHeight: "74px"}}>
                <div style={{fontSize: "52px"}}>로위 L7홍대점</div>
                <div style={{fontSize: "52px"}}>디자이너 공개 채용</div>
                <div className="Mainpage_banner_button" style={{borderColor: "#9c9c9c"}}>
                  <a style={{color: "#fff"}} href="/promotion/lowe6th" >L7홍대점 지원하기</a>
                </div>
              </div>
            </div>
            <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/main1_3.png"} alt="Lowe main" />
          </div>
          <div className="Mainpage_banner_div">
            <div className="Mainpage_banner_box">
              <div className="Mainpage_banner_text" style={{lineHeight: "66px"}} >
                <div>국내 최초</div>
                <div>월세 없는 인센티브제</div>
                <div style={{fontWeight: "500"}}>공유미용실 로위</div>
                <div className="Mainpage_banner_button" style={{borderColor: "#ccc"}}>
                  <a style={{color: "#fff"}} href="/request" >지원하기</a>
                </div>
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
                <div style={{fontSize: "4.266vw", fontFamily: "Montserrat", marginBottom: "4px"}}>New</div>
                <div>로위 강남점 오픈 멤버</div>
                <div>디자이너 모집</div>
                <div className="Mainpage_banner_button" style={{borderColor: "#ccc"}}>
                  <a style={{color: "#fff"}} href="/promotion/lowe5th" >강남점 지원하기</a>
                </div>
              </div>
            </div>
            <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/M_main1_2.png"} alt="Lowe main" />
          </div>
          <div className="Mainpage_banner_div">
            <div className="Mainpage_banner_box">
              <div className="Mainpage_banner_text" style={{ marginTop: "5.3333vw"}} >
                <div>로위 L7홍대점</div>
                <div>디자이너 공개 채용</div>
                <div className="Mainpage_banner_button" style={{borderColor: "#ccc"}}>
                  <a href="/promotion/lowe6th" >L7홍대점 지원하기</a>
                </div>
              </div>
            </div>
            <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/M_main1_3.png"} alt="Lowe main" />
          </div>
          <div className="Mainpage_banner_div">
            <div className="Mainpage_banner_box">
              <div className="Mainpage_banner_text" style={{ marginTop: "5.3333vw"}} >
                <div>국내 최초</div>
                <div>월세 없는 인센티브제</div>
                <div style={{fontWeight: "500"}}>공유미용실 로위</div>
                <div className="Mainpage_banner_button" style={{borderColor: "#ccc"}}>
                  <a style={{color: "#fff"}} href="/request" >지원하기</a>
                </div>
              </div>
            </div>
            <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/M_main1_1.png"} alt="Lowe main" />
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