import React,{ useState } from 'react';
import { List, Grid } from '@material-ui/core';
import UserItem from './UserItem';
import UserCard from './UserCard';
import { getUserProfile } from './Api';

const ResultBox = ({ results }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    console.log(results);
    const handleClick = (user) => { 
        getUserProfile(user.url, setSelectedUser);
    }

    const userList =[];
    results.items.forEach(user => {
        userList.push(<UserItem user={user} handleClick={handleClick} key={user.id}/>)
    });

    return (<Grid container>
        <Grid item xs={6}>
            <List>
                {userList}
            </List>
        </Grid>
        <Grid item xs={6}>
            <UserCard user={selectedUser}/>
        </Grid>
        
    </Grid>)
};

ResultBox.defaultProps = {
    results:{
        items: [],
        total_count: 0
     }
}
export default ResultBox;