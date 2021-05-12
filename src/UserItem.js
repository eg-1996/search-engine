import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { getUserProfile } from './Api';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const  UserItem = ({user}) => {
    const [userInfo, setUserInfo] = useState({});
    const classes = useStyles();
    console.log(user);
    useEffect(()=> {
        getUserProfile(user.url, setUserInfo); 
    },[user])
    console.log(userInfo);

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={userInfo?.avatar_url} />
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Link href={userInfo?.html_url}>
                        {userInfo?.login}/{userInfo?.name}
                    </Link>
                    }
                secondary={
                    <React.Fragment>
                    <Typography
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                    </Typography>
                        {" More relevant info or description"}
                    </React.Fragment>
                }
            />
        </ListItem>
    );
}

UserItem.defaultProps ={
    user:{
        avatar_url: '',
        login: '',
        url: ''
    }
}

export default UserItem
