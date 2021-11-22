import { Component } from "react";
import "./C_Firstsec.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class C_Firstsec extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Care_first_section">
                <Desktop>
                <div>
                    <div className="Care_first_title" >
                        <div>로위팀 케어</div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/image/care/care1_1.png"} alt="lowe care" />
                    <div className="Care_first_text">
                        <div style={{fontSize: "1.25vw", fontWeight: "bold", lineHeight: "1.77083vw"}}>
                            <div>디자이너는 미용에만</div>
                            <div>집중할 수 있도록,</div>
                        </div>
                        <div style={{fontSize: "1.041667vw", fontWeight: "500", lineHeight: "1.77083vw"}}>
                            <div>로위팀의 각 분야별 전문가가</div>
                            <div>디자이너분들을 위하여 다양한 전문 서비스를 제공합니다.</div>
                        </div>
                    </div>
                </div>
                </Desktop>
                <Mobile>
                    <div>
                        <div className="Care_first_title" >
                            <div style={{ float: "left", marginBottom: "13.6vw", marginRight: "19.73333vw" }}>
                                <div>로위 케어</div>
                            </div>
                        </div>
                        <img src={process.env.PUBLIC_URL + "/image/care/care1_1.png"} alt="lowe Care" />
                        <div className="Care_first_text">
                            <div>
                                <div>디자이너는 미용에만 집중할 수 있도록, </div>
                                <div>로위팀의 각 분야별 전문 서비스를 제공합니다.</div>
                            </div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default C_Firstsec;

