import { Component } from "react";
import "./I_Firstsec.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class I_Firstsec extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Info_first_section">
                <Desktop>
                    <div>
                        <div className="Info_first_title" >
                            <div>지점현황</div>
                        </div>
                        <img src={process.env.PUBLIC_URL + "/image/info/info1_1.png"} alt="lowe Info" />
                        <div className="Info_first_text">
                            <div style={{ fontSize: "1.25vw", fontWeight: "bold", lineHeight: "1.875vw" }}>
                                <div>나만의 프리미엄 매장,</div>
                                <div>나만의 미용 공간</div>
                            </div>
                            <div style={{ fontSize: "1.041667vw", fontWeight: "500", lineHeight: "1.77083vw" }}>
                                <div>나와 고객이 먼저인 나만의 미용공간,</div>
                                <div>로위의 공유형, 살롱형 미용실 전 지점의 위치와 소개를 한눈에 확인하세요.</div>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div>
                        <div className="Info_first_title" >
                            <div style={{ float: "left", height: "12.2666666vw", marginRight: "21.6vw" }}>지점현황</div>
                            <div style={{ fontSize: "4.2666666vw" }}>
                                <div>나만의 프리미엄 매장, </div>
                                <div>나만의 미용 공간</div>
                            </div>
                        </div>
                        <img src={process.env.PUBLIC_URL + "/image/info/info1_1.png"} alt="lowe Info" />
                        <div className="Info_first_text">
                            <div>
                                <div>로위의 공유형, 살롱형 미용실</div>
                                <div>전 지점의 위치와 소개를 한눈에 확인하세요.</div>
                            </div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default I_Firstsec;

