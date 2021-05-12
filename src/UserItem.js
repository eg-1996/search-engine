import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core';

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

const  UserItem = ({user, handleClick}) => {
    const classes = useStyles();
    return (
        <ListItem button alignItems="flex-start" onClick={()=> handleClick(user)}>
            <ListItemAvatar>
            <Avatar src={user?.avatar_url} />
            </ListItemAvatar>
            <ListItemText
                primary={user?.login}
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
