for (var i = 1; i <= 151; i++) {
    $('.container').append($('<img>').attr('id', i).attr('src', 'http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + i + '.png'))
}

$('img').on('click', function(event) {
    $('.information').html('');
    var id = $(this).attr('id');
    $.get("https://pokeapi.co/api/v2/pokemon/" + id + '/', function(data) {
        console.log(data);
        var types = "<ul>";
        for (var i = 0; i < data.types.length; i++) {
            types += "<li>" + data.types[i].type.name + "</li>";
        }
        types += "</ul>";
        var info = "<h3>Types</h3>" + types + "<h3>Height</h3>" + data.height + "<h3>Weight</h3>" + data.weight;
        console.log(types);
        data.name = data.name.charAt(0).toUpperCase() + data.name.slice(1);
        $('.information').append("<h2>" + data.name + "</h2>");
        $('.information').append("<img src=" + 'http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + data.id + '.png' + ">");
        $('.information').append(info);
    });
    event.stopPropagation();
});