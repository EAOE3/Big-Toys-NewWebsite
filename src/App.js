import Navbar from 'components/commons/navbar';
import Footer from 'components/commons/footer';

import Home from 'pages/home/index';

import 'scss/main.scss';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Home/>
            <Footer/>
        </div>
  );
}

export default App;
