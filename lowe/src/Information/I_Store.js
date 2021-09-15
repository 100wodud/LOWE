import { Component } from "react";
import "./I_Store.css";


class I_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }

  render() {
      console.log(this.props.data)
    return (
        <>
            <div className="store_info">
                <div>
                    {this.props.data.store}
                </div>
                <div>
                    <a href={this.props.data.facebook}>페이스북</a>
                </div>
                <div>
                    <a href={this.props.data.facebook}>인스타</a>
                </div>
            </div>
            <div className="store_info_img">
                <img id="store_img" src={`${process.env.PUBLIC_URL}${this.props.data.picture}`} alt={`로위 ${this.props.data.store} 이미지`} />
            </div>
            <div className="store_comment">
                <div>
                    주소: {this.props.data.address}
                </div>
                <div>
                    시간: {this.props.data.time}
                </div>
                <div>
                   {this.props.data.comment}
                </div>
            </div>
        </>
    )
  }
}

export default I_Store;