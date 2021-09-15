import { Component } from "react";
import Signup from "./E_Signup";
import "./E_Event.css"

class E_Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signupOpen: false,
        };
    }

    openSignUp = () => {
        this.setState({ signupOpen: true });
      };
      closeSignUp = () => {
        this.setState({ signupOpen: false });
      };

      handleSignUpSuccess = () => {
        this.setState({
          signupOpen: false,
        });
      }


    render(){
        console.log(this.props)
        return(
            <section className="E_Event_Section">
                <div>
                    {this.props.location.state.week}주차 이벤트
                </div>
                <div>
                    {this.props.location.state.s_date.slice(0,10)}~{this.props.location.state.e_date.slice(0,10)}
                </div>
                <div>
                    <img className="E_Event_image" src={this.props.location.state.img} alt={`event${this.props.location.state.week}`} />
                </div>

                <button onClick={this.openSignUp}>신청하기</button>
                <Signup open={this.state.signupOpen} close={this.closeSignUp} handleSignUpSuccess={this.handleSignUpSuccess} week={this.props.location.state.week} />
            </section>
        )       
    }
}

export default E_Event;