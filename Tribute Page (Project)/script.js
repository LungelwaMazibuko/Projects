// Wait for DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Timeline animation
    animateTimeline();
    
    // Image enhancement
    enhanceImage();
    
    // Quote hover effect
    setupQuoteEffect();
    
    // Smooth scrolling for internal links
    setupSmoothScrolling();
    
    // Add "back to top" button
    addBackToTopButton();
    
    // Add dynamic year counter ("X years since...")
    addYearCounter();
  });
  
  // Function to animate timeline items one by one
  function animateTimeline() {
    const timelineItems = document.querySelectorAll("#timeline li");
    
    timelineItems.forEach((item, index) => {
      // Set initial state - invisible
      item.style.opacity = "0";
      item.style.transform = "translateX(-20px)";
      item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      
      // Stagger the animation of each timeline item
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateX(0)";
      }, 100 * index);
    });
  }
  
  // Function to enhance the image with hover zoom and click to expand
  function enhanceImage() {
    const imageDiv = document.getElementById("img-div");
    const image = document.getElementById("image");
    
    // Add hover effect
    image.style.transition = "transform 0.3s ease";
    
    image.addEventListener("mouseenter", function() {
      this.style.transform = "scale(1.02)";
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    });
    
    image.addEventListener("mouseleave", function() {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "none";
    });
    
    // Add click to view larger image functionality
    image.addEventListener("click", function() {
      // Create overlay
      const overlay = document.createElement("div");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      overlay.style.display = "flex";
      overlay.style.justifyContent = "center";
      overlay.style.alignItems = "center";
      overlay.style.zIndex = "1000";
      overlay.style.cursor = "pointer";
      
      // Create larger image
      const largeImage = document.createElement("img");
      largeImage.src = this.src;
      largeImage.style.maxWidth = "90%";
      largeImage.style.maxHeight = "90%";
      largeImage.style.border = "3px solid white";
      largeImage.style.borderRadius = "5px";
      
      // Create caption
      const caption = document.createElement("div");
      caption.textContent = document.getElementById("img-caption").textContent;
      caption.style.color = "white";
      caption.style.position = "absolute";
      caption.style.bottom = "20px";
      caption.style.textAlign = "center";
      caption.style.width = "100%";
      caption.style.fontSize = "16px";
      
      // Add close instruction
      const closeInstruction = document.createElement("div");
      closeInstruction.textContent = "Click anywhere to close";
      closeInstruction.style.color = "white";
      closeInstruction.style.position = "absolute";
      closeInstruction.style.top = "20px";
      closeInstruction.style.right = "20px";
      closeInstruction.style.fontSize = "14px";
      
      // Add elements to overlay
      overlay.appendChild(largeImage);
      overlay.appendChild(caption);
      overlay.appendChild(closeInstruction);
      document.body.appendChild(overlay);
      
      // Close on click
      overlay.addEventListener("click", function() {
        this.remove();
      });
    });
  }
  
  // Function to add hover effect to the quote
  function setupQuoteEffect() {
    const quote = document.querySelector("blockquote");
    
    quote.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    
    quote.addEventListener("mouseenter", function() {
      this.style.transform = "scale(1.01)";
      this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    });
    
    quote.addEventListener("mouseleave", function() {
      this.style.transform = "scale(1)";
      this.style.boxShadow = "none";
    });
  }
  
  // Function to implement smooth scrolling
  function setupSmoothScrolling() {
    // Add IDs to each section for navigation
    const sections = ["#img-div", "#tribute-info", "#timeline", "#quote-section"];
    
    // Create navigation menu
    const nav = document.createElement("nav");
    nav.id = "page-nav";
    nav.style.backgroundColor = "#2c3e50";
    nav.style.padding = "10px 0";
    nav.style.position = "sticky";
    nav.style.top = "0";
    nav.style.zIndex = "100";
    nav.style.textAlign = "center";
    nav.style.marginBottom = "20px";
    
    const navList = document.createElement("ul");
    navList.style.display = "flex";
    navList.style.justifyContent = "center";
    navList.style.listStyle = "none";
    navList.style.padding = "0";
    navList.style.margin = "0";
    
    const navItems = ["Photo", "Biography", "Timeline", "Quote"];
    
    navItems.forEach((item, index) => {
      const li = document.createElement("li");
      li.style.margin = "0 15px";
      
      const a = document.createElement("a");
      a.textContent = item;
      a.href = sections[index];
      a.style.color = "white";
      a.style.textDecoration = "none";
      a.style.fontSize = "16px";
      a.style.padding = "5px 10px";
      a.style.borderRadius = "3px";
      a.style.transition = "background-color 0.3s ease";
      
      a.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
      });
      
      a.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "transparent";
      });
      
      a.addEventListener("click", function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: "smooth"
        });
      });
      
      li.appendChild(a);
      navList.appendChild(li);
    });
    
    nav.appendChild(navList);
    document.getElementById("main").insertBefore(nav, document.getElementById("title"));
  }
  
  // Function to add "back to top" button
  function addBackToTopButton() {
    const backToTopBtn = document.createElement("button");
    backToTopBtn.id = "back-to-top";
    backToTopBtn.innerHTML = "↑";
    backToTopBtn.style.position = "fixed";
    backToTopBtn.style.bottom = "20px";
    backToTopBtn.style.right = "20px";
    backToTopBtn.style.width = "40px";
    backToTopBtn.style.height = "40px";
    backToTopBtn.style.borderRadius = "50%";
    backToTopBtn.style.backgroundColor = "#2980b9";
    backToTopBtn.style.color = "white";
    backToTopBtn.style.border = "none";
    backToTopBtn.style.fontSize = "20px";
    backToTopBtn.style.cursor = "pointer";
    backToTopBtn.style.display = "none";
    backToTopBtn.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
    backToTopBtn.style.transition = "background-color 0.3s ease";
    
    backToTopBtn.addEventListener("mouseenter", function() {
      this.style.backgroundColor = "#3498db";
    });
    
    backToTopBtn.addEventListener("mouseleave", function() {
      this.style.backgroundColor = "#2980b9";
    });
    
    document.body.appendChild(backToTopBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    });
    
    // Scroll to top on click
    backToTopBtn.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
  
  // Function to add dynamic year counter since significant events
  function addYearCounter() {
    // Create a section for year counters
    const yearCounterSection = document.createElement("div");
    yearCounterSection.id = "year-counters";
    yearCounterSection.style.marginTop = "30px";
    yearCounterSection.style.padding = "20px";
    yearCounterSection.style.backgroundColor = "#2c3e50";
    yearCounterSection.style.color = "white";
    yearCounterSection.style.borderRadius = "10px";
    yearCounterSection.style.textAlign = "center";
    
    const heading = document.createElement("h2");
    heading.textContent = "Time Perspective";
    heading.style.marginBottom = "20px";
    yearCounterSection.appendChild(heading);
    
    const counterList = document.createElement("div");
    counterList.style.display = "flex";
    counterList.style.justifyContent = "space-around";
    counterList.style.flexWrap = "wrap";
    
    // Add significant dates
    const events = [
      { year: 1994, description: "since Nelson Mandela became President" },
      { year: 1990, description: "since Nelson Mandela was released from prison" },
      { year: 2013, description: "since Nelson Mandela passed away" }
    ];
    
    const currentYear = new Date().getFullYear();
    
    events.forEach(event => {
      const yearsSince = currentYear - event.year;
      
      const counter = document.createElement("div");
      counter.className = "year-counter";
      counter.style.margin = "10px";
      counter.style.padding = "15px";
      counter.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
      counter.style.borderRadius = "5px";
      counter.style.minWidth = "200px";
      
      const years = document.createElement("div");
      years.className = "years";
      years.textContent = yearsSince;
      years.style.fontSize = "3rem";
      years.style.fontWeight = "bold";
      years.style.color = "#3498db";
      
      const description = document.createElement("div");
      description.textContent = "years " + event.description;
      
      counter.appendChild(years);
      counter.appendChild(description);
      counterList.appendChild(counter);
    });
    
    yearCounterSection.appendChild(counterList);
    
    // Insert before the tribute link
    const tributeLink = document.getElementById("tribute-link");
    tributeLink.parentNode.insertBefore(yearCounterSection, tributeLink);
  }