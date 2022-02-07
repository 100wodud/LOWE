import { Component } from "react";
import "./Timer.css"


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


    render() {
        const { days, hours, minutes, seconds, timeUp } = this.state;
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

                <span>
                    <a href="/request">
                        입점 문의
                    </a>
                </span>
            </div>
        );
    }
}

export default Timer;





