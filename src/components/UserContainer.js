import React, {useEffect} from 'react';
import { connect } from 'react-redux'
import { fatchUser } from '../redux'

const UserContainer = ({userData, fatchUser}) => {
    
    useEffect(() => {
        fatchUser()
    }, [])

    return userData.isLoading ? (<h1> Loading...</h1>)
        : userData.error ? (<h1> {userData.error}</h1>)
        :(<div>
            <h2>User List</h2>
            {
                userData && userData.data.map(user => <div key={user.id}>{user.name}</div>)
            }
        </div>
     );
}


const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fatchUser: () => dispatch(fatchUser())
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
