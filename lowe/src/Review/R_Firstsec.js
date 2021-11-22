import { Component } from "react";
import "./R_Firstsec.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class R_Firstsec extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Review_first_section">
                <Desktop>
                    <div>
                        <div className="Review_first_title" >
                            <div>디자이너 리뷰</div>
                        </div>
                        <img src={process.env.PUBLIC_URL + "/image/Review/review1_1.png"} alt="lowe Review" />
                        <div className="Review_first_text">
                            <div style={{ fontSize: "1.25vw", fontWeight: "bold", lineHeight: "150%" }}>
                                <div>로위 디자이너가 말하는 </div>
                                <div>로위</div>
                            </div>
                            <div style={{ fontSize: "1.041667vw", fontWeight: "500", lineHeight: "1.77083333vw" }}>
                                <div>먼저 경험한 로위 디자이너가 추천하는 로위, </div>
                                <div>로위를 고민하는 모든 분들에게 전하는 자세한 후기</div>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div>
                        <div className="Review_first_title" >
                            <div style={{ float: "left", height: "12.2666666vw", marginRight: "10.66666vw" }}>디자이너 리뷰</div>
                            <div style={{ fontSize: "4.2666666vw",lineHeight: "6.4vw" }}>
                                <div>로위 디자이너가 말하는</div>
                                <div>“왜 로위일까요?”</div>
                            </div>
                        </div>
                        <img src={process.env.PUBLIC_URL + "/image/Review/review1_1.png"} alt="lowe Review" />
                        <div className="Review_first_text">
                            <div>
                                <div>정상을 향한 디자이너 여정에 </div>
                                <div>로위만의 혜택을 더하세요!</div>
                            </div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default R_Firstsec;

