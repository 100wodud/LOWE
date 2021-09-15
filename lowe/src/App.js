import { Component } from "react";
import { Route, Switch} from "react-router-dom";
import Mainpage from "./Home/Mainpage";
import Request from "./Request";
import Info from "./Information/I_Mainpage";
import Events from "./Event/E_Mainpage"
import Header from "./nav/Header";
import Owner from "./owner/owner";
import Footer from "./nav/Footer";
import Event from "./Event/E_Event";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }

  render() {
    return (
      <>
        <Header />
        <Route exact path="/" component={Mainpage} />
        <Switch>
          <Route path="/event/:id" component={Event} />
          <Route path="/request" component={Request} />
          <Route path="/info" component={Info} />
          <Route path="/events" component={Events} />
          <Route path="/testserver" component={Owner} />
        </Switch>
        <Footer />
      </>
    )
  }
}

export default App;





