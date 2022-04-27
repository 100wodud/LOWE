import './Header.css';
import { Component } from 'react';
import "./Footer.css"
import Gotofirst from "./Gotofirst";
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1200 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 1199 })
    return isMobile ? children : null
}


class Footer extends Component {
    constructor() {
        super();
        this.state = {
            accordion: true
        }
    }

    clickAccordion = () => {
        this.setState({ accordion: !this.state.accordion })
    }

    render() {
        let accordion = this.state.accordion ? "accordion_desc" : "accordion_incr";
        return (
            <footer className="footer">
                <Desktop>
                    <div style={{ width: "490px", marginRight: "70px",float: "left", paddingLeft: "20vw", paddingTop: "100px" }}>
                        <div id="store">
                            <div className="footer_title">
                                로위 지점 정보
                            </div>
                            <div>
                                <dl className="dl">
                                    <dt className="dt">신촌점</dt>
                                    <dd className="dd">02-332-1226 <span>|</span> 서대문구 신촌로 77 대창빌딩 4층</dd>
                                </dl>
                                <dl className="dl">
                                    <dt className="dt">합정점</dt>
                                    <dd className="dd">02-336-1223 <span>|</span> 마포구 양화로64 서교제일빌딩 지하1층</dd>
                                </dl>
                                <dl className="dl">
                                    <dt className="dt">홍대입구역점</dt>
                                    <dd className="dd">02-332-2922<span>|</span> 마포구 양화로 125 경남관광빌딩 4층</dd>
                                </dl>
                                <dl className="dl">
                                    <dt className="dt">강남점</dt>
                                    <dd className="dd">02-553-2010<span>|</span> 강남구 강남대로 328 강남역쉐르빌 2층</dd>
                                </dl>
                                <dl className="dl">
                                    <dt className="dt">L7홍대점</dt>
                                    <dd className="dd">-ㅤ ㅤ ㅤ ㅤ ㅤ <span>|</span> 마포구 양화로 141 (홍대L7롯데호텔) 3층</dd>
                                </dl>
                                <dl className="dl">
                                    <dt className="dt">이수역점</dt>
                                    <dd className="dd">-ㅤ ㅤ ㅤ ㅤ ㅤ <span>|</span> 서초구 방배동 1715 이수파이브(ISUFIVE), 3층</dd>
                                </dl>
                            </div>
                            <div style={{ fontFamily: "Montserrat", fontSize: "12px", color: "#FFFFFF", marginTop: "30px" }}>
                                © Copyright BENTLESPACE All rights reserved.
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "fit-content", float: "left", paddingLeft: "2.65vw", paddingTop: "100px",marginBottom: "80px" }}>
                        <div id="company">
                            <div className="footer_title">
                                벤틀스페이스 사업자 정보
                            </div>
                            <div>
                                <dl className="dl">
                                    <dt className="dt">대표자</dt>
                                    <dd className="dd">양재원</dd>
                                </dl>

                                <dl className="dl">
                                    <dt className="dt">사업자 등록번호</dt>
                                    <dd className="dd">856-87-00762</dd>
                                </dl>

                                <dl className="dl">
                                    <dt className="dt">주소</dt>
                                    <dd className="dd">서울특별시 마포구 동교로 25길10 3층 서일빌딩</dd>
                                </dl>

                                <dl className="dl">
                                    <dt className="dt margin40">통신판매업신고</dt>
                                    <dd className="dd">2021-서울마포-2441</dd>
                                </dl>

