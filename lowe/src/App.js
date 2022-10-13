import { Component } from "react";
import { Route, Switch, withRouter} from "react-router-dom";
import Mainpage from "./Home/Mainpage";
import Info from "./Information/I_Mainpage";
import Events from "./Event/E_Mainpage";
import Owner from "./owner/owner";
import Event from "./Event/E_Event";
import Care from "./Care/C_Mainpage";
import Member from "./Member/M_Mainpage";
import Designer from "./Designer/D_Mainpage";
import Woody from "./Review/R_Woody_Mainpage";
import Kijoon from "./Review/R_Kijoon_Mainpage";
import Sia from "./Review/R_Sia_mainpage";
import Filip from "./Review/R_Filip_Mainpage";
import Yujine from "./Review/R_Yujine_Mainpage";
import Gyuhyun from "./Review/R_Gyuhyun_Mainpage";
import Eroon from "./Review/R_Eroon_Mainpage";
import Hyeri from "./Review/R_Hyeri_Mainpage";
import VMainpage from "./Reservation/V_Mainpage";
import Reservation from "./Reservation/Reservation";
import Promotion from "./Promotion/P_Mainpage";
import Promotion2 from "./Promotion/P_Mainpage2";
import Promotion3 from "./Promotion/P_Mainpage3";
import Promotion4 from "./Promotion/P_Mainpage4";
import Recruitment from "./Request/Recruitment";
import Enterstore from "./Request/Enterstore";
import Brand from "./Brand/Brand";
import FAQ from "./Faq/FAQ";
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'GTM-PGSJWDB'
}

TagManager.initialize(tagManagerArgs);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }
  componentDidMount = () => {
    
  }
  render() {
    return (
      <>
        <span id="change"></span>
        <Route exact path="/" component={Mainpage} />
        <Switch>
          <Route path="/reservation/:eng" component={Reservation} />
          <Route path="/reservation" component={VMainpage} />
          <Route path="/event/:id" component={Event} />
          <Route path="/requests/recruitment" component={Recruitment} />
          <Route path="/requests/enterstore" component={Enterstore} />
          <Route path="/care" component={Care} />
          <Route path="/info" component={Info} />
          <Route path="/careplus" component={Member} />
          <Route path="/events" component={Events} />
          <Route path="/testserver" component={Owner} />
          <Route path="/designers" component={Designer} />
          <Route path="/faq" component={FAQ} />
          <Route path="/review/woody" component={Woody} />
          <Route path="/review/kijoon" component={Kijoon} />
          <Route path="/review/sia" component={Sia} />
          <Route path="/review/filip" component={Filip} />
          <Route path="/review/yujine" component={Yujine} />
          <Route path="/review/gyuhyun" component={Gyuhyun} />
          <Route path="/review/2roon" component={Eroon} />
          <Route path="/review/hyeri" component={Hyeri} />
          <Route path="/brandstory" component={Brand} />
          <Route path="/promotion/lowe5th" component={Promotion} />
          <Route path="/promotion/lowe6th" component={Promotion2} />
          <Route path="/promotion/lowe7th" component={Promotion3} />
          <Route path="/promotion/lowe4th" component={Promotion4} />
        </Switch>
      </>
    )
  }
}

export default withRouter(App);





