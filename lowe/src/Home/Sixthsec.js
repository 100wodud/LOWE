import { Component } from "react";
import "./Sixthsec.css";
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 999 })
  return isMobile ? children : null
}



class Sixthsec extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <section className="Mainpage_Sixth_section">
        <Desktop>
          <div id="Sixth_section_content">
            <div  data-aos="fade-up" data-aos-duration="3000" >
              <div className="Sixth_Section_title">
                INTERVIEW
              </div>

              <div id="Sixth_Section_title_text">
                <div className="Sixth_Section_title_text">
                  로위 디자이너가 말하는
                </div>
                <div className="Sixth_Section_title_text_bold">
                  "왜 로위일까요?"
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" style={{ width: "100%", float: "left" }}>
              <div className="Sixth_Section_interview" style={{ paddingTop: "9.16667vw" }}>
                <div className="Sixth_Section_interview_text">
                  <p>로위는 저를 위해주고,</p>
                  <p>저는 온전히 고객에게만</p>
                  <p>집중할 수 있어요</p>
                </div>
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main6_1.png"} style={{ width: "25.52vw" }} alt="소담 인터뷰">
                </img>
                <div style={{ marginTop: "1.3vw" }}>
                  <div style={{ float: "left", fontSize: "1.354167vw", fontFamily: "Noto Sans" }}>
                    홍대입구역점 <span style={{ fontWeight: "bold" }}>원장 소담</span>
                  </div>
                  <a className="More_view" href="https://www.youtube.com/watch?v=judoHObdRVM&t=294s">
                    <img style={{ width: "5.8333vw" }} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe moreview" />
                  </a>
                </div>
              </div>
              <div className="Sixth_Section_interview" style={{ float: "right" }}>
                <div className="Sixth_Section_interview_text">
                  <p>제 룸에서 제 고객님만</p>
                  <p>케어할 수 있어</p>
                  <p>고객님이 더 좋아해주세요</p>
                </div>
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main6_2.png"} style={{ width: "30.729vw" }} alt="도위 인터뷰" >
                </img>
                <div style={{ marginTop: "1.3vw" }}>
                  <div style={{ float: "left", fontSize: "1.354167vw", fontFamily: "Noto Sans" }}>
                    신촌점 <span style={{ fontWeight: "bold" }}>원장 도위</span>
                  </div>
                  <a className="More_view" href="https://youtube.com/watch?v=zghzU0qseJ8">
                    <img style={{ width: "5.8333vw" }} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe moreview" />
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" style={{ width: "100%", float: "left" }}>
              <div className="Sixth_Section_interview" style={{ paddingTop: "9.16667vw" }}>
                <div className="Sixth_Section_interview_text">
                  <p>'내가 주체가 되는 삶' </p>
                  <p>로위에서 </p>
                  <p>할 수 있었죠</p>
                </div>
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main6_3.png"} style={{ width: "30.729vw" }} alt="다원 인터뷰" >
                </img>
                <div style={{ marginTop: "1.3vw" }}>
                  <div style={{ float: "left", fontSize: "1.354167vw", fontFamily: "Noto Sans" }}>
                    홍대입구역점 <span style={{ fontWeight: "bold" }}>원장 다원</span>
                  </div>
                  <a className="More_view" href="https://www.youtube.com/watch?v=UOziPrxYN68&t=3s">
                    <img style={{ width: "5.8333vw" }} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe moreview" />
                  </a>
                </div>
              </div>
              <div className="Sixth_Section_interview" style={{ float: "right" }}>
                <div className="Sixth_Section_interview_text">
                  <p>제 스케줄을 자유롭게 조절하면서</p>
                  <p>일한 만큼 가져갈 수 있어</p>
                  <p>제일 만족해요</p>
                </div>
                <img src={process.env.PUBLIC_URL + "/image/mainpage/main6_4.png"} style={{ width: "25.52vw" }} alt="해리 인터뷰" >
                </img>
                <div style={{ marginTop: "1.3vw" }}>
                  <div style={{ float: "left", fontSize: "1.354167vw", fontFamily: "Noto Sans" }}>
                    합정점 <span style={{ fontWeight: "bold" }}>원장 서해리</span>
                  </div>
                  <a className="More_view" href="https://www.youtube.com/watch?v=em7FoOXS8zU">
                    <img style={{ width: "5.8333vw" }} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe moreview" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Desktop>
        <Mobile>
          <div id="Sixth_section_content">
            <div  data-aos="fade-up" data-aos-duration="3000" >
              <div className="Sixth_Section_title">
                INTERVIEW
              </div>

              <div id="Sixth_Section_title_text">
                <div className="Sixth_Section_title_text">
                  로위 디자이너가 말하는
                </div>
                <div className="Sixth_Section_title_text_bold">
                  "왜 로위일까요?"
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000"  className="Sixth_Section_interview">
              <div className="Sixth_Section_interview_text">
                <p>“제 룸에서 제 고객님만 케어할 수 있어</p>
                <p>저보다 고객님이 더 좋아해주세요”</p>
              </div>
              <img src={process.env.PUBLIC_URL + "/image/mainpage/main6_2.png"} style={{ width: "100%" }} alt="도위 인터뷰" >
              </img>
              <div style={{ marginTop: "4.2666vw", marginBottom: "35.3vw" }}>
                <div style={{ float: "left", fontSize: "4.26666vw", fontFamily: "Noto Sans" }}>
                  신촌점 <span style={{ fontWeight: "bold" }}>원장 도위</span>
                </div>
                <a className="More_view" href="https://youtube.com/watch?v=zghzU0qseJ8">
                  <img style={{ width: "21.8666vw", marginTop: "-1vw" }} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe moreview" />
                </a>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="3000"  className="Sixth_Section_interview">
              <div className="Sixth_Section_interview_text">
                <p>“로위는 저를 위해주고, </p>
                <p>저는 온전히 고객에게만 집중할 수 있어요”</p>
              </div>
              <img src={process.env.PUBLIC_URL + "/image/mainpage/main6_1.png"} style={{ width: "100%" }} alt="도위 인터뷰" >
              </img>
              <div style={{ marginTop: "4.2666vw", marginBottom: "35.3vw" }}>
                <div style={{ float: "left", fontSize: "4.26666vw", fontFamily: "Noto Sans" }}>
                  홍대입구역점 <span style={{ fontWeight: "bold" }}>원장 소담</span>
                </div>
                <a className="More_view" href="https://www.youtube.com/watch?v=judoHObdRVM&t=294s">
                  <img style={{ width: "21.8666vw", marginTop: "-1vw" }} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe moreview" />
                </a>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000"  className="Sixth_Section_interview">
              <div className="Sixth_Section_interview_text">
                <p>“제 스케줄을 자유롭게 조절하면서  </p>
                <p>일한 만큼 가져갈 수 있어 제일 만족해요”</p>
              </div>
              <img src={process.env.PUBLIC_URL + "/image/mainpage/main6_4.png"} style={{ width: "100%" }} alt="도위 인터뷰" >
              </img>
              <div style={{ marginTop: "4.2666vw", marginBottom: "35.3vw" }}>
                <div style={{ float: "left", fontSize: "4.26666vw", fontFamily: "Noto Sans" }}>
                  합정점 <span style={{ fontWeight: "bold" }}>원장 서해리</span>
                </div>
                <a className="More_view" href="https://www.youtube.com/watch?v=em7FoOXS8zU">
                  <img style={{ width: "21.8666vw", marginTop: "-1vw" }} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe moreview" />
                </a>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000"  className="Sixth_Section_interview">
              <div className="Sixth_Section_interview_text">
                <p>“&lt; 내가 주체가 되는 삶&gt;</p>
                <p>로위에서 할 수 있었죠”</p>
              </div>
              <img src={process.env.PUBLIC_URL + "/image/mainpage/main6_3.png"} style={{ width: "100%" }} alt="도위 인터뷰" >
              </img>
              <div style={{ marginTop: "4.2666vw", marginBottom: "35.3vw" }}>
                <div style={{ float: "left", fontSize: "4.26666vw", fontFamily: "Noto Sans" }}>
                  홍대입구역점 <span style={{ fontWeight: "bold" }}>원장 다원</span>
                </div>
                <a className="More_view" href="https://www.youtube.com/watch?v=UOziPrxYN68&t=3s">
                  <img style={{ width: "21.8666vw", marginTop: "-1vw" }} src={process.env.PUBLIC_URL + "/image/Nav/moreview.png"} alt="lowe moreview" />
                </a>
              </div>
            </div>
          </div>
        </Mobile>
      </section>
    )
  }
}

export default Sixthsec;





