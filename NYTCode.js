function buildQueryUrL() {
    var searchTerm = $("#search-term").val().trim();
    var startYear = $("#start-year").val().trim();
    var endYear = $("#end-year").val().trim();
    var nytimes = "https://api.nytimes.com/svc/search/v2/articlesearch.json?"
    var url = nytimes + "q=" + searchTerm + "&begin_date=" + startYear + "&end_date=" + endYear + "&api-key=1rE4ms03B4LVmeLbHYVuXALfJxcDtiiT";
    return (url);
}
function clear() {
    $("#article-section").empty();
}
$('#run-search').on('click', function () {
    event.preventDefault()
    clear();
    var url = buildQueryUrL()
    console.log(url);
});