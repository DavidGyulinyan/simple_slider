var container = document.querySelector(".container");
var image = [
    "../images/1.jpg",
    "../images/2.jpg",
    "../images/3.jpg",
    "../images/4.jpg",
    "../images/5.jpg",
];
 
var index = 0;
function forward() {
    console.log(index);
    index++;
    if(index > image.length - 1) {
        index = 0;
    }
    container.style.backgroundImage = `url(${image[index]})`;
}
 
function backward() {
    index--;
    console.log(index);
    if(index < 0) {
        index = image.length - 1;
    }
    container.style.backgroundImage = `url(${image[index]})`;
   
}
