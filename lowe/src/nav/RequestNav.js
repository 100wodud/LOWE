import { Component } from "react";
import "./RequestNav.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}



class RequestNav extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    gotoTop = () => {
        document.documentElement.scrollTop = 0;
    }


    render() {
        return (
            <div className="request_nav">
                <Desktop>
                    <div className="banner_request_button">
                        {this.props.request ?
                            this.props.request === "promtion" ?
                            <a href="/request" className="requestBtn" >
                                <img src={process.env.PUBLIC_URL + "/image/Nav/promotion.png"} alt="request_button" /> 
                            </a> :
                            <div>
                                <img onClick={this.gotoTop} src={process.env.PUBLIC_URL + "/image/Nav/M_gotoup.svg"} alt="request_button" /> 
                            </div>:
                            <a href="/request" className="requestBtn" >
                                <img src={process.env.PUBLIC_URL + "/image/Nav/request_button.svg"} alt="request_button" />
                            </a>}
                    </div>
                </Desktop>
                <Mobile>
                    <div className="banner_request_button">
                        {this.props.request ?
                            this.props.request === "promtion" ?
                            <a href="/request" className="requestBtn" >
                                <img src={process.env.PUBLIC_URL + "/image/Nav/M_promotion.png"} alt="request_button" /> 
                            </a> :
                            <div>
                                <img onClick={this.gotoTop} src={process.env.PUBLIC_URL + "/image/Nav/M_gotoup.svg"} alt="request_button" /> 
                            </div>:
                            <a href="/request" className="requestBtn" >
                                <img src={process.env.PUBLIC_URL + "/image/Nav/M_request_button.svg"} alt="request_button" />
                            </a>}
                    </div>
                </Mobile>
            </div>
        )
    }
}

export default RequestNav;





