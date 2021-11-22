import { Component } from "react";
import "./Yujine.css";
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}

class Yujine extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    render() {
        return (
            <section className="Yujine_section">
                <Desktop>
                    <div>
                        <div>
                            <div style={{ float: "left", width: "21.25vw" }}>
                                <div className="Yujine_title">
                                    <div>신촌점</div>
                                    <div style={{ fontWeight: "bold" }}>원장 유진</div>
                                </div>
                            </div>
                            <div>
                                <div className="Yujine_contents_title" style={{ float: "left", width: "41.0416vw" }}>
                                    <div>이전 매장은 강남 쪽에 계셨었어요.</div>
                                    <div>홍대로 넘어오시는데 걱정이 있으셨을 것 같아요.</div>
                                </div>
                                <div className="Yujine_contents">
                                    <div style={{ marginBottom: "4.16666666vw" }}>
                                        <div>맞아요.우선 저는 독립하는 게 처음이었기 때문에 혼자서 잘 할 수 있을지에 대한 불안함이 있었어요.그리고 강남에서 홍대로, 지역을 이동하는 거라 제 고객님들이 모두 따라와 주실지도 사실 걱정이 됐죠.앞으로 혼자 걸어가야 할 디자이너로서의 걱정이 컸던 것 같아요!</div>
                                    </div>
                                </div>
                                <div style={{ marginBottom: "9.375vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Yujine/01.png"} alt="유진 디자이너" />
                                </div>

                            </div>
                            <div>
                                <div style={{ marginBottom: "6.25vw" }}>
                                    <div className="Yujine_contents_title" style={{ width: "25.26041vw", float: "left", paddingRight: "6.61458vw" }}>
                                        <div>그럼 사실 많은 선택지와</div>
                                        <div>고민도 크셨을 텐데,</div>
                                        <div>어떻게 로위를 결정하게 되셨는지</div>
                                        <div>로위팀도 너무 궁금해요.</div>
                                        <div className="Yujine_contents" style={{ width: "25.26041vw", float: "left", marginTop: "2.083vw", paddingRight: "6.61458vw" }}>
                                            <div >
                                                <div style={{ marginBottom: "1.041666vw" }}>정말 우연이었던 게, 그때 제가 전 매장을 그만두려고 마음을 먹었을 시기였어요.그런데 로위에서 마침 먼저 연락이 오셨더라고요!(웃음) 그래서 그 뒤로 공유미용실이라는 것에 대해 정말 많이 찾아보고 고민을 한 다음에, 입점 문의를 넣고 이사님과 바로 미팅을 했어요.</div>
                                                <div>사실 저는 정말 걱정도 많고 생각 많은 사람이라서 선택하는 데에 고민이 너무 많이 되는 거예요.</div>
                                                <div>근데 이사님께서 제가 잘할 수 있을 거라 계속 응원해 주시고, 로위에 대해 설명을 자세히 잘 해주셔서 신뢰가 많이 갔었어요.혼자보다 로위팀과 다 같이 으쌰 으쌰 할 수 있다는 점이 결정하게 된 이유 중 가장 컸던 것 같습니다(웃음)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: "30.625vw", float: "left", marginBottom: "7.34375vw" }}>
                                        <img src={process.env.PUBLIC_URL + "/image/Review/Yujine/02.png"} alt="유진 디자이너" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="Yujine_contents" >
                                    <div style={{ float: "left" }}>
                                        <div style={{ width: "25.5729166vw", marginRight: "6.3020833vw", float: "left", paddingBottom: "10.4166666vw" }}>
                                            <div className="Yujine_contents_title" style={{ width: "100%" }}>
                                                <div>로위 원년 멤버로서 오신지 벌써 1년이 넘었어요.</div>
                                                <div>그동안 어떤 점을 제일 만족하셨나요?</div>
                                            </div>
                                            <div>모두 만족하지만 그중에서도 눈치 볼 필요 없이 뭐든지 자유롭게 할 수 있다는 점이 정신적으로 너무 행복해요. 일반 매장은 체계적으로 직급이 나누어져 있다 보니 편하다 한들 선배이기 때문에 눈치가 보여 다소 힘든 부분이 있거든요. 로위에 오고 나서는 1인제라 몸은 힘들지만, 걱정할 것도 없고 더 행복해서 좋습니다(웃음)</div>
                                        </div>
                                        <div style={{ width: "29.84375vw", float: "left" }}>
                                            <div className="Yujine_contents_title" style={{ width: "100%" }}>
                                                <div>이번 9월에 월 최고 매출을 기록하셨어요. 기분이 어떠세요?</div>
                                            </div>
                                            <div style={{ marginBottom: "1.041666vw" }}>힘들 줄 알았는데 괜찮았어요. 사실 한번 생각해 봤던 게, 만약 주 6일로 늘려서 더 열심히 한다면 혼자 월 1,600만원까지는 할 수 있을 것 같아요 (웃음) 하지만 그렇게 하려면 정말 많이 일해야 하기도 하고, 제가 좋아하는 일이 재미가 없어질까 봐 한 번쯤은 해보고 싶지만 고민이 되긴 해요!</div>
                                            <div>로위에 와서 느낀 건 다른 원장님들이 모두 열심히 하시는 거 보면 ‘이 일이 정말 본인 것이니까 저렇게 열심히 할 수 있구나’라고 생각이 들게 되고 ‘일찍 나와서 일찍 들어가자’주의인 저였는데 요즘에는 저도 슬금 슬금 고객님 더 받고 하는 것 같아요(웃음)</div>
                                        </div>
                                    </div>

