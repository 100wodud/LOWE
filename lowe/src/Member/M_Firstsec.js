import { Component } from "react";
import "./M_Firstsec.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class M_Firstsec extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Member_first_section">
                <Desktop>
                    <div>
                        <div className="Member_first_title" >
                            <div>익스클루시브 혜택</div>
                        </div>
                        <img src={process.env.PUBLIC_URL + "/image/member/member1_1.png"} alt="lowe Member" />
                        <div className="Member_first_text">
                            <div style={{ fontSize: "1.25vw", fontWeight: "bold", lineHeight: "150%" }}>
                                <div>로위 멤버들을 위한,</div>
                                <div>로위만의 익스클루시브 혜택</div>
                            </div>
                            <div style={{ fontSize: "1.041667vw", fontWeight: "500", lineHeight: "136%" }}>
                                <div>로위 멤버가 되신 것을 진심으로 환영합니다.</div>
                                <div>로위만의 특별한 혜택, 로위 익스클루시브 혜택을 만나보세요.</div>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div>
                        <div className="Member_first_title" >
                            <div style={{ float: "left", height: "12.2666666vw", marginRight: "14.93333vw" }}>
                                <div>익스클루시브</div>
                                <div>혜택</div>
                            </div>
                            <div style={{ fontSize: "4.2666666vw", lineHeight: "6.4vw" }}>
                                <div>로위 디자이너를 위한</div>
                                <div>멤버 혜택</div>
                            </div>
                        </div>
                        <img src={process.env.PUBLIC_URL + "/image/member/member1_1.png"} alt="lowe Member" />
                        <div className="Member_first_text">
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

export default M_Firstsec;

