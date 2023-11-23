import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";
const wContext = createContext();

const getUserState = () => {
   
    let localInfo = localStorage.getItem("token");

    if(localInfo === null)
         return "0";
    else if(localInfo === ''){
        return "0";
    }else{
        return localInfo;
    }


}




const initialState = {
    login_state :  getUserState() === "0" ? false : true,
    token :  getUserState(),
};

export const ContextProvider = ({children}) => {
    
    const [state,dispatch] = useReducer(reducer,initialState);

    const updateLog = (evn) => {
        dispatch({type:"UPDATE_LOGIN",payload:evn } );
        
    }
    
    return <wContext.Provider value={
        {
            ...state,
            updateLog
        }
    }>{children}</wContext.Provider>;

}

export const useWContext = () =>{
    return useContext(wContext);
}