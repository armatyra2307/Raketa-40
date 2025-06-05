// Получаем элементы слайдера
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}
// Инициализация слайдера
updateSlider();

const video = document.querySelector('.video');
            const playButton = document.querySelector('.btn');
            
            if (video && playButton) {
                playButton.addEventListener('click', function() {
                    if (video.paused) {
                        video.play();
                        playButton.textContent = 'Пауза';
                    } else {
                        video.pause();
                        playButton.textContent = 'Смотреть видео';
                    }
                });

                video.addEventListener('ended', function() {
                    playButton.textContent = 'Смотреть видео';
                });

                // Keyboard controls
                document.addEventListener('keydown', function(e) {
                    if (e.code === 'ArrowRight') {
                        video.currentTime += 10;
                    } else if (e.code === 'ArrowLeft') {
                        video.currentTime -= 10;
                    } else if (e.code === 'Space') {
                        if (video.paused) {
                            video.play();
                            playButton.textContent = 'Пауза';
                        } else {
                            video.pause();
                            playButton.textContent = 'Смотреть видео';
                        }
                    }
                });

                // Click on video to skip
                video.addEventListener('click', function() {
                    video.currentTime += 10;
                });
            }

