import { Component } from "react";
import { Link } from 'react-router-dom';
import "./E_Firstsec_img.css"


class E_Firstsec_img extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        console.log(this.props)
        return (
            <div className="Eventpage_banner_div">
                <div className="Eventpage_banner_btn">
                    <Link to={{
                        pathname: "/event/"+this.props.e.id,
                        state: {
                            week: this.props.e.week,
                            img: this.props.e.img,
                            e_date: this.props.e.e_date,
                            s_date: this.props.e.s_date
                        }
                    }}>
                        예약하기
                    </Link>
                </div>
                <img className="Eventpage_banner_img" src={this.props.e.img} alt={`event${this.props.e.week}`} />
            </div>
        )
    }
}

export default E_Firstsec_img;