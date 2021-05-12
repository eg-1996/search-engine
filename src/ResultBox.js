import React from 'react';
import UserItem from './UserItem';
import List from '@material-ui/core/List';

const ResultBox = ({ results }) => {
    console.log(results.items[0]);
    const userList =[];
    results.items.forEach(user => {
        userList.push(<UserItem user={user}/>)
    });
    return (<List>
        {userList}
    </List>)
};

ResultBox.defaultProps = {
    results:{
        items: [],
        total_count: 0
     }
}
export default ResultBox;