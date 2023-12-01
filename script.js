<script>
    var currentProductIndex = 0;
    var productCards = document.getElementsByClassName("product-card");

    function showProduct(index) {
      for (var i = 0; i < productCards.length; i++) {
        productCards[i].classList.remove("active");
      }
      productCards[index].classList.add("active");
    }

    function rotateLeft() {
      currentProductIndex = (currentProductIndex - 1 + productCards.length) % productCards.length;
      showProduct(currentProductIndex);
    }

    function rotateRight() {
      currentProductIndex = (currentProductIndex + 1) % productCards.length;
      showProduct(currentProductIndex);
    }

    function autoRotate() {
      rotateRight();
    }

    // Set up the automatic rotation
    var intervalId = setInterval(autoRotate, 3000);

    // Stop automatic rotation when hovering over the carousel
    document.querySelector('.carousel-container').addEventListener('mouseenter', function () {
      clearInterval(intervalId);
    });

    // Resume automatic rotation when not hovering
    document.querySelector('.carousel-container').addEventListener('mouseleave', function () {
      intervalId = setInterval(autoRotate, 3000);
    });
  </script>
