function filterGallery(category) {
  const allImages = document.querySelectorAll('.gallery-image');
  const allButtons = document.querySelectorAll('nav li');

  allImages.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });

  allButtons.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`nav li[onclick="filterGallery('${category}')"]`).classList.add('active');
}

const images = Array.from(document.querySelectorAll('.gallery-image img'));
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-image');
let currentIndex = 0;


images.forEach((img, index) => {
  img.addEventListener('click', () => {
    openLightbox(index);
  });
});

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = 'flex';
  lightboxImg.src = images[index].src;
  document.body.style.overflow = 'hidden'; 
}

function closeLightbox() {
  lightbox.style.display = 'none';
  document.body.style.overflow = 'auto'; 
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  lightboxImg.src = images[currentIndex].src;
}
