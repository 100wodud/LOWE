import { Component } from "react";
import Firstsec from "./M_Firstsec";
import Header from "../nav/SubHeader";
import Secondsec from "./M_Secondsec";
import Thirdsec from "./M_Thirdsec";
import RequestNav from "../nav/RequestNav";
import Footer from "../nav/Footer";


class M_Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <>
                <Header />
                <RequestNav />
                <Firstsec />
                <Secondsec />
                <Thirdsec />
                <Footer />
            </>
        )
    }
}

export default M_Mainpage;





