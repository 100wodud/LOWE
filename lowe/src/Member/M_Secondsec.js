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
                            <div style={{ float: "left", marginRight: "20.3125vw" }}>
                                <div className="Member_second_title">EXCLUSIVE 01</div>
                                <div className="Member_second_title_text">
                                    <div >디자이너</div>
                                    <div>프로필 페이지</div>
                                </div>
                            </div>
                            <div style={{ float: "left" }}>
                                <div className="Member_second_content_title">
                                    <div>각 디자이너의 시술 이미지와 정보를 모아 디자이너의 퍼스널 브랜딩을 위한 </div>
                                    <div>디자이너 별 프로필 페이지를 제공합니다.</div>
                                </div>
                                <div className="Member_second_content_text">
                                    <div>매월 진행하는 이벤트 및 포트폴리오와 함께 개인 SNS링크, 영업시간, </div>
                                    <div>고객 리뷰 등을 한 페이지에서 볼 수 있으며 SNS링크를 통한 많은 유입으로,</div>
                                    <div>보다 더 많은 고객이 찾아올 수 있도록 다양한 정보 제공을 목표로 합니다.</div>
                                </div>
                                <div>
                                    <a href="https://lo-we.kr/reservation/yujine/">
                                        <img src={process.env.PUBLIC_URL + "/image/Nav/ex_moreview.png"} alt="lowe moreview" />
                                    </a>
                                </div>
                            </div>
                            <div>
                                <img className="exclusive_img" src={process.env.PUBLIC_URL + "/image/member/member2_1.png"} alt="lowe exclusive01" />
                            </div>
                        </div>
                        <div className="Member_second_content" >
                            <div style={{ float: "left", marginRight: "7.8125vw" }}>
                                <div className="Member_second_title">EXCLUSIVE 02</div>
                                <div className="Member_second_title_text" style={{ marginBottom: "5.2083333vw" }}>
                                    <div>로위 몰(LOWE mall)</div>
                                </div>
                                <div className="Member_second_content_title">
                                    <div>디자이너의 다양한 시술을 온라인 상품화하여 소비자들이 시술상품에 대한</div>
                                    <div> 자세한 정보를 얻고 비교구매해 이용할 수 있는 오직 로위 디자이너만을 위한</div>
                                    <div> 로위 몰입니다.</div>
                                </div>
                                <div className="Member_second_content_text">
                                    <div>시술이미지, Before&After, 시술 FAQ 등 시술 관련 정보뿐만 아니라</div>
                                    <div>로위에서 제공하는 디자이너의 프라이빗 룸과 1:1 맞춤 서비스 등의 내용으로</div>
                                    <div>소비자에게 구성되어 있으며, 국내 유일의 미용 시술 상세페이지를 제작합니다.</div>
                                </div>
                                <div>
                                    <a href="https://lowehair.kr">
                                        <img src={process.env.PUBLIC_URL + "/image/Nav/ex_moreview.png"} alt="lowe moreview" />
                                    </a>
                                </div>
                            </div>
                            <div style={{ float: "left", paddingTop: "3.2083333vw" }}>
                                <img style={{ width: "16.5vw" }} src={process.env.PUBLIC_URL + "/image/member/member2_2.png"} alt="lowe exclusive01" />
                            </div>
                            <div>
                                <img className="exclusive_img" src={process.env.PUBLIC_URL + "/image/member/member2_3.png"} alt="lowe exclusive01" />
                            </div>
                        </div>

                        <div className="Member_second_content" style={{ marginBottom: "18.75vw" }}>
                            <div style={{ float: "left", marginRight: "16.3125vw" }}>
                                <div className="Member_second_title">EXCLUSIVE 03</div>
                                <div className="Member_second_title_text">
                                    <div>로위 자체</div>
                                    <div>미용재료 발주페이지</div>
                                </div>
                            </div>
                            <div style={{ float: "left" }}>
                                <div className="Member_second_content_title">
                                    <div>디자이너가 원하는 재료를 손쉽게 발주할 수 있는</div>
                                    <div>로위 자체 발주 페이지 입니다.</div>
                                </div>
                                <div className="Member_second_content_text">
                                    <div>3,000개 이상의 제품 데이터베이스가 구축되어 디자이너별 맞춤 제품 추천이 가능하고</div>
                                    <div>주문한 미용재료 내역과 찜 리스트를 확인할 수 있습니다. 또한 제품 리스트에 없는</div>
                                    <div>새로운 제품 요청이 가능하여 발주와 관련된 모든 기능을 확인할 수 있습니다.</div>
                                </div>
                            </div>
                            <div>
                                <img className="exclusive_img" src={process.env.PUBLIC_URL + "/image/member/member2_4.png"} alt="lowe exclusive01" />
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div>
                        <div className="Member_second_content">
                            <div style={{ float: "left", marginRight: "20.3125vw", marginBottom: "15vw", marginTop: "15vw" }}>
                                <div className="Member_second_title">exclusive 01</div>
                                <div className="Member_second_title_text">
                                    <div style={{ fontWeight: "normal" }}>디자이너</div>
                                    <div>프로필 페이지</div>
                                </div>
                            </div>
                            <img className="exclusive_img" src={process.env.PUBLIC_URL + "/image/member/M_member2_1.png"} alt="lowe exclusive01" />
                            <div style={{ float: "left", marginBottom: "19.466vw", marginTop: "17.33333vw", lineHeight: "6.1333vw" }}>
                                <div style={{fontSize: "4vw", fontWeight: "bold"}}>
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
                        <div className="Member_second_content" >
                            <div style={{ float: "left" }}>
                                <div className="Member_second_title">exclusive 02</div>
                                <div className="Member_second_title_text" style={{ marginBottom: "5.2083333vw" }}>
                                    <div>로위 몰(LOWE mall)</div>
                                </div>
                                <div className="Member_second_content_title">
                                    <div>디자이너의 시술을 온라인 상품화하여</div>
                                    <div>다양한 정보를 제공 및 쉽게 예약할 수 있는 </div>
                                    <div>로위 몰입니다.</div>
                                </div>

                                <div>
                                    <img style={{ width: "86.4vw", marginTop: "15vw" }} src={process.env.PUBLIC_URL + "/image/member/M_member2_3.png"} alt="lowe exclusive01" />
                                </div>
                                <div className="Member_second_content_text">
                                    <div>시술에 대한 자세한 내용이 소비자 맞춤으로 구성된</div>
                                    <div>국내 유일의 헤어 시술 상세 페이지를 제작합니다.</div>
                                </div>
                            </div>
                            <div>
                                <img style={{ marginBottom: "31.333vw" }} className="exclusive_img" src={process.env.PUBLIC_URL + "/image/member/M_member2_4.png"} alt="lowe exclusive01" />
                            </div>
                        </div>

                        <div className="Member_second_content">
                            <div style={{ float: "left" }}>
                                <div className="Member_second_title">exclusive 03</div>
                                <div className="Member_second_title_text" style={{ marginBottom: "6.93333vw" }}>
                                    <div>미용재료 발주</div>
                                </div>
                            </div>
                            <div style={{ float: "left", marginBottom: "14vw" }}>
                                <div className="Member_second_content_title" style={{ marginBottom: "3.2vw" }}>
                                    <div>디자이너가 원하는 재료를 편하게 발주 및 요청</div>
                                    <div>할 수 있는 로위 디자이너 전용 발주 페이지입니다.</div>
                                </div>
                                <div className="Member_second_content_text" style={{ margin: 0, }}>
                                    <div>3000개 이상의 제품 데이터베이스가 구축되어</div>
                                    <div>모든 재료를 로위에서 손쉽게 발주할 수 있습니다. </div>
                                </div>
                            </div>
                            <div style={{ marginBottom: "32vw" }}>
                                <img className="exclusive_img" src={process.env.PUBLIC_URL + "/image/member/M_member2_5.png"} alt="lowe exclusive01" />
                            </div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default M_Secondsec;

