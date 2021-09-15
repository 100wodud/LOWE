import { Component } from "react";
import "./Secondsec.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

class Secondsec extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }
  render() {
    return (
          <section className="Mainpage_second_section">
            <div data-aos="fade-up" data-aos-duration="3000">
              <img className="section_img" src={process.env.PUBLIC_URL + "/image/mainpage/main2_1.jpeg"} alt="main2_1" />
            </div>
            <div data-aos="fade-zoom-in" data-aos-duration="3000"
     data-aos-delay="1000">
              <img className="section_img" src={process.env.PUBLIC_URL + "/image/mainpage/main2_1.jpeg"} alt="main2_1" />
            </div>
          </section>
    )
  }
}

export default Secondsec;
