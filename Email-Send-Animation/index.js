const btn = document.querySelector('.btn');
const icon = document.querySelector('.icon');
const svgLoader = document.querySelector('.rotate');
const loader = document.querySelector('.loader');
const textContainer = document.querySelector('.text-container');
btn.addEventListener('mousedown', () => {
  btn.classList.add('pressed');
});

btn.addEventListener('mouseup', () => {
  btn.classList.remove('pressed');
});

btn.addEventListener('click', () => {
  icon.classList.add('hide');
  svgLoader.classList.add('show');
  textContainer.classList.add('move-up');
  animate();
})

const loadingAnimation = new Moveit(loader, {
  start: '0%',
  end: '0%'
});
const animate = () => {
  loadingAnimation.set({
    start: '0%',
    end: '70%',
    duration: 0.5,
    callback: function() {
      loadingAnimation.set({
        start: '100%',
        end: '101%',
        duration: 0.3,
        follow: true,
        callback: function() {
          animate();
        }
      })
    }
  })
}
btn.addEventListener('click', () => {
  btn.classList.add('pressed');
})

