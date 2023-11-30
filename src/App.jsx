import { BrowserRouter, Routes,Route } from 'react-router-dom';
import DepositPremium from './page/DepositPremium';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './comp/Head';
import LoginScreen from './Screens/Login/LoginScreen';
import "./App.scss";
import desktopImage from "/img/Rectangle7.png";
import Loader from './Components/Loader/Loader';
import { useWContext } from './helper/contextapi';
import Builder from './Screens/Builder/Builder';

function App() {
  const { updateLog, loader, setLoader } = useWContext();

  return (
    <div className="mainContainer">
          { loader && <div className='loaderLayerContainer'>
                 <Loader></Loader>
    </div>} 
   <BrowserRouter>
     <Head/>
     <div className="routesContainer">
     <Routes>
      <Route path='/' element={<LoginScreen/>}/>
      <Route path='/dashboard' element={<DepositPremium/>}/>
      <Route path='/builder' element={<Builder />} />
      <Route path='/login' element={<LoginScreen/>}/>
    </Routes>
     </div>

   </BrowserRouter>
    </ div>
  );
}

export default App;
