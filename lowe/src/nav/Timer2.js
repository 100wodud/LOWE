import { Component } from "react";
import "./Timer2.css"


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: '00',
            minutes: '00',
            seconds: '00',
            timeUp: false
        }
    }
    componentDidMount() {
        // setInterval(() => {
        //     let eventDate = new Date(this.props.date);
        //     let difference = eventDate - new Date();
        //     if (difference < 1) {
        //         this.setState({ timeUp: true });
        //     } else {
        //         let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        //         let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        //         let minutes = Math.floor((difference / (1000 * 60)) % 60);
        //         let seconds = Math.floor((difference / (1000)) % 60);
        //         this.setState({
        //             days : days > 9 ? days : `${days}`,
        //             hours: hours > 9 ? hours : `0${hours}`,
        //             minutes: minutes > 9 ? minutes : `0${minutes}`,
        //             seconds: seconds > 9 ? seconds : `0${seconds}`,
        //         });
        //     }
        // }, 1000)
    }

//     handleImgValue = (key) => (e) => {
//         uploadFile(e.target.files[0], AWSconfig)
//         .then(data => {
//             axios.post("https://wh.jandi.com/connect-api/webhook/21700539/63e9bb0332d40124962aaa0024282b15", {
//                 body: `[[입점문의]](${data.location}) `
//             })
//         })
//     }

//     <div>
//     <label style={{lineHeight: "64px"}} htmlFor="timer2_request" className="">지원하기</label>
//     <input type="file" accept="*" size="40" id="timer2_request" onChange={this.handleImgValue()} />
// </div>


    render() {
        // const { days, hours, minutes, seconds, timeUp } = this.state;
        return (
            <div className="timer_nav">
                {/* {timeUp ?
                    <p></p> :
                    <div style={{verticalAlign: "middle"}}>
                    <span>
                        {`D-${days}일 ${hours}시 ${minutes}분 ${seconds}초`} 
                    </span>
                    <span>
                        <img style={{verticalAlign: "middle", marginTop: "-3px"}} src={process.env.PUBLIC_URL + "/image/Nav/line.png"} alt="line" />
                    </span>
                    </div>} */}
                <div>
                    <a style={{lineHeight: "64px"}} href="https://ohella2019.typeform.com/teamLOWE"  >
                        지원하기
                    </a>
                </div>
            </div>
        );
    }
}

export default Timer;





