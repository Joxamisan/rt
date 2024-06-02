// JavaScript
document.addEventListener("DOMContentLoaded", function() {
        var galleryItems = document.querySelectorAll(".temuriylar-gallery-item");
        var textSection = document.getElementById("text-section");
        var textTitle = document.getElementById("text-title");
        var textContent = document.getElementById("text-content");
        var newImageContainer = document.querySelector(".new-image-container");
        var newImage = document.getElementById("new-image");
        var backButton = document.getElementById("back-button");
    
        var timeout;
    
        galleryItems.forEach(function(item) {
            var img = item.querySelector(".temuriylar-gallery-image");
    
            img.addEventListener("click", function() {
                var title = img.getAttribute("data-title");
                var text = img.getAttribute("data-text");
                var newImageSrc = img.getAttribute("data-new-image");
    
                // Hide all images
                galleryItems.forEach(function(galleryItem) {
                    galleryItem.style.display = "none";
                });
    
                // Show the new image and text section
                newImage.src = newImageSrc;
                newImageContainer.style.display = "block";
                newImage.style.opacity = "1";
                textTitle.textContent = title;
                textContent.textContent = text;
                textSection.style.display = "block";
    
                // Set a timeout to revert back after 20 seconds
                if (timeout) clearTimeout(timeout);
                timeout = setTimeout(function() {
                    revertToGallery();
                }, 20000);
            });
        });
    backButton.addEventListener("click", function() {
                revertToGallery();
            });
        
            function revertToGallery() {
                textSection.style.display = "none";
                galleryItems.forEach(function(galleryItem) {
                    galleryItem.style.display = "block";
                });
            }
        });
        //gfhghjb
        document.addEventListener('DOMContentLoaded', function() {
            const filterButtons = document.querySelectorAll('.filter-button');
            const items = document.querySelectorAll('.item');
          
            // Обработчики клика по кнопкам фильтрации
            filterButtons.forEach(button => {
              button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');
                
                items.forEach(item => {
                  if (filterValue === 'all' || item.classList.contains(filterValue)) {
                    item.classList.remove('hidden'); // Показываем элементы, соответствующие фильтру
                  } else {
                    item.classList.add('hidden'); // Скрываем остальные элементы
                  }
                });
              });
            });
          
            // Обработчики клика по изображениям для показа информации
            items.forEach(item => {
              const img = item.querySelector('img');
              const info = item.querySelector('.info');
          
              img.addEventListener('click', function() {
                info.classList.toggle('hidden'); // Переключаем видимость информации при клике на изображение
              });
            });
          });