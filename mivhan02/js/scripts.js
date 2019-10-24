function getCountryByName() {

    var id = $("#inputCountry").val();
    // console.log(`the ${id}`);
    
    $.ajax({

        url: `https://restcountries.eu/rest/v2/name/${id}`,
        type: "GET",
        success: function (response) {

            // console.log(response);
            $("#display").html("");
            response.forEach(function (element) {
                $("#display").append(`
            <div class="card col-sm-3">
                <img class="card-img-top" src="${element.flag}" alt="Card image" style="width:100%">
                <div class="card-body">
                    <h2 class="card-title">Name: ${element.name}</h2></br>
                    <p class="card-text">Top Level Domain: "${element.topLevelDomain[0]}"</p>
                    <p class="card-text">Capital: ${element.capital}</p>
                    <p class="card-text"><span>Currency:</span> </br>Code: ${element.currencies[0].code}</br>
                                                    Name: ${element.currencies[0].name}</br>
                                                    Symbol: ${element.currencies[0].symbol}</br></p>
                </div>
            </div>`
                );
            });
        },
        error: function () {
            $("#display").html(`<div class="col-sm-12"><h1 class="text-center display-1">input was not found</h1></div>`);
        }
    });

};


$(document).ready(function () {

    $('#search').click(function() {
        getCountryByName();
      });

    $("#inputCountry").on("input" ,function() {
        getCountryByName();
      });


    $("#showAll").click(function () {

        $.ajax({
            url: "https://restcountries.eu/rest/v2/all?fields=name;topLevelDomain;capital;currencies;flag",
            type: "GET",
            success: function (response) {

                // console.log(response);
                $("#display").html("");
                response.forEach(function (element) {
                    $("#display").append(`
                        <div class="card col-sm-3">
                            <img class="card-img-top" src="${element.flag}" alt="Card image" style="width:100%">
                            <div class="card-body">
                                <h2 class="card-title">Name: ${element.name}</h2></br>
                                <p class="card-text">Top Level Domain: "${element.topLevelDomain[0]}"</p>
                                <p class="card-text">Capital: ${element.capital}</p>
                                <p class="card-text"><span>Currency:</span> </br>Code: ${element.currencies[0].code}</br>
                                                                Name: ${element.currencies[0].name}</br>
                                                                Symbol: ${element.currencies[0].symbol}</br></p>
                            </div>
                        </div>`
                    );
                });
            }
    
        });
    });

});




