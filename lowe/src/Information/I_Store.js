import { Component } from "react";
import Slider from "react-slick";
import "./I_Store.css";
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}



class I_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount = (e)=>{
    }

    render() {
        let settings = {}
        if (window.innerWidth > 1000) {
            settings = {
                dots: false,
                infinite: false,
                pauseOnHover: true,
                slidesToShow: 1.9,
                slidesToScroll: 1,
                autoplay: false,
            };
        } else {
            settings = {
                dots: false,
                infinite: false,
                pauseOnHover: true,
                slidesToShow: 1.1,
                slidesToScroll: 1,
                autoplay: false
            };
        }
        return (
            <div className="store_info">
                <Slider {...settings} cancelable={false}>
                    {this.props.data.picture.map((e) => (
                        <div key={e} >
                            <img className="store_info_img" src={process.env.PUBLIC_URL + e} alt={"로위" + this.props.data.store} />
                        </div>
                    ))}
                </Slider>
                <div className="store_info_content">
                    <div className="store_info_content_info" >
                        <p className="store_info_content_title" style={{width: "9.5vw"}}>특징</p>
                        <div className="store_info_content_salon"><strong>{this.props.data.salon}</strong></div>
                        {this.props.data.area.map((e) => (
                            <div key={e}>
                                <div>{e}</div>
                            </div>
                        ))}
                    </div>
                    <div className="store_info_content_info">
                        <p className="store_info_content_title" style={{width: "15.885416vw"}}>위치</p>
                        <div style={{ marginBottom: "0.625vw" }}>{this.props.data.address}</div>
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
                        <div style={{whiteSpace: "pre"}}>{this.props.data.parking}</div>
                    </div>
                </div>
                {this.props.data.reservation ?
                <div className="store_info_content_button">
                    <a data-tag-index="Branchstatus" data-tag-cate="reservation" data-tag-title={this.props.data.store} href={this.props.data.reservation} >
                        <Desktop>
                            <img src={process.env.PUBLIC_URL + `/image/info/${this.props.data.eng}_button.png`} alt="로위 예약하기" />
                        </Desktop>
                        <Mobile>
                            <img src={process.env.PUBLIC_URL + `/image/info/M_${this.props.data.eng}_button.png`} alt="로위 예약하기" />
                        </Mobile>
                    </a>
                </div> : null
                }
            </div>
        )
    }
}

export default I_Store;