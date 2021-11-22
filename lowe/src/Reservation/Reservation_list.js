import { Component } from "react";
import { Link,withRouter } from 'react-router-dom';

class Reservation_list extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>

                <Link to={{
                    pathname: "/reservation/" + this.props.e.eng,
                    state: {
                        id: this.props.e.id,
                        data: this.props.e
                    },
                }}>
                    <div>{this.props.e.eng} </div>
                </Link>
                <Link to={{
                    pathname: "/reservation/lowe_" + this.props.e.eng,
                    state: {
                        id: this.props.e.id,
                        data: this.props.e,
                        lowe: true
                    },
                }}>
                    <div>lowe_{this.props.e.eng}</div>
                </Link>
            </>
        )
    }
}

export default withRouter(Reservation_list);