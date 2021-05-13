import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Avatar, CardActions, CardContent, Button, Typography } from '@material-ui/core/';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 24,
    },
    pos: {
      marginBottom: 12,
    },
    avatar:{
        height: '100px',
        width: '100px'
    }
  });

const UserCard = ({ user }) => {
    const classes = useStyles();
    if (!user) {
        return null;
      }
  
    return (
        <Card className={classes.root}>
            <CardContent>
                <Avatar src={user?.avatar_url} className={classes.avatar}/>
                <Typography variant='h5' component='h1'>
                    {user?.name}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                    {user?.login}
                </Typography>
                <Typography className={classes.pos} color='textSecondary'>
                    {user?.location}
                </Typography>
                <Typography component='h4'>
                    {user?.bio}
                </Typography>

                <Typography variant='body1' component='p'>
                    Followers: {user?.followers}
                </Typography>
               
                <Typography variant='body2' component='p'>
                    following: {user?.following}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' href={user?.html_url}>View Profile</Button>
            </CardActions>
      </Card>
    );
}


export default UserCard;