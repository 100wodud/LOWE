import { Component } from "react";
import "./I_Designer.css"

class I_Designer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="designer_information" key={this.props.e.id}>
        <div className="designer_picture_div" >
          <a target="_blank" rel="noreferrer" href={this.props.e.instagram}>
            <img className="designer_picture" src={`${process.env.PUBLIC_URL}/image/Designers/${this.props.loc}/${this.props.e.eng}.jpeg`} alt={`${this.props.e.name} 디자이너 사진`} />
          </a>
        </div>
        <div className="designer_name_div">
          <div className="">{this.props.location}</div>
          <div className="">원장 {this.props.e.name}</div>
        </div>
        <div className="designer_comment_div">
          <div className="">{this.props.e.comment}</div>
        </div>
        <div className="designer_reservation_div">
          <a target="_blank" rel="noreferrer" href={`https://lo-we.kr/reservation/${this.props.e.eng}`}>
            <div className="">버튼만들예정</div>
          </a>
        </div>
      </div>
    )
  }
}

export default I_Designer;