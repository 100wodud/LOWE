import { Component } from "react";
// import { Tween, Timeline } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import "./Thirdsec.css"

class Thirdsec extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount = () => {


    }

    render() {
        return (
            <section className="Mainpage_Third_section">
                <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
                    <Scene pin>
                        <div className="panel blue">
                        <img className="section_img" src="image/mainpage/main3_1.jpeg" alt="main3_1" />
                        </div>
                    </Scene>
                    <Scene pin>
                        <div className="panel turqoise">
                        <img className="section_img" src="image/mainpage/main3_2.jpeg" alt="main3_2" />
                        </div>
                    </Scene>
                    <Scene pin>
                        <div className="panel green">
                        <img className="section_img" src="image/mainpage/main3_3.jpeg" alt="main3_3" />
                        </div>
                    </Scene>
                </Controller>
            </section>
        )
    }
}

export default Thirdsec;
