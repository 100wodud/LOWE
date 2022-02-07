import { Component } from "react";
import "./Kijoon.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class Kijoon extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Kijoon_section">
                <Desktop>
                    <div>
                        <div>
                            <div style={{ float: "left", marginRight: "6.77083333vw" }}>
                                <div className="Kijoon_title">
                                    <div>홍대입구역점</div>
                                    <div style={{ fontWeight: "bold" }}>원장 기준</div>
                                </div>
                                <div style={{ width: "25.3125vw", height: "55.6458vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Kijoon/01.png"} alt="기준 디자이너" />
                                </div>
                            </div>
                            <div style={{ marginBottom: "4.16666666vw" }}>
                                <div className="Kijoon_contents_title">
                                    <div>컨설팅 후 요즘 기준원장님 매출신장률이 </div>
                                    <div>엄청 높아졌어요.</div>
                                </div>
                                <div className="Kijoon_contents">
                                    <div style={{ marginBottom: "1.041667vw" }}>다른 프랜차이즈 미용실에서는 연 2회 정도 마케팅 교육과 관련 아이디어를 제시해 줘요. 그렇지만 공유미용실은 스스로 해야 한다는 부담감이 있고, 일반 디자이너는 관련 데이터를 보는 게 익숙지 않기 때문에 로위에서의 컨설팅이 엄청 도움 돼요!</div>
                                    <div>같은 경우에는, 컨설팅 후에 아이디어나 개선점을 바로 반영하고, 동시에 로위에서도 계속 도와주시니까 바로 타깃한 연령층과 스타일로 예약이 잡히 더라고요. 그게 매우 신기했어요. 예전부터 계획했던 내용이랑 그에 관한 피드백이 바로 오는 부분이 놀라웠고, 심지어 그 피드백 바탕으로 매출로 나타나니까 컨설팅의 중요성을 한 번 더 깨닫게 된 것 같아요.</div>
                                    <div>컨설팅으로 제 방향을 찾았으니, 앞으로도 꾸준히 유지하는 건 제 몫이죠!</div>
                                </div>
                            </div>
                            <div style={{ marginBottom: "8.85416666vw" }}>
                                <div className="Kijoon_contents_title">
                                    <div>로위 1호점때부터 함께 하셨는데 </div>
                                    <div>초반이다보니 주변에서 공유미용실에 대한 </div>
                                    <div>오해가 들렸을 것 같아요.</div>
                                </div>
                                <div className="Kijoon_contents" >
                                    <div>미용업계의 부당한 시스템에 갇혀 생각하는 분들이 보통 ‘수수료를 떼면 일반 매장과 다를 게 없다’이런 오해를 하시는 것 같아요. 또 공유미용실에 망설이거나 좋지 않은 시선으로 바라보는 디자이너들은 그 틀에 갇혀 </div>
                                    <div style={{ marginBottom: "1.041667vw" }}>지내는 게 익숙해져서 그럴 거예요. 부당한 건데도요.</div>
                                    <div>그 틀을 깨고 막상 와서 겪어보면 아니라는 걸 알 수밖에 없어요. </div>
                                    <div>일반 미용실 운영자들이 공유미용실 시스템(높은 인센티브, 자율 출퇴근 등)</div>
                                    <div style={{ marginBottom: "1.041667vw" }}>을 싫어하니까 주입식으로 전달하는 것 같아요. 로위의 모든 시스템을 봤을 때 디자이너한테 이만큼 좋은 건 없었다고 생각해요!</div>
                                    <div>공유미용실 시스템이 메리트가 있으려면, 로위처럼 디자이너를 위한 브랜드여야 해요.</div>
                                </div>
                            </div>
                            <div>
                                <div className="Kijoon_contents" style={{ width: "20.05416vw", float: "left", marginRight: "4.577083333vw" }}>
                                    <div style={{ marginBottom: "1.041667vw", marginTop: "-14.17708333vw" }}>그리고 수수료는 정말 낼 가치가 있다고 생각해요! 일반 프랜차이즈 매장이 무조건 적은데, 그게 그거일 수 없죠. 로위가 해주는 것도 많고요. 인센티브만 놓고 봤을 땐 개인숍 중에 이만큼 인센티브를 주는 곳은 있어요.</div>
                                    <div>예를 들어 이제 막 초디거나 실력이 부족해 원장님이나 선배 디자이너에게 배워야 하는 위치라면 공유미용실을 권하지는 않아요.</div>
                                    <div style={{ marginBottom: "1.041667vw" }}>하지만 주체적이지 못하고 결국 눈치를 보게 되는 만큼 자율적이지 않거든요. 하지만 이 말들은 모두 경력이 있는 디자이너에 한해 말씀드리는 거라 오해는 없었으면 좋겠어요. </div>
                                    <div>이제 막 시작해서 손님을 조금씩 만들어나가고 성장하는 과정은 힘이 들더라도 분명히 있어야하고, 그런 경험없이 시작하는 공유미용실은 본인과 고객에게도 좋지 않은 선택이에요.</div>
                                    <div> 이런 케이스는 로위와 함께하기에 어려워요. 입점비용만 있으면 올 수 있는 곳은 아니라는 걸 말씀드리고 싶었어요.</div>
                                </div>
                            </div>
                            <div style={{ marginBottom: "6.25vw", float: "left" }}>
                                <div style={{ width: "37.1875vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Kijoon/02.png"} alt="기준 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div style={{ marginBottom: "6.25vw", float: "left", marginRight: "2.1875vw" }}>
                                    <div style={{ width: "35.9375vw" }}>
                                        <img src={process.env.PUBLIC_URL + "/image/Review/Kijoon/03.png"} alt="기준 디자이너" />
                                    </div>
                                </div>

                                <div className="Kijoon_contents_title">
                                    <div>그래도 가장 초반에 걱정되는 것이 </div>
                                    <div>있으셨나요?</div>
                                </div>
                                <div className="Kijoon_contents">
                                    <div>사실 1년 정도 쉬고 일을 다시 시작했어요.  </div>
                                    <div style={{ marginBottom: "1.041667vw" }}>공부도 하고 여행도 다녔고 그 동안 쉬고 온 거라 고객이 정말 0명이었어요. 아무것도 없이 시작했죠. 그래서 그게 가장 걱정이었죠. 고정고객이 없으니 매출에 대한 걱정이 가장 컸던 것 같아요</div>
                                    <div style={{ marginBottom: "1.041667vw" }}>저는 로위 1호점 멤버였고 그 당시만 해도 로위 브랜드에 대한 경쟁력은 없었어요. 브랜드파워라고도 하죠. 근데 로위에서 또 다른 가치가 발생했고 이건 경쟁력 있었어요. 그 가치는 ‘디자이너에 대한 경쟁력’이었고, 그건 ‘디자이너로서 대우받는다’라는 가치였어요. 고객이 없었던 게 걱정이었지만, 로위에서라면 그래도 잘 될 거야 하는 생각이 들었어요.</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ float: "left", paddingTop: "6.25vw" }}>
                                    <div className="Woody_contents_title">
                                        <div>로위랑 오랫동안 함께하면서 가장 좋은 점 1개만 말씀해주세요!</div>
                                    </div>
                                    <div className="Woody_contents" style={{ width: "56.5625vw", paddingBottom: "10.416666vw" }}>
                                        <div>눈치를 보지 않는다는 점이요. 원래 일반 매장에서는 원장이나 경영진의 눈치를 봤었어요.  </div>
                                        <div>염색약 하나 사용하는데도 그렇고, 잠시 비는 시간에 볼 일보러 가야 하는데 눈치가 보이니 마음이 조급해지고 그런 게 많았거든요. </div>
                                        <div>그런데 지금은 그런 게 없어서 너무 좋아요. 내 시간을 내가 쓸 수 있고, 시술 방향도 제가 정할 수 있고. 모든 것을 스스로 결정할 수 있다는 것. 정말 만족하고 최고예요!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div>
                        <div>
                            <div className="Kijoon_title">
                                <div>홍대입구역점</div>
                                <div style={{ fontWeight: "bold" }}>원장 기준</div>
                            </div>
                            <div>
                                <div className="Kijoon_contents_title">
                                    <div>컨설팅 후 요즘 기준원장님 매출신장률이 엄청 높아졌어요.</div>
                                </div>
                                <div className="Kijoon_contents">
                                    <div style={{ marginBottom: "5.3333vw" }}>다른 프랜차이즈 미용실에서는 연 2회 정도 마케팅 교육과 관련 아이디어를 제시해 줘요. 그렇지만 공유미용실은 스스로 해야 한다는 부담감이 있고, 일반 디자이너는 관련 데이터를 보는게 익숙지 않기 때문에 로위에서의 컨설팅이 엄청 도움돼요!</div>
                                    <div style={{ marginBottom: "10.6667vw" }}>같은 경우에는, 컨설팅 후에 아이디어나 개선점을 바로 반영하고, 동시에 로위에서도 계속 도와주시니까 바로 타깃한 연령층과 스타일로 예약이 잡히더라고요. 그게 매우 신기했어요. 예전부터 계획했던 내용이랑 그에 관한 피드백이 바로 오는 부분이 놀라웠고, 심지어 그 피드백 바탕으로 매출로 나타나니까 컨설팅의 중요성을 한 번 더 깨닫게 된 것 같아요 컨설팅으로 제 방향을 찾았으니, 앞으로도 꾸준히 유지하는 건 제 몫이죠!</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Kijoon/01.png"} alt="기준 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Kijoon_contents_title">
                                    <div>로위 1호점때부터 함께 하셨는데 초반이다보니 주변에서 공유미용실에 대한 오해가 들렸을 것 같아요.</div>
                                </div>
                                <div className="Kijoon_contents">
                                    <div style={{ marginBottom: "5.3333vw" }}>미용업계의 부당한 시스템에 갇혀 생각하는 분들이 보통 ‘수수료를 떼면 일반 매장과 다를 게 없다’이런 오해를 하시는 것 같아요. 또 공유미용실에 망설이거나 좋지 않은 시선으로 바라보는 디자이너들은 그 틀에 갇혀 지내는 게 익숙해져서 그럴 거예요. 부당한 건데도요.</div>
                                    <div>그 틀을 깨고 막상 와서 겪어보면 아니라는 걸 알 수밖에 없어요. </div>
                                    <div style={{ marginBottom: "5.3333vw" }}>일반 미용실 운영자들이 공유미용실 시스템(높은 인센티브, 자율 출퇴근 등)을 싫어하니까 주입식으로 전달하는 것 같아요. 로위의 모든 시스템을 봤을때 디자이너한테 이만큼 좋은 건 없었다고 생각해요!</div>
                                    <div style={{ marginBottom: "5.3333vw" }}>공유미용실 시스템이 메리트가 있으려면, 로위처럼 디자이너를 위한 브랜드여야 해요.</div>
                                    <div style={{ marginBottom: "5.3333vw" }}>그리고 수수료는 정말 낼 가치가 있다고 생각해요! 일반 프랜차이즈 매장이 무조건 적은데, 그게 그거일 수 없죠. 로위가 해주는 것도 많고요. 인센티브만 놓고 봤을 땐 개인숍 중에 이만큼 인센티브를 주는 곳은 있어요.</div>
                                    <div style={{ marginBottom: "5.3333vw" }}>하지만 주체적이지 못하고 결국 눈치를 보게 되는만큼 자율적이지 않거든요. 하지만 이 말들은 모두 경력이 있는 디자이너에 한해 말씀드리는 거라 오해는 없었으면 좋겠어요. 예를 들어 이제 막 초디거나 실력이 부족해 원장 님이나 선배 디자이너에게 배워야 하는 위치라면 공유미용실을 권하지는 않아요.</div>
                                    <div style={{ marginBottom: "10.6667vw" }}>이제 막 시작해서 손님을 조금씩 만들어나가고 성장하는 과정은 힘이 들더라도 분명히 있어야하고, 그런 경험없이 시작하는 공유미용실은 본인과 고객에게도 좋지 않은 선택이에요. 이런 케이스는 로위와 함께하기에 어려워요. 입점비용만 있으면 올 수 있는 곳은 아니라는 걸 말씀드 리고 싶었어요.</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Kijoon/02.png"} alt="기준 디자이너" />
                                </div>
                            </div>

                            <div>
                                <div className="Kijoon_contents_title">
                                    <div>그래도 가장 초반에 걱정되는 것이 있으셨나 요?</div>
                                </div>
                                <div className="Kijoon_contents">
                                    <div>사실 1년 정도 쉬고 일을 다시 시작했어요.</div>
                                    <div style={{ marginBottom: "5.3333vw" }}>공부도 하고 여행도 다녔고 그 동안 쉬고 온 거라 고객이 정말 0명이었어요. 아무것도 없이 시작했죠. 그래서 그게 가장 걱정이었죠. 고정고객이 없으니 매출에 대한 걱정이 가장 컸던 것 같아요</div>
                                    <div>저는 로위 1호점 멤버였고 그 당시만 해도 로위 브랜드에 대한 경쟁력은 없었어요. 브랜드파워라고도 하죠. </div>
                                    <div style={{ marginBottom: "10.6667vw" }}>근데 로위에서 또 다른 가치가 발생했고 이건 경쟁력있었어요. 그 가치는 ‘디자이너에 대한 경쟁력’이었고, 그건 ‘디자이너로서 대우받는다’라는 가치였어요. 고객이 없었던 게 걱정이었지만, 로위에서라면 그래도 잘 될 거야 하는 생각이 들었어요.</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Kijoon/03.png"} alt="기준 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Kijoon_contents_title">
                                    <div>로위랑 오랫동안 함께하면서 가장 좋은 점 1개만 말씀해주세요!</div>
                                </div>
                                <div className="Kijoon_contents">
                                    <div style={{ marginBottom: "21.3vw" }}>눈치를 보지 않는다는 점이요. 원래 일반 매장에서는 원장이나 경영진의 눈치를 봤었어요. 염색약 하나 사용하는 데도 그렇고, 잠시 비는 시간에 볼 일보러 가야 하는데 눈치가 보이니 마음이 조급해지고 그런게 많았거든요. 그런데 지금은 그런 게 없어서 너무 좋아요. 내 시간을 내가 쓸 수 있고, 시술 방향도 제가 정할 수 있고. 모든 것을 스스로 결정할 수 있다는 것. 정말 만족하고 최고예요!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default Kijoon;

