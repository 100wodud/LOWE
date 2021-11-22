import { Component } from "react";
import "./Eroon.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class Eroon extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Eroon_section">
                <Desktop>
                    <div>
                        <div>
                            <div style={{ float: "left", width: "21.25vw" }}>
                                <div className="Eroon_title">
                                    <div>합정점</div>
                                    <div style={{ fontWeight: "bold" }}>원장 이룬</div>
                                </div>
                            </div>
                            <div>
                                <div className="Eroon_contents_title" style={{ float: "left", width: "41.0416vw", }}>
                                    <div>저희도 궁금해요. 로위를 선택하신 이유!</div>
                                </div>
                                <div className="Eroon_contents">
                                    <div style={{ marginBottom: "4.16666666vw", width: "40.1875vw", float: "left" }}>
                                        <div>일했던 이전 매장과 거리상으로 가까웠고 합정역 바로 앞이여서 온 부분도 있어요. </div>
                                        <div>제가 서울대입구역 근처에서도 오래 일했는데, 같은 2호선 라인이라 접근성이 좋거든요(웃음) 그리고 사실 공유미용실 하면 이미 많은 디자이너들이 로위를 가장 먼저 생각하는 것 같아요. 저도 그랬었고요!</div>
                                    </div>
                                </div>
                                <div style={{ marginBottom: "9.375vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Eroon/01.png"} alt="이룬 디자이너" />
                                </div>

                            </div>
                            <div>
                                <div style={{ marginBottom: "6.25vw" }}>
                                    <div className="Eroon_contents_title" style={{ width: "24.82vw", float: "left", paddingRight: "6.4vw" }}>
                                        <div>로위에서 제일 만족하고  </div>
                                        <div>신기한 부분이 있으시다고 들었어요.</div>
                                        <div className="Eroon_contents" style={{ width: "25.82vw", float: "left", marginTop: "2.083vw", paddingRight: "1.61458vw" }}>
                                            <div >
                                                <div>로위에서는 월마다 프로모션을 진행하는데, </div>
                                                <div style={{ marginBottom: "1.041666vw" }}>이 때 프로모션을 어떻게 하면 좋을지 저에게 맞는 기획부터 디자인, 광고까지 해주는 게 신기했어요.</div>
                                                <div>메뉴명이나 이런 것도 컨설팅을 통해 옆에서 계속 잡아준다는게 가장 좋았던 부분이고요. 제가 기대했던 것 보다 로위에서 도움을 주는게 더 많아요.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: "31.25vw", float: "left" }}>
                                        <img src={process.env.PUBLIC_URL + "/image/Review/Eroon/02.png"} alt="이룬 디자이너" />
                                    </div>
                                    <div style={{ width: "31.25vw", float: "left", marginBottom: "10.9375vw", marginLeft: "5.3125vw", marginTop: "-5.9895833vw" }}>
                                        <img src={process.env.PUBLIC_URL + "/image/Review/Eroon/03.png"} alt="이룬 디자이너" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="Eroon_contents" >
                                    <div style={{ float: "left" }}>
                                        <div style={{ width: "29.4791666vw", marginRight: "2.395833vw", float: "left" }}>
                                            <div className="Eroon_contents_title" style={{ width: "100%" }}>
                                                <div>원장님은 컬러 열정이 가득하신 것 같아요.</div>
                                                <div>로위가 이 부분에 많은 도움이 되고 있나요?</div>
                                            </div>
                                            <div>이번에 로위에서 교육비 지원 신청을 받고 채택돼서 교육비 지원받았어요. 대다수 미용인들은 모두 교육을 듣고 싶어 하는데 비싸니까 많이 부담되거든요. 근데 로위에서 교육비 90%를 지원해주고 또 교육내용을 원장님들과 공유하기도 하고 원장님들과 스터디도 하고 서로 서로 좋은 시스템인 것 같아요!</div>
                                        </div>
                                        <div style={{ width: "30.104166vw", float: "left" }}>
                                            <div className="Eroon_contents_title" style={{ width: "100%" }}>
                                                <div>로위 멤버십 비용에 대해</div>
                                                <div>많이 궁금해하시는 분들을 위해.</div>
                                            </div>
                                            <div style={{ marginBottom: "1.041666vw" }}>솔직히 시세를 어느 정도 다들 알고 계시니까 조금 비싼 것 같이 느껴지는 것 같아요. 물론 단순 ‘월세’로만 생각했을 땐 비싸게 느껴질 수 있죠. 하지만 미용 기계라든지, 로위에서 서포트해주시는 비용이라든지 기타 여러 가지 비용을 생각하면 비싼 건 아니라고 생각해요.(물론 처음 투어했을 때에는 룸이 비어있으니까 그런 생각이 들긴 했었어요(웃음))</div>
                                            <div>아, 그리고 인턴이 있는 매장과 자꾸 비교하면, 안된다고 생각해요. 로위는 실수령액만 놓고 봐도 일반 매장의 2배 가까이 되니까 일반 매장과 비슷할 수가 없거든요. 낮은 매출이라면 비슷하다고 느낄 수도 있을 것 같지만, 로위에서 많이 도와주기 때문에 본인이 매출이나 성장에 대해 욕심이 있다면 잘 따라만 가도, 잘 될 거라 생각해요!</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ width: "25.3125vw", float: "left", marginBottom: "10.41666666vw", marginRight: "6.5625vw" }}>
                                            <img src={process.env.PUBLIC_URL + "/image/Review/Eroon/04.png"} alt="이룬 디자이너" />
                                        </div>
                                        <div style={{ width: "30.36458333vw", float: "left", paddingTop: "9.5375vw" }}>
                                            <div className="Eroon_contents_title" style={{ width: "100%" }}>
                                                <div>이룬 원장님에게 로위팀이란?</div>
                                            </div>
                                            <div style={{ marginBottom: "1.041666vw" }}>제가 로위에 온 지 둘째 달부터 매출이 터질 수 있었던 것도 팀장님이 이렇게 해보는 건 어떤지 아이디어 제안해 주시고, 매장에서도 점장, 매니저님께 여쭤보면 이런 게 좋겠다고 의견주시고, 마케터분도 그걸 홍보에 어떻게 반영할 수 있는지도 잘 알려주시고 등 오히려 이전 매장에서의 최고 매출보다 로위에 와서 혼자 하는데도 매출이 이렇게 잘 나오게끔 초반부터 도와주셔서 할 수 있었던 거 같아요! 그래서 로위팀은 정말 디자이너를 많이 도와주려고 하는구나 확실히 알 수 있었어요.</div>
                                            <div>저 이제 3개월 넘었으니 컨설팅 한 번 더 할 수 있는 거죠?</div>
                                            <div>로위팀 빨리 잡아주세요ㅠㅠ</div>
                                            <div>혼자 어디까지 할 수 있는지 로위 최고 매출은 합정점에서 나오게 하고 싶어요!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div>
                        <div>
                            <div className="Eroon_title">
                                <div>합정점</div>
                                <div style={{ fontWeight: "bold" }}>원장 이룬</div>
                            </div>
                            <div>
                                <div className="Eroon_contents_title">
                                    <div>저희도 궁금해요. 로위를 선택하신 이유!</div>
                                </div>
                                <div className="Eroon_contents">
                                    <div>일했던 이전 매장과 거리상으로 가까웠고 합정역 바로 앞이여서 온 부분도 있어요.</div>
                                    <div>제가 서울대입구역 근처에서도 오래 일했는데, 같은 2호선 라인이라 접근성이 좋거든요(웃음) </div>
                                    <div>그리고 사실 공유미용실 하면 이미 많은 디자이너들이 로위를 가장 먼저 생각하는 것 같아요. </div>
                                    <div style={{ marginBottom: "10.6667vw" }}>저도 그랬었고요!</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Eroon/01.png"} alt="이룬 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Eroon_contents_title">
                                    <div>로위에서 제일 만족하고</div>
                                    <div> 신기한 부분이 있으시다고 들었어요.</div>
                                </div>
                                <div className="Eroon_contents">
                                    <div style={{ marginBottom: "5.3333vw" }}>로위에서는 월마다 프로모션을 진행하는데, 이 때 프로모션을 어떻게 하면 좋을지 저에게 맞는 기획부터 디자인, 광고까지 해주는 게 신기했어요.</div>
                                    <div style={{ marginBottom: "10.6667vw" }}>메뉴명이나 이런 것도 컨설팅을 통해 옆에서 계속 잡아준다는게 가장 좋았던 부분이고요. 제가 기대했던 것 보다 로위에서 도움을 주는게 더 많아요.</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Eroon/02.png"} alt="이룬 디자이너" />
                                </div>
                            </div>

                            <div>
                                <div className="Eroon_contents_title">
                                    <div>원장님은 컬러 열정이 가득하신 것 같아요. </div>
                                    <div>로위가 이 부분에 많은 도움이 되고 있나요?</div>
                                </div>
                                <div className="Eroon_contents">
                                    <div style={{ marginBottom: "10.6667vw" }}>이번에 로위에서 교육비 지원 신청을 받고 채택돼서 교육비 지원받았어요. 대다수 미용인들은 모두 교육을 듣고 싶어 하는데 비싸니까 많이 부담되거든요. 근데 로위에서 교육비 90%를 지원해주고 또 교육내용을 원장님들과 공유하기도 하고 원장님들과 스터디도 하고 서로 서로 좋은 시스템인 것 같아요!</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Eroon/03.png"} alt="이룬 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Eroon_contents_title">
                                    <div>로위 멤버십 비용에 대해</div>
                                    <div>많이 궁금해하시는 분들을 위해.</div>
                                </div>
                                <div className="Eroon_contents">
                                    <div>솔직히 시세를 어느 정도 다들 알고 계시니까 조금 비싼 것 같이 느껴지는 것 같아요. 물론 단순 ‘월세’로만 생각 했을 땐 비싸게 느껴질 수 있죠. </div>
                                    <div style={{ marginBottom: "5.3333vw" }}>하지만 미용 기계라든지, 로위에서 서포트해주시는 비용 이라든지 기타 여러가지 비용을 생각하면 비싼 건 아니라고 생각해요.(물론 처음 투어했을때에는 룸이 비어있으니까 그런 생각이 들긴 했었어요(웃음))</div>
                                    <div style={{ marginBottom: "10.6667vw" }}>아, 그리고 인턴이 있는 매장과 자꾸 비교하면, 안된다고 생각해요. 로위는 실수령액만 놓고 봐도 일반 매장의 2배 가까이 되니까 일반 매장과 비슷할 수가 없거든요. 낮은 매출이라면 비슷하다고 느낄 수도 있을 것 같지만, 로위에서 많이 도와주기 때문에 본인이 매출이나 성장에 대해 욕심이 있다면 잘 따라만 가도, 잘 될 거라 생각해요!</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Eroon/04.png"} alt="이룬 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Eroon_contents_title">
                                    <div>이룬 원장님에게 로위팀이란?</div>
                                </div>
                                <div className="Eroon_contents">
                                    <div style={{ marginBottom: "5.3333vw" }}>제가 로위에 온 지 둘째 달부터 매출이 터질 수 있었던 것 도 팀장님이 이렇게 해보는 건 어떤지 아이디어 제안해 주시고, 매장에서도 점장, 매니저님께 여쭤보면 이런게 좋겠다고 의견주시고, 마케터분도 그걸 홍보에 어떻게 반 영할 수 있는지도 잘 알려주시고 등 오히려 이전 매장에서의 최고매출보다 로위에 와서 혼자 하는데도 매출이 이렇게 잘 나오게끔 초반부터 도와주셔서 할 수 있었던 거 같아요! 그래서 로위팀은 정말 디자이너를 많이 도와주려고 하는구나 확실히 알 수 있었어요.</div>
                                    <div style={{ marginBottom: "21.3vw" }}>저 이제 3개월 넘었으니 컨설팅 한 번 더 할 수 있는 거죠 ? 로위팀 빨리 잡아주세요ㅠㅠ 혼자 어디까지 할 수 있는지 로위 최고 매출은 합정점에서 나오게 하고 싶어요!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default Eroon;

