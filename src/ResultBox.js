import { Button } from '@material-ui/core';
import React from 'react';

const ResultBox = (results) => <Button 
    variant="contained"
    onClick={() => console.log(results)}
>
log Results
</Button>


export default ResultBox;