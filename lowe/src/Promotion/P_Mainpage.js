import { Component } from "react";
import Header from "../nav/SubHeader";
import Lowe5th from "./Lowe5th";
import Footer from "../nav/Footer";
import Request from "../Home/Requestsec";
import RequestNav from "../nav/RequestNav";


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
                <RequestNav request="promtion" />
                <Lowe5th />
                <Request />
                <Footer />
            </>
        )
    }
}

export default P_Mainpage;





