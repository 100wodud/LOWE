import { Component } from "react";
import Firstsec from "./D_Firstsec";
import Header from "../nav/SubHeader";
import Secondsec from "./D_Secondsec";
import Footer from "../nav/Footer";


class D_Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <>
                <Header />
                <Firstsec />
                <Secondsec />
                <Footer />
            </>
        )
    }
}

export default D_Mainpage;





