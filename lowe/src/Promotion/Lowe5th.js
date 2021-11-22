import { Component } from "react";
import "./Lowe5th.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}




class Lowe5th extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <section className="Lowe5th_section">
                <Desktop>
                    <img src={process.env.PUBLIC_URL + "/image/promotion/lowe5th.png"} alt="로위 5호점 강남" />
                </Desktop>
                <Mobile>
                    <img src={process.env.PUBLIC_URL + "/image/promotion/M_lowe5th1.png"} alt="로위 5호점 강남" />
                    <img src={process.env.PUBLIC_URL + "/image/promotion/M_lowe5th2.png"} alt="로위 5호점 강남" />
                    <img src={process.env.PUBLIC_URL + "/image/promotion/M_lowe5th3.png"} alt="로위 5호점 강남" />
                    <img src={process.env.PUBLIC_URL + "/image/promotion/M_lowe5th4.png"} alt="로위 5호점 강남" />
                </Mobile>
            </section>
        )
    }
}

export default Lowe5th;





