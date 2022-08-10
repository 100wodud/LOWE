import { Component } from "react";
import "./Rec_Firstsec.css"
import ScrollContainer from 'react-indiana-drag-scroll'

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
                        <div className="Rec_Firstsec_first_content_first">로위는<br /><strong>체계적인 교육 기반으로<br />함께 성장합니다</strong></div>
                        <img src={process.env.PUBLIC_URL + "/image/request/M_request1_1.png"} alt="lowe request" />
                    </div>
                    <img src={process.env.PUBLIC_URL + "/image/request/M_request1_2.png"} alt="lowe request" />
                    <div className="Rec_Firstsec_second_content">
                        <div className="Rec_Firstsec_first_content_first" style={{ marginBottom: "16px" }}><strong>높은 인센티브</strong></div>
                        <div className="Rec_Firstsec_second_content_second"><strong>최대 42~60%로</strong> 일한만큼 보상받는<br />로위만의 <strong>합리적인 인센티브</strong></div>
                        <img style={{ marginBottom: "40px" }} src={process.env.PUBLIC_URL + "/image/request/M_request1_3.png"} alt="lowe request" />
                        <div className="Rec_Firstsec_first_content_first" style={{ marginBottom: "16px", marginTop: "40px", lineHeight: "90%" }}><strong>프라이빗한 공간</strong><br /><span style={{ font: "400 16px 'Noto Sans'", color: "#9c9c9c" }}>(일부 지점 제외)</span></div>
                        <div className="Rec_Firstsec_second_content_second">고객이 더 만족하는 프라이빗룸으로<br /><strong>나만의 미용공간을 가져보세요</strong></div>
                        <img style={{ marginBottom: "40px" }} src={process.env.PUBLIC_URL + "/image/request/M_request1_4.png"} alt="lowe request" />
                        <div className="Rec_Firstsec_first_content_first" style={{ marginBottom: "16px", marginTop: "40px" }}><strong>규칙적인 근무시간</strong></div>
                        <div className="Rec_Firstsec_second_content_second">근무시간이 초과되지 않도록,<br /><strong>정해진 시간 동안만 근무하세요</strong></div>
                        <img src={process.env.PUBLIC_URL + "/image/request/M_request1_3_2.png"} alt="lowe request" />
                    </div>

                    <div className="Rec_Firstsec_second_content" style={{ paddingRight: "0px" }}>
                        <div className="Rec_Firstsec_first_content_first"><strong>로위 디자이너의</strong><br />“왜 로위일까요?”</div>
                        <ScrollContainer className="Rec_Firstsec_first_content_first_slider">
                            <div>
                                <div className="Rec_Firstsec_first_content_first_slider_img">
                                    <img src={process.env.PUBLIC_URL + "/image/request/slider/01.png"} alt="로위 채용형 인터뷰" />
                                    <div style={{ margin: "41px 0 0 24px", fontSize: "18px" }}>
                                        <strong>높은 인센티브</strong> 덕분에, 정해진<br />
                                        근무시간만 일해도 충분해요.<br />
                                        <strong>워라밸이 보장</strong>되어 만족스러워요
                                    </div>
                                    <div style={{ bottom: "0", margin: "0 0 30px 24px", fontSize: "12px" }}>
                                        L7홍대점<br />
                                        <strong>가영 디자이너</strong>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="Rec_Firstsec_first_content_first_slider_img">
                                    <img src={process.env.PUBLIC_URL + "/image/request/slider/02.png"} alt="로위 채용형 인터뷰" />
                                    <div style={{ margin: "41px 0 0 24px", fontSize: "18px" }}>
                                        사진 교육, SNS 피드 구성,<br />
                                        광고 노출 등, <strong>마케팅 전반을 배워<br />
                                            최고 매출을 달성</strong>할 수 있었어요
                                    </div>
                                    <div style={{ bottom: "0", margin: "0 0 30px 24px", fontSize: "12px" }}>
                                        L7홍대점<br />
                                        <strong>혜민 디자이너</strong>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="Rec_Firstsec_first_content_first_slider_img">
                                    <img src={process.env.PUBLIC_URL + "/image/request/slider/03.png"} alt="로위 채용형 인터뷰" />
                                    <div style={{ margin: "41px 0 0 24px", fontSize: "18px" }}>
                                        <strong>디자이너로서 가치와 성장</strong>을<br />
                                        느끼고 있어서, <strong>주변 디자이너들<br />
                                            에게 많이 추천</strong>하고 있어요
                                    </div>
                                    <div style={{ bottom: "0", margin: "0 0 30px 24px", fontSize: "12px" }}>
                                        L7홍대점<br />
                                        <strong>영준 디자이너</strong>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="Rec_Firstsec_first_content_first_slider_img">
                                    <img src={process.env.PUBLIC_URL + "/image/request/slider/04.png"} alt="로위 채용형 인터뷰" />
                                    <div style={{ margin: "41px 0 0 24px", fontSize: "18px" }}>
                                        로위는 <strong>방향성 제시 후에<br />
                                            상황에 맞는 조언이나 팁</strong>을 줘요<br />
                                        그러니 자발적으로 할 수 있죠
                                    </div>
                                    <div style={{ bottom: "0", margin: "0 0 30px 24px", fontSize: "12px" }}>
                                        L7홍대점<br />
                                        <strong>임빈 디자이너</strong>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="Rec_Firstsec_first_content_first_slider_img">
                                    <img src={process.env.PUBLIC_URL + "/image/request/slider/05.png"} alt="로위 채용형 인터뷰" />
                                    <div style={{ margin: "41px 0 0 24px", fontSize: "18px" }}>
                                        잊고있던 미용의 즐거움을<br />
                                        알게 되었어요. <strong>일하는 즐거움을<br />
                                            느끼니 프라이드도 높아졌어요</strong>
                                    </div>
                                    <div style={{ bottom: "0", margin: "0 0 30px 24px", fontSize: "12px" }}>
                                        L7홍대점<br />
                                        <strong>수정 디자이너</strong>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="Rec_Firstsec_first_content_first_slider_img">
                                    <img src={process.env.PUBLIC_URL + "/image/request/slider/06.png"} alt="로위 채용형 인터뷰" />
                                    <div style={{ margin: "41px 0 0 24px", fontSize: "18px" }}>
                                        <strong>소속감과 인정</strong>해주는 분위기.<br />
                                        또, 어떻게하면 <strong>고객만족</strong>을 할<br />
                                        수 있을까 <strong>함께 고민</strong>해줘요
                                    </div>
                                    <div style={{ bottom: "0", margin: "0 0 30px 24px", fontSize: "12px" }}>
                                        L7홍대점<br />
                                        <strong>유지 디자이너</strong>
                                    </div>
                                </div>
                            </div>
                        </ScrollContainer>
                    </div>
                    <div className="Rec_Firstsec_second_content" >
                        <div className="Rec_Firstsec_first_content_first">오직 <strong>오픈멤버<br />디자이너에게만</strong><br />드리는 혜택</div>
                        <img src={process.env.PUBLIC_URL + "/image/request/M_request1_5.png"} alt="lowe request" />
                    </div>

                    <img src={process.env.PUBLIC_URL + "/image/request/M_request1_7.png"} alt="lowe request" />
                    <div style={{ padding: "40px 12px 0px 12px", marginTop: "-5px", textAlign: "center" }}>
                        <div>
                            <div className="Rec_Firstsec_content_method">지원 방법</div>
                            <div className="Rec_Firstsec_content_method_text">가지고 있는 <strong>이력서를 이메일로 제출</strong></div>
                        </div>
                        <div>
                            <a data-tag-index="Recruit_apply" data-tag-cate="email" href="mailto:recruit@bentlespace.com">
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