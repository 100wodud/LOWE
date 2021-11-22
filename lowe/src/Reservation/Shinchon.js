import { Component } from "react";
import "./V_Mainpage.css";
import Slider from "react-slick";

class Shinchon extends Component {
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
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/shinchon/shop-image_01.jpg"} alt="로위 신촌점" />
                                </div>
                                <div className="slide-item">
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/shinchon/shop-image_02.jpg"} alt="로위 신촌점" />
                                </div>
                                <div className="slide-item">
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/shinchon/shop-image_03.jpg"} alt="로위 신촌점" />
                                </div>
                                <div className="slide-item">
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/shinchon/shop-image_04.jpg"} alt="로위 신촌점" />
                                </div>
                                <div className="slide-item">
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/shinchon/shop-image_05.jpg"} alt="로위 신촌점" />
                                </div>
                                <div className="slide-item">
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/shinchon/shop-image_06.jpg"} alt="로위 신촌점" />
                                </div>
                                <div className="slide-item">
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/shinchon/shop-image_07.jpg"} alt="로위 신촌점" />
                                </div>
                                <div className="slide-item">
                                    <img src={process.env.PUBLIC_URL + "/image/reservation/shinchon/shop-image_08.jpg"} alt="로위 신촌점" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="shop-message">
                        코로나 시대에 적합한 <strong>프라이빗 룸</strong>에서<br></br>
                        안전하게 시술을 받으실 수 있습니다.
                    </div>
                </section>

                <section id="location">
                    <h3 className="section-title">위치</h3>
                    <div className="map-wrapper">
                        <img src={process.env.PUBLIC_URL + "/image/reservation/shinchon/location@2x.jpg"} alt="로위 신촌점 지도" />
                        <a href="https://map.naver.com/v5/search/%EB%A1%9C%EC%9C%84%20%EC%8B%A0%EC%B4%8C%EC%A0%90/place/1772319921?c=14130286.3965829,4516875.3975274,17,0,0,0,dh" className="map-link"><strong>네이버 지도</strong> 열기</a>
                    </div>
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
                                    <td>로위 신촌점(2호점)</td>
                                </tr>
                                <tr>
                                    <th>주소</th>
                                    <td>서대문구 신촌로 77 대창빌딩 4층</td>
                                </tr>
                                <tr>
                                    <th>지하철</th>
                                    <td>신촌역 1번출구 도보 3분</td>
                                </tr>
                                <tr>
                                    <th>주차</th>
                                    <td>불가능</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </>
        )
    }
}

export default Shinchon;