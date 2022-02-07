import { Component } from "react";
import "./M_Thirdsec.css";
import ScrollContainer from 'react-indiana-drag-scroll'
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}



class M_Thirdsec extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Member_Third_section">
                <Desktop>
                <div>
                    <div className="Member_Third_content" style={{ marginBottom: "12.23958vw" }}>
                        <div style={{ float: "left", marginRight: "5.20833vw" }}>
                            <div className="Member_Third_title">CARE + 04</div>
                            <div className="Member_Third_title_text">
                                <div >천만클럽</div>
                            </div>
                        </div>
                        <div style={{ float: "left" }}>
                            <div className="Member_Third_content_title" style={{marginTop: "2.1vw"}}>
                                <div>디자이너와 고객, 1:1 시술이 이루어지는 만큼, 디자이너 1명의 1,000만원 이상 월 매출 달성은 매우 어렵고도 뜻깊은 일입니다.</div>
                                <div>로위는 이렇게 달성한 목표를 높이 평가드리며 그간의 노력과 성과를 로위 어워즈 #천만키트 로 매월 축하드립니다.</div>
                            </div>
                        </div>
                        <ScrollContainer className="Member_wrap">
                            <div>
                                <img className="Third_section_img" src={process.env.PUBLIC_URL + "/image/member/member3_1.png"} alt="lowe exclusive01" />
                            </div>
                        </ScrollContainer>
                    </div>
                </div>
                </Desktop>
                <Mobile>
                <div>
                    <div className="Member_Third_content" style={{ marginBottom: "12.23958vw" }}>
                        <div style={{ float: "left", marginRight: "5.20833vw" }}>
                            <div className="Member_Third_title">CARE + 04</div>
                            <div className="Member_Third_title_text" style={{marginBottom: "6.93333vw"}}>
                                <div >천만클럽</div>
                            </div>
                        </div>
                        <div style={{ float: "left" }}>
                            <div className="Member_Third_content_title" style={{marginBottom: "3.2vw"}}>
                                <div>1:1시술이 이루어지는 만큼 디자이너의 노력과 성과를</div>
                                <div>높이 평가 드리고자 매월 #천만키트를 선물 드립니다.</div>
                            </div>
                            <div className="Member_Third_content_text">
                                <div>1300 BLACK / 1200 GOLD / 1000 SILVER</div>
                            </div>
                        </div>
                        <ScrollContainer className="Member_wrap">
                            <div >
                                <img className="Third_section_img" src={process.env.PUBLIC_URL + "/image/member/member3_1.png"} alt="lowe exclusive01" />
                            </div>
                        </ScrollContainer>
                    </div>
                </div>

                </Mobile>
            </section>
        )
    }
}

export default M_Thirdsec;

