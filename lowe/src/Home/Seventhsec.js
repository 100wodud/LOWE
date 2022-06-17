import { Component } from "react";
import "./Seventhsec.css";
import { useMediaQuery } from 'react-responsive'
// import faq from "../data/FAQ";


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}



class Seventhsec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moreview: 0
        };
    }

    onClickmoreview = (v) => () => {
        let more = this.state.moreview;
        if (more === Number(v)) {
            this.setState({ moreview: 0 })
        } else {
            this.setState({ moreview: Number(v) })
        }
    }


    render() {
        return (
            <section className="Mainpage_Seventh_section">
                <Desktop>
                    <div id="Seventh_section_content">
                        <div data-aos="fade-up" data-aos-duration="3000" >
                            <div className="Seventh_Section_title">
                                More interview
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" >
                            <ul>
                                <li>
                                    <a href="/review/woody">
                                        <div className="Seventh_review_designer">
                                            <div>신촌점 <span style={{ fontWeight: "bold" }}>원장 우디</span></div>
                                        </div>
                                        <div className="Seventh_review_content">로위만의 디자이너 맞춤 시스템이 일에 집중할 수 있도록 만들어줘요</div>

                                        <div className="btn-right">
                                            <img className="circle" src={process.env.PUBLIC_URL + "/image/mainpage/circle.svg"} alt="lowe arrow" />
                                            <img className="arrow" src={process.env.PUBLIC_URL + "/image/mainpage/arrow.svg"} alt="lowe arrow" />
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/review/kijoon">
                                        <div className="Seventh_review_designer">
                                            <div>홍대입구역점 <span style={{ fontWeight: "bold" }}>원장 기준</span></div>
                                        </div>
                                        <div className="Seventh_review_content">로위에서는 눈치 보지 않고, 스스로 모든 걸 결정할 수 있어 너무 좋아요</div>

                                        <div className="btn-right">
                                            <img className="circle" src={process.env.PUBLIC_URL + "/image/mainpage/circle.svg"} alt="lowe arrow" />
                                            <img className="arrow" src={process.env.PUBLIC_URL + "/image/mainpage/arrow.svg"} alt="lowe arrow" />
                                        </div>
                                    </a>
                                </li>
                                <li style={{ borderBottom: "1px solid #DDDDDD" }}>
                                    <a href="/review/filip">
                                        <div className="Seventh_review_designer">
                                            <div>홍대입구역점 <span style={{ fontWeight: "bold" }}>원장 권필립</span></div>
                                        </div>
                                        <div className="Seventh_review_content">디자이너로서 더 발전하고 즐기면서 일할 수 있는 환경이라 생각해요</div>

                                        <div className="btn-right">
                                            <img className="circle" src={process.env.PUBLIC_URL + "/image/mainpage/circle.svg"} alt="lowe arrow" />
                                            <img className="arrow" src={process.env.PUBLIC_URL + "/image/mainpage/arrow.svg"} alt="lowe arrow" />
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div style={{ display: "inline-block", width: "100%", float: "right" }}>
                                <a className="Seventh_review_btn" href="/review/yujine">
                                    디자이너 리뷰 <span style={{ fontWeight: "normal" }}>더보기</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <></>
                    {/* <div id="Seventh_section_content">
                        <div data-aos="fade-up" data-aos-duration="3000" >
                            <div className="Seventh_Section_title">
                                FAQ
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" >
                            <ul>
                                {faq.map((e) => (
                                    <li key={e.id} className="Seventh_faq_li" onClick={this.onClickmoreview(e.id)}>
                                        <div className="Seventh_faq_title">
                                            <div>{e.title}</div>
                                            <div style={{margin: "auto 0"}}>
                                                <img style={{verticalAlign: "middle"}} src={process.env.PUBLIC_URL + "/image/mainpage/M_Down.svg"} alt="lowe arrow" />
                                            </div>
                                        </div>
                                        {this.state.moreview === e.id ?
                                            <div className="Seventh_faq_content">{e.content}</div> : null
                                        }
                                    </li>
                                ))
                                }
                            </ul>
                        </div>
                    </div> */}
                </Mobile>
            </section>
        )
    }
}

export default Seventhsec;