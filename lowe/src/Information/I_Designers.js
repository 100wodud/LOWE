import { Component } from "react";
import shinchon from "../data/shinchon";
import hapjeong from "../data/hapjeong";
import IDesigner from "./I_Designer";
import "./I_Designers.css";


class I_Designers extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
  
  render() {
    console.log(this.props.location)
    return (
      <div className="designers_info">
             {this.props.location==='신촌점' ? shinchon.map((e) => (
                <IDesigner key={e.id} e={e} location={this.props.location} loc="shinchon" />
            )): 
            this.props.location==='합정점' ? hapjeong.map((e) => (
              <IDesigner key={e.id} e={e} location={this.props.location} loc="hapjeong" />
          )): 
            <div>준비중...</div>}
      </div>
    )
  }
}

export default I_Designers;