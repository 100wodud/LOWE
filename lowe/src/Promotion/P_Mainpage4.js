import { Component } from "react";
import Header from "../nav/SubHeader";
import Lowe4th from "./Lowe4th";
import Footer from "../nav/Footer";
import Timer from "../nav/Timer3";
import TagManager from "react-gtm-module";


class P_Mainpage4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = () => {
        const tagManagerArgs = {
            dataLayer: {
              event: "branch_apply_view",
              entry: "홍대입구역"
            },
          };
          TagManager.dataLayer(tagManagerArgs);
    }


    render() {
        return (
            <>
                <Header promotion={true} />
                <Lowe4th />
                <Footer />
                <Timer date="2022-01-18T00:00:00" />
            </>
        )
    }
}

export default P_Mainpage4;





