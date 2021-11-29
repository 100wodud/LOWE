import { Component } from "react";
import "./D_Secondsec.css"
import Designers from "./Designers";

class D_Secondsec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            store: "신촌점"
        };
    }

    componentDidMount = () => {
        this.nameInput.focus();
      }
    
    onClickNav = (e) => () => {
        this.setState({ store: e })
    }

    render() {
        return (
            <section className="Designer_second_section">
                <div className="Desinger_nav">
                    <button className="Designer_second_button" ref={(input) => { this.nameInput = input; }} onClick={this.onClickNav("신촌점")}>
                        신촌점
                    </button>
                    <button className="Designer_second_button" onClick={this.onClickNav("합정점")}>
                        합정점
                    </button>
                    <button className="Designer_second_button" onClick={this.onClickNav("홍대입구역점")}>
                        홍대입구역점
                    </button>
                </div>
                <Designers store={this.state.store} /> 
            </section>
        )
    }
}

export default D_Secondsec;

