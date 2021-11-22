import { Component } from "react";
import Header from "../nav/SubHeader";
import Footer from "../nav/Footer";
import Firstsec from "./R_Firstsec";
import Hyeri from "./Hyeri";
import Thirdsec from "./R_Thirdsec";
import { Helmet } from 'react-helmet';


class R_Hyeri_Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                <Hyeri />
                <Thirdsec />
                <Footer />
            </>
        )
    }
}

export default R_Hyeri_Mainpage;