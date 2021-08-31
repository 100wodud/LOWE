import { Component } from "react";
import { Route, Switch} from "react-router-dom";
import Mainpage from "./Home/Mainpage";
import Request from "./Request";
import Info from "./Information/Mainpage"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={Mainpage} />
        <Switch>
          <Route path="/request" component={Request} />
          <Route path="/info" component={Info} />
        </Switch>
      </div>
    )
  }
}

export default App;





