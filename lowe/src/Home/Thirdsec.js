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
                                <div className="Third_Section_title_text">
                                    로위는
                                </div>
                                <div className="Third_Section_title_text_bold">
                                    근무 유형을 선택
                                </div>
                                <div className="Third_Section_title_text">
                                    할 수 있어요.
                                </div>
                            </div>

                        </div>
                        <div data-aos="fade-up" data-aos-duration="3000" className="Third_Section_div">
                            <div>
                                <a href="/requests/enterstore">
                                    <img className="Third_section_chart" src={process.env.PUBLIC_URL + "/image/mainpage/main3_3.png"} alt="lowe mainpage" />
                                </a>
                            </div>
                            <div>
                                <a href="/requests/recruitment">
                                    <img className="Third_section_chart" src={process.env.PUBLIC_URL + "/image/mainpage/main3_2.png"} alt="lowe mainpage" />
                                </a>
                            </div>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div id="Third_section_content">
                        <div >
                            <div id="Third_Section_title_text">
                                <div className="Third_Section_title_text">
                                    로위는
                                </div>
                                <div className="Third_Section_title_text_bold">
                                    근무 유형을 선택
                                </div>
                                <div className="Third_Section_title_text">
                                    할 수 있어요.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos-duration="3000" className="Third_Section_div">
                        <a href="/requests/enterstore">
                            <img className="Third_section_chart" src={process.env.PUBLIC_URL + "/image/mainpage/M_main3_2.png"} alt="lowe mainpage" />
                        </a>
                    </div>
                    <div data-aos-duration="3000" className="Third_Section_div" style={{ marginTop: "2.66666vw" }}>
                        <a href="/requests/recruitment">
                            <img className="Third_section_chart" src={process.env.PUBLIC_URL + "/image/mainpage/M_main3_3.png"} alt="lowe mainpage" />
                        </a>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default Thirdsec;





