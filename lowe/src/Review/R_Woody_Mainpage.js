import { Component } from "react";
import Header from "../nav/SubHeader";
import Footer from "../nav/Footer";
import Firstsec from "./R_Firstsec";
import Woody from "./Woody";
import Thirdsec from "./R_Thirdsec";
import { Helmet } from 'react-helmet';
import TagManager from "react-gtm-module";


class R_Woody_Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount = () =>{
        window.localStorage.setItem("route", "디자이너 리뷰");
        const tagManagerArgs = {
            dataLayer: {
              event: "review_view",
              designer: "우디"
            },
          };
          TagManager.dataLayer(tagManagerArgs);

    }



    render() {
        return (
            <>
                <Helmet>
                    <title>국내 대표 공유미용실 로위(LOWE) - 디자이너 리뷰</title>
                    <meta charSet="utf-8" />
                    <meta property="og:title" content="국내 대표 공유미용실 로위(LOWE) - 디자이너 리뷰" />
                </Helmet>
                <Header />
                <Firstsec />
                <Woody />
                <Thirdsec />
                <Footer />
            </>
        )
    }
}

export default R_Woody_Mainpage;