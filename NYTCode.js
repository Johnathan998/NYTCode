var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=1rE4ms03B4LVmeLbHYVuXALfJxcDtiiT"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (reponse) {
    $("run-search").click(function () {

        var searchTerm = $("#search-term").val().trim();
        var startYear = $("start-year").val().trim();
        var endYear = $("end-year").val().trim();
        console.log(this);
    })
})
