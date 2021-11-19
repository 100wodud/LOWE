import { Component } from "react";
import "./Firstsec.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 999 })
  return isMobile ? children : null
}


var width2 = 0;
var width1 = 0;
var width3 = 0;
var id;

class Firstsec extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount = () => {
    document.getElementById("myBar2").style.width = '0%';
    document.getElementById("myBar3").style.width = '0%';
    this.Barstart();
  }

  Barstart = () => {
    clearInterval(id)
    let goto = this.slider.slickGoTo
    goto(0)
    width1 = 0;
    width2 = 0;
    width3 = 0;
    document.getElementById("myBar1").style.width = '0%';
    document.getElementById("myBar2").style.width = '0%';
    document.getElementById("myBar3").style.width = '0%';
    var elem1 = document.getElementById("myBar1");
    id = setInterval(frame, 0.5);
    let secondBarstart = this.secondBarstart;
    function frame() {
      if (width1 >= 100) {
        width1 = 0;
        clearInterval(id);
        elem1.style.width = width1 + '%';
        goto(1)
        secondBarstart()
      } else {
        width1 = width1 + 0.1;
        elem1.style.width = width1 + '%';
      }

    }
  }


  secondBarstart = () => {
    clearInterval(id)
    let goto = this.slider.slickGoTo
    goto(1)
    width1 = 0;
    width2 = 0;
    document.getElementById("myBar1").style.width = '0%';
    document.getElementById("myBar2").style.width = '0%';
    document.getElementById("myBar3").style.width = '0%';
    var elem2 = document.getElementById("myBar2");
    id = setInterval(frame, 0.5);
    let thirdBarstart = this.thirdBarstart;
    function frame() {
      if (width2 >= 100) {
        width2 = 0;
        clearInterval(id);
        elem2.style.width = width2 + '%';
        goto(2)
        thirdBarstart();
      } else {
        width2 = width2 + 0.1;
        elem2.style.width = width2 + '%';
      }
    }
  }

  thirdBarstart = () => {
    clearInterval(id)
    let goto = this.slider.slickGoTo
    goto(2)
    width1 = 0;
    width2 = 0;
    document.getElementById("myBar1").style.width = '0%';
    document.getElementById("myBar2").style.width = '0%';
    document.getElementById("myBar3").style.width = '0%';
    var elem2 = document.getElementById("myBar3");
    id = setInterval(frame, 0.5);
    let Barstart = this.Barstart;
    function frame() {
      if (width3 >= 100) {
        width3 = 0;
        clearInterval(id);
        elem2.style.width = width3 + '%';
        goto(0)
        Barstart();
      } else {
        width3 = width3 + 0.1;
        elem2.style.width = width3 + '%';
      }
    }
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      autoplaySpeed: 100000000,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      touchMove : false, 
      draggable : false,
    };
    return (
      <section className="Mainpage_first_section" id="Mainpage_first_section">
        <Desktop>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div className="Mainpage_banner_div">
            <div className="Mainpage_banner_box">
              <div className="Mainpage_banner_text" >
                <div>로위 5호점</div>
                <div>2021 하반기 OPEN</div>
                <div className="Mainpage_banner_button">
                  <a href="/request" >사전예약하기</a>
                </div>
              </div>
            </div>
            <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/main1_1.png"} alt="Lowe main" />
          </div>
          <div className="Mainpage_banner_div">
            <div className="Mainpage_banner_box">
              <div className="Mainpage_banner_text" >
                <div>로위 강남점</div>
                <div>사전입점 프로모션</div>
                <div className="Mainpage_banner_button">
                  <a href="/promotion/lowe5th" >입점혜택받기</a>
                </div>
              </div>
            </div>
            <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/main1_2.png"} alt="Lowe main" />
          </div>
          <div className="Mainpage_banner_div">
            <div className="Mainpage_banner_box">
              <div className="Mainpage_banner_text" >
                <div className="review_first_text" >먼저 경험한 로위 디자이너가 추천하는 로위</div>
                <div className="review_second_text" >디자이너 리뷰</div>
                <div className="Mainpage_banner_button">
                  <a href="/review/yujine">리뷰 보기</a>
                </div>
              </div>
            </div>
            <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/main1_3.png"} alt="Lowe main" />
          </div>
        </Slider>

        <div className="taskbar_div">
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
        </div>
        </Desktop>
        <Mobile>
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          <div className="Mainpage_banner_div">
            <div className="Mainpage_banner_box">
              <div className="Mainpage_banner_text" >
                <div>로위 5호점</div>
                <div>2021 하반기 OPEN</div>
                <div className="Mainpage_banner_button">
                  <a href="/request" >사전예약하기</a>
                </div>
              </div>
            </div>
            <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/main1_1.png"} alt="Lowe main" />
          </div>
          <div className="Mainpage_banner_div">
            <div className="Mainpage_banner_box">
              <div className="Mainpage_banner_text" >
                <div>로위 강남점</div>
                <div>사전입점 프로모션</div>
                <div className="Mainpage_banner_button">
                  <a href="/promotion/lowe5th">입점혜택받기</a>
                </div>
              </div>
            </div>
            <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/M_main1_2.png"} alt="Lowe main" />
          </div>
          <div className="Mainpage_banner_div">
            <div className="Mainpage_banner_box">
              <div className="Mainpage_banner_text" >
                <div className="review_first_text" >먼저 경험한 로의 디자이너의</div>
                <div className="review_second_text" >디자이너 리뷰</div>
                <div className="Mainpage_banner_button">
                  <a href="/review/yujine">리뷰 보기</a>
                </div>
              </div>
            </div>
            <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/M_main1_3.png"} alt="Lowe main" />
          </div>
        </Slider>

        <div className="taskbar_div">
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
        </div>
        </Mobile>
      </section>
    )
  }
}

export default Firstsec;