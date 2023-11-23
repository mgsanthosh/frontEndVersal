import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './page/Login';
import Logout from './page/Logout';
import DepositPremium from './page/DepositPremium';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './comp/Head';
import About from './page/About';
import ApiCall from './page/ApiCall';
import ReceiptGen from './comp/ReceiptGen';

function App() {
  return (
    <>
   <BrowserRouter>
     <Head/>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='/receipt' element={<ReceiptGen/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/deposit-premium' element={<DepositPremium/>}/>
    </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
