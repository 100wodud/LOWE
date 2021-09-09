import { Component } from "react";
import "./I_Secondsec.css";


class I_Secondsec extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  
  render() {
    return (
      <section className="sec_section">
          <div>
              <div id="loc"></div>
              {this.props.location === '신촌점' ? 
                <div>안녕하세요 이곳은 신촌점 입니다</div>: 

                this.props.location === '홍대점' ? 
                <div>안녕하세요 이곳은 홍대점 입니다</div> : 

                this.props.location === '합정점' ? 
                <div>안녕하세요 이곳은 합정점 입니다</div> :

                <div>이곳은 로위입니다</div>
              }
          </div>
      </section>
    )
  }
}

export default I_Secondsec;