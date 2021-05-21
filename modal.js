$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
    console.log(this)
});
if (document.images)
{
  // The main picture at the top of the page
  PicA1 = new Image(250,205); PicA1.src = "ac35smd.jpg";
  PicA2 = new Image(250,205); PicA2.src = "ac35sm.jpg";

    function hiLite(imgName,imgObjName){
        if (document.images) {
            document.images[imgName].src = eval(imgObjName + ".src");
        }
    }
}

flexFont = function () {
    var divs = document.getElementsByClassName("flexFont");
    for(var i = 0; i < divs.length; i++) {
        var relFontsize = divs[i].offsetWidth*0.3;
        divs[i].style.fontSize = relFontsize+'px';
    }
};

function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}

$("#one").click(function() {
    $(".page1").css("display", "flex");
    $(".page2").css("display", "none");
    $(".page3").css("display", "none");
    $("#one").css("color", "white")
    $("#two").css("color", "black")
    $("#three").css("color", "black");
});

$("#two").click(function() {
    $(".page1").css("display", "none");
    $(".page2").css("display", "flex");
    $(".page3").css("display", "none");
    $("#two").css("color", "white");
    $("#one").css("color", "black");
    $("#three").css("color", "black");
}); 

$("#three").click(function() {
    $(".page1").css("display", "none");
    $(".page2").css("display", "none");
    $(".page3").css("display", "flex");
    $("#two").css("color", "black");
    $("#one").css("color", "black");
    $("#three").css("color", "white");
}); 

window.onload = function(event) {
    flexFont();
};
window.onresize = function(event) {
    flexFont();
};