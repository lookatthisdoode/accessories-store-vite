document.addEventListener('DOMContentLoaded', function () {
  var parallaxBg = document.querySelector('.card-image')

  // Intersection Observer to check if the element is in the viewport
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Element is in the viewport, start parallax effect
        window.addEventListener('scroll', handleParallaxScroll)
      } else {
        // Element is not in the viewport, stop parallax effect
        window.removeEventListener('scroll', handleParallaxScroll)
      }
    })
  })

  // Start observing the .card-image element
  observer.observe(parallaxBg)

  function handleParallaxScroll() {
    var scrollPercentage =
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    var translateY = Math.max(0, Math.min(scrollPercentage, 100))
    parallaxBg.style.backgroundPositionY = translateY + '%'
  }
})
