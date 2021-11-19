import { Component } from "react";
import Header from "../nav/SubHeader";
import Firstsec from "./R_Firstsec";
import Request from "./Request"
import Footer from "../nav/SubFooter";
import RequestNav from "../nav/RequestNav";
import { useMediaQuery } from 'react-responsive';
import { Helmet } from 'react-helmet';


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 999 })
  return isMobile ? children : null
}


class R_Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <Helmet>
          <title>국내 대표 공유미용실 로위(LOWE) - 입점 문의</title>
          <meta charSet="utf-8" />
          <meta property="og:title" content="국내 대표 공유미용실 로위(LOWE) - 디자이너 리뷰" />
        </Helmet>
        <div id="header_trigger" />
        <Header navColor={true} />
        <RequestNav request="true" />
        <Desktop>
          <Firstsec />
        </Desktop>
        <Mobile>
          <></>
        </Mobile>
        <Request />
        <Footer />
      </>
    )
  }
}

export default R_Mainpage;