import { Component } from "react";
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class C_Thirdsec extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Care_section">
                <Desktop>
                    <div className="Care_title">
                        <div style={{ width: "16.458333vw" }}>
                            <div style={{ fontSize: "1.25vw", fontWeight: "bold" }}>마케팅/디자인 서비스</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "1.041667vw", fontWeight: "bold" }}>디자이너의 퍼스널 브랜딩을 목표로 마케팅/디자인을 지원해드립니다. <span style={{color: "#a2a2a2"}}>*사용료 미포함, 무료지원사항</span></div>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/image/care/care3_1.png"} alt="로위 마케팅/디자인 서비스" />

                    <div className="Care_contents" style={{marginLeft: "12.5vw", marginBottom: "20vw"}}>
                        <div style={{ width: "23.65625vw" }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "bold", marginBottom: "1.041666vw", color: "#7c7c7c" }}>01</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>디자이너 브랜딩과 매출 향상을 목표로</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>마케팅/디자인팀의 다양한 마케팅을 지원합니다.</div>
                        </div>
                        <div style={{ width: "23.65625vw" }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "bold", marginBottom: "1.041666vw", color: "#7c7c7c" }}>02</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>프로모션 디자인, 메뉴판, 선불권, 쿠폰 등 다양한</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>관련 디자인 제작을 지원합니다.</div>
                        </div>
                        </div>
                </Desktop>
                <Mobile>
                    <div className="Care_title">
                        <div>
                            <div style={{ fontSize: "4.26666vw", fontWeight: "bold", marginBottom: "5.3333vw" }}>마케팅/디자인 서비스</div>
                        </div>
                    </div>

                    <img src={process.env.PUBLIC_URL + "/image/care/care3_1.png"} alt="로위 마케팅/디자인 서비스" />
                    <div className="Care_title">
                        <div style={{ fontSize: "4vw", fontWeight: "bold", marginBottom: "10.9333vw" }}>
                            <div>디자이너의 퍼스널 브랜딩을 목표로 마케팅/디자인을</div>
                            <div>지원해드립니다.</div>
                            <div style={{fontSize: "3.2vw", lineHeight: "150%"}}>*사용료 미포함, 무료지원사항</div>
                        </div>
                    </div>

                    <div className="Care_contents">
                        <div style={{ marginBottom: "7.46666vw" }}>
                            <div style={{ font: "bold 3.2vw Montserrat", color: "#7C7C7C", marginBottom: "3.2vw" }}>01</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "3.8vw", fontWeight: "500", lineHeight: "150%" }}>디자이너 브랜딩과 매출 향상을 목표로 마케팅/디자인팀</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "3.8vw", fontWeight: "500", lineHeight: "150%" }}>의 다양한 마케팅을 지원합니다.</div>
                        </div>
                        <div style={{ marginBottom: "7.46666vw" }}>
                            <div style={{ font: "bold 3.2vw Montserrat", color: "#7C7C7C", marginBottom: "3.2vw" }}>02</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "3.8vw", fontWeight: "500", lineHeight: "150%" }}>프로모션 디자인, 메뉴판, 선불권, 쿠폰 등 다양한</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "3.8vw", fontWeight: "500", lineHeight: "150%" }}>관련 디자인 제작을 지원합니다.</div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default C_Thirdsec;

