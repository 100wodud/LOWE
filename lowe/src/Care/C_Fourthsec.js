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

class C_Fourthsec extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Care_section">
                <Desktop>
                    {/* <div className="Care_title">
                        <div style={{ width: "16.458333vw" }}>
                            <div style={{ fontSize: "1.25vw", fontWeight: "bold", fontFamily: "Montserrat" }}>3-STEP 디자이너 컨설팅</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "1.041667vw", fontWeight: "bold" }}>매출향상 및 마케팅 성장을 위한 각 분야 전문가와 함께 3단계의 디자이너 컨설팅을 진행합니다.</div>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/image/care/care4_1.png"} alt="로위 디자이너 컨설팅" />

                    <div className="Care_contents">
                        <div style={{ width: "20.83333vw" }}>
                            <div style={{ fontFamily: "Montserrat", fontSize: "0.83333vw", fontWeight: "bold", color: "#7C7C7C", marginBottom: "1.041667vw" }}>STEP 01</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>기간별 매출, 고객동향</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>상세데이터 제공 및 분석</div>
                        </div>
                        <div style={{ width: "20.83333vw" }}>
                            <div style={{ fontFamily: "Montserrat", fontSize: "0.83333vw", fontWeight: "bold", color: "#7C7C7C", marginBottom: "1.041667vw" }}>STEP 02</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>디자이너 SNS 분석 및</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>마케팅 교육</div>
                        </div>
                        <div style={{ width: "20.83333vw" }}>
                            <div style={{ fontFamily: "Montserrat", fontSize: "0.83333vw", fontWeight: "bold", color: "#7C7C7C", marginBottom: "1.041667vw" }}>STEP 03</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>교육 이후 후속관리 및 </div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>피드백</div>
                        </div>
                    </div> */}

<div className="Care_title">
                        <div>
                            <div style={{ fontSize: "42.6666px", fontWeight: "bold", marginBottom: "53.333px" }}>3-STEP 디자이너 컨설팅</div>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/image/care/care4_1.png"} alt="로위 디자이너 컨설팅" />
                    <div className="Care_title">
                        <div style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "109.333px" }}>
                            <div>매출향상 및 마케팅 성장을 위한 </div>
                            <div>각 분야 전문가와 함께 </div>
                            <div>3단계의 디자이너 컨설팅을 진행합니다.</div>
                        </div>
                    </div>
                    <div className="Care_contents">
                        <div style={{ marginBottom: "74.6666px" }}>
                            <div style={{ font: "bold 32px Montserrat", color: "#7C7C7C", marginBottom: "32px" }}>Step 01</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "40px", fontWeight: "500" }}>기간별 매출, 고객동향 상세데이터 제공 및 분석</div>
                        </div>
                        <div style={{ marginBottom: "74.6666px" }}>
                            <div style={{ font: "bold 32px Montserrat", color: "#7C7C7C", marginBottom: "32px" }}>Step 02</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "40px", fontWeight: "500" }}>디자이너 SNS 분석 및 마케팅 교육 </div>
                        </div>
                        <div style={{ marginBottom: "32vw" }}>
                            <div style={{ font: "bold 32px Montserrat", color: "#7C7C7C", marginBottom: "32px" }}>Step 03</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "40px", fontWeight: "500" }}>후속관리 및 피드백</div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div className="Care_title">
                        <div>
                            <div style={{ fontSize: "4.26666vw", fontWeight: "bold", marginBottom: "5.3333vw" }}>3-STEP 디자이너 컨설팅</div>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/image/care/care4_1.png"} alt="로위 디자이너 컨설팅" />
                    <div className="Care_title">
                        <div style={{ fontSize: "4vw", fontWeight: "bold", marginBottom: "10.9333vw" }}>
                            <div>매출향상 및 마케팅 성장을 위한 </div>
                            <div>각 분야 전문가와 함께 </div>
                            <div>3단계의 디자이너 컨설팅을 진행합니다.</div>
                        </div>
                    </div>
                    <div className="Care_contents">
                        <div style={{ marginBottom: "7.46666vw" }}>
                            <div style={{ font: "bold 3.2vw Montserrat", color: "#7C7C7C", marginBottom: "3.2vw" }}>Step 01</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "4vw", fontWeight: "500" }}>기간별 매출, 고객동향 상세데이터 제공 및 분석</div>
                        </div>
                        <div style={{ marginBottom: "7.46666vw" }}>
                            <div style={{ font: "bold 3.2vw Montserrat", color: "#7C7C7C", marginBottom: "3.2vw" }}>Step 02</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "4vw", fontWeight: "500" }}>디자이너 SNS 분석 및 마케팅 교육 </div>
                        </div>
                        <div style={{ marginBottom: "32vw" }}>
                            <div style={{ font: "bold 3.2vw Montserrat", color: "#7C7C7C", marginBottom: "3.2vw" }}>Step 03</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "4vw", fontWeight: "500" }}>후속관리 및 피드백</div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default C_Fourthsec;

