import React, { useState } from 'react';

import './App.css';
import ImputField from './InputField';
import { Button, Grid, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { search } from './Api';
import ResultBox from './ResultBox';
import { Pagination, Alert }  from '@material-ui/lab';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [page, setPage] = useState(1);
  const [results, setResults] =useState({items: [], total_count: 0});
  const[isFieldEmpty, setIsFieldEmpty] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const perPage = 10;
  const handleTextEvent = (event) => {
    if (event.target.value.trim().length>0) {
      setIsFieldEmpty(false);
    }
    setSearchField(event.target.value.trim());
  };
  const handlePageEvent = (event, value) =>{
    search(searchField, value, perPage, setResults, setErrorMessage);
    setPage(value);
  };
// while (true) {
//   search(searchField, 'eduardo', perPage, setResults, setErrorMessage);
// };
  const handleSearchEvent =(event) =>{
    if (searchField.length<=0) {
      setIsFieldEmpty(true);
    } else {
      setIsFieldEmpty(false);
    }
    if(
      !isFieldEmpty && 
      (event.type === 'click' || event.key === 'Enter')
      ){
      search(searchField, 1, perPage, setResults, setErrorMessage);
      setPage(1);
    }
  }
  console.log(errorMessage);
  return (
    <div className='App-header'>
      <Grid container>
      <Grid item xs ={8}>
        <ImputField 
          error={isFieldEmpty}
          label='Search'
          id='test'
          value={searchField}
          onChange={handleTextEvent}
          onKeyDown={handleSearchEvent}
        />
        </Grid>
        <Grid item xs={2}>
        <Button 
          variant='contained'
          startIcon={<SearchIcon />}
          onClick={handleSearchEvent}
        >
          Search
        </Button>
        </Grid>
        <Grid item xs={2}>
        <Typography variant='body1' >
          TotalCount: {results.total_count}
        </Typography>
        </Grid>
      </Grid>
      <ResultBox 
        results={results}
        setErrorMessage={setErrorMessage}
      />
        {results.total_count>0
        ? <Pagination count={Math.floor(results.total_count/perPage)} page={page} onChange={handlePageEvent} />
        : null
        }
        {errorMessage
        ? <Alert severity="error">{errorMessage.message}</Alert>
        : null}
    </div>
  );
}

export default App;
