// 변수 지정
var sliderWrapper = document.getElementsByClassName("container"),
  sliderContainer = document.getElementsByClassName("slider-container"),
  slides = document.getElementsByClassName("slide"),
  slideCount = slides.length, //슬라이드의 개수
  currentIndex = 0,
  topHeight = 0,
  navPrev = document.getElementById("prev"),
  navNext = document.getElementById("next");

// console.log(slides);

//슬라이드의 높이 확인하여 부모의 높이로 지정하기
function calculateTallestSlide() {
  for (var i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }

  sliderWrapper[0].style.height = topHeight + "px";
  sliderContainer[0].style.height = topHeight + "px";
}

calculateTallestSlide();

// 슬라이드가 있으면 가로로 배열하기

for (var i = 0; i < slideCount; i++) {
  slides[i].style.left = i * 100 + "%";
}

// 슬라이드 이동 함수

function goToSlide(idx) {
  sliderContainer[0].style.left = idx * -100 + "%";
  sliderContainer[0].classList.add("animated");
  currentIndex = idx;

  //   updateNav();
}

// 버튼기능 업데이트 함수
function updateNav() {
  //처음일때
  if (currentIndex == 0) {
    navPrev.classList.add("disabled");
  } else {
    navPrev.classList.remove("disabled");
  }
  //마지막일때
  if (currentIndex == slideCount - 1) {
    navNext.classList.add("disabled");
  } else {
    navNext.classList.remove("disabled");
  }
}

// 버튼을 클릭하면 슬라이드 이동시키기

navPrev.addEventListener("click", function(event) {
  event.preventDefault();
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
  } else {
    goToSlide(slideCount - 1);
  }
});

navNext.addEventListener("click", function(event) {
  event.preventDefault();
  if (currentIndex < slideCount - 1) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(0);
  }
});

// 첫번째 슬라이드 먼저 보이도록 하기
goToSlide(0);
