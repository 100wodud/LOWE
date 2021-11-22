import { Component } from "react";
import shinchon from "../data/shinchon";
import hapjeong from "../data/hapjeong";
import hongdae from "../data/hongdae";
import Designer from "./Designer";
import "./Designers.css";
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1000 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 999 })
  return isMobile ? children : null
}


class Designers extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="designers_info">
        <Desktop>
          <div style={{ display: "inline-block" }}>
            <div className="designers_store">신촌점</div>

            {shinchon.map((e) => (
              <Designer key={e.id} e={e} store={this.props.store} loc="shinchon" />
            ))}
          </div>
          <div style={{ display: "inline-block" }}>
            <div className="designers_store">합정점</div>
            {hapjeong.map((e) => (
              <Designer key={e.id} e={e} store={this.props.store} loc="hapjeong" />
            ))}
          </div>
          <div style={{ display: "inline-block" }}>
            <div className="designers_store">홍대입구역점</div>
            {hongdae.map((e) => (
              <Designer key={e.id} e={e} store={this.props.store} loc="hongdae" />
            ))}
          </div>
        </Desktop>
        <Mobile>
          <div className="designers_store">{this.props.store}</div>
          {this.props.store === '신촌점' ? shinchon.map((e) => (
            <Designer key={e.id} e={e} store={this.props.store} loc="shinchon" />
          )) :
            this.props.store === '합정점' ? hapjeong.map((e) => (
              <Designer key={e.id} e={e} store={this.props.store} loc="hapjeong" />
            )) :
              hongdae.map((e) => (
                <Designer key={e.id} e={e} store={this.props.store} loc="hongdae" />
              ))}
        </Mobile>
      </div>
    )
  }
}

export default Designers;