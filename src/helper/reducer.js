const wReducer = (state,action) =>{

    if(action.type === "UPDATE_LOGIN") {

        let evn =  action.payload;
        let updatedState;

        console.log('logout' + state.token)

        if(evn === "logout") { 
            updatedState = false;
        }
        else {
            updatedState = true
        }


        return {
            ...state,
            login_state : updatedState, 
        }
    }


   

    return state;

}

export default wReducer;