import { Component } from "react";
import Firstsec from "./Firstsec";

class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }

  render() {
    return (
      <div>
          <section>
              <Firstsec />
          </section>
          <section>
            <a href="/request">양식작성으로 가기</a>
          </section>
          <section>
            <a href="/info">정보보기</a>
          </section>
      </div>
    )
  }
}

export default Mainpage;





