document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let counter = 0;
   const slides = document.querySelectorAll('.slider img');
   const totalSlides = slides.length;

   function nextSlide() {
   if (counter < totalSlides - 1) {
   counter++;
   } else {
   counter = 0;
}
   updateSlide();
}

function updateSlide() {
const offset = -100 * counter;
slider.style.transform = `translateX(${offset}%)`;
}

setInterval(nextSlide, 3000); // �Զ��л�ͼƬ�����3��
});
