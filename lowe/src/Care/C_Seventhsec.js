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


class C_Seventhsec extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Care_section" >
                <Desktop>
                    <div className="Care_title">
                        <div style={{ width: "16.458333vw" }}>
                            <div style={{ fontSize: "1.25vw", fontWeight: "bold", fontFamily: "Noto Sans" }}>전문 미용교육지원</div>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/image/care/care7_1.png"} alt="로위 전문 미용교육지원" />

                    <div style={{ marginBottom: "18.8541666vw" }} className="Care_contents">
                        <div style={{ textAlign: "center", width: "62.5vw" }}>
                            <div style={{ marginLeft: "12.5vw",fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500", textAlign: "left" }}>개인의 성장과 기술개발을 위한 외부 미용교육 및 내부 미용교육으로 서로의 기술을 공유하고 배우며 소통할 수 있는<br />기회를 제공/지원합니다.</div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div className="Care_title">
                        <div>
                            <div style={{ fontSize: "4.26666vw", fontWeight: "bold", marginBottom: "5.3333vw" }}>전문 미용교육지원</div>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/image/care/care7_1.png"} alt="로위 전문 미용교육지원" />

                    <div style={{ marginBottom: "32vw" }} className="Care_contents">
                        <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500",lineHeight:"150%" }}>개인의 성장과 기술개발을 위한 외부 미용교육 및</div>
                        <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500",lineHeight:"150%" }}>내부 미용교육으로 서로의 기술을 공유하고 배우며 </div>
                        <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500", marginBottom: "7.46666vw",lineHeight:"150%" }}>소통할 수 있는 기회를 제공/지원합니다.</div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default C_Seventhsec;

