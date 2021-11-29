import { Component } from "react";
import "./Sia.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class Sia extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Sia_section">
                <Desktop>
                    <div>
                        <div>
                            <div>
                                <div className="Sia_title">
                                    <div>홍대입구역점</div>
                                    <div style={{ fontWeight: "bold" }}>원장 도림, 시아</div>
                                </div>
                            </div>
                            <div>
                                <div className="Sia_contents_title">
                                    <div>로위에서 유일한 커플디자이너세요. 어떻게 같이 오시게 되셨나요?</div>
                                </div>
                                <div className="Sia_contents">
                                    <div style={{ width: "30.625vw", marginRight: "1.25vw", float: "left", paddingBottom: "4.1666666vw" }}>
                                        <div style={{ fontWeight: "bold" }}>원장 시아</div>
                                        <div>전 매장에서는 비밀연애여서, 휴무도 같이 맞추면서 남의 눈치도 보지 않는 자유로운 곳에서 일하는 걸 원해서 오게 되었고, 저희는 확신이 있었어요. 둘이 함께하면 저희 기준의 매출은 충분히 할 수 있다는걸요. 위에서 강요하면서 스트레스 주는 사람이 없으니, 둘만의 경영방식을 적용할 수 있다는 점이 가장 컸던 것 같아요. 추후에 같이 매장을 차릴 계획이 있기 때문에 그전에 로위에서 우리를 테스트해 볼 수 있다고 생각이 들어서 더 마음먹은 것 같아요!</div>
                                    </div>
                                    <div style={{ width: "30.625vw", float: "left", paddingBottom: "4.1666666vw" }}>
                                        <div style={{ fontWeight: "bold" }}>원장 도림</div>
                                        <div>제가 로위에 함께 가길 더 원했어요. 같이 일할 때 일하고, 쉴 때 같이 쉴 수 있다는 장점이 있고, 일반 매장과 달리 같이 이동이 가능했고요. 또 후에 같이 매장을 차릴 계획이 있기 때문에 재고관리나 유통 파악 등 전체적인 흐름을 미리 알고 싶어서 온 것도 있어요. 그래서 인턴이 없으니까 혼자서 감당하는 것보단 같이 가서 서로 도우면서 하면 좋겠다는 생각이 들었고 둘의 시너지를 생각해서 오게 되었습니다.</div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginBottom: "6.25vw", float: "left" }}>
                                <div style={{ width: "100%" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Sia/01.png"} alt="시아, 도림 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div style={{ marginBottom: "6.25vw" }}>
                                    <div className="Sia_contents_title">
                                        <div>그래도 서로 만족하시는 점이나 고민이 됐던 부분은 다를 것 같아요.</div>
                                    </div>
                                    <div className="Sia_contents">
                                        <div>
                                            <div style={{ fontWeight: "bold" }}>원장 시아</div>
                                        </div>
                                        <div style={{ width: "30.625vw", marginRight: "1.25vw", float: "left", paddingBottom: "4.1666666vw" }}>
                                            <div>물론 매출에 대한 고민이 가장 컸죠. 신규유입이 잘 될까? 그리고 그 때는 마케팅 활성화가 안되었던 상태였고, 활성화되는데 까지 적지 않은 시간이 걸리다 보니 자리잡힐 때까지의 기간이 걱정됐어요. 전에 일하던 매장이 너무 바쁘고 저보다 인턴의 손을 더 많이 타게되는 환경이라 오히려 제가 만족하지 못했어요.</div>
                                        </div>
                                        <div style={{ width: "30.625vw", float: "left", paddingBottom: "4.1666666vw" }}>
                                            <div style={{ fontWeight: "bold" }}></div>
                                            <div>지금은 일대일로 처음부터 끝까지 제가 하다보니 고객님들의 만족도가 높아져서 점점 단골 고객님이 생기더라고요!</div>
                                            <div>그리고 책임감! 사실 다르게 말하면 부담감이지만 정말 한만큼 가져갈 수 있는 시스템이다보니 책임감이 많아지는 것 같아요. 무거운 만족도랄까 (웃음)</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="Sia_contents_title">
                                    <div style={{ width: "50%", float: "left" }}>
                                        <img src={process.env.PUBLIC_URL + "/image/Review/Sia/02.png"} alt="시아, 도림 디자이너" />
                                    </div>
                                    <div style={{ width: "50%", float: "left", paddingBottom: "4.1666666vw" }}>
                                        <img src={process.env.PUBLIC_URL + "/image/Review/Sia/03.png"} alt="시아, 도림 디자이너" />
                                    </div>
                                </div>
                                <div className="Sia_contents" >
                                    <div >
                                        <div style={{ fontWeight: "bold" }}>원장 도림</div>
                                    </div>
                                    <div style={{ width: "30.625vw", marginRight: "1.25vw", float: "left" }}>
                                        <div>저 역시도 신규 유입이 가장 큰 고민이었어요. 로위 브랜드를 보고 오시는 손님이 있을지, 이전 매장 단골 고객님들께서 로위로 따라 와주실까 이런 부분이 가장 컸어요.</div>
                                    </div>
                                    <div style={{ width: "30.625vw", float: "left" }}>
                                        <div style={{ fontWeight: "bold" }}></div>
                                        <div>나만의 룸이 있다는게 가장 좋습니다. 그리고 원래 디자이너 혼자 마케팅을 해야하는건데 본사측이랑 상의도 할 수 있고 궁금한 부분에 물어볼 수 있는 분들이 계시다는게 좋은 것 같아요.</div>
                                        <div>제가 홍보를 돌리기도 하지만, 본사에서도 같이 홍보해줘서 너무 </div>
                                        <div>만족합니다.</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="Sia_contents" >
                                    <div style={{ float: "left", paddingTop: "6.25vw" }}>
                                        <div className="Woody_contents_title">
                                            <div>같은 곳에서 일하고 함께해서 좋은 점과 안 좋은 점이 있을까요?(웃음)</div>
                                        </div>
                                        <div style={{ width: "30.625vw", marginRight: "1.25vw", float: "left", paddingBottom: "10.4166666vw" }}>
                                            <div style={{ fontWeight: "bold" }}>원장 시아</div>
                                            <div>제가 바쁘다면 인턴보다 도림원장님께 더 믿고 맡길 수 있다는 점이요. 서로의 고객을 잘 알기 때문에 보다 더 순탄하게 갈 수 있어 좋아요. 로위에서 같이 일을 하니까 둘이 업무 미팅을 하고 생산적인 이야기를 많이 하죠. 이전 매장에서는 욕하면서 서로 회포 푸는 느낌이었다면, 지금은 으쌰 으쌰 잘해보자 동기부여 다지는 느낌이 더 커요. 그렇지만 역시나 같이 일하는 동료이자 연인이다 보니 사적인 감정이 완벽히 배제될 수 없어서 공적인 상황에서 다소 힘든 점이 있을 수 있다는 게 단점같아요.</div>
                                        </div>
                                        <div style={{ width: "30.625vw", float: "left" }}>
                                            <div style={{ fontWeight: "bold" }}>원장 도림</div>
                                            <div>기댈 수 있고, 바쁠 때 서로 편하게 도와달라고도 할 수 있다는 점! 하루 종일 같이 있다 보니까 사소한 것까지 모두 알고 힘든 부분을 서로 공유할 수 있는 게 가장 좋죠. 그렇지만 퇴근하고 나서도 일 얘기를 매일 하다 보면 어느 순간 진절머리가 날 수 있거든요. 이런 건 서로 조심해야겠죠(웃음)</div>
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
                            <div className="Sia_title">
                                <div>홍대입구역점</div>
                                <div style={{ fontWeight: "bold" }}>원장 도림, 시아</div>
                            </div>
                            <div>
                                <div className="Sia_contents_title">
                                    <div>로위에서 유일한 커플디자이너세요. </div>
                                    <div>어떻게 같이 오시게 되셨나요?</div>
                                </div>
                                <div className="Sia_contents">
                                    <div style={{ fontWeight: "bold" }}>원장 시아 </div>
                                    <div style={{ marginBottom: "5.3333vw" }}>전 매장에서는 비밀연애여서, 휴무도 같이 맞추면서 남의 눈치도 보지 않는 자유로운 곳에서 일하는 걸 원해서 오게 되었고, 저희는 확신이 있었어요. 둘이 함께하면 저희 기준의 매출은 충분히 할 수 있다는걸요. 위에서 강요 하면서 스트레스 주는 사람이 없으니, 둘만의 경영방식을 적용할 수 있다는 점이 가장 컸던 것 같아요. 추후에 같이 매장을 차릴 계획이 있기때문에 그전에 로위에서 우리를 테스트해 볼 수 있다고 생각이 들어서 더 마음먹은 것 같아요!</div>
                                    <div style={{ fontWeight: "bold" }}>원장 도림 </div>
                                    <div style={{ marginBottom: "10.6667vw" }}>제가 로위에 함께 가길 더 원했어요. 같이 일할 때 일하고 , 쉴 때 같이 쉴 수 있다는 장점이 있고, 일반 매장과 달리 같이 이동이 가능했고요. 또 후에 같이 매장을 차릴 계획이 있기 때문에 재고관리나 유통 파악 등 전체적인 흐름을 미리 알고 싶어서 온 것도 있어요. 그래서 인턴이 없으니까 혼자서 감당하는 것보단 같이 가서 서로 도우면서 하면 좋겠다는 생각이 들었고 둘의 시너지를 생각해서 오게 되었습니다.</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Sia/01.png"} alt="시아, 도림 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Sia_contents_title">
                                    <div>그래도 서로 만족하시는 점이나 </div>
                                    <div>고민이 됐던 부분은 다를 것 같아요.</div>
                                </div>
                                <div className="Sia_contents">
                                    <div style={{ fontWeight: "bold" }}>원장 시아 </div>
                                    <div>원장 시아 물론 매출에 대한 고민이 가장 컸죠. 신규유입이 잘 될까 ? 그리고 그 때는 마케팅 활성화가 안되었던 상태였고, 활성화되는데까지 적지 않은 시간이 걸리다 보니 자리잡힐 때까지의 기간이 걱정됐어요. </div>
                                    <div style={{ marginBottom: "5.3333vw" }}>전에 일하던 매장이 너무 바쁘고 저보다 인턴의 손을 더 많이 타게되는 환경이라 오히려 제가 만족하지 못했어요.</div>
                                    <div>지금은 일대일로 처음부터 끝까지 제가 하다보니 고객님 들의 만족도가 높아져서 점점 단골 고객님이 생기더라고요!</div>
                                    <div style={{ marginBottom: "10.6667vw" }}>그리고 책임감! 사실 다르게 말하면 부담감이지만 정말 한만큼 가져갈 수 있는 시스템이다보니 책임감이 많아지는 것 같아요. 무거운 만족도랄까(웃음)</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Sia/02.png"} alt="시아, 도림 디자이너" />
                                </div>
                            </div>

                            <div>
                                <div className="Sia_contents">
                                    <div style={{ fontWeight: "bold" }}>원장 도림 </div>
                                    <div style={{ marginBottom: "5.3333vw" }}>저 역시도 신규 유입이 가장 큰 고민이었어요. 로위 브랜드를 보고 오시는 손님이 있을지, 이전 매장 단골 고객님 들께서 로위로 따라 와주실까 이런 부분이 가장 컸어요.</div>
                                    <div style={{ marginBottom: "10.6667vw" }}>나만의 룸이 있다는게 가장 좋습니다. 그리고 원래 디자이너 혼자 마케팅을 해야하는건데 본사측이랑 상의도 할 수 있고 궁금한 부분에 물어볼 수 있는 분들이 계시다는게 좋은 것 같아요. 제가 홍보를 돌리기도 하지만, 본사에서도 같이 홍보해줘서 너무 만족합니다.</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Sia/03.png"} alt="시아, 도림 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Sia_contents_title">
                                    <div>같은 곳에서 일하고 함께해서 </div>
                                    <div>좋은 점과 안 좋은 점이 있을까요?(웃음)</div>
                                </div>
                                <div className="Sia_contents">
                                    <div style={{ fontWeight: "bold" }}>원장 시아 </div>
                                    <div style={{ marginBottom: "5.3333vw" }}>제가 바쁘다면 인턴보다 도림원장님께 더 믿고 맡길 수 있다는 점이요. 서로의 고객을 잘 알기 때문에 보다 더 순탄하게 갈 수 있어 좋아요. 로위에서 같이 일을 하니까 둘이 업무 미팅을 하고 생산적인 이야기를 많이하죠. 이전 매장에서는 욕하면서 서로 회포 푸는 느낌이었다면, 지금은 으쌰으쌰 잘해보자 동기부여 다지는 느낌이 더 커요. 그렇지만 역시나 같이 일하는 동료이자 연인이다 보니 사적인 감정이 완벽히 배제될 수 없어서 공적인 상황에서 다소 힘든 점이 있을 수 있다는 게 단점같아요.</div>
                                    <div style={{ fontWeight: "bold" }}>원장 도림 </div>
                                    <div style={{ marginBottom: "21.3vw" }}>기댈 수 있고, 바쁠 때 서로 편하게 도와달라고도 할 수 있다는 점! 하루 종일 같이 있다 보니까 사소한 것까지 모두 알고 힘든 부분을 서로 공유할 수 있는 게 가장 좋죠. 그렇지만 퇴근하고 나서도 일 얘기를 매일 하다 보면 어느 순간 진절머리가 날 수 있거든요. 이런 건 서로 조심해 야겠죠(웃음)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default Sia;

