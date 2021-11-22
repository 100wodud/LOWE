import { Component } from "react";
import "./Gyuhyun.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 999 })
  return isMobile ? children : null
}


class Gyuhyun extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Gyuhyun_section">
                <Desktop>
                    <div>
                        <div>
                            <div style={{ float: "left", width: "21.25vw" }}>
                                <div className="Gyuhyun_title">
                                    <div>합정점</div>
                                    <div style={{ fontWeight: "bold" }}>원장 규현</div>
                                </div>
                            </div>
                            <div>
                                <div className="Gyuhyun_contents_title" style={{ float: "left", width: "41.0416vw" }}>
                                    <div>로위에 와서 OO에 제일 만족한다</div>
                                </div>
                                <div className="Gyuhyun_contents">
                                    <div style={{ marginBottom: "4.16666666vw" }}>
                                        <div>일한 만큼, 노력한 만큼 돈 벌어가는 것! 그리고 인간관계로 스트레스 안 받는 부분도 너무 좋고, 유동적으로 출퇴근 시간을 조절할 수 있어서 나만의 스케줄을 스스로 만들 수 있다는 점!</div>
                                    </div>
                                </div>
                                <div style={{ marginBottom: "9.375vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Gyuhyun/01.png"} alt="규현 디자이너" />
                                </div>

                            </div>
                            <div>
                                <div style={{ marginBottom: "6.25vw" }}>
                                    <div className="Gyuhyun_contents_title" style={{ width: "20.82vw", float: "left", paddingRight: "10.4vw" }}>
                                        <div>로위에 오기 전, </div>
                                        <div>고민이 많으셨다고 들었어요.</div>
                                        <div className="Gyuhyun_contents" style={{ width: "20.82vw", float: "left", marginTop: "2.083vw", paddingRight: "6.61458vw" }}>
                                            <div >
                                                <div style={{ marginBottom: "1.041666vw" }}>저는 고정고객이 전혀 없던 상태에서 왔기 때문에, 이전만큼의 급여를 가져갈 수 있을지가 가장 컸어요. 자리가 잡히고 언제쯤 안정이 될 건지에 대한 확신이 없어서 그게 처음에는 무서웠기도 하고요.</div>
                                                <div>로위는 디자이너마다 시그니처가 다 있는 것 같은데, 저는 다양한 고객들의 스타일을 했기 때문에 ‘싫증 나진 않을까, 인턴이 없어서 혼자 할 수 있을까’ 이런 고민이 많았던 것 같아요.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: "31.25vw", float: "left" }}>
                                        <img src={process.env.PUBLIC_URL + "/image/Review/Gyuhyun/02.png"} alt="규현 디자이너" />
                                    </div>
                                    <div style={{ width: "31.25vw", float: "left", marginBottom: "10.9375vw", marginLeft: "5.3125vw", marginTop: "-5.9895833vw" }}>
                                        <img src={process.env.PUBLIC_URL + "/image/Review/Gyuhyun/03.png"} alt="규현 디자이너" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="Gyuhyun_contents" >
                                    <div style={{ float: "left" }}>
                                        <div style={{ width: "26.145833vw", marginRight: "5.72916666vw", float: "left" }}>
                                            <div className="Gyuhyun_contents_title" style={{ width: "100%" }}>
                                                <div>많은 고민 중에 </div>
                                                <div>로위를 선택한 이유가 있을까요?</div>
                                            </div>
                                            <div>여기는 관리를 해주는 것이 보였어요. 솔직히 다른 곳은 월세 같은 멤버십 비용만 받고 끝! 이런 부동산 느낌이 있었어요.</div>
                                            <div>또 마포구에서 직장을 구할 생각이었던지라 마포구에서는 로위가 가장 오래되었고, 지점도 가장 많고, 규모만큼 체계적이라 믿음이 갔어요. 그리고 입점문의를 넣기 전에 이미 로위에 계신 디자이너 선생님들을 찾아보니 실력자들이 너무 많아서 괜찮다고 느껴졌습니다.</div>
                                        </div>
                                        <div style={{ width: "29.84375vw", float: "left" }}>
                                            <div className="Gyuhyun_contents_title" style={{ width: "100%" }}>
                                                <div>공유미용실은</div>
                                                <div>배움의 기회가 없다는 인식이 있다고 해요.</div>
                                                <div>어떻게 생각하시나요?</div>
                                            </div>
                                            <div style={{ marginBottom: "1.041666vw" }}>음 사실 스터디나 교육은 일반 매장에서도 스스로 해야 하는 부분이라 ‘더 배워야 해서 공유미용실은 못간다’라고 말한다면 이건 핑계라고 생각해요. 그리고 1인 미용실이 아니라 공유 미용실이잖아요.</div>
                                            <div>또 로위는 디자이너마다 시그니처가 확실한 선생님들이 모여있고, 로위에서도 스터디 파트너는 충분히 찾을 수 있어요. 저도 그랬고요! 그리고 이번에 로위에서 100만원 상당의 교육비 지원이 당첨되어서 스터디하는데 부담을 덜 수 있었어요.</div>
                                            <div>물론 교육을 받고 다른 원장님들에게 공유를 하는 게 떨리긴 하지만, 정말 감사하죠!</div>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{ width: "25.3125vw", float: "left", marginBottom: "10.41666666vw", marginRight: "6.5625vw" }}>
                                            <img src={process.env.PUBLIC_URL + "/image/Review/Gyuhyun/04.png"} alt="규현 디자이너" />
                                        </div>
                                        <div style={{ width: "25.260416vw", float: "left", paddingTop: "10.9375vw" }}>
                                            <div className="Gyuhyun_contents_title" style={{ width: "100%" }}>
                                                <div>로위팀에 대해 한 말씀해주세요!</div>
                                            </div>
                                            <div>그냥 열정 그 자체. 연봉 한 1억 받고 일하시는 분들 같아요. 덕분에 편하게 일하는 것 같고, 고객님들에게만 몰두할 수 있고, 솔직히 처음에는 수수료가 비싸다고 생각했어요. </div>
                                            <div>그렇지만 들어와서 경험해 보니, 제가 몰랐던 부분들에 대해 도움받아가는 것 외에도 여러 가지 해주시는 부분들을 보면 그게 절대 크다고 안 느껴져요(웃음)</div>
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
                            <div className="Gyuhyun_title">
                                <div>합정점</div>
                                <div style={{ fontWeight: "bold" }}>원장 규현</div>
                            </div>
                            <div>
                                <div className="Gyuhyun_contents_title">
                                    <div>로위에 와서 OO에 제일 만족한다</div>
                                </div>
                                <div className="Gyuhyun_contents">
                                    <div style={{ marginBottom: "10.6667vw" }}>일한 만큼, 노력한 만큼 돈 벌어가는 것! 그리고 인간관계로 스트레스 안 받는 부분도 너무 좋고, 유동적으로 출퇴근 시간을 조절할 수 있어서 나만의 스케줄을 스스로 만들 수 있다는 점!</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Gyuhyun/01.png"} alt="규현 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Gyuhyun_contents_title">
                                    <div>로위에 오기 전, </div>
                                    <div>고민이 많으셨다고 들었어요.</div>
                                </div>
                                <div className="Gyuhyun_contents">
                                    <div style={{ marginBottom: "5.3333vw" }}>저는 고정고객이 전혀 없던 상태에서 왔기 때문에, 이전 만큼의 급여를 가져갈 수 있을지가 가장 컸어요. 자리가 잡히고 언제쯤 안정이 될 건지에 대한 확신이 없어서 그게 처음에는 무서웠기도 하고요.</div>
                                    <div style={{ marginBottom: "10.6667vw" }}>로위는 디자이너마다 시그니처가 다 있는 것 같은데, 저는 다양한 고객들의 스타일을 했기 때문에 ‘싫증 나진 않을까, 인턴이 없어서 혼자 할 수 있을까’ 이런 고민이 많았던 것 같아요.</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Gyuhyun/02.png"} alt="규현 디자이너" />
                                </div>
                            </div>

                            <div>
                                <div className="Gyuhyun_contents_title">
                                    <div>많은 고민 중에 </div>
                                    <div>로위를 선택한 이유가 있을까요?</div>
                                </div>
                                <div className="Gyuhyun_contents">
                                    <div style={{ marginBottom: "10.6667vw" }}>여기는 관리를 해주는 것이 보였어요. 솔직히 다른 곳은 월세 같은 멤버십 비용만 받고 끝! 이런 부동산 느낌이 있었어요. 또 마포구에서 직장을 구할 생각이었던지라 마포구에서는 로위가 가장 오래되었고, 지점도 가장 많고, 규모만큼 체계적이라 믿음이 갔어요. 그리고 입점문의를 넣기 전에 이미 로위에 계신 디자이너 선생님들을 찾아보니 실력자들이 너무 많아서 괜찮다고 느껴졌습니다.</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Gyuhyun/03.png"} alt="규현 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Gyuhyun_contents_title">
                                    <div>공유미용실은 배움의 기회가 없다는 인식이 있다고 해요. 어떻게 생각하시나요?</div>
                                </div>
                                <div className="Gyuhyun_contents">
                                    <div style={{ marginBottom: "5.3333vw" }}>음 사실 스터디나 교육은 일반 매장에서도 스스로 해야 하는 부분이라 ‘더 배워야 해서 공유미용실은 못간다’라고 말한다면 이건 핑계라고 생각해요. 그리고 1인 미용실이 아니라 공유 미용실이잖아요.</div>
                                    <div style={{ marginBottom: "10.6667vw" }}>또 로위는 디자이너마다 시그니처가 확실한 선생님들이 모여있고, 로위에서도 스터디 파트너는 충분히 찾을 수 있어요. 저도 그랬고요! 그리고 이번에 로위에서 100만원 상당의 교육비 지원이 당첨되어서 스터디하는데 부담을 덜 수 있었어요. 물론 교육을 받고 다른 원장님들에게 공유를 하는게 떨리긴 하지만, 정말 감사하죠!</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Gyuhyun/04.png"} alt="규현 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Gyuhyun_contents_title">
                                    <div>로위팀에 대해 한 말씀해주세요!</div>
                                </div>
                                <div className="Gyuhyun_contents">
                                    <div style={{ marginBottom: "20.3vw" }}>그냥 열정 그 자체. 연봉 한 1억 받고 일하시는 분들 같아요. 덕분에 편하게 일하는 것 같고, 고객님들에게만 몰두 할 수 있고, 솔직히 처음에는 수수료가 비싸다고 생각했어요. 그렇지만 들어와서 경험해 보니, 제가 몰랐던 부분들에 대해 도움받아가는 것 외에도 여러 가지 해주시는 부분들을 보면 그게 절대 크다고 안 느껴져요(웃음)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default Gyuhyun;

