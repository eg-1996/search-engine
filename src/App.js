import React, { useState } from 'react';

import './App.css';
import ImputField from './InputField';
import { Button, Grid } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import search from './Api';
import ResultBox from './ResultBox';


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [results, setResults] =useState({});

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  return (
    <div className="App">
      <Grid container>
      <Grid item xs ={9}>
        <ImputField 
          id='test'
          value={searchField}
          onChange={handleChange}
        />
        </Grid>
        <Grid item xs={3}>
        <Button 
          variant="contained"
          startIcon={<SearchIcon />}
          onClick={()=>search(searchField, setResults)}
        >
          Search
        </Button>
        </Grid>
      </Grid>
      <ResultBox 
        results={results}
      />
    </div>
  );
}

export default App;
