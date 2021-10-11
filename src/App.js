import { Route } from "react-router";
import "./App.scss";
import { PATHS } from "./config";
import Recipt from "./newcomponents/Recipt";
import NewHome from "./newpages/Home";

function App() {
    return (
        <div>
            {/* <Route path={PATHS.home} component={Home} exact={true} /> */}
            <Route path={PATHS.newHome} component={NewHome} exact={true} />
            <Route path={PATHS.newInvoice} component={Recipt} exact={true} />
        </div>
    );
}

export default App;
