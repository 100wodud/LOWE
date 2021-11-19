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


class C_Secondsec extends Component {
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
                            <div style={{ fontSize: "1.25vw", fontWeight: "bold" }}>지점관리</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "1.041667vw", fontWeight: "bold" }}>단순 응대를 넘어 디자이너의 부담은 덜고, 고객이 더욱 만족 할 수 있도록 각 지점 전문가가 집중 관리합니다.</div>
                        </div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/image/care/care2_1.png"} alt="로위 지점관리" />

                    <div className="Care_contents">
                        <div style={{ width: "15.625vw" }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "bold", marginBottom: "2.083vw" }}>예약</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>효율적인 온오프라인 예약관리 및</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>분석</div>
                        </div>
                        <div style={{ width: "15.625vw" }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "bold", marginBottom: "2.083vw" }}>고객</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>오프라인 고객 응대 및 다양한</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>채널의 온라인 문의 예약화,</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>긴급 이슈사항 대응</div>
                        </div>
                        <div style={{ width: "15.625vw" }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "bold", marginBottom: "2.083vw" }}>매장</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>미용기기 및 소모품 관리, 매장청결</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>(세탁, 전체적인 시설) 유지</div>
                        </div>
                        <div style={{ width: "15.625vw" }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "bold", marginBottom: "2.083vw" }}>매출향상</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>매출데이터 분석, 디자이너별 </div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "1.041667vw", fontWeight: "500" }}>정기미팅</div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div className="Care_title">
                        <div>
                            <div style={{ fontSize: "4.26666vw", fontWeight: "bold", marginBottom: "5.3333vw" }}>지점관리</div>
                        </div>
                    </div>

                    <img src={process.env.PUBLIC_URL + "/image/care/care2_1.png"} alt="로위 지점관리" />
                    <div className="Care_title">
                        <div style={{ fontSize: "4vw", fontWeight: "bold", marginBottom: "10.9333vw" }}>
                            <div>단순 응대를 넘어 소비자의 높은 만족도를 위해</div>
                            <div>지점 전문가가 집중 관리합니다.</div>
                        </div>
                    </div>
                    <div className="Care_contents">
                        <div style={{ width: "100%" }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "bold", marginBottom: "3.2vw" }}>예약</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500", marginBottom: "7.46666vw" }}>효율적인 온오프라인 예약관리 및 분석</div>
                        </div>
                        <div style={{ width: "100%" }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "bold", marginBottom: "3.2vw" }}>고객</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500" }}>다양한 채널의 온라인 문의 예약화,</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500", marginBottom: "7.46666vw" }}>긴급 이슈사항 대응</div>
                        </div>
                        <div style={{ width: "100%" }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "bold", marginBottom: "3.2vw" }}>매장</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500" }}>미용기기 및 소모품 관리,</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500", marginBottom: "7.46666vw" }}>매장청결(세탁, 전체적인 시설) 유지 </div>
                        </div>
                        <div style={{ width: "100%" }}>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "bold", marginBottom: "3.2vw" }}>매출향상</div>
                            <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "500", marginBottom: "32vw" }}>매출데이터 분석, 디자이너별 정기미팅</div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default C_Secondsec;

