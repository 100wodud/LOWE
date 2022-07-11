import { Component } from "react";
import "./Rec_Firstsec.css"

class Ent_Firstsec extends Component {
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
                    <div className="Rec_Firstsec_first_content_second"><strong>입점형</strong>은 디자이너가 주체가되어<br />나만의 샵을 자율적으로 운영 할 수 있는<br />개별 형태의 공유미용실 시스템입니다.</div>
                    <img src={process.env.PUBLIC_URL + "/image/request/M_request1_1_1.png"} alt="lowe request" />
                </div>
                <img src={process.env.PUBLIC_URL + "/image/request/M_request1_2_1.png"} alt="lowe request" />
                <div className="Rec_Firstsec_second_content">
                    <div className="Rec_Firstsec_first_content_first">입점형 디자이너<br /><strong style={{fontFamily: "Montserrat"}}>Key Point 3</strong></div>
                    <div className="Rec_Firstsec_first_content_first" style={{marginBottom: "16px"}}><strong>높은 인센티브</strong></div>
                    <div className="Rec_Firstsec_second_content_second"><strong>최대 42~60%로</strong> 일한만큼 보상받는<br />로위만의 <strong>합리적인 인센티브</strong></div>
                    <img style={{marginBottom: "40px"}} src={process.env.PUBLIC_URL + "/image/request/M_request1_3.png"} alt="lowe request" />
                    <div className="Rec_Firstsec_first_content_first" style={{marginBottom: "16px", marginTop: "40px"}}><strong>자율 출퇴근제</strong></div>
                    <div className="Rec_Firstsec_second_content_second">이제부터 내가 내 삶의 주체가 될 수 있도록,<br /><strong>원하는 스케줄로 자유롭게 근무하세요</strong></div>
                    <img style={{marginBottom: "40px"}} src={process.env.PUBLIC_URL + "/image/request/M_request1_3_2.png"} alt="lowe request" />
                    <div className="Rec_Firstsec_first_content_first" style={{marginBottom: "16px", marginTop: "40px", lineHeight: "90%"}}><strong>프라이빗한 공간</strong><br /><span style={{font: "400 16px 'Noto Sans'", color: "#9c9c9c"}}>(일부 지점 제외)</span></div>
                    <div className="Rec_Firstsec_second_content_second">고객이 더 만족하는 프라이빗룸으로<br /><strong>나만의 미용공간을 가져보세요</strong></div>
                    <img src={process.env.PUBLIC_URL + "/image/request/M_request1_4.png"} alt="lowe request" />
                </div>
                <div className="Rec_Firstsec_second_content">
                    <div className="Rec_Firstsec_first_content_first"><strong>입점형 디자이너의<br />로위 후기</strong><br />“왜 로위일까요?” </div>
                    <div className="Rec_Firstsec_second_content_second" style={{color: "#333333", marginBottom: "20px"}}><strong>“제 스케줄을 자유롭게 조절하면서<br />일한 만큼 가져갈 수 있어 제일 만족해요”</strong></div>
                    <img src={process.env.PUBLIC_URL + "/image/request/M_request1_6.png"} alt="lowe request" />
                    <div className="Rec_Firstsec_third_content_div">
                        <div className="Rec_Firstsec_third_content_font">합정점 <strong>원장 해리</strong></div>
                        <div style={{width:"82px"}}><a href="/review/hyeri"><img src={process.env.PUBLIC_URL + "/image/request/M_request_moreview.png"} alt="lowe request" /></a></div>
                    </div>
                </div>
                <div className="Rec_Firstsec_second_content" >
                    <div className="Rec_Firstsec_first_content_first">오직 <strong>오픈멤버<br />디자이너에게만</strong><br />드리는 혜택</div>
                    <img src={process.env.PUBLIC_URL + "/image/request/M_request1_5_1.png"} alt="lowe request" />
                </div>
          </div>

      </section>
    )
  }
}

export default Ent_Firstsec;