                                <dl className="dl">
                                    <dt className="dt margin40">메일 주소</dt>
                                    <dd className="dd">info@bentlespace.com</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "560px", float: "left", paddingLeft: "20vw", paddingTop: "70px" }}>
                        <div id="follow">
                            <div className="follow_title">
                                follow us
                            </div>
                            <div>
                                <span>
                                    <a className="sns_icon" href="https://www.instagram.com/lo__we__/?hl=ko" target="blank">
                                        <img className="sns_icon" src={process.env.PUBLIC_URL + "/image/Nav/insta_icon.svg"} alt="인스타그램모양 아이콘" />
                                    </a>
                                </span>
                                <span >
                                    <a className="sns_icon" href="https://blog.Naver.com/bentlespace" target="blank">
                                        <img className="sns_icon" src={process.env.PUBLIC_URL + "/image/Nav/blog_icon.svg"} alt="네이버 블로그 모양 아이콘" />
                                    </a>
                                </span>
                                <span>
                                    <a className="sns_icon" href="https://www.youtube.com/channel/UC68a6jlJDg0cy6_bL8udLig" target="blank">
                                        <img className="sns_icon" src={process.env.PUBLIC_URL + "/image/Nav/youtube_icon.svg"} alt="유튜브 모양 아이콘" />
                                    </a>
                                </span>
                                <span>
                                    <a className="sns_icon" href="https://post.naver.com/bentlespace" target="blank">
                                        <img className="sns_icon" src={process.env.PUBLIC_URL + "/image/Nav/naverpost_icon.svg"} alt="유튜브 모양 아이콘" />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "403px", float: "left", paddingLeft: "2.7vw", paddingTop: "20px" }}>
                        <Gotofirst />
                        <div id="about">
                            <div className="footer_title" style={{ fontFamily: "Montserrat", marginBottom: "30px" }}>
                                About us
                            </div>
                            <div>
                                <dl className="dl">
                                    {/* <span><a style={{ color: "white", fontSize: "15px", fontWeight: "bold", fontFamily: "Noto Sans" }} href="/">회사 소개</a></span> */}
                                    <span><a style={{ color: "white", fontSize: "15px", fontWeight: "bold", fontFamily: "Noto Sans"}} href="https://www.notion.so/lowelab/Join-Bentlespace-74c8124e3eba48588fbf4baf59a99061">인재채용</a></span>
                                </dl>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div className="footer_wrap">
                        <div className="accordion_wrap">
                            <div className="accordion_title">
                                <span className="span">(주)벤틀스페이스 사업자 정보</span>
                                {this.state.accordion ?
                                    <div className="img_span">
                                        <img src={process.env.PUBLIC_URL + "/image/Nav/foo_arr.svg"} alt="아래방향 화살표" className="img" onClick={this.clickAccordion} />
                                    </div> :
                                    <div className="img_spans">
                                        <img src={process.env.PUBLIC_URL + "/image/Nav/foo_arr.svg"} alt="아래방향 화살표" className="imgs" onClick={this.clickAccordion} />
                                    </div>}
                            </div>
                            <div className={accordion}>
                                <dl className="dl">
                                    <dt className="dt">대표자</dt>
                                    <dd className="dd">양재원</dd>
                                </dl>

                                <dl className="dl">
                                    <dt className="dt">사업자 등록번호</dt>
                                    <dd className="dd">856-87-00762</dd>
                                </dl>

                                <dl className="dl">
                                    <dt className="dt">주소</dt>
                                    <dd className="dd">서울특별시 마포구 동교로 25길10 3층 서일빌딩</dd>
                                </dl>

                                <dl className="dl">
                                    <dt className="dt">통신판매업신고</dt>
                                    <dd className="dd">2021-서울마포-2441</dd>
                                </dl>

                                <dl className="dl">
                                    <dt className="dt">메일 주소</dt>
                                    <dd className="dd">info@bentlespace.com</dd>
                                </dl>
                            </div>
                        </div>

                        <div className="footer_desc">
                            <dl className="dl">
                                <dt className="dt">신촌점</dt>
                                <dd className="dd"> 02-332-1226 | 서대문구 신촌로 77 대창빌딩 4층</dd>
                            </dl>
                            <dl className="dl">
                                <dt className="dt">합정점</dt>
                                <dd className="dd">02-336-1223 | 마포구 양화로64 서교제일빌딩 지하1층</dd>
                            </dl>
                            <dl className="dl">
                                <dt className="dt">홍대입구역점</dt>
                                <dd className="dd"> 02-332-2922 | 마포구 양화로 125 경남관광빌딩 4층</dd>
                            </dl>
                            <dl className="dl">
                                <dt className="dt">강남점</dt>
                                <dd className="dd"> 02-553-2010 | 강남구 강남대로 328 강남역쉐르빌 2층</dd>
                            </dl>
                            <dl className="dl">
                                <dt className="dt">L7홍대점</dt>
                                <dd className="dd">-ㅤ  | 마포구 양화로 141 (홍대L7롯데호텔) 3층</dd>
                            </dl>
                            <dl className="dl">
                                <dt className="dt">이수역점</dt>
                                <dd className="dd">-ㅤ  | 서초구 방배동 1715 이수파이브(ISUFIVE), 3층</dd>
                            </dl>
                            <div style={{ float: "left", marginleft: "0px", paddingTop: "30px", paddingBottom: "28px" ,width: "92%", borderTop: "1px solid #575757"}}>
                                <span style={{ float: "left", color: "white", fontSize: "14px", fontWeight: "bold", fontFamily: "Montserrat",}}>About us</span>
                                <span style={{ float: "left" }}><a style={{ color: "white", fontSize: "12px", fontWeight: "bold", fontFamily: "Noto Sans", width: "fit-content", marginLeft: "40px" }} href="https://www.notion.so/lowelab/Join-Bentlespace-74c8124e3eba48588fbf4baf59a99061">인재채용</a></span>
                                {/* <span><a style={{ color: "white", fontSize: "12px", fontWeight: "bold", fontFamily: "Noto Sans", width: "fit-content" , marginLeft: "0px"}} href="/">회사 소개</a></span> */}
                            </div>

                            <span className="span copy_text eng">© Copyright BENTLESPACE All rights reserved.</span>

                            <div className="sns_warp">
                                <div className="insta_box img_box">
                                    <a href="https://www.instagram.com/lo__we__/?hl=ko" target="blank" className="link">
                                        <img src={process.env.PUBLIC_URL + "/image/Nav/insta_icon.svg"} alt="인스타그램모양 아이콘" className="img" />
                                    </a>
                                </div>
                                <div className="blog_box img_box">
                                    <a href="https://blog.naver.com/bentlespace" target="blank" className="link">
                                        <img src={process.env.PUBLIC_URL + "/image/Nav/blog_icon.svg"} alt="네이버 블로그 모양 아이콘" className="img" />
                                    </a>
                                </div>
                                <div className="youtue_box img_box">
                                    <a href="https://www.youtube.com/channel/UC68a6jlJDg0cy6_bL8udLig" target="blank" className="link">
                                        <img src={process.env.PUBLIC_URL + "/image/Nav/youtube_icon.svg"} alt="유튜브 모양 아이콘" className="img" />
                                    </a>
                                </div>
                                <div className="youtue_box img_box">
                                    <a href="https://post.naver.com/bentlespace" target="blank" className="link">
                                        <img src={process.env.PUBLIC_URL + "/image/Nav/naverpost_icon.svg"} alt="네이버 포스트 모양 아이콘" className="img" />
                                    </a>
                                </div>
                                <Gotofirst />
                            </div>
                        </div>
                    </div>
                </Mobile>
            </footer >
        );
    }
}
export default Footer;