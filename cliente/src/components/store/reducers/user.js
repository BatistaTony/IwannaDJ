


const user = (state = {}, action)=>{ 
    
    if(action.type === "GET_USER_DATA"){
        return {user: action.user}
    }else{
        return  {user: 0}
    }
}


export default user