import { Component } from "react";
import Header from "../nav/SubHeader";
import { Helmet } from 'react-helmet';
import Firstsec from "./Rec_Firstsec";
import Timer from "../nav/Timer2";

class Recruitment extends Component {
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
        <Firstsec />
        <Header />
        <Timer date="2022-01-18T00:00:00" />
      </>
    )
  }
}

export default Recruitment;