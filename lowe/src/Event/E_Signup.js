import React from "react";
import axios from "axios";
import "./E_Signup.css";

class E_Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            week: this.props.week,
            error: "",
        };
    }

    handleInputValue = (key) => (e) => {
        this.setState({ [key]: e.target.value });
    };

    handleClose = () => {
        this.setState({
            error: "",
        })
        this.props.close();
    }

    handleSignUp = () => {
        if(this.state.phone.length >= 10){
            axios.post("http://localhost:3306/signup_event", {
                phone: this.state.phone,
                week: this.state.week
            }).then(() => {
                window.alert("요청에 성공하셨습니다")
            }).catch(err => {
                this.setState({ error: "동일한 전화번호가 있습니다" })
            })
        }else {
            this.setState({ error: "전화번호를 입력해주십시오" })
        }
    }

    render() {
        const { open } = this.props;
        return (
            <div className="modalSignUp">
                {open ? (
                    <div className="SignUpBody">
                        <div className="SignUpInner">
                            <div className="SignUpText">
                                <h1>{this.props.week}주차 이벤트</h1>
                                <input className="signUpinfo" placeholder="전화번호" onChange={this.handleInputValue("phone")} />
                                <button className="signUp" onClick={this.handleSignUp}> 신청하기 </button>
                                <button className="exitBtn" onClick={this.handleClose}> Exit </button>
                                {this.state.error ? <div className="alert-box">{this.state.error}</div> : ''}
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default E_Signup;