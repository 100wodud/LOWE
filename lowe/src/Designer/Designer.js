import { Component } from "react";
import Modal from "./D_modal";
import MModal from "./D_M_modal";
import "./Designer.css"
import { useMediaQuery } from 'react-responsive'


const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 })
    return isDesktop ? children : null
}
const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 })
    return isMobile ? children : null
}



class Designer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,

        };
    }

    openmodal = () => {
        this.setState({ modalOpen: true });
    };
    closemodal = () => {
        this.setState({ modalOpen: false });
    };


    render() {
        return (
            <div className="designer_information" key={this.props.e.id}>
                <div className="designer_name">원장 {this.props.e.name}</div>
                <div className="designer_name designer_eng">{this.props.e.eng}</div>
                <div className="designer_picture_div" >
                    <div></div>
                    <img onClick={this.openmodal} className="designer_picture" src={`${process.env.PUBLIC_URL}/image/designer/${this.props.loc}/${this.props.e.eng}.png`} alt={`${this.props.e.name} 디자이너 사진`} />
                </div>
                <div style={{ textAlign: "right"}}>
                    <img onClick={this.openmodal} className="designer_moreview" src={`${process.env.PUBLIC_URL}/image/Nav/moreview.png`} alt={`${this.props.e.name} 디자이너 더보기`} />
                </div>
                <Desktop>
                    <Modal data={this.props.e} open={this.state.modalOpen} close={this.closemodal} />
                </Desktop>
                <Mobile>
                    <MModal data={this.props.e} open={this.state.modalOpen} close={this.closemodal} />
                </Mobile>
            </div>
        )
    }
}

export default Designer;