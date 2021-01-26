import React, {useEffect} from 'react'

function Todo(props){
    useEffect(() => {
        const userToken = localStorage.getItem("loginToken");
        if(!userToken){
            props.history.push('/login');
        }
    }, [])
    return(
        <h1>Todo Page</h1>
    )
}

export default Todo