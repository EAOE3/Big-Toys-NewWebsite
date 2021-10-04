import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Navbar from 'components/commons/navbar';
import Footer from 'components/commons/footer';

import Home from 'pages/home';
import Faq from 'pages/faq';
import Team from 'pages/team';

import 'scss/main.scss';

function App() {
    return (
        <Router>
            <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home"/>
                    </Route>

                    <Route exact path="/home">
                        <Home/>
                    </Route>

                    <Route exact path="/faq">
                        <Faq/>
                    </Route>

                    <Route exact path="/team">
                        <Team/>
                    </Route>
                </Switch>

            <Footer/>

      </Router>
  );
}

export default App;
