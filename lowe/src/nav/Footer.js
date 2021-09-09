import './Header.css';
import { Component } from 'react';
import "./Footer.css"

class Footer extends Component {
    constructor(){
        super();

        this.state = {
           accordion: true
        }
    }
    clickAccordion = () => {
        this.setState({accordion: !this.state.accordion})
    }

  render() {
    let accordion = this.state.accordion ? "accordion_desc" : "accordion_incr";
    return (
          <footer className="footer">
            <div className="footer_wrap">
                <div className="accordion_wrap">
                    <div className="accordion_title">
                        <span className="span">(주)벤틀스페이스 사업자 정보</span>
                        <div className="img_span">
                            <img src="image/nav/foo_arr.png" alt="아래방향 화살표" className="img" onClick={this.clickAccordion} />
                        </div>
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
                        <dd className="dd">02-336-1226 | 마포구 양화로64 서교제일빌딩 지하1층</dd>
                    </dl>
                    <dl className="dl">
                        <dt className="dt">홍대입구역</dt>
                        <dd className="dd"> 02-332-2922 | 마포구 양화로 125 경남관광빌딩 4층</dd>
                    </dl>
                    <span className="span copy_text eng">© Copyright BENTLESPACE All rights reserved.</span>

                    <div className="sns_warp">
                        <div className="insta_box img_box">
                            <a href="https://www.instagram.com/lo__we__/?hl=ko" target="blank" className="link">
                                <img src="image/nav/insta_icon.png" alt="인스타그램모양 아이콘" className="img" />
                            </a>
                        </div>
                        <div className="blog_box img_box">
                            <a href="https://blog.naver.com/bentlespace" target="blank" className="link">
                                <img src="image/nav/blog_icon.png" alt="네이버 블로그 모양 아이콘" className="img" />
                            </a>
                        </div>
                        <div className="youtue_box img_box">
                            <a href="https://www.youtube.com/channel/UC68a6jlJDg0cy6_bL8udLig" target="blank" className="link">
                                <img src="image/nav/youtube_icon.png" alt="유튜브 모양 아이콘" className="img" />
                            </a>
						</div>
					</div>
				</div>
			</div>
      </footer >
    );
  }
}
export default Footer;