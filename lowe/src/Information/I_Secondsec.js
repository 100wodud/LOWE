import { Component } from "react";
import "./I_Secondsec.css";
import IStore from "./I_Store";
import store from "../data/store";
import ScrollContainer from 'react-indiana-drag-scroll'


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
      <ScrollContainer className="Info_second_section_scroll">
        <div className="Info_second_section_div">
          <button className={(this.props.location === '성수점' ? "Info_second_button forcus" : 'Info_second_button')} onClick={this.props.onClicklocation("성수점")}>
            성수점
          </button>
          <button className={(this.props.location === '이수역점' ? "Info_second_button forcus" : 'Info_second_button')} onClick={this.props.onClicklocation("이수역점")}>
            이수역점
          </button>
          <button className={(this.props.location === 'L7홍대점' ? "Info_second_button forcus" : 'Info_second_button')} onClick={this.props.onClicklocation("L7홍대점")}>
            L7홍대점
          </button>
          <button className={(this.props.location === '강남점' ? "Info_second_button forcus" : 'Info_second_button')} onClick={this.props.onClicklocation("강남점")}>
            강남점
          </button>
          <button className={(this.props.location === '신촌점' ? "Info_second_button forcus" : 'Info_second_button')} onClick={this.props.onClicklocation("신촌점")}>
            신촌점
          </button>
          <button className={(this.props.location === '합정점' ? "Info_second_button forcus" : 'Info_second_button')} onClick={this.props.onClicklocation("합정점")}>
            합정점
          </button>
          <button className={(this.props.location === '홍대점' ? "Info_second_button forcus" : 'Info_second_button')} onClick={this.props.onClicklocation("홍대점")}>
            홍대입구역점
          </button>
        </div>
        </ScrollContainer>
        {this.props.location === '신촌점' ?
          <IStore data={store[0]} /> :
          this.props.location === '홍대점' ?
            <IStore data={store[1]} /> :
            this.props.location === '합정점' ?
              <IStore data={store[2]} /> :
              this.props.location === '강남점' ?
                <IStore data={store[3]} /> :
                this.props.location === 'L7홍대점' ?
                  <IStore data={store[4]} /> :
                  this.props.location === '이수역점' ?
                    <IStore data={store[5]} /> :
                    this.props.location === '성수점' ?
                    <IStore data={store[6]} />:
                <IStore data={store[6]} />
        }
      </section>
    )
  }
}

export default I_Secondsec;