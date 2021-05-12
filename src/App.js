import React, { useState } from 'react';

import './App.css';
import ImputField from './InputField';
import { Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { search } from './Api';
import ResultBox from './ResultBox';
import Pagination from '@material-ui/lab/Pagination';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [page, setPage] = useState(1);
  const [results, setResults] =useState({items: [], total_count: 0});
  const perPage = 10;
  const handleTextEvent = (event) => {
    setSearchField(event.target.value);
  };
  const handlePageEvent = (event, value) =>{
    search(searchField, value, perPage, setResults)
    setPage(value);
  }
  return (
    <div className="App">
      <Grid container>
      <Grid item xs ={9}>
        <ImputField 
          id='test'
          value={searchField}
          onChange={handleTextEvent}
        />
        </Grid>
        <Grid item xs={3}>
        <Button 
          variant="contained"
          startIcon={<SearchIcon />}
          onClick={()=>search(searchField, page, perPage, setResults)}
        >
          Search
        </Button>
        </Grid>
      </Grid>
      <ResultBox 
        results={results}
      />
        {results.total_count>0
        ? <Pagination count={Math.floor(results.total_count/perPage)} page={page} onChange={handlePageEvent} />
        : null
        }
    </div>
  );
}

export default App;
