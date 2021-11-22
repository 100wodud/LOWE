import { Component } from "react";
import "./V_Mainpage.css";
import reservation from "../data/reservation";
import Reservationlist from "./Reservation_list";
import { withRouter } from 'react-router-dom';

class V_Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                {reservation.map((e) => (
                        <Reservationlist div key={e.id} e={e} />
                ))}
            </>
        )
    }
}

export default withRouter(V_Mainpage);