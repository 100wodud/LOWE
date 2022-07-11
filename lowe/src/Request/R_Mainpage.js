import { Component } from "react";
import Header from "../nav/SubHeader";
import { Helmet } from 'react-helmet';
import Firstsec from "./R_Firstsec"



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
          <meta property="og:title" content="국내 대표 공유미용실 로위(LOWE) - 디자이너 입점 문의" />
        </Helmet>
        <div id="header_trigger" />
        <Header />
        <Firstsec />
      </>
    )
  }
}

export default R_Mainpage;