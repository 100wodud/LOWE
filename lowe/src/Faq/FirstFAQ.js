import { Component } from "react";
import "./FirstFAQ.css"

class FirstFAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: false,
            faq: "",
            i: ""
        };
    }
    
    onClickcontent = () => {
        this.setState({ content: !this.state.content })
    }

    render() {
        return (
            <div>
                <div onClick={this.onClickcontent} className={this.state.content ? "FirstFAQ_title_border" : "FirstFAQ_title"}>
                    <div className="FirstFAQ_title_number">{this.props.i + 1}</div>
                    <div className="FirstFAQ_title_title">{this.props.e.q}</div>
                    <div className="FirstFAQ_title_arrow">
                        <img className={this.state.content ? "" : "FirstFAQ_title_arrow_reverse"} src={process.env.PUBLIC_URL + "/image/faq/arrow.svg"} alt="lowe faq" />
                    </div>
                </div>
                {
                    this.state.content ?
                        <div className="FirstFAQ_content">
                            <div>{this.props.e.a}</div>
                        </div> : null
                }
            </div>
        )
    }
}

export default FirstFAQ;