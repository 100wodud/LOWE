import { Component } from "react";
import "./I_Firstsec.css";


class D_Firstsec extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ''
    };
  }

  componentDidMount = () => {
    this.props.kakaoMap();
  }

  render() {
    return (
      <section className="first_section">
        <div id="map"></div>
        <table>
          <thead>
            <tr>
              <td className="location_button" onClick= {this.props.onClicklocation("신촌점")}>
                <div>신촌</div>
              </td>
              <td className="location_button" onClick= {this.props.onClicklocation("홍대점")}>
                <div>홍대</div>
              </td>
              <td className="location_button" onClick= {this.props.onClicklocation("합정점")}>
                <div>합정</div>
              </td>
              <td className="location_button" onClick= {this.props.onClicklocation("")}>
                <div>전체</div>
              </td>
            </tr>
          </thead>
        </table>
      </section>
    )
  }
}

export default D_Firstsec;