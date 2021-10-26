import React from 'react';
import axios from 'axios';

class User extends React.Component {

    state = {
        user: {}
    }

    componentDidMount() {
        axios.get('https://api.github.com/users/leooladimu')
            .then((r) => {
                console.log(r.data);
                this.setState({
                    user: r.data
                });
            })
            .catch((er) => 
                console.log(er)
            );       
    }

    render() {
        return <div>
            <h2>{this.state.user.name}</h2>
            <img
                style={{ width: '100px', borderRadius: '50%'}} 
                src={this.state.user.avatar_url} 
            />
        </div>
    }
}

export default User;