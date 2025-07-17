// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Optional: Scroll to top button
  const scrollBtn = document.createElement("button");
  scrollBtn.textContent = "↑";
  scrollBtn.id = "scrollTopBtn";
  document.body.appendChild(scrollBtn);
  
  scrollBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    font-size: 18px;
    background: #007bff;
    color: white;
    border: none;
    border-radius: 50%;
    display: none;
    cursor: pointer;
  `;
  
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  