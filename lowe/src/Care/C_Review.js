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
                    <div style={{ fontFamily: "Noto Sans", fontSize: "22px", fontWeight: "normal", marginBottom: "20px" }}>
                        <div>로위 디자이너를 가장 잘 아는 로위팀이 제공하는 로위 케어,</div>
                    </div>
                    <div style={{ fontFamily: "Noto Sans", fontSize: "32px", fontWeight: "normal", marginBottom: "45px" }}>
                        직접 경험한 <span style={{ fontWeight: "bold" }}>로위 디자이너의 솔직한 리뷰</span>
                        를 들어보세요!
                    </div>
                    <div id="Care_review_button">
                        <a href="/review/yujine">리뷰 보러가기</a>
                    </div>
                </div>
                </Desktop>
                <Mobile>
                <div>
                    <div style={{ fontFamily: "Noto Sans", fontSize: "5.86666vw", fontWeight: "normal", width: "70.6vw", margin: "auto", marginBottom: "3.2vw" ,lineHeight: "8.5vw" }}>
                        직접 경험한 <span style={{ fontWeight: "bold" }}>로위 디자이너의 솔직한 리뷰</span>
                        를 들어보세요!
                    </div>
                    <div style={{ fontFamily: "Noto Sans", fontSize: "4vw", fontWeight: "normal", width: "70.86vw", margin: "auto", marginBottom: "8.8vw",lineHeight: "5.8444vw" }}>
                        <div>로위 디자이너를 가장 잘 아는</div>
                        <div>로위팀이 제공하는 로위 케어,</div>
                    </div>
                    <div id="Care_review_button">
                        <a href="/review/yujine">리뷰 보러가기</a>
                    </div>
                </div>
                </Mobile>
            </section>
        )
    }
}

export default C_Review;

