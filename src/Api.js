const search = (searchParameter, page,perPage, setResults) =>{
    fetch(`https://api.github.com/search/users?q=${searchParameter}&per_page=${perPage}&page=${page}`)
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
const getFollowingCount = (followingURL, setFollowingInfo) =>{
    fetch(followingURL)
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            setFollowingInfo(result);
        },
        (error) => {
            console.log(error);
        }
    );
};
const getFollowersCount = (followersURL, setFollowersInfo) =>{
    fetch(followersURL)
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            setFollowersInfo(result);
        },
        (error) => {
            console.log(error);
        }
    );
};
const getStarredCount = (starredURL, setStarredInfo) =>{
    fetch(starredURL)
    .then(res => res.json())
    .then(
        (result) => {
            console.log(result);
            setStarredInfo(result);
        },
        (error) => {
            console.log(error);
        }
    );
};

export {
    search,
    getUserProfile,
    getFollowingCount,
    getFollowersCount,
    getStarredCount
};