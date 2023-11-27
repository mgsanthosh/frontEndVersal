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

function App() {
  return (
    <div className="mainContainer">
   <BrowserRouter>
     <Head/>
     <div className="routesContainer">
     <Routes>
      <Route path='/' element={<LoginScreen/>}/>
      <Route path='/login' element={<Login/>}/>
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
