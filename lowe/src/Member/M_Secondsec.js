import { Component } from "react";
import "./M_Secondsec.css";
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class M_Secondsec extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Member_second_section">
                <Desktop>
                    <div>
                        <div className="Member_second_content">
                            <div style={{ float: "left", marginRight: "18.9vw" }}>
                                <div className="Member_second_title">BENEFIT + 01</div>
                                <div className="Member_second_title_text">
                                    <div >로위</div>
                                    <div>웹사이트</div>
                                </div>
                            </div>
                            <div style={{ float: "left", marginBottom: "4.6875vw" }}>
                                <div className="Member_second_content_title">
                                    <div>디자이너의 시술을 온라인 상품화하여 다양한 정보를 제공 및 쉽게 예약할 수 있는</div>
                                    <div>헤어 커머스 페이지입니다.</div>
                                </div>
                                <div className="Member_second_content_text">
                                    <div>시술에 대한 자세한 내용이 소비자 맞춤으로 구성된 국내 유일의 헤어 시술 상세 페이지를</div>
                                    <div>제작합니다.</div>
                                </div>
                                <div>
                                    <a data-tag-index="Benefit" data-tag-cate="site" href="https://lowehair.kr">
                                        <img src={process.env.PUBLIC_URL + "/image/Nav/ex_moreview.png"} alt="lowe moreview" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <img className="exclusive_img" src={process.env.PUBLIC_URL + "/image/member/member2_1.png"} alt="lowe exclusive01" />
                            </div>
                        </div>

                        <div className="Member_second_content">
                            <div style={{ float: "left", marginRight: "20.3125vw" }}>
                                <div className="Member_second_title">BENEFIT + 02</div>
                                <div className="Member_second_title_text">
                                    <div style={{fontWeight: "400"}}>디자이너</div>
                                    <div>프로필 페이지</div>
                                </div>
                            </div>
                            <div style={{ float: "left", marginBottom: "4.6875vw" }}>
                                <div className="Member_second_content_title">
                                    <div>디자이너의 퍼스널 브랜딩을 위한 포트폴리오용 프로필 페이지를 제공합니다.</div>
                                </div>
                                <div className="Member_second_content_text">
                                    <div>프로필 페이지는 고객이 디자이너와 시술에 보다 더 많은 정보를 편히 얻고, </div>
                                    <div>예약을 쉽게 할 수 있도록 합니다.</div>
                                </div>
                                <div>
                                    <a data-tag-index="Benefit" data-tag-cate="profile" href="https://lowehair.kr/designers">
                                        <img src={process.env.PUBLIC_URL + "/image/Nav/ex_moreview.png"} alt="lowe moreview" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <img className="exclusive_img" src={process.env.PUBLIC_URL + "/image/member/member2_3.png"} alt="lowe exclusive01" />
                            </div>
                        </div>
</div>
                </Desktop>
                <Mobile>
                    <div>
                        <div className="Member_second_content" style={{ marginTop: "15vw" }}>
                            <div style={{ float: "left" }}>
                                <div className="Member_second_title">Benefit + 01</div>
                                <div className="Member_second_title_text" style={{ marginBottom: "5.2083333vw" }}>
                                    <div>로위 웹사이트</div>
                                </div>
                                <div className="Member_second_content_title">
                                    <div>디자이너의 시술을 온라인 상품화하여</div>
                                    <div>다양한 정보를 제공 및 쉽게 예약할 수 있는</div>
                                    <div>헤어 커머스 페이지입니다.</div>
                                </div>
                                <div >
                                    <a data-tag-index="Benefit" data-tag-cate="site" href="https://lowehair.kr" >
                                        <img style={{width: "20.759vw", marginTop: "20px"}} src={process.env.PUBLIC_URL + "/image/Nav/ex_moreview.png"} alt="lowe moreview" />
                                    </a>
                                </div>

                                <div>
                                    <img style={{ width: "100%", marginTop: "15vw" }} src={process.env.PUBLIC_URL + "/image/member/M_member2_3.png"} alt="lowe exclusive01" />
                                </div>
                                <div className="Member_second_content_text" style={{marginTop: "16vw"}}>
                                    <div>시술에 대한 자세한 내용이 소비자 맞춤으로 구성된</div>
                                    <div>국내 유일의 헤어 시술 상세 페이지를 제작합니다.</div>
                                </div>
                            </div>
                            <div>
                                <img style={{ marginBottom: "31.333vw" }} className="exclusive_img" src={process.env.PUBLIC_URL + "/image/member/M_member2_4.png"} alt="lowe exclusive01" />
                            </div>
                        </div>

                        <div className="Member_second_content">
                            <div style={{ float: "left", marginRight: "20.3125vw", marginBottom: "15vw"}}>
                                <div className="Member_second_title">Benefit + 02</div>
                                <div className="Member_second_title_text">
                                    <div style={{ fontWeight: "normal",lineHeight: "150%" }}>디자이너</div>
                                    <div>프로필 페이지</div>
                                </div>
                            </div>
                            <img className="exclusive_img" src={process.env.PUBLIC_URL + "/image/member/M_member2_1.png"} alt="lowe exclusive01" />
                            <div style={{ float: "left", marginBottom: "19.466vw", marginTop: "17.33333vw", lineHeight: "6.1333vw" }}>
                                <div  className="Member_second_content_title" style={{fontSize: "4vw", fontWeight: "bold"}}>
                                    <div>디자이너의 퍼스널 브랜딩을 위한 </div>
                                    <div>포트폴리오용 프로필 페이지를 제공합니다.</div>
                                </div>
                            </div>
                            <img className="exclusive_img" src={process.env.PUBLIC_URL + "/image/member/M_member2_2.png"} alt="lowe exclusive01" />
                            <div style={{ float: "left", marginBottom: "37.333vw" }}>
                                <div className="Member_second_content_text">
                                    <div>프로필 페이지는 고객이 디자이너와 시술에</div>
                                    <div>보다 더 많은 정보를 편히 얻고, 예약을 쉽게 </div>
                                    <div>할 수 있도록 합니다.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default M_Secondsec;

