
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});



const fadeElems = document.querySelectorAll('.fade-in');
const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

fadeElems.forEach(el => appearOnScroll.observe(el));


document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.textShadow = '0 0 10px var(--primary-orange)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.textShadow = 'none';
  });
});

const roles = ["AI Engineer", "Web Developer", "UI/UX Designer", "Innovator"];
let index = 0;
const roleElement = document.createElement("span");
document.querySelector(".text h2").after(roleElement);

function typeRole() {
  let current = roles[index];
  let i = 0;
  roleElement.textContent = "";
  const typing = setInterval(() => {
    roleElement.textContent += current[i];
    i++;
    if (i === current.length) {
      clearInterval(typing);
      setTimeout(() => {
        index = (index + 1) % roles.length;
        typeRole();
      }, 2000);
    }
  }, 100);
}
typeRole();
