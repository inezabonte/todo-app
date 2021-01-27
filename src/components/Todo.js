import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchTasks } from '../redux/actions/TodoAction'

function Todo(props){
    useEffect(() => {
        const userToken = localStorage.getItem("loginToken");
        if(!userToken){
            return props.history.push('/login');
        }
        props.fetchTasks()
    }, [])
    return(
        <h1>Todo Page</h1>
    )
}

const mapStateToProps = state => ({
    tasks: state.todo
})

export default connect(mapStateToProps, {fetchTasks})(Todo)