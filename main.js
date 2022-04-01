

let parallaxLock = 0;

document.addEventListener('mousemove', parallaxEffect);
function parallaxEffect(a) {
  if (parallaxLock == 0) {
    this.querySelectorAll('.para-container img').forEach((image)=> {
      const offset = image.getAttribute('offset');
      const posX = ((a.pageX - window.innerWidth) * offset) / 100;
      const posY = ((a.pageY - window.innerHeight) * (offset / 2)) / 80;
      
      image.style.transform = `translate(${posX}px, ${posY}px)`
      // console.log(window.innerWidth, a.pageX, posX);
    });
  }
}

function parallaxActive(target) {
  parallaxLock = 1;
  const activeBG = document.querySelector('.para-active');
  activeBG.style.backgroundPosition = 'right';

  // remove all other containers
  let allContainer = document.querySelector('.parallax').querySelectorAll('.para-container');
  for (let i = 0; i < allContainer.length; i++) {
    // might comflict
    allContainer[i].style.opacity = '0';
    setTimeout(() => {  
      allContainer[i].style.display = 'none';
    }, 200);
  }

  // make main one visible
  let image = document.querySelector(`#${target} img`);
  image.style.position = 'relative';
  let container = document.querySelector(`#${target}`);
  container.style.opacity = '0';

  setTimeout(() => {
    image.style.width = '20vw';
    
    container.style.display = 'flex';
    container.style.top = '50%';
    container.style.left = '50%';
    container.style.transform = 'translate(-50%, -50%)'

    setTimeout(() => {
      container.style.opacity = '1';
    }, 200);

  }, 200);

}

function activeOff() {
  
}


/*

https://dev.to/clementgaudiniere/create-a-parallax-effect-when-the-mouse-moves-3km0

document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".parallax-wrap span").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

*/