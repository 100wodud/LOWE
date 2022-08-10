import { Component } from "react";
import "./C_Review.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}

class C_Review extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Care_review">
                <Desktop>
                    <div>
                        <div style={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: "bold", marginBottom: "12px" }}>Contact us</div>
                        <div style={{ fontFamily: "Noto Sans", fontSize: "46px", fontWeight: "normal", marginBottom: "36px" }}>로위에 <span style={{ fontWeight: "bold" }}>지원하세요 </span>
                            
                        </div>
                        <div style={{ fontFamily: "Noto Sans", fontSize: "22px", fontWeight: "normal", marginBottom: "80px" }}>
                            <div>로위는 미용인 여러분들께 항상 열려있습니다.</div>
                            <div>아래 버튼을 클릭하여 신청해 주세요!</div>
                        </div>
                        <div id="Care_review_button">
                            <a href="/requests/recruitment">지원하기</a>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div>
                        <div style={{ fontFamily: "Montserrat", fontSize: "3.4666vw", fontWeight: "bold", marginBottom: "1.1vw" }}>Contact us</div>
                        <div style={{ fontFamily: "Noto Sans", fontSize: "5.33333vw", marginBottom: "3.4666vw" }}>로위에 <strong>지원하세요</strong></div>
                        <div style={{ fontFamily: "Noto Sans", fontSize: "3.7333vw", fontWeight: "normal", marginBottom: "7.4666vw" }}>
                            <div>로위는 미용인 여러분들께 항상 열려있습니다. </div>
                            <div>아래 버튼을 클릭하여 신청해 주세요!</div>
                        </div>
                        <div id="Care_review_button">
                            <a href="/requests/recruitment">지원하기</a>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default C_Review;

