import { Component } from "react";
import Slider from "react-slick";
import "./Fifthsec.css";
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class Fifthsec extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = {

        };
    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        var settings = {
            dots: false,
            infinite: false,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            slidesToShow: 1.2,
            slidesToScroll: 1,
            autoplay: false,
        };


        var setting = {
            dots: false,
            infinite: false,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            slidesToShow: 1.1,
            slidesToScroll: 1,
            autoplay: false,
        };
        return (
            <section className="Mainpage_Fifth_section">
                <Desktop>
                    <div id="Fifth_section_content">
                        <div data-aos="fade-up" data-aos-duration="3000" >
                            <div className="Fifth_Section_title">
                                PRIVATE ROOM
                            </div>

                            <div id="Fifth_Section_title_text">
                                <div className="Fifth_Section_title_text">
                                    고객이 더 만족하는
                                </div>
                                <div className="Fifth_Section_title_text_bold">
                                    프라이빗룸
                                </div>
                            </div>
                            <div id="Fifth_Section_title_content">
                                <div>
                                    로위만의 프라이빗룸은 고객도, 디자이너도 다른 사람 눈치 볼 필요없이 오롯이 시술에 집중할 수 있습니다.
                                </div>
                                <div>
                                    원하는 대로 꾸미는 나만의 미용 공간에서 고객과 자유롭게 소통하세요.
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000"  style={{ float: "left", width: "100%" }}>
                            <Slider ref={c => (this.slider = c)} {...settings}>
                                <div key={1} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">5호점 오픈예정</span>
                                            <span className="Fifth_Slide_content_span">사전예약 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>01</span> / 04</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_1.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/" onClick={()=>alert("11월 19일 18시 오픈 예정")}>
                                        {/* <a href="/promotion/lowe5th" > */}
                                            <img src={process.env.PUBLIC_URL + "/image/Nav/benefit_button.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={2} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">신촌점</span>
                                            <span className="Fifth_Slide_content_span">모집완료</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>02</span> / 04</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_2.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/info" >
                                            <img style={{width: "6.354166vw"}} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={3} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">합정점</span>
                                            <span className="Fifth_Slide_content_span">모집완료</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>03</span> / 04</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_3.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/info" >
                                            <img style={{width: "6.354166vw"}} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={4} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">홍대입구점</span>
                                            <span className="Fifth_Slide_content_span">모집완료</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>04</span> / 04</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_4.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/info" >
                                            <img style={{width: "6.354166vw"}} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div id="Fifth_Slide_button_div">
                            <div className="Fifth_Slide_button" onClick={this.previous}>
                                <img src={process.env.PUBLIC_URL + "/image/Nav/go_left.svg"} alt="lowe mainpage" />
                            </div>
                            <div className="Fifth_Slide_button" onClick={this.next}>
                                <img src={process.env.PUBLIC_URL + "/image/Nav/go_right.svg"} alt="lowe mainpage" />
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div id="Fifth_section_content">
                        <div  data-aos="fade-up" data-aos-duration="3000" >
                            <div className="Fifth_Section_title">
                                PRIVATE ROOM
                            </div>

                            <div id="Fifth_Section_title_text">
                                <div className="Fifth_Section_title_text">
                                    고객이 더 만족하는
                                </div>
                                <div className="Fifth_Section_title_text_bold">
                                    프라이빗룸
                                </div>
                            </div>
                            <div id="Fifth_Section_title_content">
                                <div>
                                    타인의 눈치 볼 필요 없이 <span style={{ fontWeight: "bold" }}>오로지 시술에만</span>
                                </div>
                                <div style={{ fontWeight: "bold" }}>
                                    집중할 수 있는 로위만의 프라이빗 룸.
                                </div>
                                <div>
                                    나만의 미용공간에서 고객과 자유롭게 소통하세요
                                </div>
                            </div>
                        </div>
                        <div  data-aos="fade-up" data-aos-duration="3000"  style={{ float: "left", width: "98%" }}>
                            <Slider ref={c => (this.slider = c)} {...setting}>
                                <div key={1} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">5호점 오픈예정</span>
                                            <span className="Fifth_Slide_content_span">사전예약 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>01</span> / 04</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_1.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/" onClick={()=>alert("11월 19일 18시 오픈 예정")}>
                                        {/* <a href="/promotion/lowe5th" > */}
                                            <img src={process.env.PUBLIC_URL + "/image/Nav/benefit_button.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={2} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">신촌점</span>
                                            <span className="Fifth_Slide_content_span">모집완료</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>02</span> / 04</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_2.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/info" >
                                            <img style={{width: "22vw"}} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={3} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">합정점</span>
                                            <span className="Fifth_Slide_content_span">모집완료</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>03</span> / 04</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_3.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/info" >
                                            <img style={{width: "22vw"}} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={4} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">홍대입구점</span>
                                            <span className="Fifth_Slide_content_span">모집완료</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>04</span> / 04</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_4.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/info" >
                                            <img style={{width: "22vw"}} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div id="Fifth_Slide_button_div">
                            <div className="Fifth_Slide_button" onClick={this.previous}>
                                <img src={process.env.PUBLIC_URL + "/image/Nav/go_left.svg"} alt="lowe mainpage" />
                            </div>
                            <div className="Fifth_Slide_button" onClick={this.next}>
                                <img src={process.env.PUBLIC_URL + "/image/Nav/go_right.svg"} alt="lowe mainpage" />
                            </div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default Fifthsec;