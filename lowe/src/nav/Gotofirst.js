import { Component } from "react";
import "./Gotofirst.css"


class Gotofirst extends Component {
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
            <div className="goto_nav">
                <img className="goto_button" onClick={this.gotoTop} src={process.env.PUBLIC_URL + "/image/Nav/gotoup.svg"} alt="gotofirst" />
            </div>
        )
    }
}

export default Gotofirst;





