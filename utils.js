const POSTERS_PATH = 'https://image.tmdb.org/t/p/w200/';

module.exports = {
    filterSearchResultsForTitleOnly:  function (results,searchInput) {
    
    return results.filter( result => result.title.toLowerCase().includes(searchInput.toLowerCase()));
},
filterSearchResultsForTitleOnlyExact:  function (results,searchInput) {
    
    return results.find( result => result.title.toLowerCase() === searchInput.toLowerCase());
}
};