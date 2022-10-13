import { Component } from "react";
import "./Firstsec.css"
import { useMediaQuery } from 'react-responsive'



const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
  }
  

class Firstsec extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Brand_first_setion">
                <Desktop>
                <div>
                    <div className="Brand_first_first_title">브랜드 이야기</div>
                    <div className="Brand_first_first_sub">“미용 이상의 특별한 경험을 만듭니다.<br />나를 기억해주는 미용실, 우리는 로위(LOWE)입니다.”</div>
                    <img style={{ marginBottom: "120px" }} src={process.env.PUBLIC_URL + "/image/brand/01.png"} alt="lowe brand1" />
                    <div className="Brand_first_second_title">Q1. 로위(LOWE)를 소개해주세요.</div>
                    <div className="Brand_first_second_sub">
                        <strong>“미용 이상의 특별한 경험을 만듭니다. 나를 기억해주는 미용실, 우리는 로위(LOWE)입니다.”</strong> <br />
                        로위는 표준화된 미용(서비스) 기준을 제시하여, 고객과 함께 새로운 미용 문화를 만들어갑니다. <br />
                        대부분의 미용실은 고객에게 불편한 공급자 중심의 공간입니다. 미용 경대와 의자가 촘촘하게 붙어있는 공급자 중심의 공간 구조로 되어 있어 미용실을 방문한 고객 여러분이 마음 편히 시술 받기 어려운 환경입니다. 또한 일부 공급자는 여러 명의 고객을 1:多로 동시에 시술하며 회전율을 과도하게 높여, 고객들이 더욱 불편한 미용 경험을 겪을 수 밖에 없는 상황입니다. 때문에 미용 고객들은 매달 방문하는 미용실을 대체로 불편한 공간으로 인식하고 있습니다.
                        <br /> <br />
                        로위(LOWE)는 이러한 공급자 중심의 미용 환경을 과감하게 개선해 ‘소비자 중심’의 미용 생태계를 구축하고 있습니다. 미용업계가 소비자 중심 구조로 전환되면, 소비자와 공급자 모두에게 미용 이상의 특별한 경험을 제공할 수 있을 것입니다. 더불어 소비자가 어떤 로위(LOWE) 미용실을 방문하더라도 디자이너가 나를 알아주고 기억하며, 표준화된 고객 경험을 제공하는 것이 가능해집니다. 로위팀은 표준화된 가치와 서비스를 소비자에게 꾸준히 제공하고, 그 중심에 있는 로위(LOWE)의 파트너인 공급자(디자이너)에게 최고의 보상 구조와 더 나은 이익을 제공하며 지속적으로 성장하고 있습니다.
                        <br /> <br />
                        <strong>“미용을 소비자 중심 구조로 만드는 것!”</strong> <br />
                        이것이 우리 <strong>로위(LOWE)의 핵심 가치</strong>입니다.
                    </div>
                    <img style={{ marginBottom: "120px" }} src={process.env.PUBLIC_URL + "/image/brand/02.png"} alt="lowe brand2" />
                    <div className="Brand_first_second_title">Q2. 로위(LOWE)브랜드에는 어떤 뜻이 담겨 있나요?</div>
                    <div className="Brand_first_second_sub">
                        편안한 미용 경험을 제공하고자 하는 목적으로, 바쁘게 살아가는 현대인들의 지친 일상을 위로하고 풍요롭게 하는 브랜드로 성장하기 위해 “위로”를 뒤집어 “로위(LOWE)”라는 브랜드명을 만들었습니다.
                    </div>
                    <div className="Brand_first_second_title">Q3. 타 미용업체와 다른 로위(LOWE)만의 차별점은 무엇인가요?</div>
                    <div className="Brand_first_second_sub">
                        로위(LOWE)는 타 미용업체처럼 공장식으로 고객을 쳐내는 곳이 아닙니다. “한 분의 고객, 한 번의 방문”을 소중히 여기며 고객에게 감동과 정성을 선사합니다. 좋은 미용 기준을 업데이트하여 고객 중심 미용실로서 고객이 스트레스 받지 않는 편안한 미용 경험을 제공합니다.
                        <br /><br />
                        로위(LOWE)는 소속 디자이너에게 자체 기획한 미용 교육을 제공하며, 함께 성장하는 인큐베이팅 시스템을 적용해 로위 디자이너로서의 소속감을 만들어 주고 있습니다.
                        <br /><br />
                        로위(LOWE)는 현재 8개의 모든 매장을 직영으로 운영합니다. 따라서 고객이 어떤 로위 매장을 방문하든 표준화된 미용 환경을 경험하고, 나의 스타일을 기억해주는 디자이너들을 만남으로써 로위(LOWE)만의 특별한 미용 경험을 느낄 수 있습니다.
                    </div>
                    <img style={{ marginBottom: "120px" }} src={process.env.PUBLIC_URL + "/image/brand/03.png"} alt="lowe brand3" />
                    <div className="Brand_first_second_title">Q4. 로위(LOWE)가 생각하는 헤어디자이너란?</div>
                    <div className="Brand_first_second_sub">
                        로위(LOWE)는 모든 미용종사자들을 소중한 가족이자 파트너로서 존중합니다. 숙련된 미용종사자들의 뛰어난 실력과 열정이 고객의 일상을 풍요롭게 만들 수 있다고 믿기 때문입니다. 그래서 로위(LOWE)는 미용종사자들의 처우와 근무 환경을 최우선으로 생각하며, 미용종사자들이 일한 만큼의 합당한 대가와 처우를 제공받을 수 있도록 지속적으로 돕고 있습니다.
                    </div>
                    <div className="Brand_first_second_title">Q5. 로위팀은 어떻게 일하고 있나요?</div>
                    <div className="Brand_first_second_sub">
                        로위팀은 숙련된 미용종사자가 열정을 갖고 고객에게 최고의 미용과 서비스를 제공할 수 있도록 안정된 환경을 지원하고 소속감을 주어 One Team이 될 수 있도록 합니다. 로위팀은 미용을 서비스하는 회사가 아니라, {'<'}미용을 서비스하는 사람의 회사{'>'}라고 정의합니다.
                        <br /><br />
                        로위팀은 로위(LOWE) 소속 디자이너들에게 디자이너 개인 특성에 맞는 맞춤형 미용 교육을 제공합니다. 또한, 인큐베이팅 시스템을 통해 로위 디자이너로서의 소속감을 만들어주고 있습니다.
                        <br /><br />
                        로위팀은 여러 분야에서 전문성을 가진 전문가들로 구성되어 있으며, 고객 만족과 윤리를 최우선으로 하고 혁신과 지속성을 제고하여 아시아 최고의 {'<'}미용을 서비스하는 사람의 회사{'>'}로 성장하기 위해 최고의 전문성과 책임감, 열정을 가지고 일합니다.
                    </div>
                </div>
                <img style={{ marginBottom: "120px" }} src={process.env.PUBLIC_URL + "/image/brand/04.png"} alt="lowe brand4" />
                <img style={{ marginBottom: "120px" }} src={process.env.PUBLIC_URL + "/image/brand/05.png"} alt="lowe brand5" />
                <div className="Brand_first_second_title">Q6. 로위(LOWE)가 추구하는 지속가능한 미용생태계, 최종 목표는 무엇인가요?</div>
                <div className="Brand_first_second_sub">
                    로위(LOWE)는 새로운 미용 기준을 제시하는 뷰티생활플랫폼으로서의 성장이 최종 목표입니다. <br />5년 뒤 ‘뷰티/미용’하면 떠오르는 기업은 “로위(LOWE)”가 될 수 있도록 나아갈 것입니다.
                </div>

                <img style={{ marginBottom: "120px" }} src={process.env.PUBLIC_URL + "/image/brand/06.png"} alt="lowe brand6" />
                <div className="Brand_first_third_sub">
                    로위(LOWE)는 위와 같은 대전제를 기반으로, 최종 목표를 달성하기 위해 2가지 next step을 목표로 합니다.
                </div>
                <div className="Brand_first_fourth_sub">
                    <p style={{ textIndent: "-19px", marginLeft: "19px" }}>1) 로위(LOWE)는 뷰티 플랫폼 아시아 1위를 목표로 합니다. 뷰티 플랫폼은 소비자가 예약/결제를 쉽고 빠르게 하기 위한 플랫폼입니다.<br />로위(LOWE)는 미용을 콘텐츠와 서비스 관점에서 분석하여 소비자가 온라인 환경에서 기대하는 바를 충족할 수 있도록 합니다.</p>
                    <br />
                    <p style={{ textIndent: "-22px", marginLeft: "22px" }}>2) 로위(LOWE)는 국내 최대 오프라인 직영점을 운영하는 뷰티/미용 브랜드가 됩니다.<br />고객은 국내 어떤 로위 매장을 가든 바로 나를 기억해주고, 표준화된 미용 서비스를 제공받을 수 있습니다. </p>
                </div>
                </Desktop>
                <Mobile>
                    <div>
                        <img style={{ marginBottom: "120px" }} src={process.env.PUBLIC_URL + "/image/brand/Mobile.png"} alt="lowe brand Mobile" />
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default Firstsec;
