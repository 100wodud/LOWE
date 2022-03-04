import { Component } from "react";
import Header from "../nav/SubHeader";
import Lowe6th from "./Lowe6th";
import Footer from "../nav/Footer";
import Timer from "../nav/Timer2";


class P_Mainpage2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <>
                <Header />
                <Lowe6th />
                <Footer />
                <Timer date="2022-01-18T00:00:00" />
            </>
        )
    }
}

export default P_Mainpage2;





