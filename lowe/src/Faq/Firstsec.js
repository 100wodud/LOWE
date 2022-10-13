import { Component } from "react";
import "./Firstsec.css"
import { useMediaQuery } from 'react-responsive'
import faq from "../data/FAQ";
import FirstFAQ from "./FirstFAQ";


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 999 })
  return isMobile ? children : null
}

class Firstsec extends Component {
  constructor(props) {
    super(props);
    this.state = {
        faq: "전체",
        content: []
    };
  }

  componentDidMount = () => {
    this.setState({content: faq})
  }

  onClickchangeFAQ = (e) => () =>{
    this.setState({faq: e})
    let arr = []
    arr = faq.filter((v)=> e === "전체" || e === v.category)
    this.setState({content: arr})
  }


  render() {
    return (
      <section className="FAQ_first_section" id="FAQ_first_section">
        <Desktop>
        <div className="FAQ_first_title">
            <div className="FAQ_first_title_title">자주 묻는 질문 🧐</div>
            <div className="FAQ_first_title_sub">그 외 궁금하신 사항은 우측 하단 카카오 채널로 문의주세요!</div>
        </div>
        <div className="FAQ_first_filter">
            <div onClick={this.onClickchangeFAQ("전체")} className={this.state.faq === "전체" ? "FAQ_first_filter_click": null}>전체</div>
            <div onClick={this.onClickchangeFAQ("비용/정산")} className={this.state.faq === "비용/정산" ? "FAQ_first_filter_click": null}>비용/정산</div>
            <div onClick={this.onClickchangeFAQ("혜택")} className={this.state.faq === "혜택" ? "FAQ_first_filter_click": null}>혜택</div>
            <div onClick={this.onClickchangeFAQ("근무")} className={this.state.faq === "근무" ? "FAQ_first_filter_click": null}>근무</div>
            <div onClick={this.onClickchangeFAQ("계약")} className={this.state.faq === "계약" ? "FAQ_first_filter_click": null}>계약</div>
        </div>
        <div>
            {
                this.state.content.map((e, i)=> (
                    <FirstFAQ key={e.id} e={e} i={i}  />
                ))
            }
        </div>
        </Desktop>
        <Mobile>
        <div className="FAQ_first_title">
            <div className="FAQ_first_title_title">자주 묻는 질문 🧐</div>
            <div className="FAQ_first_title_sub">그 외 궁금하신 사항은<br /> 우측 하단 카카오 채널로 문의주세요!</div>
        </div>
        <div className="FAQ_first_filter">
            <div onClick={this.onClickchangeFAQ("전체")} className={this.state.faq === "전체" ? "FAQ_first_filter_click": null}>전체</div>
            <div onClick={this.onClickchangeFAQ("비용/정산")} className={this.state.faq === "비용/정산" ? "FAQ_first_filter_click": null}>비용/정산</div>
            <div onClick={this.onClickchangeFAQ("혜택")} className={this.state.faq === "혜택" ? "FAQ_first_filter_click": null}>혜택</div>
            <div onClick={this.onClickchangeFAQ("근무")} className={this.state.faq === "근무" ? "FAQ_first_filter_click": null}>근무</div>
            <div onClick={this.onClickchangeFAQ("계약")} className={this.state.faq === "계약" ? "FAQ_first_filter_click": null}>계약</div>
        </div>
        <div>
            {
                this.state.content.map((e, i)=> (
                    <FirstFAQ key={e.id} e={e} i={i}  />
                ))
            }
        </div>
        </Mobile>
      </section>
    )
  }
}

export default Firstsec;