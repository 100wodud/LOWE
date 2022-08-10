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

                            <div id="Fifth_Section_title_text">
                                <div className="Fifth_Section_title_text_bold">
                                    신규 지점과 지원 가능한
                                </div>
                                <div className="Fifth_Section_title_text">
                                    <strong>로위</strong>를 만나보세요
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000"  style={{ float: "left", width: "100%" }}>
                            <Slider ref={c => (this.slider = c)} {...settings}>
                                <div key={1} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">성수점</span>
                                            <span className="Fifth_Slide_content_span">모집 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>01</span> / 07</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_6.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/requests/recruitment"  onClick={()=>{return window.localStorage.setItem("route", "메인_지원하기");}} data-tag-index="Main" data-tag-cate="branch_apply" data-tag-title="성수">
                                            <img src={process.env.PUBLIC_URL + "/image/Nav/benefit_button5.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={2} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">이수역점</span>
                                            <span className="Fifth_Slide_content_span">모집 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>02</span> / 07</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_7.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/promotion/lowe7th"  data-tag-index="Main" data-tag-cate="branch_apply" data-tag-title="이수">
                                            <img src={process.env.PUBLIC_URL + "/image/Nav/benefit_button3.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={3} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">L7홍대점</span>
                                            <span className="Fifth_Slide_content_span">모집 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>03</span> / 07</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_5.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/promotion/lowe6th"  data-tag-index="Main" data-tag-cate="branch_apply" data-tag-title="L7홍대">
                                            <img src={process.env.PUBLIC_URL + "/image/Nav/benefit_button2.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={4} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">강남점</span>
                                            <span className="Fifth_Slide_content_span">모집 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>04</span> / 07</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_1.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/promotion/lowe5th" data-tag-index="Main" data-tag-cate="branch_apply" data-tag-title="강남">
                                            <img src={process.env.PUBLIC_URL + "/image/Nav/benefit_button.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={5} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">홍대입구역점</span>
                                            <span className="Fifth_Slide_content_span">모집 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>05</span> / 07</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_4.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/promotion/lowe4th" data-tag-index="Main" data-tag-cate="branch_apply" data-tag-title="홍대입구">
                                            <img src={process.env.PUBLIC_URL + "/image/Nav/benefit_button4.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={6} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">합정점</span>
                                            <span className="Fifth_Slide_content_span">모집 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>06</span> / 07</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_3.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/info" data-tag-index="Main" data-tag-cate="branch_moreview" data-tag-title="합정">
                                            <img style={{width: "5.729166vw", height: "fit-content"}} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={7} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">신촌점</span>
                                            <span className="Fifth_Slide_content_span">모집 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>07</span> / 07</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_2.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/info" data-tag-index="Main" data-tag-cate="branch_moreview" data-tag-title="신촌">
                                            <img style={{width: "5.729166vw", height: "fit-content"}} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe mainpage" />
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
                            <div id="Fifth_Section_title_text">
                                <div className="Fifth_Section_title_text">
                                <strong>신규 지점과 지원 가능한<br />로위</strong>를 만나보세요
                                </div>
                            </div>
                        </div>
                        <div  data-aos="fade-up" data-aos-duration="3000"  style={{ float: "left", width: "98%" }}>
                            <Slider ref={c => (this.slider = c)} {...setting}>
                                <div key={1} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">성수점</span>
                                            <span className="Fifth_Slide_content_span">모집 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>01</span> / 07</div>
                                        <img className="Fifth_Slide_img" style={{objectFit: "cover"}} src={process.env.PUBLIC_URL + "/image/mainpage/main5_6.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/requests/recruitment" onClick={()=>{return window.localStorage.setItem("route", "메인_지원하기");}} data-tag-index="Main" data-tag-cate="branch_apply" data-tag-title="성수">
                                            <img src={process.env.PUBLIC_URL + "/image/Nav/benefit_button5.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={2} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">이수역점</span>
                                            <span className="Fifth_Slide_content_span">모집 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>02</span> / 07</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/M_main5_7.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/promotion/lowe7th"  data-tag-index="Main" data-tag-cate="branch_apply" data-tag-title="이수">
                                            <img src={process.env.PUBLIC_URL + "/image/Nav/benefit_button3.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={3} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">L7홍대점</span>
                                            <span className="Fifth_Slide_content_span">모집 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>03</span> / 07</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/M_main5_5.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/promotion/lowe6th" data-tag-index="Main" data-tag-cate="branch_apply" data-tag-title="L7홍대">
                                            <img src={process.env.PUBLIC_URL + "/image/Nav/benefit_button2.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={4} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">강남점</span>
                                            <span className="Fifth_Slide_content_span">모집 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>04</span> / 07</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/M_main5_1.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/promotion/lowe5th" data-tag-index="Main" data-tag-cate="branch_apply" data-tag-title="강남">
                                            <img src={process.env.PUBLIC_URL + "/image/Nav/benefit_button.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={5} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">홍대입구역점</span>
                                            <span className="Fifth_Slide_content_span">모집 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>05</span> / 07</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_4.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/promotion/lowe4th" data-tag-index="Main" data-tag-cate="branch_apply" data-tag-title="홍대입구">
                                            <img src={process.env.PUBLIC_URL + "/image/Nav/benefit_button4.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={6} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">합정점</span>
                                            <span className="Fifth_Slide_content_span">모집 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>06</span> / 07</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_3.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/info" data-tag-index="Main" data-tag-cate="branch_moreview" data-tag-title="합정">
                                            <img style={{width: "22vw", height: "5.46666vw"}} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe mainpage" />
                                        </a>
                                    </div>
                                </div>
                                <div key={7} className="Fifth_Slide_div">
                                    <div className="Fifth_Slide_content">
                                        <div>
                                            <span className="Fifth_Slide_content_name">신촌점</span>
                                            <span className="Fifth_Slide_content_span">모집 중</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="Fifth_Slide_content_number"><span style={{ fontWeight: "bold" }}>07</span> / 07</div>
                                        <img className="Fifth_Slide_img" src={process.env.PUBLIC_URL + "/image/mainpage/main5_2.png"} alt="lowe mainpage" />
                                    </div>
                                    <div>
                                        <a href="/info" data-tag-index="Main" data-tag-cate="branch_moreview" data-tag-title="신촌">
                                            <img style={{width: "22vw", height: "5.46666vw"}} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe mainpage" />
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