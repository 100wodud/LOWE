import './Header.css';
import { Component } from 'react';
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 999 })
  return isMobile ? children : null
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navColor: false,
      member: false,
      review: false,
      d_review: false,
      promotion: false,
      hamburger: false,
      inner: false,
    };
  }

  componentDidMount = () => {
    // let header = document.getElementById("scroll");
    // header.addEventListener('mouseover', (event) => {
    //   header.classList.add("add-background");
    //   self.setState({ navColor: true })
    // });
    // var self = this
    // document.addEventListener('scroll', function () {
    //   var target = document.getElementById("header_trigger");
    //   var abBottom = window.pageYOffset + target.getBoundingClientRect().top
    //   var currentScrollValue = document.documentElement.scrollTop;
    //   let header = document.getElementById("scroll");

    //   if (currentScrollValue > abBottom) {
    //     header.classList.add("add-background");
    //     self.setState({ navColor: true })
    //   } else {
    //     header.classList.remove("add-background");
    //     self.setState({ navColor: false })

    //   }
    // });

  }


  ClickMember = () => {
    this.setState({ member: !this.state.member, review: false, promotion: false })
  }

  ClickReview = () => {
    this.setState({ review: !this.state.review, member: false, promotion: false })
  }


  ClickPromotion = () => {
    this.setState({ promotion: !this.state.promotion, review: false, member: false })
  }

  ClickDReview = () => {
    this.setState({ d_review: !this.state.d_review })
  }

  onClickhamburger = () => {
    this.setState({ hamburger: !this.state.hamburger })
  }

  render() {
    return (
      <>
        <Desktop>
          <header id="scroll" className="smooth add-background">
            <a href='/care'>
              <div className="header_banner">
                지원혜택 보러가기 🥳
              </div>
            </a>
            <div>
              <a href="/" >
                <div className="logo">
                  {this.state.navColor ?
                    <img src={process.env.PUBLIC_URL + "/image/Nav/logo_white.svg"} className="logoView" alt="logo black"></img> :
                    <img src={process.env.PUBLIC_URL + "/image/Nav/logo_white.svg"} className="logoView" alt="logo white"></img>}
                </div>
              </a>
              <div className="menu1" >
                <div className="menu-item">
                  <a data-tag-index="Nav" onClick={() => { return window.localStorage.setItem("route", "네비_지원하기"); }} data-tag-title="지원하기" className='menu-button munuList_request' href="/requests/recruitment"><span className="emoji">✂️</span> 지원하기</a>
                </div>
                <div className="menu-item">
                  <a data-tag-index="Nav" data-tag-title="로위몰" className='menu-button' href="https://lowehair.kr/">로위몰</a>
                </div>
                <div className="menu-item">
                  <a data-tag-index="Nav" data-tag-title="디자이너 혜택" className='menu-button' href="/faq">자주 묻는 질문</a>
                </div>
                <div className="menu-item" style={{ cursor: "default" }}>
                  <div className='menu-button' style={{ display: "inline-block", paddingBottom: "1.5365vw" }}>디자이너 리뷰
                    <ul>
                      <li style={{ marginLeft: "18.05vw", marginRight: "6vw" }} >
                        <p style={{ marginRight: "2.34375vw", fontSize: "0.72916vw", paddingTop: "0.5vw" }}>디자이너 리뷰</p>
                      </li>
                      <li style={{ marginRight: "7.54375vw" }}>
                        <p><a style={{ fontSize: "0.72916vw" }} href="/designers"> </a></p>
                      </li>
                      <div id="review-area" style={{ marginRight: "20.65vw" }}>
                        <div style={{ float: "right" }}>
                          <div>
                            <span>
                              <a data-tag-index="Review" data-tag-cate="pc_list" data-tag-title="우디" href="/review/woody">
                                <img src={process.env.PUBLIC_URL + "/image/Nav/review/04.png"} alt="우디 리뷰" />
                                <div className="menu_review_text">
                                  <div style={{ lineHeight: "1.0416vw" }}>로위만의 디자이너 맞춤 시스템이 </div>
                                  <div>일에 집중할 수 있도록 만들어줘요</div>
                                </div>
                              </a>
                            </span>
                            <span>
                              <a data-tag-index="Review" data-tag-cate="pc_list" data-tag-title="규현" href="/review/gyuhyun">
                                <img src={process.env.PUBLIC_URL + "/image/Nav/review/03.png"} alt="규현 리뷰" />
                                <div className="menu_review_text">
                                  <div style={{ lineHeight: "1.0416vw" }}>처음엔 걱정이 많았지만, </div>
                                  <div>규모만큼 체계적이라 믿음이 갔어요</div>
                                </div>
                              </a>
                            </span>
                            <span>
                              <a data-tag-index="Review" data-tag-cate="pc_list" data-tag-title="필립" href="/review/filip">
                                <img src={process.env.PUBLIC_URL + "/image/Nav/review/02.png"} alt="필립 리뷰" />
                                <div className="menu_review_text">
                                  <div style={{ lineHeight: "1.0416vw" }}>디자이너로서 더 발전하고 즐기면서 </div>
                                  <div>일할 수 있는 환경이라 생각해요</div>
                                </div>
                              </a>
                            </span>
                            <span>
                              <a data-tag-index="Review" data-tag-cate="pc_list" data-tag-title="혜리" href="/review/hyeri">
                                <img src={process.env.PUBLIC_URL + "/image/Nav/review/01.png"} alt="혜리 히뷰" />
                                <div className="menu_review_text">
                                  <div style={{ lineHeight: "1.0416vw" }}>제가 원하는 시간에 일할 수 있고,</div>
                                  <div> 일한 만큼 가져갈 수 있어요</div>
                                </div>
                              </a>
                            </span>
                          </div>
                          <div>
                            <span >
                              <a data-tag-index="Review" data-tag-cate="pc_list" data-tag-title="이룬" href="/review/2roon">
                                <img src={process.env.PUBLIC_URL + "/image/Nav/review/08.png"} alt="이룬 리뷰" />
                                <div className="menu_review_text" style={{ marginBottom: "3.125vw" }} >
                                  <div style={{ lineHeight: "1.0416vw" }}>교육, 마케팅, 컨설팅 등 더욱 성장 </div>
                                  <div >할 수 있도록 도움받는 게 더 많아요</div>
                                </div>
                              </a>
                            </span>
                            <span>
                              <a data-tag-index="Review" data-tag-cate="pc_list" data-tag-title="유진" href="/review/yujine">
                                <img src={process.env.PUBLIC_URL + "/image/Nav/review/07.png"} alt="유진 리뷰" />
                                <div className="menu_review_text">
                                  <div style={{ lineHeight: "1.0416vw" }}>1인제라 몸은 힘들지만 제가 원하는 </div>
                                  <div>걸 자유롭게 할 수 있어서 행복해요</div>
                                </div>
                              </a>
                            </span>
                            <span>
                              <a data-tag-index="Review" data-tag-cate="pc_list" data-tag-title="도림" href="/review/sia">
                                <img src={process.env.PUBLIC_URL + "/image/Nav/review/06.png"} alt="도림, 시아 리뷰" />
                                <div className="menu_review_text">
                                  <div style={{ lineHeight: "1.0416vw" }}>마음 맞는 디자이너와 같이 일할 수 </div>
                                  <div>있는 곳으로 함께 옮기고 싶었어요</div>
                                </div>
                              </a>
                            </span>
                            <span>
                              <a data-tag-index="Review" data-tag-cate="pc_list" data-tag-title="기준" href="/review/kijoon">
                                <img src={process.env.PUBLIC_URL + "/image/Nav/review/05.png"} alt="기준 리뷰" />
                                <div className="menu_review_text">
                                  <div style={{ lineHeight: "1.0416vw" }}>로위에서는 눈치 보지 않고, 스스로 </div>
                                  <div>모든 걸 결정할 수 있어 너무 좋아요</div>
                                </div>
                              </a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>
                <div className="menu-item">
                  <a data-tag-index="Nav" data-tag-title="디자이너 혜택" className='menu-button' href="/care">디자이너 혜택</a>
                </div>
                <div className="menu-item">
                  <a data-tag-index="Nav" data-tag-title="지점현황" className='menu-button' href="/info">지점현황</a>
                </div>
                <div className="menu-item">
                  <a data-tag-index="Nav" data-tag-title="지점현황" className='menu-button' href="/brandstory">브랜드 이야기</a>
                </div>
              </div>
            </div>
          </header>
        </Desktop>
        <Mobile>
          <header id="scroll" className="smooth add-background" style={this.state.hamburger && window.innerWidth > 1000 ? null : { height: "100px" }}>
            <a href='/care'>
              <div className="header_banner">
                지원혜택 보러가기 🥳
              </div>
            </a>
            <div>
              <a href="/">
                <div className="logo">
                  {this.state.navColor ?
                    <img src={process.env.PUBLIC_URL + "/image/Nav/logo_white.svg"} className="logoView" alt="logo black"></img> :
                    <img src={process.env.PUBLIC_URL + "/image/Nav/logo_white.svg"} className="logoView" alt="logo white"></img>}
                </div>
              </a>
              <div className="menu-wrap">
                <input type="checkbox" className={this.state.hamburger ? "toggler" : "toggler top40"} onClick={this.onClickhamburger} />
                <div className={this.state.hamburger ? "hamburger" : "hamburger top40"}>
                  <div></div>
                </div>
                <div className="menu">
                  <div className="menuAll">
                    <div className="menuBar">
                      <ul className="menuList">
                        <div className="menuLisk_black">
                          <a href="/" style={{ width: "100%", height: "60px", paddingLeft: "12px" }}>
                            <img style={{ marginTop: "14px", width: "32px" }} src={process.env.PUBLIC_URL + "/image/Nav/home.svg"} alt="홈으로" />
                          </a>
                          <div style={{ color: "#ffffff", fontSize: "16px", textAlign: "center", marginTop: "32px", fontWeight: "500", marginBottom: "16px" }}>
                            <div style={{ width: "85%", marginBottom: "16px", height: "16px" }}>지금 바로 <span style={{ fontWeight: "bold" }}>로위와 함께</span>하세요!</div>
                            <a data-tag-index="Nav" data-tag-cate="mobile_apply" href="/requests/recruitment" onClick={() => { return window.localStorage.setItem("route", "네비_지원하기_버튼"); }} style={{ color: "#0f7043", textAlign: "center" }} >
                              <div style={{ width: "229px", marginLeft: "35.5px", height: "46px", backgroundColor: "#fff", borderRadius: "23px", lineHeight: "46px", textAlign: "center" }}>
                                <span style={{ fontWeight: 'bold', fontSize: "16px" }}><span className="emoji">✂️</span> 지원하기</span>
                              </div>
                            </a>
                          </div>
                        </div>
                        <li>
                          <a data-tag-index="Nav" data-tag-title="지점현황" className="changeColor" href="/brandstory">브랜드 이야기</a>
                        </li>
                        <li>
                          <a data-tag-index="Nav" data-tag-title="지점현황" className="changeColor" href="/info">지점현황</a>
                        </li>
                        <li>
                          <a data-tag-index="Nav" data-tag-title="디자이너 혜택" className="changeColor" href="/care">디자이너 혜택</a>
                        </li>
                        <li>
                          <a data-tag-index="Nav" data-tag-title="디자이너 리뷰" className="changeColor" href="/review/yujine">디자이너 리뷰</a>
                        </li>
                        <li>
                          <a data-tag-index="Nav" data-tag-title="로위몰" className="changeColor" href="/faq">자주 묻는 질문</a>
                        </li>
                        <li>
                          <a data-tag-index="Nav" data-tag-title="로위몰" className="changeColor" href="https://lowehair.kr/">로위몰</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </Mobile>
      </>
    );
  }
}
export default Header;