import { Component } from "react";
import "./Rec_Firstsec.css"

class Rec_Firstsec extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <section className="Rec_Firstsec_section">
                <div className="Rec_Firstsec_div">
                    <div className="Rec_Firstsec_first_content">
                        <div className="Rec_Firstsec_first_content_first">로위는<br /><strong>근무 유형 선택</strong>이 가능합니다.</div>
                        <div className="Rec_Firstsec_first_content_second"><strong>채용형</strong>은 매장에 소속되어<br />체계적인 교육시스템을 기반으로 함께<br />성장하는 일반디자이너 근무형태입니다.</div>
                        <img src={process.env.PUBLIC_URL + "/image/request/M_request1_1.png"} alt="lowe request" />
                    </div>
                    <img src={process.env.PUBLIC_URL + "/image/request/M_request1_2.png"} alt="lowe request" />
                    <div className="Rec_Firstsec_second_content">
                        <div className="Rec_Firstsec_first_content_first">채용형 디자이너<br /><strong style={{ fontFamily: "Montserrat" }}>Key Point 2</strong></div>
                        <div className="Rec_Firstsec_first_content_first" style={{ marginBottom: "16px" }}><strong>높은 인센티브</strong></div>
                        <div className="Rec_Firstsec_second_content_second"><strong>최대 42~60%로</strong> 일한만큼 보상받는<br />로위만의 <strong>합리적인 인센티브</strong></div>
                        <img style={{marginBottom: "40px"}} src={process.env.PUBLIC_URL + "/image/request/M_request1_3.png"} alt="lowe request" />
                        <div className="Rec_Firstsec_first_content_first" style={{ marginBottom: "16px", marginTop: "40px", lineHeight: "90%" }}><strong>프라이빗한 공간</strong><br /><span style={{ font: "400 16px 'Noto Sans'", color: "#9c9c9c" }}>(일부 지점 제외)</span></div>
                        <div className="Rec_Firstsec_second_content_second">고객이 더 만족하는 프라이빗룸으로<br /><strong>나만의 미용공간을 가져보세요</strong></div>
                        <img src={process.env.PUBLIC_URL + "/image/request/M_request1_4.png"} alt="lowe request" />
                    </div>
                    <div className="Rec_Firstsec_second_content" >
                        <div className="Rec_Firstsec_first_content_first">오직 <strong>오픈멤버<br />디자이너에게만</strong><br />드리는 혜택</div>
                        <img src={process.env.PUBLIC_URL + "/image/request/M_request1_5.png"} alt="lowe request" />
                    </div>

                    <img src={process.env.PUBLIC_URL + "/image/request/M_request1_7.png"} alt="lowe request" />
                    <div style={{ padding: "40px 24px 0px 24px", marginTop: "-5px", textAlign: "center" }}>
                        <div>
                            <div className="Rec_Firstsec_content_method">지원 방법</div>
                            <div className="Rec_Firstsec_content_method_text">가지고 있는 <strong>이력서를 이메일로 제출</strong></div>
                        </div>
                        <div>
                            <a href="mailto:recruit@bentlespace.com">
                                <div className="Rec_Firstsec_content_address">recruit@bentlespace.com</div>
                            </a>
                        </div>
                    <img src={process.env.PUBLIC_URL + "/image/request/M_request1_8.png"} alt="lowe request" />
                    </div>
                </div>

            </section>
        )
    }
}

export default Rec_Firstsec;