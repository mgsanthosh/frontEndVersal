import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './page/Login';
import Logout from './page/Logout';
import DepositPremium from './page/DepositPremium';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './comp/Head';
import About from './page/About';
import ApiCall from './page/ApiCall';
import ReceiptGen from './comp/ReceiptGen';
import LoginScreen from './Screens/Login/LoginScreen';
import "./App.scss";
import Dashboard from './Screens/dashboard/Dashboard';
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

      <Route path='/logout' element={<Logout/>}/>
      <Route path='/receipt' element={<ReceiptGen/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/deposit-premium' element={<DepositPremium/>}/>
    </Routes>
     </div>

   </BrowserRouter>
    </ div>
  );
}

export default App;
