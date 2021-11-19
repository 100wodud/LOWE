import React from "react";
import "./D_modal.css";
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
                    <div className="modalBody" >
                        <div className="modalclick" onClick={this.handleClose}></div>
                        <div className="modalInner" >
                            <img className="modalClose" onClick={this.handleClose} src={`${process.env.PUBLIC_URL}/image/Nav/modalClose.svg`} alt="로위 상세보기 닫기" />
                            <div style={{ backgroundColor: "white" }}>
                                <div style={{ margin: "55px 41px 55px 41px", height: "650px" }}>
                                    <div>원장 {this.props.data.name}</div>
                                    <div style={{ fontSize: "22px", marginBottom: "24px" }}>{this.props.data.eng}</div>
                                    <pre style={{ fontSize: "20px", fontWeight: "500", lineHeight: "30px", wordBreak: "keep-all" }}>{`${this.props.data.comment}`}</pre>
                                    <div className="modal_icons">
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
                                <div style={{  width: "100%", height: "100%",  }}>
                                    <Slider {...settings}>
                                        {this.props.data.img.map((e)=>(
                                        <div key={e}>
                                            <img className="modal_Slide_img" src={process.env.PUBLIC_URL + "/image/designer/"+ this.props.data.store + "/" + this.props.data.eng +"/"+ e} alt="main" />
                                        </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </>
        );
    }
}

export default D_modal;