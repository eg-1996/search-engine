const search = (searchParameter, setResults) =>{
    fetch(`https://api.github.com/search/users?q=${searchParameter}`)
    .then(res => res.json())
    .then(
        (result) => {
            setResults(result);
        },
        (error) => {
            console.log(error);
        }
    );
};

export default search;