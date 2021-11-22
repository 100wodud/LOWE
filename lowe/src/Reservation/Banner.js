import { Component } from "react";
import "./V_Mainpage.css";

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    clickBanner = () => {
        navigator.clipboard.writeText("LOWEWINTER")
        .then(() => {
            alert("할인 코드가 클립보드에 복사되었습니다");
        })
    }
    componentDidMount = () => {

      let banner = document.getElementById("toast-banner");
        setTimeout(function(){
            banner.classList.add('show');
        }, 3000);
    }

    render() {
        return (
            <div className="toast-banner" id="toast-banner" onClick={this.clickBanner} >
                <img src={process.env.PUBLIC_URL + "/image/reservation/discount-banners.png"}  alt="로위 1만원 할인 코드 : LOWEWINTER" />
            </div>
        )
    }
}

export default Banner;