                                    <div style={{ width: "100%", float: "left", marginBottom: "10.41666666vw" }}>
                                        <img src={process.env.PUBLIC_URL + "/image/Review/Yujine/03.png"} alt="유진 디자이너" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div>
                        <div>
                            <div className="Yujine_title">
                                <div>신촌점</div>
                                <div style={{ fontWeight: "bold" }}>원장 유진</div>
                            </div>
                            <div>
                                <div className="Yujine_contents_title">
                                    <div>이전 매장은 강남 쪽에 계셨었어요. 홍대로 </div>
                                    <div>넘어오시는데 걱정이 있으셨을 것 같아요.</div>
                                </div>
                                <div className="Yujine_contents">
                                    <div >맞아요.우선 저는 독립하는게 처음이었기 때문에 혼자서 잘 할 수 있을지에 대한 불안함이 있었어요. </div>
                                    <div style={{ marginBottom: "10.6667vw" }}>그리고 강남에서 홍대로, 지역을 이동하는 거라 제 고객 님들이 모두 따라와 주실지도 사실 걱정이 됐죠. 앞으로 혼자 걸어가야 할 디자이너로서의 걱정이 컸던 것 같아요!</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Yujine/01.png"} alt="유진 디자이너" />
                                </div>
                            </div>
                            <div>
                                <div className="Yujine_contents_title">
                                    <div>그럼 사실 많은 선택지와 고민도 크셨을 텐데</div>
                                    <div> , 어떻게 로위를 결정하게 되셨는지 로위팀도 너무 궁금해요.</div>
                                </div>
                                <div className="Yujine_contents">
                                    <div style={{ marginBottom: "5.33333vw" }}>정말 우연이었던게, 그때 제가 전 매장을 그만두려고 마음을 먹었을 시기였어요. 그런데 로위에서 마침 먼저 연락이 오셨더라고요!(웃음) 그래서 그 뒤로 공유미용실이 라는 것에 대해 정말 많이 찾아보고 고민을 한 다음에, 입점 문의를 넣고 이사님과 바로 미팅을 했어요.</div>
                                </div>
                                <div className="Yujine_contents_title">
                                    <div>로위 원년 멤버로서 오신지 벌써 1년이 </div>
                                    <div>넘었어요. 그동안 어떤 점을 제일 만족하셨나요?</div>
                                </div>
                                <div className="Yujine_contents">
                                    <div style={{ marginBottom: "10.6667vw" }}>모두 만족하지만 그중에서도 눈치 볼 필요 없이 뭐든지 자유롭게 할 수 있다는 점이 정신적으로 너무 행복해요. 일반 매장은 체계적으로 직급이 나누어져 있다 보니 편하 다 한들 선배이기 때문에 눈치가 보여 다소 힘든 부분이 있거든요. 로위에 오고 나서는 1인제라 몸은 힘들지만, 걱정할 것도 없고 더 행복해서 좋습니다(웃음)</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "10.6667vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Yujine/02.png"} alt="유진 디자이너" />
                                </div>
                            </div>

                            <div>
                                <div className="Yujine_contents_title">
                                    <div>이번 9월에 월 최고 매출을 기록하셨어요.</div>
                                    <div>기분이 어떠세요?</div>
                                </div>
                                <div className="Yujine_contents">
                                    <div style={{ marginBottom: "5.33333vw" }}>힘들 줄 알았는데 괜찮았어요. 사실 한번 생각해 봤던게, 만약 주 6일로 늘려서 더 열심히 한다면 혼자 월 1,600 만원까지는 할 수 있을 것 같아요(웃음) 하지만 그렇게 하려면 정말 많이 일해야 하기도 하고, 제가 좋아하는 일이 재미가 없어질까봐 한 번쯤은 해보고 싶지만 고민이 되긴 해요!</div>
                                    <div style={{ marginBottom: "10.6667vw" }}>로위에 와서 느낀 건 다른 원장님들이 모두 열심히 하시는 거 보면 ‘이 일이 정말 본인 것이니까 저렇게 열심히 할 수 있구나’라고 생각이 들게 되고 ‘일찍 나와서 일찍 들어가자’ 주의인 저였는데 요즘에는 저도 슬금 슬금 고객님 더 받고 하는 것 같아요(웃음)</div>
                                </div>
                            </div>
                            <div>
                                <div style={{ width: "100%", marginBottom: "21.3vw" }}>
                                    <img src={process.env.PUBLIC_URL + "/image/Review/Yujine/03.png"} alt="유진 디자이너" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default Yujine;

