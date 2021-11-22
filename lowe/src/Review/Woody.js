import { Component } from "react";
import "./Woody.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class Woody extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Woody_section">
                <Desktop>
                    <div>
                        <div>
                            <div style={{ float: "left", marginRight: "6.77083333vw" }}>
                                <div className="Woody_title">
                                    <div>신촌점</div>
                                    <div style={{ fontWeight: "bold" }}>원장 우디</div>
                                </div>
                                <div style={{ width: "25.3125vw", height: "51.0458vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Woody/01.png"} alt="우디 디자이너" />
                                </div>
                            </div>
                            <div style={{ marginBottom: "5.5vw" }}>
                                <div className="Woody_contents_title">
                                    <div>로위에서</div>
                                    <div>가장 만족하는 부분이 무엇인가요?</div>
                                </div>
                                <div className="Woody_contents">
                                    <div>정말 많지만 먼저 로위팀이 저를 정말 편안하게 만들어주세요. ‘편안하게’ 의 뜻을 저는 이렇게 말하고 싶어요. 공동체 생활에서 제가 부족하거나 못하는 것들을 배려해서 잘 얘기해주시고 모든 면에서 많이 도와준다! </div>
                                    <div>사실 죄송하면서도 정말 감사하죠. 저는 이런 점을 제일 만족하고 있어요.</div>
                                </div>
                            </div>
                            <div style={{ marginBottom: "5.5vw" }}>
                                <div className="Woody_contents_title">
                                    <div>로위로 오실 때 걱정하셨던 부분도</div>
                                    <div>있었을 것 같아요.</div>
                                </div>
                                <div className="Woody_contents">
                                    <div>저는 자신 있었어요. 고정매출도 있었고. 전에 있던 매장에서도 인스타그램을 통해 신규고객이 많이 오셔서 신규고객은 걱정없었는데 오히려 자율출퇴근으로 제가 나태해질까봐 걱정되더라구요. 누가 잡아주지 않으면 잘 못하는사람이라… 근데 막상해보니 더 잘하더라구요.(웃음)</div>
                                </div>
                            </div>
                            <div>
                                <div className="Woody_contents_title">
                                    <div>로위에 먼저 오시고, </div>
                                    <div>동료분들을 로위로 소개시켜주셨어요.</div>
                                </div>
                                <div className="Woody_contents">
                                    <div>맞아요. 일단 제가 만족하고 있기 때문에 먼저 얘기했어요. </div>
                                    <div>이왕이면 같이 일했던 동료들과 좋은 걸 함께 경험하고 싶어서</div>
                                    <div> 로위로 오라고 추천했죠. 동료들이 의심이 많은 사람들이라</div>
                                    <div> 말을 해도 잘 안 믿길래 급여가 찍힌 통장도 보여주었어요(웃음)</div>
                                    <div>그게 제일 확실하게 보여줄 수 있었던 것 같아요.</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ float: "left", marginRight: "6.3625vw" }}>
                                <div className="Woody_contents_title">
                                    <div>공간이 프라이빗룸으로</div>
                                    <div>되어있는데</div>
                                    <div>외롭지는 않으신가요?</div>
                                </div>
                                <div className="Woody_contents" style={{ width: "18.9vw" }}>
                                    <div>처음에는 잘 모르고, 또 불편하실까 서로 다가가지 못했는데, 동료 선생님들이 낯가리는 성격이셔서 부끄러워하시는 거였더라구요. 서로의 성향을 알고 나니까 이것만큼 좋은 게 없는 것 같아요. 이제는 오히려 서로 선을 넘지 않아 편하고, 일반 매장처럼 너무 오픈되어 있으면 사소한 불화나 오해들이 커져서 말들이 많아지거든요. 일반 미용실에서 그런 게 얼마나 많은데요~! 저는 이런 분위기가 너무 너무 좋아요 (웃음)</div>
                                </div>
                            </div>
                            <div style={{ marginBottom: "6.25vw", float: "left" }}>
                                <div style={{ width: "37.1875vw", paddingTop: "9.375vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Woody/02.png"} alt="우디 디자이너" />
                                </div>
                            </div>
                            <div style={{ float: "left", marginRight: "2.1875vw" }}>
                                <div style={{ width: "35.9375vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Woody/03.png"} alt="우디 디자이너" />
                                </div>
                            </div>
                            <div style={{ float: "left", height: "25.2vw" }}>
                                <div className="Woody_contents_title">
                                    <div>컨설팅 후에, </div>
                                    <div>많은 변화가 있어보여요!</div>
                                </div>
                                <div className="Woody_contents" style={{ width: "24.270833vw" }}>
                                    <div>제가 마포구에 연고가 없는 상태에서 마포구로 온지 2년 정도 되었어요. 컨설팅하고나서 마포구 미용 인생 중 가장 바쁜 디자이너 생활을 하고 있어요! 만약 저 혼자서 했다면 절대 못했을 것 같아요. 이건 진심 찐이에요. 정말 감사해요. 매일 매일 새로운 신규고객님들을 만나는 일이 즐겁고 체력적으로 힘들면 제가 조절하면 되니까 요즘 너무 좋아요.</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ float: "left", paddingTop: "6.25vw" }}>
                                <div className="Woody_contents_title">
                                    <div>로위팀을 표현한다면?</div>
                                </div>
                                <div className="Woody_contents" style={{ width: "103%", paddingBottom: "10.416666vw" }}>
                                    <div>저한테는 솔직하게 ‘정말 잘 도와준다’라는 말이 많이 떠올라요. </div>
                                    <div>제가 내는 수수료에 비해서 잘 도와주셔서 제 수수료가 전혀 아깝지 않고, 오히려 그걸 넘어서는 느낌이에요! 향후에 개인숍을 차리는 게 목표인데,</div>
                                    <div>숍을 차리면 로위팀처럼 나를 서포트해주는 사람들이 없어진다는 것이 두렵고 부담될 정도로 도움을 많이 받고 있다 생각해요. 매장에서는 매니저님들이 많이 도와주시고, 급여 정산이나 제가 잘 모르는 회계도 그렇고, 마케팅 홍보라든지 디자인도 정말 중요한 일이거든요. 그런 것까지도 매번 다 맞춰주시고,</div>
                                    <div> 제 매출이 잘 나올 수 있게 다들 도와주시는 이러한 전체적인 시스템이 딱 일에만 집중할 수 있게 도와주셔서 많이 고맙고 좋습니다.</div>
                                    <div> 정말 감사한 부분들이 많아요. 로위팀(엄지척)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div>
                        <div>
                            <div className="Woody_title">
                                <div>신촌점</div>
                                <div style={{ fontWeight: "bold" }}>원장 우디</div>
                            </div>
                            <div>
                                <div className="Woody_contents_title">
                                    <div>로위에서 가장 만족하는 부분이 무엇인가요 ?</div>
                                </div>
                                <div className="Woody_contents">
                                    <div style={{ marginBottom: "10.6667vw" }}>정말 많지만 먼저 로위팀이 저를 정말 편안하게 만들어주세요. ‘편안하게’ 의 뜻을 저는 이렇게 말하고 싶어요. 공동체 생활에서 제가 부족하거나 못하는 것들을 배려해서 잘 얘기해주시고 모든 면에서 많이 도와준다! 사실 죄송 하면서도 정말 감사하죠. 저는 이런 점을 제일 만족하고 있어요.</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Woody/01.png"} alt="필립 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Woody_contents_title">
                                    <div>로위로 오실 때 걱정하셨던 부분도 있었을 것 같아요.</div>
                                </div>
                                <div className="Woody_contents">
                                    <div style={{ marginBottom: "10.6667vw" }}>저는 자신 있었어요. 고정매출도 있었고. 전에 있던 매장 에서도 인스타그램을 통해 신규고객이 많이 오셔서 신규 고객은 걱정없었는데 오히려 자율출퇴근으로 제가 나태 해질까봐 걱정되더라구요. 누가 잡아주지 않으면 잘 못하 는사람이라… 근데 막상해보니 더 잘하더라구요.(웃음)</div>
                                </div>
                                <div className="Woody_contents_title">
                                    <div>로위에 먼저 오시고,</div>
                                    <div>동료분들을 로위로 소개시켜주셨어요.</div>
                                </div>
                                <div className="Woody_contents">
                                    <div>맞아요. 일단 제가 만족하고 있기 때문에 먼저 얘기했어요. 이왕이면 같이 일했던 동료들과 좋은 걸 함께 경험하고 싶어서 로위로 오라고 추천했죠. 동료들이 의심이 많은 사람들이라 말을 해도 잘 안 믿길래 급여가 찍힌 통장도 보여주었어요(웃음)</div>
                                    <div style={{ marginBottom: "10.6667vw" }}>그게 제일 확실하게 보여줄 수 있었던 것 같아요.</div>
                                </div>
                            </div>
                            <div className="Woody_contents">
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Woody/02.png"} alt="필립 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Woody_contents_title">
                                    <div>공간이 프라이빗룸으로 되어있는데</div>
                                    <div>외롭지는 않으신가요?</div>
                                </div>
                                <div className="Woody_contents">
                                    <div>처음에는 잘 모르고, 또 불편하실까 서로 다가가지 못했는데, 동료 선생님들이 낯가리는 성격이셔서 부끄러워하시는 거였더라구요. </div>
                                    <div style={{ marginBottom: "10.6667vw" }}>서로의 성향을 알고 나니까 이것만큼 좋은 게 없는 것 같아요. 이제는 오히려 서로 선을 넘지않아 편하고, 일반 매장처럼 너무 오픈되어 있으면 사소한 불화나 오해들이 커져서 말들이 많아지거든요. 일반 미용실에서 그런게 얼 마나 많은데요~! 저는 이런 분위기가 너무 너무 좋아요 (웃음)</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Woody/03.png"} alt="필립 디자이너" />
                                </div>
                            </div>

                            <div>
                                <div className="Woody_contents_title">
                                    <div>컨설팅 후에, 많은 변화가 있어보여요!</div>
                                </div>
                                <div className="Woody_contents">
                                    <div>제가 마포구에 연고가 없는 상태에서 마포구로 온지 2년 정도 되었어요. 컨설팅하고나서 마포구 미용 인생 중 가장 바쁜 디자이너 생활을 하고 있어요! 만약 저 혼자서 했다면 절대 못했을 것 같아요. 이건 진심 찐이에요. 정말 감사해요. </div>
                                    <div style={{ marginBottom: "21.3vw" }}>매일 매일 새로운 신규고객님들을 만나는 일이 즐겁고 체력적으로 힘들면 제가 조절하면 되니까 요즘 너무 좋아요</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default Woody;

