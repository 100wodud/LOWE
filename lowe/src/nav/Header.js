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
      promotion: false
    };
  }

  componentDidMount = () => {
    if (window.innerWidth > 1000) {
      let reviews = document.getElementById("review-area");
      let review = document.getElementById("menu-review");

      reviews.addEventListener('mouseover', function () {
        review.classList.add("mouse_event");
      });

      reviews.addEventListener('mouseleave', function () {
        review.classList.remove("mouse_event");
      });
    }
    let header = document.getElementById("scroll");
    header.addEventListener('mouseover', (event) => {
      header.classList.add("add-background");
      self.setState({ navColor: true })
    });
    var self = this
    document.addEventListener('scroll', function () {
      var target = document.getElementById("header_trigger");
      var abBottom = window.pageYOffset + target.getBoundingClientRect().top
      var currentScrollValue = document.documentElement.scrollTop;
      let header = document.getElementById("scroll");

      if (currentScrollValue > abBottom) {
        header.classList.add("add-background");
        self.setState({ navColor: true })
      } else {
        header.classList.remove("add-background");
        self.setState({ navColor: false })

      }
    });
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

  render() {
    return (
      <header id="scroll" className="smooth">
        <Desktop>
          <div>
            <div className="menu1" >
              <div className="menu-item">
                <a className='menu-button' href="https://lowehair.kr/">시술예약</a>
              </div>
              <div className="menu-item" style={{ cursor: "default" }}>
                <div className='menu-button' style={{ display: "inline-block", paddingBottom: "1.5365vw" }}>디자이너 혜택
                  <ul>
                    <li style={{ marginLeft: "18.75vw", marginRight: "9.5vw" }} >
                      <p style={{ fontSize: "0.72916vw", paddingTop: "0.37vw" }}>멤버 혜택</p>
                    </li>
                    <li style={{ marginRight: "2.34375vw" }}>
                      <p><a style={{ fontSize: "0.72916vw" }} href="/careplus">로위케어 +</a></p>
                    </li>
                    <li>
                      <p><a style={{ fontSize: "0.72916vw" }} href="/care">로위케어</a></p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-item">
                <a className='menu-button' href="/info">지점현황</a>
              </div>
            </div>
            <a href="/" style={{ margin: "0 auto", }}>
              <div className="logo">
                {this.state.navColor ?
                  <img src={process.env.PUBLIC_URL + "/image/Nav/logo_black.svg"} className="logoView" alt="logo black"></img> :
                  <img src={process.env.PUBLIC_URL + "/image/Nav/logo_white.svg"} className="logoView" alt="logo white"></img>}
              </div>
            </a>
            <div className="menu2">
              <div className="menu-item" style={{ cursor: "default" }}>
                <div className='menu-button' style={{ display: "inline-block", paddingBottom: "1.5365vw" }}>지원하기
                  <ul>
                    <li style={{ marginLeft: "18.75vw", marginRight: "9.5vw" }} >
                      <p style={{ fontSize: "0.72916vw", paddingTop: "0.37vw" }}>지원하기</p>
                    </li>
                    <li style={{ marginRight: "2.34375vw" }}>
                      <p><a style={{ fontSize: "0.72916vw" }} href="/promotion/lowe5th">강남점(입점형)</a></p>
                    </li>
                    <li style={{ marginRight: "2.34375vw" }}>
                      <p><a style={{ fontSize: "0.72916vw" }} href="/promotion/lowe6th">L7홍대점(채용형)</a></p>
                    </li>
                    <li>
                      <p><a style={{ fontSize: "0.72916vw" }} href="/request">바로 지원</a></p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="menu-item" style={{ cursor: "default" }}>
                <div className='menu-button' style={{ display: "inline-block", paddingBottom: "1.5365vw" }}>디자이너 리뷰
                  <ul>
                    <li style={{ marginLeft: "18.05vw", marginRight: "6vw" }} >
                      <p style={{ marginRight: "2.34375vw", fontSize: "0.72916vw", paddingTop: "0.5vw" }}>디자이너 리뷰</p>
                    </li>
                    <li style={{ marginRight: "3.54375vw", paddingTop: "0.13vw" }}>
                      <p><a style={{ fontSize: "0.72916vw" }} href="/designers">로위 디자이너</a></p>
                    </li>
                    <li id="menu-review">
                      <p style={{ marginRight: "2.34375vw", fontSize: "0.72916vw", paddingTop: "0.5vw", paddingBottom: "0.5vw" }}>디자이너 리뷰</p>
                    </li>
                    <div id="review-area" style={{ marginRight: "20.65vw" }}>
                      <div style={{ float: "right" }}>
                        <div>
                          <span>
                            <a href="/review/woody">
                              <img src={process.env.PUBLIC_URL + "/image/Nav/review/04.png"} alt="우디 리뷰" />
                              <div className="menu_review_text">
                                <div style={{ lineHeight: "1.0416vw" }}>로위만의 디자이너 맞춤 시스템이 </div>
                                <div>일에 집중할 수 있도록 만들어줘요</div>
                              </div>
                            </a>
                          </span>
                          <span>
                            <a href="/review/gyuhyun">
                              <img src={process.env.PUBLIC_URL + "/image/Nav/review/03.png"} alt="규현 리뷰" />
                              <div className="menu_review_text">
                                <div style={{ lineHeight: "1.0416vw" }}>처음엔 걱정이 많았지만, </div>
                                <div>규모만큼 체계적이라 믿음이 갔어요</div>
                              </div>
                            </a>
                          </span>
                          <span>
                            <a href="/review/filip">
                              <img src={process.env.PUBLIC_URL + "/image/Nav/review/02.png"} alt="필립 리뷰" />
                              <div className="menu_review_text">
                                <div style={{ lineHeight: "1.0416vw" }}>디자이너로서 더 발전하고 즐기면서 </div>
                                <div>일할 수 있는 환경이라 생각해요</div>
                              </div>
                            </a>
                          </span>
                          <span>
                            <a href="/review/hyeri">
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
                            <a href="/review/2roon">
                              <img src={process.env.PUBLIC_URL + "/image/Nav/review/08.png"} alt="이룬 리뷰" />
                              <div className="menu_review_text" style={{ marginBottom: "3.125vw" }} >
                                <div style={{ lineHeight: "1.0416vw" }}>교육, 마케팅, 컨설팅 등 더욱 성장 </div>
                                <div >할 수 있도록 도움받는 게 더 많아요</div>
                              </div>
                            </a>
                          </span>
                          <span>
                            <a href="/review/yujine">
                              <img src={process.env.PUBLIC_URL + "/image/Nav/review/07.png"} alt="유진 리뷰" />
                              <div className="menu_review_text">
                                <div style={{ lineHeight: "1.0416vw" }}>1인제라 몸은 힘들지만 제가 원하는 </div>
                                <div>걸 자유롭게 할 수 있어서 행복해요</div>
                              </div>
                            </a>
                          </span>
                          <span>
                            <a href="/review/sia">
                              <img src={process.env.PUBLIC_URL + "/image/Nav/review/06.png"} alt="도림, 시아 리뷰" />
                              <div className="menu_review_text">
                                <div style={{ lineHeight: "1.0416vw" }}>마음 맞는 디자이너와 같이 일할 수 </div>
                                <div>있는 곳으로 함께 옮기고 싶었어요</div>
                              </div>
                            </a>
                          </span>
                          <span>
                            <a href="/review/kijoon">
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
              <div className="menu-item" style={{ cursor: "default" }}>
                <div className='menu-button' style={{ display: "inline-block", paddingBottom: "1.5365vw" }}>
                </div>
              </div>
            </div>
          </div>
        </Desktop>
        <Mobile>
          <a href="/" style={{ margin: "0 auto", }}>
            <div className="logo">
              {this.state.navColor ?
                <img src={process.env.PUBLIC_URL + "/image/Nav/logo_black.svg"} className="logoView" alt="logo black"></img> :
                <img src={process.env.PUBLIC_URL + "/image/Nav/logo_white.svg"} className="logoView" alt="logo white"></img>}
            </div>
          </a>
          <div className="menu-wrap">
            <input type="checkbox" className="toggler" />
            <div className="hamburger">
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
                      <div style={{ color: "#ffffff", fontSize: "14px", textAlign: "center", marginTop: "32px", fontWeight: "500", marginBottom: "16px" }}>
                        <div style={{ width: "80%", marginBottom: "16px", height: "16px" }}>지금 바로 <span style={{ fontWeight: "bold" }}>로위와 함께</span>하세요!</div>
                        <a href="/request" style={{ color: "#ffffff", textAlign: "center" }} >
                          <div style={{ width: "229px", marginLeft: "35.5px", height: "46px", backgroundColor: "#008b53", lineHeight: "46px", textAlign: "center" }}>
                            <span style={{ fontWeight: 'bold', fontSize: "16px" }}>지원하기</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <li>
                      <a className="changeColor" href="/info">지점현황</a>
                    </li>
                    <li>
                      <div className="changeColor" onClick={this.ClickMember}>디자이너 혜택
                        <span>
                          {this.state.member ?
                            <img src={process.env.PUBLIC_URL + "/image/Nav/head_arr_bold.svg"} className="header_arrow" alt="아래방향 화살표" /> :
                            <img src={process.env.PUBLIC_URL + "/image/Nav/head_arr.svg"} className="header_arrow" alt="아래방향 화살표" />
                          }
                        </span>
                      </div>
                      {this.state.member ?
                        <div className="nav_bottom">
                          <div>
                            <a className="changeColor" href="/careplus">로위케어 +</a>
                          </div>
                          <div>
                            <a className="changeColor" href="/care">로위케어</a>
                          </div>
                        </div> : null}
                    </li>
                    <li>
                      <a className="changeColor" href="https://lowehair.kr/">시술예약</a>
                    </li>
                    <li>
                      <div className="changeColor" onClick={this.ClickReview}>디자이너 리뷰
                        <span>
                          {this.state.review ?
                            <img src={process.env.PUBLIC_URL + "/image/Nav/head_arr_bold.svg"} className="header_arrow" alt="아래방향 화살표" /> :
                            <img src={process.env.PUBLIC_URL + "/image/Nav/head_arr.svg"} className="header_arrow" alt="아래방향 화살표" />
                          }
                        </span>
                      </div>
                      {this.state.review ?
                        <div className="nav_bottom">
                          <div>
                            <a className="changeColor" href="/designers">로위 디자이너</a>
                          </div>
                          <div>
                            <div className="changeColor" onClick={this.ClickDReview}>디자이너 리뷰
                              <span>
                                {this.state.d_review ?
                                  <img src={process.env.PUBLIC_URL + "/image/Nav/head_arr_bold.svg"} className="header_arrow" alt="아래방향 화살표" /> :
                                  <img src={process.env.PUBLIC_URL + "/image/Nav/head_arr.svg"} className="header_arrow" alt="아래방향 화살표" />
                                }
                              </span>
                            </div>
                            {this.state.d_review ?
                              <div className="nav_bottom">
                                <div>
                                  <a href="/review/hyeri">자유롭게 노력한 만큼 보상이 나와요</a>
                                </div>
                                <div>
                                  <a href="/review/filip">나를 존중하면서 일할 수 있어요</a>
                                </div>
                                <div>
                                  <a href="/review/gyuhyun">걱정했지만 체계적이라 믿음이 가요</a>
                                </div>
                                <div>
                                  <a href="/review/woody">업무에만 집중할 수 있어 편안해요</a>
                                </div>
                                <div>
                                  <a href="/review/kijoon">모든 걸 스스로 결정할 수 있어요</a>
                                </div>
                                <div>
                                  <a href="/review/sia">마음 맞는 디자이너와 함께 해요</a>
                                </div>
                                <div>
                                  <a href="/review/yujine">자유로운 업무환경이 너무 행복해요</a>
                                </div>
                                <div>
                                  <a href="/review/2roon">로위팀의 지원은 기대 이상이에요!</a>
                                </div>
                              </div> : null}
                          </div>
                        </div> : null}
                    </li>
                    <li>
                      <div className="changeColor" onClick={this.ClickPromotion}>지원하기
                        <span>
                          {this.state.promotion ?
                            <img src={process.env.PUBLIC_URL + "/image/Nav/head_arr_bold.svg"} className="header_arrow" alt="아래방향 화살표" /> :
                            <img src={process.env.PUBLIC_URL + "/image/Nav/head_arr.svg"} className="header_arrow" alt="아래방향 화살표" />
                          }
                        </span>
                      </div>
                      {this.state.promotion ?
                        <div className="nav_bottom">
                          <div>
                            <a className="changeColor" href="/promotion/lowe5th">강남점(입점형)</a>
                          </div>
                          <div>
                            <a className="changeColor" href="/promotion/lowe6th">L7홍대점(채용형)</a>
                          </div>
                          <div>
                            <a className="changeColor" href="/request">바로 지원</a>
                          </div>
                        </div> : null}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Mobile>
      </header>
    );
  }
}
export default Header;