import { Component } from "react";
import "./V_Mainpage.css";
import Slider from "react-slick";

class Gangnam extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        let settings = {
            dots: true,
            infinite: false,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <>
                <section id="shop-info">
                    <h3 className="section-title">매장안내</h3>
                    <div className="shop-slider">
                        <div id="shopSlider">
                            <Slider {...settings} >
                                <div className="slide-item">
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/gangnam/01.jpg"} alt="로위 합정점" />
                                </div>
                                <div className="slide-item">
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/gangnam/02.jpg"} alt="로위 합정점" />
                                </div>
                                <div className="slide-item">
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/gangnam/03.jpg"} alt="로위 합정점" />
                                </div>
                                <div className="slide-item">
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/gangnam/04.jpg"} alt="로위 합정점" />
                                </div>
                                <div className="slide-item">
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/gangnam/05.jpg"} alt="로위 합정점" />
                                </div>
                                <div className="slide-item">
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/gangnam/06.jpg"} alt="로위 합정점" />
                                </div>

                            </Slider>
                        </div>
                    </div>
                    <div className="shop-message">
                        코로나 시대에 적합한 <strong>프라이빗 룸</strong>에서
                        안전하게 시술을 받으실 수 있습니다.</div>
                </section>
                <section id="location">
                    <h3 className="section-title">위치</h3>
                    <div className="map-wrapper">
                        <img src={process.env.PUBLIC_URL + "/image/reservation/gangnam/location.png"} alt="로위 합정점 지도" />
                        <a className="map-link" href="https://map.naver.com/v5/search/%EB%A1%9C%EC%9C%84%20%EA%B0%95%EB%82%A8?c=14140992.0932725,4508078.4019051,17,0,0,0,dh">
                            <strong>네이버 지도</strong> 열기</a></div>
                </section>
                <section id="detail" className="details">
                    <h3 className="section-title">정보</h3>
                    <div className="detail-table">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>직급</th>
                                    <td>원장</td>
                                </tr>
                                <tr>
                                    <th>지점</th>
                                    <td>로위 강남점(5호점)</td>
                                </tr>
                                <tr>
                                    <th>주소</th>
                                    <td>강남대로 328 강남역 쉐르빌 2층</td>
                                </tr>
                                <tr>
                                    <th>지하철</th>
                                    <td>강남역 4번출구 도보 5분</td>
                                </tr>
                                <tr>
                                    <th>주차</th>
                                    <td>가능</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </>
        )
    }
}

export default Gangnam;