import { Component } from "react";
import Header from "../nav/SubHeader";
import Lowe7th from "./Lowe7th";
import Footer from "../nav/Footer";
import Timer from "../nav/Timer3";
import TagManager from "react-gtm-module";


class P_Mainpage3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = () => {
        const tagManagerArgs = {
            dataLayer: {
              event: "branch_apply_view",
              entry: "이수역"
            },
          };
          TagManager.dataLayer(tagManagerArgs);
    }

    render() {
        return (
            <>
                <Header promotion={true} />
                <Lowe7th />
                <Footer />
                <Timer date="2022-01-18T00:00:00" />
            </>
        )
    }
}

export default P_Mainpage3;





