let movies;
let data;
function load(){
    $.getJSON("json/moviesData.json", function(json) {
        movies = $(".movie");
        data = json;
        for(let i = 0; i < data.length; i++){
            movies[i].style.backgroundImage = "url('/img/" + data[i].image + "')";
            $(movies[i]).find("a").text(data[i].name);
        }
    });
}

$(document).ready(function(){
    load();
    $(".details").hide();
    $( ".movie" ).click(function(e) {
        $(".movie, .details").css('z-index', 0);
        $(this).css('z-index', 2);
        $(this).next().toggle( "fold", 1000 );
        $(this).next().css('z-index', 1);
    });
});
