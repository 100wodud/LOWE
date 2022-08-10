import { Component } from "react";
import "./RequestNav.css"
import { useMediaQuery } from 'react-responsive'

const { kakao } = window;

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

    gotoKakaobutton = () => {
        new kakao.Channel.createAddChannelButton({
            container: '#kakao-add-channel-button',
            channelPublicId: '_fNrPj' // 카카오톡 채널 홈 URL에 명시된 id로 설정합니다.
          });
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
                            <a href="/requests/recruitment" className="requestBtn" >
                                <img src={process.env.PUBLIC_URL + "/image/Nav/promotion.png"} alt="request_button" /> 
                            </a> :
                            <div>
                                <img onClick={this.gotoTop} src={process.env.PUBLIC_URL + "/image/Nav/M_gotoup.svg"} alt="request_button" /> 
                            </div>:
                            <a data-tag-index="Floating" data-tag-cate="kakaochat" href="http://pf.kakao.com/_fNrPj/chat" className="requestBtn" >
                                <img src={process.env.PUBLIC_URL + "/image/Nav/M_request_kakao.svg"} alt="request_button" />
                            </a>}
                    </div>
                </Desktop>
                <Mobile>
                    <div className="banner_request_button">
                        {this.props.request ?
                            this.props.request === "promtion" ?
                            <a href="/requests/recruitment" className="requestBtn" >
                                <img src={process.env.PUBLIC_URL + "/image/Nav/M_promotion.svg"} alt="request_button" /> 
                            </a> :
                            <div>
                                <img onClick={this.gotoTop} src={process.env.PUBLIC_URL + "/image/Nav/M_gotoup.svg"} alt="request_button" /> 
                            </div>:
                            <a data-tag-index="Floating" data-tag-cate="kakaochat" href="http://pf.kakao.com/_fNrPj/chat" className="requestBtn" >
                                <img src={process.env.PUBLIC_URL + "/image/Nav/M_request_kakao.svg"} alt="request_button" />
                            </a>}
                    </div>
                </Mobile>
            </div>
        )
    }
}

export default RequestNav;





