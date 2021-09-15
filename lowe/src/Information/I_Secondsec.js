import { Component } from "react";
import "./I_Secondsec.css";
import IStore from "./I_Store";
import store from "../data/store";


class I_Secondsec extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
    return (
      <section className="sec_section">
        {this.props.location === '신촌점' ? 
          <IStore data={store[0]}/>: 

          this.props.location === '홍대점' ? 
          <IStore data={store[1]}/>:  

          this.props.location === '합정점' ? 
          <IStore data={store[2]}/>: 

          <div>이곳은 로위입니다</div>
        }
      </section>
    )
  }
}

export default I_Secondsec;