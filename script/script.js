// ACCEUIL MENU
$('.open-overlay').click(function() {
    let overlay_navigation = $('.overlay-navigation'),
      nav_item_1 = $('nav li:nth-of-type(1)'),
      nav_item_2 = $('nav li:nth-of-type(2)'),
      nav_item_3 = $('nav li:nth-of-type(3)'),
      nav_item_4 = $('nav li:nth-of-type(4)'),
      nav_item_5 = $('nav li:nth-of-type(5)'),
      top_bar = $('.bar-top'),
      middle_bar = $('.bar-middle'),
      bottom_bar = $('.bar-bottom');
  
    overlay_navigation.toggleClass('overlay-active');
    if (overlay_navigation.hasClass('overlay-active')) {
  
      top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
      middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
      bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
      overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
      nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
      nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
      nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
      nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
      nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
    } else {
      top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
      middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
      bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
      overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
      nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
      nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
      nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
      nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
      nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
    }
  })
  


  ////////////////////////////////////////////////////////////////////////////////////
  // ABOUT







///////////////////////////////////////////////////////////////////////////////////////
//ARRIERE PLAN HOME //

// DOM selectors
const stars = document.getElementById('stars');
const starsCtx = stars.getContext('2d');
const slider = document.querySelector(".slider input");
const output = document.querySelector("#speed");

// global variables
let screen, starsElements, starsParams = { speed: 2, number: 300, extinction: 4 };

// run stars
setupStars();
updateStars();

// handle slider
output.innerHTML = slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;
    starsParams.speed = this.value;
};

// update stars on resize to keep them centered
window.onresize = function() {
    setupStars();
};

// star constructor
function Star() {
    this.x = Math.random() * stars.width;
    this.y = Math.random() * stars.height;
    this.z = Math.random() * stars.width;

    this.move = function() {
        this.z -= starsParams.speed;
        if (this.z <= 0) {
            this.z = stars.width;
        }
    };

    this.show = function() {
        let x, y, rad, opacity;
        x = (this.x - screen.c[0]) * (stars.width / this.z);
        x = x + screen.c[0];
        y = (this.y - screen.c[1]) * (stars.width / this.z);
        y = y + screen.c[1];
        rad = stars.width / this.z;
        opacity = (rad > starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1;

        starsCtx.beginPath();
        starsCtx.fillStyle = "rgba(54, 125, 247, " + opacity + ")";
        starsCtx.arc(x, y, rad, 0, Math.PI * 2);
        starsCtx.fill();
    }
}

// setup <canvas>, create all the starts
function setupStars() {
    screen = {
        w: window.innerWidth,
        h: window.innerHeight,
        c: [ window.innerWidth * 0.5, window.innerHeight * 0.5 ]
    };
    window.cancelAnimationFrame(updateStars);
    stars.width = screen.w;
    stars.height = screen.h;
    starsElements = [];
    for (let i = 0; i < starsParams.number; i++) {
        starsElements[i] = new Star();
    }
}

// redraw the frame
function updateStars() {
    starsCtx.fillStyle = "black";
    starsCtx.fillRect(0, 0, stars.width, stars.height);
    starsElements.forEach(function (s) {
        s.show();
        s.move();
    });
    window.requestAnimationFrame(updateStars);
}

// SOURIS //
const math = {
  lerp: (a, b, n) => {
    return (1 - n) * a + n * b
  }
}

class Cursor {
  constructor() {
    this.el = document.querySelector('[data-cursor]')
    this.stickies = [...document.querySelectorAll('[data-stick-cursor]')]

    this.data = {
      mouse: {
        x: 0,
        y: 0
      },
      current: {
        x: 0,
        y: 0
      },
      last: {
        x: 0,
        y: 0
      },
      ease: 0.15,
      dist: 100,
      fx: {
        diff: 0,
        acc: 0,
        velo: 0,
        scale: 0
      }
    }

    this.bounds = {
      h: 0,
      a: 0
    }

    this.rAF = null
    this.targets = null

    this.run = this.run.bind(this)
    this.mousePos = this.mousePos.bind(this)
    this.stick = this.stick.bind(this)

    this.state = {
      stick: false
    }

    this.init()
  }

  mousePos(e) {
    this.data.mouse.x = e.pageX
    this.data.mouse.y = e.pageY

    this.data.current.x = e.pageX
    this.data.current.y = e.pageY
  }

  getCache() {
    this.targets = []

    this.stickies.forEach((el, index) => {
      const bounds = el.getBoundingClientRect()

      this.targets.push({
        el: el,
        x: bounds.left + bounds.width / 2,
        y: bounds.top + bounds.height / 2
      })
    })
  }

  stick(target) {
    const d = {
      x: target.x - this.data.mouse.x,
      y: target.y - this.data.mouse.y
    }

    const a = Math.atan2(d.x, d.y)
    const h = Math.sqrt(d.x * d.x + d.y * d.y)  

    if (h < this.data.dist && !this.state.stick) {

      this.state.stick = true
      this.data.ease = 0.075

      this.data.current.x = target.x - Math.sin(a) * h / 2.5
      this.data.current.y = target.y - Math.cos(a) * h / 2.5

      this.el.classList.add('is-active')
    } else if (this.state.stick) {

      this.state.stick = false
      this.data.ease = 0.15
    } else if (h > this.data.dist) {

      this.el.classList.remove('is-active')
    }
  }

  run() {
    this.targets.forEach(this.stick)

    this.data.last.x = math.lerp(this.data.last.x, this.data.current.x, this.data.ease)
    this.data.last.y = math.lerp(this.data.last.y, this.data.current.y, this.data.ease)   

    this.data.fx.diff = this.data.current.x - this.data.last.x
    this.data.fx.acc = this.data.fx.diff / window.innerWidth
    this.data.fx.velo =+ this.data.fx.acc
    this.data.fx.scale = 1 - Math.abs(this.data.fx.velo * 5)

    this.el.style.transform = `translate3d(${this.data.last.x}px, ${this.data.last.y}px, 0) scale(${this.data.fx.scale})`

    this.raf()
  }

  raf() {
    this.rAF = requestAnimationFrame(this.run)
  }

  addListeners() {
    window.addEventListener('mousemove', this.mousePos, { passive: true })
  }

  init() {
    this.getCache()
    this.addListeners()
    this.raf()
  }
}

const cursor = new Cursor()

////////////////////////////
// WORK

