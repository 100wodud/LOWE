import { Component } from "react";
import "./R_Thirdsec.css"
import review from "../data/review";
import Slider from "react-slick";
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}




class R_Thirdsec extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.state = {
            saveAlldata: null,
            showdata: null,
            number: 3
        };
    }

    componentDidMount = () => {
        let rev = review.sort(() => Math.random() - 0.5)
        this.setState({ saveAlldata: rev, showdata: rev.slice(0, this.state.number) })
    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }

    ClickShowMore = () => {
        this.setState({ number: this.state.number + 3, showdata: this.state.saveAlldata.slice(0, this.state.number + 3) })
    }



    render() {
        var settings = {
            dots: false,
            infinite: false,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false
        };
        return (
            <section className="R_Third_section">
                <Desktop>
                    <div>
                        <div className="R_Third_section_title">Related designer review</div>
                        <div>
                            <div className="R_Third_btn">
                                <div className="R_Third_left" onClick={this.previous}>
                                    <img src={process.env.PUBLIC_URL + "/image/Nav/go_left.svg"} alt="lowe button" />
                                </div>
                                <div className="R_Third_right" onClick={this.next}>
                                    <img src={process.env.PUBLIC_URL + "/image/Nav/go_right.svg"} alt="lowe button" />
                                </div>
                            </div>
                            <Slider ref={c => (this.slider = c)} {...settings}>
                                {review.sort(() => Math.random() - 0.5).map((e) => (
                                    <div key={1} className="R_Third_Slide_div">
                                        <a href={e.link} >
                                            <div>
                                                <img className="R_Third_Slide_img" src={process.env.PUBLIC_URL + e.img} alt={`${e.designer} 리뷰`} />
                                            </div>

                                            <div className="R_Third_Slide_content">
                                                <div style={{ height: "5.2083333vw" }} >
                                                    {e.comment.map((e) => (
                                                        <div key={e} className="R_Third_Slide_content_name">{e}</div>
                                                    ))}
                                                </div>
                                                <div className="R_Third_Slide_name">{e.store} <span style={{ fontWeight: "bold" }}>원장 {e.designer}</span></div>
                                            </div>
                                            <div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </Desktop>
                <Mobile>
                    <div>
                        <div>
                            <div className="R_Third_section_title">Related designer review</div>
                            <div>
                                {this.state.showdata ? this.state.showdata.map((e) => (
                                    <div key={e.designer} className="R_Third_Slide_div">
                                        <a href={e.link} >
                                            <div>
                                                <img className="R_Third_Slide_img" src={process.env.PUBLIC_URL + e.img} alt={`${e.designer} 리뷰`} />
                                            </div>

                                            <div className="R_Third_Slide_content">
                                                <div>
                                                    {e.comment.map((e) => (
                                                        <div key={e} className="R_Third_Slide_content_name">{e}</div>
                                                    ))}
                                                </div>
                                                <div className="R_Third_Slide_name" style={{ height: "fit-content" }}>{e.store} <span style={{ fontWeight: "bold" }}>원장 {e.designer}</span></div>
                                            </div>
                                            <div>
                                            </div>
                                        </a>
                                    </div>
                                )) : null}
                            </div>

                            {this.state.saveAlldata !== null && this.state.saveAlldata.length > this.state.number
                                ? <div className="R_show_btn" onClick={this.ClickShowMore}>More view</div> : null}
                        </div>
                    </div>
                </Mobile>
            </section>
        )
    }
}

export default R_Thirdsec;