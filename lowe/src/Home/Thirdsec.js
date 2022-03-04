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
                            <div data-aos="fade-up" data-aos-duration="3000" id="Third_Section_title_text">
                            <div className="Third_Section_title_text_bold">
                            국내최초 월세 없는 
                                </div>
                            <div className="Third_Section_title_text_bold">
                            인센티브제 공유미용실,
                                </div>
                                <div className="Third_Section_title_text">
                                로위만의 합리적인 실수익구조
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="3000" id="Third_Section_title_content">
                                <div>
                                공유미용실 최초로 월세, 수수료 등 


                                </div>
                                <div>
                                디자이너가 따로 지불해야 할 비용 없이
                                </div>
                                <div>
                                오로지 디자이너 매출에 따라 가져가는 로위 인센티브제.
                                </div>
                                <div style={{fontWeight: "700", marginTop: "0.625vw"}}>
                                * 공유미용실 로위는 월세 없는 매출 인센티브제입니다.
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="Third_Section_div">
                            <img className="Third_section_chart" src={process.env.PUBLIC_URL + "/image/mainpage/main3_1.png"} alt="lowe mainpage" />
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div id="Third_section_content">
                        <div data-aos="fade-up" data-aos-duration="3000" >
                            <div id="Third_Section_title_text">
                                <div className="Third_Section_title_text_bold">
                                    최초 월세 없는
                                </div>
                                <div className="Third_Section_title_text_bold">
                                    인센티브제 공유미용실,
                                </div>
                                <div className="Third_Section_title_text">
                                    로위만의
                                </div>
                                <div className="Third_Section_title_text">
                                    합리적인 실수익구조
                                </div>
                            </div>
                            <div id="Third_Section_title_content">
                                <div>
                                    공유미용실 최초로 월세, 수수료 등
                                </div>
                                <div>
                                    디자이너가 따로 지불해야 할 비용 없이
                                </div>
                                <div>
                                    오로지 디자이너 매출에 따라 가져가는
                                </div>
                                <div>
                                    로위 인센티브제.
                                </div>
                                <div style={{ fontWeight: "bold", marginTop: "8px" }}>
                                    *로위는 월세 없는 매출 인센티브제입니다.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="3000" className="Third_Section_div">
                        <img className="Third_section_chart" src={process.env.PUBLIC_URL + "/image/mainpage/M_main3_1.png"} alt="lowe mainpage" />
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default Thirdsec;





