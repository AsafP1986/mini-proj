// var input = document.getElementById('input');
// input.addEventListener("keyup", function (event) {
//     //event.preventDefault();
//     if (event.keyCode === 13) {
//         //document.getElementById("myBtn").click();
//         importImg();
//     }
// });

function exeWithEnter(event) {
    if (event.keyCode === 13) {
        importImg();
    }


}

var imgURL = document.getElementById('input').value;

function importImg() {

    var imgURL = document.getElementById('input').value;
    var img = document.createElement("IMG");

    img.setAttribute("src", imgURL);
    img.setAttribute("width", "100%");
    img.setAttribute("hight", "100%");
    img.setAttribute("marginTop", "20px");
    img.setAttribute("margin", "20px");
    img.setAttribute("class", "textCenter");
    img.setAttribute("data-toggle", "modal");
    img.setAttribute("data-target", "#myModal");
    // data-toggle="modal" data-target="#myModal"
    img.addEventListener("onclick" , sendSrcToModal(this.src));



    document.getElementById("outputpara").appendChild(img);
    document.getElementById("modalInner").innerHTML= "<img  class='d-block w-100 carousel-img' src='" + imgURL + "'/>";

    document.getElementById("outputpara").innerHTML += "</br></br>";

    var imgPara = document.getElementById('outputpara').innerHTML;
    console.log(imgPara);

    localStorage.setItem('imgPara', imgPara);

}

sendSrcToModal(imgSourcetomodal)

function init() {
    document.getElementById('outputpara').innerHTML = localStorage.getItem('imgPara');
}

var countIMG = 0;

function newCaruselleItem() {

    
    var imgURL = document.getElementById('input').value;
    console.log(imgURL);
    
    document.getElementById('carousel-inner').innerHTML += "<div id='img+" + countIMG + "' class='carousel-item'><img  class='d-block w-100 carousel-img' src='" + imgURL + "'/></div>";
   

    console.log( "test " + document.getElementById('carousel-inner').innerHTML);
    console.log( "test " + typeof (document.getElementById('carousel-inner').innerHTML));

    if (countIMG == 0) {
        console.log("enterd");
        document.getElementById('img+0').classList += " active";    
    }
    document.getElementById('carusele-thumb').innerHTML += "<li data-target='#carousel-thumb' data-slide-to='" + countIMG + "' class='active'> <img class='d-block w-100' src='" + imgURL + "' class='img-fluid'/></li>"
    countIMG++;

}