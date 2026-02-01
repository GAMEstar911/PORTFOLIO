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
const form = document.querySelector(".contact-form");
const status = document.getElementById("form-status");

async function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  
  // Show a "Sending..." state
  status.style.display = "block";
  status.style.backgroundColor = "#e2e8f0";
  status.style.color = "#475569";
  status.innerHTML = "Sending your message...";

  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.style.backgroundColor = "#d1fae5"; // Light green
      status.style.color = "#065f46";           // Dark green
      status.innerHTML = "Thanks! Your message has been sent successfully.";
      form.reset(); // Clears the form fields
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form.";
        }
      })
    }
  }).catch(error => {
    status.style.backgroundColor = "#fee2e2"; // Light red
    status.style.color = "#991b1b";           // Dark red
    status.innerHTML = "Oops! There was a problem connecting to the server.";
  });
}

form.addEventListener("submit", handleSubmit);
