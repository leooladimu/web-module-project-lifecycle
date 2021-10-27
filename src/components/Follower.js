import React from 'react';
import axios from 'axios';

class Follower extends React.Component {

    state = {
        follower: [],
    };

    componentDidMount() {
        axios.get('https://api.github.com/users/leooladimu/followers')
        .then((r) => {
            console.log(r);
            this.setState({
                follower: r.data,
            });
        })
        .catch((er) => console.log(er));  
    }
                  
    render() {

        const { follower } = this.state;
        
        if(follower.length === 0) return <p>¡E'pera tí!</p>;
        
        return (
            <div>
                {follower.map((followers) => (
                    <div key={followers.id}         className='followers-card'>
                    <h4>{followers.login}</h4>
                    <img style={{
                         width: '100px',   
                         borderRadius: '50%'
                    }} src={followers.avatar_url} 
                    />
                    </div>
                ))}
            </div>
        );
    }
}


export default Follower;