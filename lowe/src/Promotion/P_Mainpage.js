import { Component } from "react";
import Header from "../nav/SubHeader";
import Lowe5th from "./Lowe5th";
import Footer from "../nav/Footer";
import Request from "../Home/Requestsec";
import Timer from "../nav/Timer";


class P_Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <>
                <Header />
                <Lowe5th />
                <Request />
                <Footer />
                <Timer date="2022-01-18T00:00:00" />
            </>
        )
    }
}

export default P_Mainpage;





