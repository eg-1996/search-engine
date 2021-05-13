const apiBase =(URL, setFunction, setErrorFunction) =>{
    fetch(URL)
    .then(res => {
        if (!res.ok) { throw res }
        return res.json()
    })
    .then(
        (result) => {
            setFunction(result);
            setErrorFunction(null);
        })
    .catch(
        (error) => {
            error.text().then(errorMessage =>{
                console.log(errorMessage);
                setErrorFunction(JSON.parse(errorMessage));
            })
        }
    );
}


const search = (searchParameter, page, perPage, setResults, setErrorMessage) =>
    apiBase(`https://api.github.com/search/users?q=${searchParameter}&per_page=${perPage}&page=${page}`, setResults,setErrorMessage);

const getUserProfile = (userURL, setUserInfo, setErrorMessage) =>
    apiBase(userURL, setUserInfo, setErrorMessage);
export {
    search,
    getUserProfile
};