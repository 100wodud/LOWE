import { Component } from "react";
import "./D_Firstsec.css"

class D_Firstsec extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <section className="Designer_first_section">
                <div>
                    <div className="Designer_first_title" >
                        <div>로위 디자이너</div>
                    </div>
                    <img src={process.env.PUBLIC_URL + "/image/designer/designer1_1.png"} alt="lowe designer" />
                    <div className="Designer_first_text">
                        <div>
                            <div>
                                위로와 건강한 아름다움을 건네는
                            </div>
                            <div>
                                로위 디자이너를 소개합니다.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default D_Firstsec;

