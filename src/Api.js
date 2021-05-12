const search = (searchParameter, setResults) =>{
    fetch(`https://api.github.com/search/users?q=${searchParameter}&per_page=1`)
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            setResults(result);
        },
        (error) => {
            console.log(error);
        }
    );
};
const getUserProfile = (userURL, setUserInfo) =>{
    fetch(userURL)
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            setUserInfo(result);
        },
        (error) => {
            console.log(error);
        }
    );
};

export {
    search,
    getUserProfile
};