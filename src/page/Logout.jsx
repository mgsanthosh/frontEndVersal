import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useWContext } from '../helper/contextapi';

function Logout() {

    const navigate = useNavigate();
    const { updateLog } = useWContext();


    // Redirect to another page when loout
    useEffect(() => {
        localStorage.removeItem("token")
        updateLog('logout')
        navigate('/login');
        
    }, [navigate]);


  return (
    <>
    </>
  );
}

export default Logout;
