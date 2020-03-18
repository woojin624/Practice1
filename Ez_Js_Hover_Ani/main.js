const links = document.querySelectorAll(".container a");
const bg = document.querySelector(".bg");
const showClass = "bg-show";

for (const link of links) {
  const img = new Image();
  img.src = link.dataset.bg;
  //console.log(img);

  link.addEventListener("mouseenter", function() {
    bg.style.backgroundImage = `url(${this.dataset.bg})`;
    document.body.classList.add(showClass);
  });
  link.addEventListener("mouseleave", function() {
    document.body.classList.remove(showClass);
  });
} //for 반복문
// for(var i = 0 ; i < links.length; i++){
//     links[i]
// }
