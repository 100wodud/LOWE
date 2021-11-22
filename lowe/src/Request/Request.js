import { Component } from "react";
import axios from "axios";
import Modal from "./R_Modal";
import "./Request.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class Request extends Component {
    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            phone: '',
            year: '',
            salary: '',
            custom: 0,
            instagram: '',
            career: '',
            question: '',
            agree: false,
            error: '',
        };
    }


    openmodal = () => {
        this.setState({ modalOpen: true });
    };
    closemodal = () => {
        this.setState({ modalOpen: false });
    };

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    handlesubmit = () => {
        const clickTour = 'input[name="tour"]:checked';
        const tourlist = document.querySelectorAll(clickTour);
        let tour = '';

        tourlist.forEach((e) => {
            tour = tour + e.value;
        });

        const clickRoute = 'input[name="route"]:checked';
        const routelist = document.querySelectorAll(clickRoute);
        let route = '';

        routelist.forEach((e) => {
            route = route + e.value;
        });

        this.setState({ error: "" });

        if (this.state.name === '' || this.state.phone === '' || this.state.instagram === '' || this.state.agree === false) {
            window.alert("하나 이상의 필드에 오류가 있습니다. 재확인 후 다시 시도하세요")
        } else {
            axios.post("https://d34jcju4l30cic.cloudfront.net/designer", {
                tour: tour,
                full_name: this.state.full_name,
                phone: this.state.phone,
                year: this.state.year,
                salary: this.state.salary,
                custom: this.state.custom,
                instagram: this.state.instagram,
                route: route,
                career: this.state.career,
                question: this.state.question,
            }).then(() => {
                window.alert("입점문의가 성공적으로 접수되었습니다.\n로위에 문의주셔서 감사드리며 작성하신 번호로 곧 답변드리겠습니다.")
                window.location.href = "/"
            }).catch(err => {
                this.setState({ error: "동일한 전화번호가 있습니다" })
            })

            axios.post("https://wh.jandi.com/connect-api/webhook/21700539/63e9bb0332d40124962aaa0024282b15", {
                body: `[[입점문의]](http://http://lo-we.admin.s3-website.ap-northeast-2.amazonaws.com/) ${this.state.full_name}`,
                connectColor: "#FAC11B",
                connectInfo: [{
                    title: `입점문의 ${this.state.full_name}`,
                    description: "새로운 입점문의 입니다.",
                    imageUrl: "http://lo-we.admin.s3-website.ap-northeast-2.amazonaws.com/"
                }]
            }).then(() => {
                window.alert("입점문의가 성공적으로 접수되었습니다.\n로위에 문의주셔서 감사드리며 작성하신 번호로 곧 답변드리겠습니다.")
                window.location.href = "/"
            }).catch(err => {
                this.setState({ error: "동일한 전화번호가 있습니다" })
            })
        }
    }

    render() {
        return (
            <>
                <Desktop>
                    <section className="Request_section">
                        <div>
                            <div className="Request_title">로위에 입점문의 신청해 보세요</div>
                            <div className="Request_content">
                                <div className="Request_subtitle">투어를 원하시는 지점을 선택해주세요.</div>
                                <div className="Request_tour">
                                    <div className="Request_tour_content">
                                        <input name="tour" type="checkbox" id="tour1" value="1" />
                                        <label htmlFor="tour1" className="Request_checkbox">1호점(홍대점) <span style={{ color: "#e6e6e6" }}>|</span><span> 전석 입점 완료</span></label>
                                    </div>

                                    <div className="Request_tour_content">
                                        <input name="tour" type="checkbox" id="tour2" value="2" />
                                        <label htmlFor="tour2" className="Request_checkbox">2호점(신촌점) <span style={{ color: "#e6e6e6" }}>|</span><span> 전석 입점 완료</span></label>
                                    </div>

                                    <div className="Request_tour_content">
                                        <input name="tour" type="checkbox" id="tour3" value="3" />
                                        <label htmlFor="tour3" className="Request_checkbox">3호점(합정점) <span style={{ color: "#e6e6e6" }}>|</span><span> 전석 입점 완료</span></label>
                                    </div>

                                    <div className="Request_tour_content">
                                        <input name="tour" type="checkbox" id="tour4" value="4" />
                                        <label htmlFor="tour4" className="Request_checkbox">4호점(홍대입구역점) <span style={{ color: "#e6e6e6" }}>|</span><span> 전석 입점 완료</span></label>
                                    </div>

                                    <div className="Request_tour_content">
                                        <input name="tour" type="checkbox" id="tour5" value="5" />
                                        <label htmlFor="tour5" className="Request_checkbox" style={{ fontWeight: "bold" }}>5호점(강남점) <span style={{ color: "#e6e6e6", fontWeight: "500" }}>|</span><span> 사전입점신청 중</span></label>
                                    </div>
                                </div>

                                <div className="Request_content_section">
                                    <div className="Request_contents_box">
                                        <div className="Request_subtitle">성함<span style={{ color: "#0e7043" }}>*</span></div>
                                        <div>
                                            <input type="text" className="Request_content_input" placeholder="성함을 입력해주세요" onChange={this.handleInputValue("full_name")} />
                                        </div>
                                    </div>

                                    <div className="Request_contents_box">
                                        <div className="Request_subtitle">연락처<span style={{ color: "#0e7043" }}>*</span></div>
                                        <div>
                                            <input type="text" className="Request_content_input" placeholder="연락처를 입력해주세요. (ex.01011112222)" onChange={this.handleInputValue("phone")} />
                                        </div>
                                    </div>


                                    <div className="Request_contents_box">
                                        <div className="Request_subtitle">instagram ID<span style={{ color: "#0e7043" }}>*</span></div>
                                        <div>
                                            <input type="text" className="Request_content_input" placeholder="인스타그램 아이디를 입력해주세요" onChange={this.handleInputValue("instagram")} />
                                        </div>
                                    </div>

                                    <div className="Request_contents_box">
                                        <div className="Request_subtitle">디자이너 경력</div>
                                        <div>
                                            <input type="text" className="Request_content_input" placeholder="디자이너 경력을 입력해주세요. (단위 : 년)" onChange={this.handleInputValue("year")} />
                                        </div>
                                    </div>

                                    <div className="Request_contents_box">
                                        <div className="Request_subtitle">평균 매출</div>
                                        <div>
                                            <input type="text" className="Request_content_input" placeholder="이전 근무지에서의 매출(평균)을 입력해주세요. (단위 : 만원)" onChange={this.handleInputValue("salary")} />
                                        </div>
                                    </div>
                                    <div className="Request_contents_box">
                                        <div className="Request_subtitle">개인고객(샵을 옮겨도 방문 가능한 고객) 유무</div>
                                        <div>
                                            <input type="text" className="Request_content_input" placeholder="개인고객유무에 따라 있음/없음으로 입력해주세요" onChange={this.handleInputValue("custom")} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="Request_contents_areabox">
                                        <div className="Request_subtitle">경력 사항</div>
                                        <div>
                                            <textarea type="text" className="Request_content_textarea" placeholder="경력이 될 만한 사항이 있으시다면 적어주세요.(ex.교육수료내용, 브랜드샵 근무, 인플루언서 등)" onChange={this.handleInputValue("career")} />
                                        </div>
                                    </div>

                                    <div className="Request_contents_areabox">
                                        <div className="Request_subtitle">문의 사항</div>
                                        <div>
                                            <textarea type="text" className="Request_content_textarea" placeholder="궁금하신 문의사항을 작성해주세요." onChange={this.handleInputValue("question")} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="Request_subtitle">로위를 찾아오신 유입경로를 선택해주세요.</div>
                                    <div className="Request_route">
                                        <div className="Request_route_content">
                                            <input name="route" type="checkbox" id="route1" value="1" />
                                            <label htmlFor="route1" className="Request_checkbox">SNS광고<span>(페이스북,인스타그램)</span></label>
                                        </div>

                                        <div className="Request_route_content">
                                            <input name="route" type="checkbox" id="route2" value="2" />
                                            <label htmlFor="route2" className="Request_checkbox">검색<span>(네이버,구글)</span></label>
                                        </div>

                                        <div className="Request_route_content">
                                            <input name="route" type="checkbox" id="route3" value="3" />
                                            <label htmlFor="route3" className="Request_checkbox">기타 매체<span>(뉴스,블로그 등)</span></label>
                                        </div>

                                        <div className="Request_route_content">
                                            <input name="route" type="checkbox" id="route4" value="4" />
                                            <label htmlFor="route4" className="Request_checkbox">지인추천</label>
                                        </div>

                                        <div className="Request_route_content">
                                            <input name="route" type="checkbox" id="route5" value="5" />
                                            <label htmlFor="route5" className="Request_checkbox">헤어인잡</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ height: "30px", lineHeight: "30px", marginTop: "70px" }}>
                                <input className="Request_agree" name="agree" type="checkbox" value="1" onClick={() => { this.setState({ agree: !this.state.agree }) }} />
                                <span className="Request_agree_text"><span style={{ color: "#0e7043", cursor: "pointer", textDecorationLine: "underline" }} onClick={this.openmodal} >개인정보처리방침</span>에 동의합니다<span style={{ color: "#0e7043" }}>*</span></span>
                            </div>
                            <div style={{ textAlign: "center", paddingTop: "125px", paddingBottom: "255px" }}>
                                <button className="Request_submitbtn" onClick={this.handlesubmit}>입점문의 신청하기</button>
                            </div>
                        </div>
                    </section >
                    <Modal data={this.props.e} open={this.state.modalOpen} close={this.closemodal} />
                </Desktop>
                <Mobile>
                    <section className="Request_section">
                        <div>
                            <div className="Request_title">로위에 입점문의 신청해 보세요</div>
                            <div className="Request_content">
                                <div className="Request_subtitle">투어를 원하시는 지점을 선택해주세요.</div>
                                <div className="Request_tour">
                                    <div className="Request_tour_content">
                                        <input name="tour" type="checkbox" id="tour1" value="1" />
                                        <label htmlFor="tour1" className="Request_checkbox">1호점(홍대점) <div>전석 입점 완료</div></label>
                                    </div>

                                    <div className="Request_tour_content">
                                        <input name="tour" type="checkbox" id="tour2" value="2" />
                                        <label htmlFor="tour2" className="Request_checkbox">2호점(신촌점) <div>전석 입점 완료</div></label>

                                    </div>

                                    <div className="Request_tour_content">
                                        <input name="tour" type="checkbox" id="tour3" value="3" />
                                        <label htmlFor="tour3" className="Request_checkbox">3호점(합정점) <div>전석 입점 완료</div></label>
                                    </div>

                                    <div className="Request_tour_content">
                                        <input name="tour" type="checkbox" id="tour4" value="4" />
                                        <label htmlFor="tour4" className="Request_checkbox">4호점(홍대입구역점) <div>전석 입점 완료</div></label>
                                    </div>

                                    <div className="Request_tour_content" style={{ width: "84.5vw" }}>
                                        <input name="tour" type="checkbox" id="tour5" value="5" />
                                        <label htmlFor="tour5" className="Request_checkbox" style={{ width: "84.5vw", fontWeight: "bold" }}>5호점(로위 강남점) <div className="checkbox_div">사전입점신청 중</div></label>
                                    </div>
                                </div>

                                <div className="Request_content_section">
                                    <div className="Request_contents_box">
                                        <div className="Request_subtitle">성함<span style={{ color: "#0e7043" }}>*</span></div>
                                        <div>
                                            <input type="text" className="Request_content_input" placeholder="성함을 입력해주세요" onChange={this.handleInputValue("full_name")} />
                                        </div>
                                    </div>

                                    <div className="Request_contents_box">
                                        <div className="Request_subtitle">연락처<span style={{ color: "#0e7043" }}>*</span></div>
                                        <div>
                                            <input type="text" className="Request_content_input" placeholder="연락처를 입력해주세요. (ex.01011112222)" onChange={this.handleInputValue("phone")} />
                                        </div>
                                    </div>


                                    <div className="Request_contents_box">
                                        <div className="Request_subtitle">instagram ID<span style={{ color: "#0e7043" }}>*</span></div>
                                        <div>
                                            <input type="text" className="Request_content_input" placeholder="인스타그램 아이디를 입력해주세요" onChange={this.handleInputValue("instagram")} />
                                        </div>
                                    </div>

                                    <div className="Request_contents_box">
                                        <div className="Request_subtitle">디자이너 경력</div>
                                        <div>
                                            <input type="text" className="Request_content_input" placeholder="디자이너 경력을 입력해주세요. (단위 : 년)" onChange={this.handleInputValue("year")} />
                                        </div>
                                    </div>

                                    <div className="Request_contents_box">
                                        <div className="Request_subtitle">평균 매출</div>
                                        <div>
                                            <input type="text" className="Request_content_input" placeholder="이전 근무지에서의 매출(평균)을 입력해주세요. (단위 : 만원)" onChange={this.handleInputValue("salary")} />
                                        </div>
                                    </div>
                                    <div className="Request_contents_box">
                                        <div className="Request_subtitle">개인고객(샵을 옮겨도 방문 가능한 고객) 유무</div>
                                        <div>
                                            <input type="text" className="Request_content_input" placeholder="개인고객유무에 따라 있음/없음으로 입력해주세요" onChange={this.handleInputValue("custom")} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="Request_contents_areabox">
                                        <div className="Request_subtitle">경력 사항</div>
                                        <div>
                                            <textarea type="text" className="Request_content_textarea" placeholder="경력이 될 만한 사항이 있으시다면 적어주세요.&#13;&#10;(ex.교육수료내용, 브랜드샵 근무, 인플루언서 등)" onChange={this.handleInputValue("career")} />
                                        </div>
                                    </div>

                                    <div className="Request_contents_areabox">
                                        <div className="Request_subtitle">문의 사항</div>
                                        <div>
                                            <textarea type="text" className="Request_content_textarea" placeholder="궁금하신 문의사항을 작성해주세요." onChange={this.handleInputValue("question")} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="Request_subtitle">로위를 찾아오신 유입경로를 선택해주세요.</div>
                                    <div className="Request_route">
                                        <div className="Request_route_content">
                                            <input name="route" type="checkbox" id="route1" value="1" />
                                            <label htmlFor="route1" className="Request_checkbox">SNS광고<div>(페이스북,인스타그램)</div></label>
                                        </div>

                                        <div className="Request_route_content">
                                            <input name="route" type="checkbox" id="route2" value="2" />
                                            <label htmlFor="route2" className="Request_checkbox">검색<div>(네이버,구글)</div></label>

                                        </div>

                                        <div className="Request_route_content">
                                            <input name="route" type="checkbox" id="route3" value="3" />
                                            <label htmlFor="route3" className="Request_checkbox">기타 매체<div>(뉴스,블로그 등)</div></label>
                                        </div>

                                        <div className="Request_route_content">
                                            <input name="route" type="checkbox" id="route4" value="4" />
                                            <label htmlFor="route4" className="Request_checkbox">지인추천</label>
                                        </div>

                                        <div className="Request_route_content">
                                            <input name="route" type="checkbox" id="route5" value="5" />
                                            <label htmlFor="route5" className="Request_checkbox">헤어인잡</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div style={{ height: "8vw", lineHeight: "8vw", padding: "0", marginTop: "70px" }}>
                                <input className="Request_agree" name="agree" type="checkbox" value="1" onClick={() => { this.setState({ agree: !this.state.agree }) }} />
                                <span className="Request_agree_text"><span style={{ color: "#0e7043", cursor: "pointer", textDecorationLine: "underline" }} onClick={this.openmodal} >개인정보처리방침</span>에 동의합니다<span style={{ color: "#0e7043" }}>*</span></span>
                            </div>
                            <div style={{ textAlign: "center", paddingTop: "16vw", paddingBottom: "34.66666vw" }}>
                                <button className="Request_submitbtn" onClick={this.handlesubmit}>입점문의 신청하기</button>
                            </div>
                        </div>
                    </section >
                    <Modal data={this.props.e} open={this.state.modalOpen} close={this.closemodal} />
                </Mobile>
            </>
        );
    }
}

export default Request;