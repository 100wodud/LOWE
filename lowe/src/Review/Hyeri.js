import { Component } from "react";
import "./Hyeri.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class Hyeri extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Hyeri_section">
                <Desktop>
                    <div>
                        <div>
                            <div style={{ float: "left", width: "19.25vw" }}>
                                <div className="Hyeri_title">
                                    <div>합정점</div>
                                    <div style={{ fontWeight: "bold" }}>원장 해리</div>
                                </div>
                            </div>
                            <div>
                                <div className="Hyeri_contents_title" style={{ float: "left", width: "41.0416vw", }}>
                                    <div>다른 디자이너에게 로위를 자랑한다면?</div>
                                </div>
                                <div className="Hyeri_contents">
                                    <div style={{ marginBottom: "4.16666666vw", width: "43.1875vw", float: "left" }}>
                                        <div>제 마음대로 스케줄 조절할 수 있는 자율 출퇴근 시스템이요. </div>
                                        <div>시간을 내가 확보할 수 있다는 점이 가장 만족하고 사실 솔직히 말하면 급여…? 인센티브가 좋죠(웃음). 결론적으로는 제가 원하는 시간에 일한 만큼 가져갈 수 있다는 부분이에요.</div>
                                    </div>
                                </div>
                                <div style={{ marginBottom: "9.375vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Hyeri/01.png"} alt="해리 디자이너" />
                                </div>

                            </div>
                            <div>
                                <div style={{ marginBottom: "6.25vw" }}>
                                    <div className="Hyeri_contents_title" style={{ width: "24.52vw", float: "left", paddingRight: "6.4vw" }}>
                                        <div>저번 컨설팅을 통해</div>
                                        <div>많이 바뀐 점이 있다고 들었어요.</div>
                                        <div className="Hyeri_contents" style={{ width: "25.82vw", float: "left", marginTop: "2.083vw", paddingRight: "0.61458vw" }}>
                                            <div >
                                                <div>일단 신규 고객 유입률이 정말 많아졌어요. </div>
                                                <div>제가 어떻게 해야 신규 고객님이 많이 오시는지에 대한 방향이 확실해졌어요. 사실 컨설팅하면서 많이 배웠거든요. </div>
                                                <div>예를 들면, 제가 주로 홍보하는 채널인 인스타그램에 어떻게 업로드하면 팔로워(고객님)들이 좋아하는지 알 수 있고 계속 올려보니 알고리즘 이해가 전보다 쉬워졌어요. 전에는 인스타그램을 몰라서 채널 관리를 잘 안 했는데 컨설팅하고 나서 확실히 알 수 있었어요. 지금은 요즘 너무 바빠져서  </div>
                                                <div>매일 관리를 못하고 있는데 꾸준히…꾸준히…하겠습니다. (웃음)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: "31.25vw", float: "left" }}>
                                        <img src={process.env.PUBLIC_URL + "/image/Review/Hyeri/02.png"} alt="해리 디자이너" />
                                    </div>
                                    <div style={{ width: "34.375vw", float: "left", marginBottom: "8.75vw", marginLeft: "5.3125vw", marginTop: "-1.9895833vw" }}>
                                        <img src={process.env.PUBLIC_URL + "/image/Review/Hyeri/03.png"} alt="해리 디자이너" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="Hyeri_contents" >
                                    <div style={{ float: "left", marginBottom: "10.4166666vw" }}>
                                        <div>
                                            <div className="Hyeri_contents_title" style={{ width: "100%" }}>
                                                <div>공유미용실에 대해 잘 모르는 분들에게 하고 싶은 말이 있을까요?</div>
                                            </div>
                                            <div>일반적으로 제일 걱정되시는 부분부터 말씀드리고 싶어요. 사실 인턴이 없다는 게 힘들 수 도 있지만 또 인턴이 없기 때문에</div>
                                            <div>스스로를 테스트해볼 수 있는 기회가 될 수 있다 생각해요. 물론 처음엔 두려우실 수도 있어요. 일반 매장에서 받는 부당한 대우나 스트레스가 싫고, </div>
                                            <div>창업은 부담스럽다면 내가 노력한만큼의 보상이 로위에서는 무조건 나오니까 언젠가는 생각해볼 길이라고 생각해요.</div>
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
                            <div className="Hyeri_title">
                                <div>합정점</div>
                                <div style={{ fontWeight: "bold" }}>원장 해리</div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Hyeri/01.png"} alt="해리 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Hyeri_contents_title">
                                    <div>다른 디자이너에게 로위를 자랑한다면?</div>
                                </div>
                                <div className="Hyeri_contents">
                                    <div>제 마음대로 스케줄 조절할 수 있는 자율 출퇴근 시스템 이요.</div>
                                    <div style={{ marginBottom: "10.6667vw" }}> 시간을 내가 확보할 수 있다는 점이 가장 만족하고 사실 솔직히 말하면 급여…? 인센티브가 좋죠(웃음). 결론적으로는 제가 원하는 시간에 일한 만큼 가져갈 수 있다는 부분이에요.</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Hyeri/02.png"} alt="해리 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Hyeri_contents_title">
                                    <div>저번 컨설팅을 통해</div>
                                    <div> 많이 바뀐 점이 있다고 들었어요.</div>
                                </div>
                                <div className="Hyeri_contents">
                                    <div>일단 신규 고객 유입률이 정말 많아졌어요. </div>
                                    <div style={{ marginBottom: "10.6667vw" }}>제가 어떻게 해야 신규 고객님이 많이 오시는지에 대한 방향이 확실해졌어요. 사실 컨설팅하면서 많이 배웠거든요. 예를 들면, 제가 주로 홍보하는 채널인 인스타그램에 어떻게 업로드하면 팔로워(고객님)들이 좋아하는지 알 수 있고 계속 올려보니 알고리즘 이해가 전보다 쉬워졌어요. 전에는 인스타그램을 몰라서 채널 관리를 잘 안 했는데 컨설팅하고 나서 확실히 알 수 있었어요. 지금은 요즘 너무 바빠져서 매일 관리를 못하고 있는데 꾸준히…꾸준히…하겠습니다. (웃음)</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Hyeri/03.png"} alt="해리 디자이너" />
                                </div>
                            </div>

                            <div>
                                <div className="Hyeri_contents_title">
                                    <div>공유미용실에 대해 잘 모르는 분들에게</div>
                                    <div>하고 싶은 말이 있을까요?</div>
                                </div>
                                <div className="Hyeri_contents">
                                    <div style={{ marginBottom: "21.3vw" }}>일반적으로 제일 걱정되시는 부분부터 말씀드리고 싶어요. 사실 인턴이 없다는 게 힘들 수 도 있지만 또 인턴이 없기 때문에 스스로를 테스트해볼 수 있는 기회가 될 수 있다 생각해요. 물론 처음엔 두려우실 수도 있어요. 일반 매장에서 받는 부당한 대우나 스트레스가 싫고, 창업은 부담스럽다면 내가 노력한만큼의 보상이 로위에서는 무조건 나오니까 언젠가는 생각해볼 길이라고 생각해요.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default Hyeri;

