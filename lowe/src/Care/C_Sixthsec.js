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

class C_Sixthsec extends Component {
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
                        <div style={{ fontSize: "1.25vw", fontWeight: "bold", fontFamily: "Noto Sans" }}>유통서비스</div>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + "/image/care/care6_1.png"} alt="로위 유통서비스" />

                <div className="Care_contents">
                    <div style={{ width: "20.83333vw", lineHeight: "150%"}}>
                        <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "bold", marginBottom: "1.041667vw" }}>합리적인 금액의 제품 추천</div>
                        <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>로위 공식 유통사를 통한 정품 미용재료를</div>
                        <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>합리적인 금액대로 추천드립니다.</div>
                    </div>
                    <div style={{ width: "20.83333vw", lineHeight: "150%"}}>
                        <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "bold", marginBottom: "1.041667vw" }}>재료 분석데이터 제공</div>
                        <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>3,000개의 제품 데이터베이스를 바탕으로</div>
                        <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>로위 디자이너별 미용재료 구매값의</div>
                        <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>평균 데이터를 분석하고, 시그니처 시술별</div>
                        <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>구매 가이드를 제공합니다.</div>
                    </div>
                    <div style={{ width: "20.83333vw", lineHeight: "150%"}}>
                        <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "bold", marginBottom: "1.041667vw" }}>불출 및 재고관리</div>
                        <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>현장과 전산, 이중 체크 방식의 검수로</div>
                        <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>확실한 불출과 꼼꼼한 재고관리가 이루어</div>
                        <div style={{ fontFamily: "Montserrat", fontSize: "1.041667vw", fontWeight: "500" }}>지고 있습니다.</div>
                    </div>
                </div>
                </Desktop>
                <Mobile>
                <div className="Care_title">
                    <div>
                    <div style={{ fontSize: "4.26666vw", fontWeight: "bold", marginBottom: "5.3333vw" }}>유통서비스</div>
                    </div>
                </div>
                <img src={process.env.PUBLIC_URL + "/image/care/care6_1.png"} alt="유통서비스" />

                <div className="Care_contents">
                        <div style={{ width: "100%" }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "bold", marginBottom: "3.2vw" }}>합리적인 금액의 제품 추천</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500" }}>로위 공식 유통사를 통한 정품 미용재료를 </div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500", marginBottom: "7.46666vw" }}>합리적인 금액대로 추천드립니다.</div>
                        </div>
                        <div style={{ width: "100%" }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "bold", marginBottom: "3.2vw" }}>재료 분석데이터 제공</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500" }}>3,000개 이상의 제품 DB를 바탕으로</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500" }}>디자이너별 구매 값의 평균 데이터를 분석하고,</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500", marginBottom: "7.46666vw" }}>재료 구매 가이드를 제공합니다.</div>
                        </div>
                        <div style={{ width: "100%", marginBottom: "32vw"  }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "bold", marginBottom: "3.2vw" }}>불출 및 재고관리</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500" }}>현장과 전산, 이중 체크 방식의 검수로</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500" }}>확실한 불출과 꼼꼼한 재고관리가 이루어 </div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500" }}>지고 있습니다.</div>
                        </div>
                    </div>                    
                </Mobile>
            </section>
        )
    }
}

export default C_Sixthsec;

