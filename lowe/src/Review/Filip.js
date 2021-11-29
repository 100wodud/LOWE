import { Component } from "react";
import "./Filip.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class Filip extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Filip_section">
                <Desktop>
                    <div>
                        <div>
                            <div className="Filip_title">
                                <div>홍대입구역점</div>
                                <div style={{ fontWeight: "bold" }}>원장 권필립</div>
                            </div>
                            <div style={{ float: "left", marginRight: "6.77083333vw", paddingBottom: "2vw" }}>
                                <div style={{ width: "25.3125vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Filip/01.png"} alt="필립 디자이너" />
                                </div>
                            </div>
                            <div style={{ marginBottom: "8.3333333vw" }}>
                                <div className="Filip_contents_title">
                                    <div>로위를 어떻게 선택하시게 되었나요?</div>
                                </div>
                                <div className="Filip_contents">
                                    <div style={{ marginBottom: "0.8vw" }}>일반 매장에서는 ‘대우를 받고 있지만 또 못 받고 있다’는 느낌을 받았어요. 여기서 제가 말하는 대우는 ‘제 삶에 대한 대우’를 말한 거고, 많은 미용인분들이 이해하실 것 같아요. 이렇게 계속 미용을 한다면 저는 즐기면서 일을 할 수 없을 거라고 판단했어요.</div>
                                    <div style={{ marginBottom: "0.8vw" }}>또 개인 매장을 차린다면 직접 미용을 하면서 동시에 운영을 같이 하기 때문에 놓치는 부분이 정말 많아요. 그래서 이런 걱정 모두를 덜어주는 곳이 로위였기 때문에 로위를 선택했어요.</div>
                                    <div style={{ marginBottom: "0.8vw" }}>오면서 내가 자리를 잡을 수 있을지 같은 고민이 컸는데, 로위팀 각 분야의 전문가가 계시고 이 분들의 업무가 그런일이잖아요? 디자이너를 성장시키고 자리잡을 수 있게 도와주는 것. 동시에 로위를 성장시키는 일이고 그 속에 제가 있고. 이 분들이 나를 가만히 방치하고 내버려두지는 않겠다.</div>
                                    <div>내가 잘만 따라간다면 나를 디자이너로서 성장시켜줄 수 있겠다는 믿음과 확신이 강하게 들었죠.</div>
                                </div>
                            </div>
                            <div style={{ float: "left", marginRight: "4.5291666vw", width: "20.9916666vw" }}>
                                <div className="Filip_contents_title">
                                    <div>로위에 관심있는</div>
                                    <div>디자이너들에게 하고싶은 말이</div>
                                    <div>있으신가요?</div>
                                </div>
                                <div className="Filip_contents">
                                    <div>개인적으로 계속 생각해왔던 거라 질문과 조금 다를 수 있는 답변이지만, 다른 미용인들이 </div>
                                    <div>현 상황에 불만 있으신 분들이 다소 있다고 생각해요.</div>
                                    <div>저는 ‘걱정’과 ‘불만’ 은 다른 거라고 생각하는데, ‘불만’보다는 좋은 방향을 위한 ‘걱정’으로 일을 했으면 좋겠어요.</div>
                                    <div>저는 그 걱정의 좋은 방향이 ‘로위’였다고 생각해요. 좋은 방향의 걱정으로 좋은 대우를 받고 일하셨으면 좋겠습니다(화이팅)</div>
                                </div>
                            </div>
                            <div style={{ marginBottom: "9.8958333vw", float: "left", paddingTop: "3vw" }}>
                                <div style={{ width: "36.9791666vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Filip/02.png"} alt="필립 디자이너" />
                                </div>
                            </div>

                            <div style={{ float: "left", marginRight: "2.1875vw" }}>
                                <div style={{ width: "35.9375vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Filip/03.png"} alt="필립 디자이너" />
                                </div>
                            </div>
                            <div style={{ marginBottom: "10.416666vw", width: "24.2vw", float: "left", paddingTop: "4vw" }}>
                                <div className="Filip_contents_title">
                                    <div>그 방향의 답이 로위라니 감사해요.</div>
                                    <div>그럼 로위에서</div>
                                    <div>어떤 점이 제일 만족하시나요?</div>
                                </div>
                                <div className="Filip_contents">
                                    <div>미용 생활을 오래 했지만, 미용인이 아닌 경영자가</div>
                                    <div> 운영하는 곳에서는 처음 일해봤어요. 오히려 가장 좋았던 부분이에요. </div>
                                    <div> 미용업계 경영인 아래 일했을 때에는 ‘아는 사람이 더하구나’ 라고 느낀적이 많았거든요. (웃음) 아! 그리고 다른 사람 눈치를 안봐도 되는, 저만의 룸이 있다는 것. 너무너무 좋아요.</div>
                                    <div>오픈되어 있으면, 경쟁구도도 심해지고 더 예민해지는데  </div>
                                    <div>제 룸에서 제 고객님과 더 소통하면서 마음 편히 시술하고 고객님들도 너무 만족하셔서 저도 같이 만족하고 있어요.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div>
                        <div>
                            <div className="Filip_title">
                                <div>홍대입구역점</div>
                                <div style={{ fontWeight: "bold" }}>원장 권필립</div>
                            </div>
                            <div>
                                <div className="Filip_contents_title">
                                    <div>로위를 어떻게 선택하시게 되었나요?</div>
                                </div>
                                <div className="Filip_contents">
                                    <div>일반 매장에서는 ‘대우를 받고 있지만 또 못 받고 있다’는 느낌을 받았어요. </div>
                                    <div style={{ marginBottom: "5.33333vw" }}>여기서 제가 말하는 대우는 ‘제 삶에 대한 대우’를 말한거고, 많은 미용인분들이 이해하실 것 같아요. 이렇게 계속 미용을 한다면 저는 즐기면서 일을 할 수 없을 거라고 판단했어요.</div>
                                    <div style={{ marginBottom: "10.6667vw" }}>또 개인 매장을 차린다면 직접 미용을 하면서 동시에 운영을 같이 하기때문에 놓치는 부분이 정말 많아요. 그래서 이런 걱정 모두를 덜어주는 곳이 로위였기 때문에 로위를 선택했어요.</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Filip/01.png"} alt="필립 디자이너" />
                                </div>
                            </div>

                            <div className="Filip_contents">
                                <div style={{ marginBottom: "5.33333vw" }}>오면서 내가 자리를 잡을 수 있을지 같은 고민이 컸는데, 로위팀 각 분야의 전문가가 계시고 이 분들의 업무가 그런일이잖아요? 디자이너를 성장시키고 자리잡을 수 있게 도와주는 것. 동시에 로위를 성장시키는 일이고 그 속에 제가 있고. 이 분들이 나를 가만히 방치하고 내버려두지는 않겠다.</div>
                                <div style={{ marginBottom: "10.6667vw" }}>내가 잘만 따라간다면 나를 디자이너로서 성장시켜줄 수 있겠다는 믿음과 확신이 강하게 들었죠.</div>
                            </div>

                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Filip/02.png"} alt="필립 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Filip_contents_title">
                                    <div>로위에 관심있는 디자이너들에게 하고싶은 말이 있으신가요?</div>
                                </div>
                                <div className="Filip_contents">
                                    <div>개인적으로 계속 생각해왔던 거라 질문과 조금 다를 수 있는 답변이지만, 다른 미용인들이 현 상황에 불만 있으신 분들이 다소 있다고 생각해요. </div>
                                    <div style={{ marginBottom: "10.6667vw" }}>저는 ‘걱정’과 ‘불만’ 은 다른 거라고 생각하는데, ‘불만’보다는 좋은 방향을 위한 ‘걱정’으로 일을 했으면 좋겠어요. 저는 그 걱정의 좋은 방향이 ‘로위’였다고 생각해요. 좋은 방향의 걱정으로 좋은 대우를 받고 일하셨으면 좋겠습니다(화이팅)</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Filip/03.png"} alt="필립 디자이너" />
                                </div>
                            </div>

                            <div>
                                <div className="Filip_contents_title">
                                    <div>그 방향의 답이 로위라니 감사해요.</div>
                                    <div> 그럼 로위에서 어떤 점이 제일 만족하시나요?</div>
                                </div>
                                <div className="Filip_contents">
                                    <div>미용 생활을 오래 했지만, 미용인이 아닌 경영자가 운영 하는 곳에서는 처음 일해봤어요. 오히려 가장 좋았던 부분이에요. </div>
                                    <div>미용업계 경영인 아래 일했을 때에는 ‘아는 사람이 더하구나’라고 느낀적이 많았거든요. (웃음) 아! 그리고 다른 사람 눈치를 안봐도 되는, 저만의 룸이 있다는 것. 너무너무 좋아요. </div>
                                    <div style={{ marginBottom: "21.3vw" }}>오픈되어 있으면, 경쟁구도도 심해지고 더 예민해지는데 제 룸에서 제 고객님과 더 소통하면서 마음 편히 시술하고 고객님들도 너무 만족하셔서 저도 같이 만족하고 있어요.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default Filip;

