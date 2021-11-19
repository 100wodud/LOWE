import React from "react";
import "./D_M_modal.css";
import Slider from "react-slick";

class D_modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    handleClose = () => {
        this.props.close();
    }

    render() {
        const { open } = this.props;
        var settings = {
            dots: true,
            infinite: false,
            autoplaySpeed: 10000,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
            arrows: false
        };
        return (
            <>
                {open ? (
                    <div className="M_modalBody">
                        <img className="M_modalClose" onClick={this.handleClose} src={`${process.env.PUBLIC_URL}/image/Nav/modalClose_white.svg`} alt="로위 상세보기 닫기" />
                        <div className="M_modalInner">
                            <div style={{ backgroundColor: "white",height: "80px", width: "200px",float:"left"}}>
                                <div style={{float:"left", padding: "20px 0 0 24px"}}>
                                    <div>원장 {this.props.data.name}</div>
                                    <div style={{ fontSize: "14px", marginBottom: "24px" }}>{this.props.data.eng}</div>
                                    <div className="M_modal_icons">
                                        <a href={`https://${this.props.data.reservation}`}>
                                            <img src={`${process.env.PUBLIC_URL}/image/Nav/modal_home.svg`} alt={`${this.props.data.name} 예약페이지`} />
                                        </a>
                                        <a href={this.props.data.instagram}>
                                            <img src={`${process.env.PUBLIC_URL}/image/Nav/modal_insta.svg`} alt={`${this.props.data.name} 인스타그램`} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div style={{ height: "400px" }}>
                                    <Slider {...settings}>
                                        {this.props.data.img.map((e)=>(
                                        <div key={e}>
                                            <img className="M_modal_Slide_img" src={process.env.PUBLIC_URL + "/image/designer/"+ this.props.data.store + "/" + this.props.data.eng +"/"+ e} alt="main" />
                                        </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                            <div style={{ width: "351px", float:"left",padding: "0 0 0 24px"}}>
                                <pre className="M_modal_comments">{this.props.data.comment}</pre>
                            </div>
                        </div>


                    </div>
                ) : null}
            </>
        );
    }
}

export default D_modal;