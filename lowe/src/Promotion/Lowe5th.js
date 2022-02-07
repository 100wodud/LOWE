import { Component } from "react";
import "./Lowe5th.css";
import Slider from "react-slick";


class Lowe5th extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        var setting = {
            dots: true,
            infinite: false,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
        };
        return (
            <section className="Lowe5th_section">
                <div className="Lowe5th_div" >
                    <img src={process.env.PUBLIC_URL + "/image/promotion/01.jpg"} alt="로위 5호점 강남" />
                    <img src={process.env.PUBLIC_URL + "/image/promotion/02.jpg"} alt="로위 5호점 강남" />
                    <img src={process.env.PUBLIC_URL + "/image/promotion/03.jpg"} alt="로위 5호점 강남" />
                    <div className="Lowe5th_slider_div">
                        <div  className="Lowe5th_slider">
                            <Slider {...setting}>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/08/01.jpg"} alt="로위 5호점 강남" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/08/02.jpg"} alt="로위 5호점 강남" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/08/03.jpg"} alt="로위 5호점 강남" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/08/04.jpg"} alt="로위 5호점 강남" />
                                </div>
                                <div>
                                    <img src={process.env.PUBLIC_URL + "/image/promotion/08/05.jpg"} alt="로위 5호점 강남" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/image/promotion/04.jpg"} alt="로위 5호점 강남" />
                </div>
            </section>
        )
    }
}

export default Lowe5th;





