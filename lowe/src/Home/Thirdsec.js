import { Component } from "react";
import "./Thirdsec.css";
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}


class Thirdsec extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <section className="Mainpage_Third_section">
                <Desktop>
                    <div id="Third_section_content">
                        <div>
                            <div  data-aos="fade-up" data-aos-duration="3000" id="Third_Section_title_text">
                                <div className="Third_Section_title_text">
                                    일한 만큼 가져가는
                                </div>
                                <div className="Third_Section_title_text_bold">
                                    로위만의 합리적인 실수익구조
                                </div>
                            </div>
                            <div  data-aos="fade-up" data-aos-duration="3000" id="Third_Section_title_content">
                                <div>
                                    아침부터 밤까지, 적은 휴무일에 열심히 일했지만,
                                </div>
                                <div>
                                    충분하지 않은 실수익에 더 이상 실망하지마세요.
                                </div>
                                <div>
                                    디자이너가 인정받으면서 일할 수 있도록,
                                </div>
                                <div>
                                    일한 만큼 가져가는 로위의 인센티브율.
                                </div>
                                <div>
                                    이미 로위의 많은 디자이너가 경험하고 있습니다.
                                </div>
                            </div>
                        </div>
                        <div  data-aos="fade-up" data-aos-duration="3000" className="Third_Section_div">
                            <img className="Third_section_chart" src={process.env.PUBLIC_URL + "/image/mainpage/main3_1.png"} alt="lowe mainpage" />
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div id="Third_section_content">
                        <div  data-aos="fade-up" data-aos-duration="3000" >
                            <div id="Third_Section_title_text">
                                <div className="Third_Section_title_text">
                                    로위만의
                                </div>
                                <div className="Third_Section_title_text_bold">
                                    합리적인 실수익구조
                                </div>
                            </div>
                            <div id="Third_Section_title_content">
                                <div>
                                    디자이너가 인정받으면서 일할 수 있도록,
                                </div>
                                <div style={{ fontWeight: "bold" }}>
                                    최소 60%부터 시작하는 로위의 인센티브율.
                                </div>
                                <div>
                                    이미 로위의 많은 디자이너가 경험하고 있습니다.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  data-aos="fade-up" data-aos-duration="3000" className="Third_Section_div">
                        <img className="Third_section_chart" src={process.env.PUBLIC_URL + "/image/mainpage/M_main3_1.png"} alt="lowe mainpage" />
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default Thirdsec;





