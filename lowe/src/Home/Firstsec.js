import { Component } from "react";
import "./Firstsec.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class Firstsec extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    var settings = {
      dots: true,
      infinite: false,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <section className="Mainpage_first_section">
        <Slider {...settings}>
          <div className="Mainpage_banner_div">
            <div className="Mainpage_banner_text">안녕하세요</div>
            <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/main1_1.jpeg"} alt="main" />
          </div>
          <div className="Mainpage_banner_div">
            <div className="Mainpage_banner_text">로위 입니다.</div>
            <img className="Mainpage_banner_img" src={process.env.PUBLIC_URL + "/image/mainpage/main1_2.jpeg"} alt="main" />
          </div>
          <div className="Mainpage_banner_div">
            <video autoPlay muted loop className="Mainpage_banner_video" src={process.env.PUBLIC_URL + "/image/mainpage/main1_3.mp4"} alt="main" />
          </div>
        </Slider>
      </section>
    )
  }
}

export default Firstsec;





