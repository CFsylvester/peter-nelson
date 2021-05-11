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
  

window.onload = function(event) {
    flexFont();
};
window.onresize = function(event) {
    flexFont();
};