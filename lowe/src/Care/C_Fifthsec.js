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

class C_Fifthsec extends Component {
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
                            <div style={{ fontSize: "1.25vw", fontWeight: "bold", fontFamily: "Noto Sans" }}>세무/회계 지원</div>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/image/care/care5_1.png"} alt="로위 세무/회계 지원" />

                    <div className="Care_contents">
                        <div style={{ width: "20.83333vw" }}>
                            <div style={{ height: "1.6vw", fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "bold" }}>보다 자세한</div>
                            <div style={{ height: "1.6vw", fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "bold", marginBottom: "1.041667vw" }}>매출명세서</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>자세한 매출 내역과 매출에서 발생하는</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>각종 수수료와 세금 등을 정리하여 매출 실수령액</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>확인 및 지급받게 됩니다.</div>
                        </div>
                        <div style={{ width: "20.83333vw" }}>
                            <div style={{ height: "1.6vw", fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "bold" }}>어려운 세무 /</div>
                            <div style={{ height: "1.6vw", fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "bold", marginBottom: "1.041667vw" }}>행정 업무 OUT</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>종합 소득세, 연말정산 등과 같은 세무적인 지원을</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>제공합니다.</div>
                        </div>
                        <div style={{ width: "20.83333vw" }}>
                            <div style={{ height: "3.2vw", fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "bold", marginBottom: "1.041667vw" }}>지원금 안내</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>디자이너에 해당되는 정부지원금에 대한</div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>정보안내 및 신청을 도와드립니다. </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div className="Care_title">
                        <div>
                            <div style={{ fontSize: "4.26666vw", fontWeight: "bold", marginBottom: "5.3333vw" }}>세무/회계 지원</div>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/image/care/care5_1.png"} alt="로위 세무/회계 지원" />

                    <div className="Care_contents">
                        <div style={{ width: "100%" }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "bold", marginBottom: "3.2vw" }}>어려운 세무/행정 업무 OUT</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500"}}>종합 소득세, 연말정산 등과 같은 세무적인 지원을</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500", marginBottom: "7.46666vw"  }}>제공합니다.</div>
                        </div>
                        <div style={{ width: "100%" , marginBottom: "32vw" }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "bold", marginBottom: "3.2vw" }}>지원금 안내</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500" }}>디자이너와 관련 정부 지원금에 대한 정보 안내 및</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500"}}>신청을 도와드립니다.</div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default C_Fifthsec;

