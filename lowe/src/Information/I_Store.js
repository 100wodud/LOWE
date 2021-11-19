import { Component } from "react";
import Slider from "react-slick";
import "./I_Store.css";


class I_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        let settings = {}
        if (window.innerWidth > 1000) {
            settings = {
                dots: false,
                infinite: false,
                autoplaySpeed: 10000,
                pauseOnHover: true,
                slidesToShow: 1.9,
                slidesToScroll: 1,
                autoplay: false,
            };
        } else {
            settings = {
                dots: false,
                infinite: false,
                autoplaySpeed: 10000,
                pauseOnHover: true,
                slidesToShow: 1.1,
                slidesToScroll: 1,
                autoplay: false
            };
        }
        return (
            <div className="store_info">
                <Slider {...settings}>
                    {this.props.data.picture.map((e) => (
                        <div key={e}>
                            <img className="store_info_img" src={process.env.PUBLIC_URL + e} alt={"로위" + this.props.data.store} />
                        </div>
                    ))}
                </Slider>
                <div className="store_info_content">
                    <div className="store_info_content_info" >
                        <p className="store_info_content_title" style={{width: "9.5vw"}}>규모</p>
                        {this.props.data.area.map((e) => (
                            <div key={e}>
                                <div>{e}</div>
                            </div>
                        ))}
                    </div>
                    <div className="store_info_content_info">
                        <p className="store_info_content_title" style={{width: "15.885416vw"}}>위치</p>
                        <div style={{ marginBottom: "0.8vw" }}>{this.props.data.address}</div>
                        {this.props.data.location.map((e) => (
                            <div key={e}>
                                <div style={{ fontWeight: "normal" }}>{e}</div>
                            </div>
                        ))}
                    </div>
                    <div className="store_info_content_info" >
                        <p className="store_info_content_title">연락처</p>
                        <div>{this.props.data.phone}</div>
                    </div>
                    <div className="store_info_content_info">
                        <p className="store_info_content_title">주차</p>
                        <div>{this.props.data.parking}</div>
                    </div>
                </div>
                <div className="store_info_content_button">
                    <a href="/info" >
                        <img src={process.env.PUBLIC_URL + `/image/info/${this.props.data.eng}_button.png`} alt="로위 예약하기" />
                    </a>
                </div>
            </div>
        )
    }
}

export default I_Store;