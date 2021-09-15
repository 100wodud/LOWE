
import { Component } from "react";
import "./E_Firstsec.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Firstsecimg from "./E_Firstsec_img";
import axios from "axios";


class E_Firstsec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventdata: '',
            showevent:''
        };
    }

    componentDidMount = () => {
        axios.get("http://localhost:3306/event_list",
            { withCredentials: true }
        ).then((result) => {
            this.setState({ eventdata: result.data })
            this.setState({ showevent: this.state.eventdata.slice(0, 5)})
        }).catch(err => {
            this.setState({ error: "" })
        })

        

    }


    render() {
        var settings = {
            dots: true,
            infinite: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
        };
        return (
            <section className="Eventpage_first_section">
                {this.state.showevent ? 
                <Slider {...settings}>
                    {this.state.showevent.map(((e) => (
                <Firstsecimg key={e.id} e={e} location={this.props.location} />
            )))}
                </Slider> :  
                <></>
            }
            </section>
        )
    }
}

export default E_Firstsec;





