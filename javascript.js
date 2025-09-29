 const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');
    hamburger.addEventListener('click', function () {
      const hamIcon = this.querySelector('.hamburger-icon');
      const crossIcon = this.querySelector('.cross-icon');
      if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block";
        menu.style.display = "none";
        crossIcon.style.display = "none";
      } else {
        crossIcon.style.display = "inline-block";
        hamIcon.style.display = "none";
        menu.style.display = "block";
      }
    });

    const items = [
      { img: 'code.png', title: 'Python & Flask Development', desc: 'Backend Design.' },
      { img: 'hacker.webp', title: 'API Integration', desc: 'Development.' },
      { img: 'background.jpg', title: 'Cybersecurity & Ethical Hacking', desc: 'Red Hat Trainee.' },
    ];

    let index = 0;
    let playing = true;
    let interval;

    const imageEl = document.getElementById('carouselImage');
    const titleEl = document.getElementById('carouselTitle');
    const descEl = document.getElementById('carouselDesc');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pauseBtn = document.getElementById('pauseBtn');

    function showItem(i) {
      imageEl.src = items[i].img;
      imageEl.alt = items[i].title;
      titleEl.textContent = items[i].title;
      descEl.textContent = items[i].desc;
    }

    function nextItem() {
      index = (index + 1) % items.length;
      showItem(index);
    }

    function prevItem() {
      index = (index - 1 + items.length) % items.length;
      showItem(index);
    }

    function startAuto() {
      interval = setInterval(nextItem, 4000);
    }

    function stopAuto() {
      clearInterval(interval);
    }

    nextBtn.addEventListener('click', nextItem);
    prevBtn.addEventListener('click', prevItem);

    pauseBtn.addEventListener('click', () => {
      if (playing) {
        stopAuto();
        pauseBtn.innerHTML = '&#9654;';
      } else {
        startAuto();
        pauseBtn.innerHTML = '&#10074;&#10074;';
      }
      playing = !playing;
    });

    showItem(index);
    startAuto();