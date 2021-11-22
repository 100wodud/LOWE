import { Component } from "react";
import "./I_Secondsec.css";
import IStore from "./I_Store";
import store from "../data/store";


class I_Secondsec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location
    };
  }

  render() {
    return (
      <section className="Info_second_section">
        <div className="Info_second_section_div">
          <button className="Info_second_button" autoFocus onClick={this.props.onClicklocation("신촌점")}>
            신촌점
          </button>
          <button className="Info_second_button" onClick={this.props.onClicklocation("합정점")}>
            합정점
          </button>
          <button className="Info_second_button" onClick={this.props.onClicklocation("홍대점")}>
            홍대입구역점
          </button>
        </div>
        {this.props.location === '신촌점' ?
          <IStore data={store[0]} /> :

          this.props.location === '홍대점' ?
            <IStore data={store[1]} /> :

            this.props.location === '합정점' ?
              <IStore data={store[2]} /> :

              <IStore data={store[0]} />
        }
      </section>
    )
  }
}

export default I_Secondsec;