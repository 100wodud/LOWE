import { Component } from "react";
import Header from "../nav/SubHeader";
import Footer from "../nav/Footer";
import Firstsec from "./R_Firstsec";
import Sia from "./Sia";
import Thirdsec from "./R_Thirdsec";
import { Helmet } from 'react-helmet';
import TagManager from "react-gtm-module";

class R_Sia_Mainpage extends Component {
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
              entry: "시아"
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
                <Sia />
                <Thirdsec />
                <Footer />
            </>
        )
    }
}

export default R_Sia_Mainpage;
