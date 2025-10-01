// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
  // Add hover effects to navigation items
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.backgroundColor = 'rgba(250, 18, 57, 0.1)';
      this.style.borderRadius = '8px';
      this.style.transition = 'all 0.3s ease';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.backgroundColor = 'transparent';
    });
  });

  // Add hover effects to buttons
  const buttons = document.querySelectorAll('.btn-outline, .btn-primary, .nav-cta-button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.transition = 'all 0.3s ease';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Add hover effects to feature cards
  const featureCards = document.querySelectorAll('.feature-card');
  featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0px 8px 24px rgba(0, 0, 0, 0.12)';
      this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '0px 4px 16px rgba(0, 0, 0, 0.08)';
    });
  });

  // Add click handlers for buttons
  const resumePackagesBtn = document.querySelector('.btn-outline');
  const contactUsBtn = document.querySelector('.btn-primary');
  const getQuoteBtn = document.querySelector('.nav-cta-button');

  if (resumePackagesBtn) {
    resumePackagesBtn.addEventListener('click', function() {
      // Scroll to features section
      document.querySelector('.features-section').scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

  if (contactUsBtn) {
    contactUsBtn.addEventListener('click', function() {
      // You can add contact form modal or redirect logic here
      alert('Contact form would open here');
    });
  }

  if (getQuoteBtn) {
    getQuoteBtn.addEventListener('click', function() {
      // You can add quote form modal or redirect logic here
      alert('Quote form would open here');
    });
  }

  // Add animation on scroll for feature cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Initially hide feature cards for animation
  featureCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Add parallax effect to hero image
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
      heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
  });

  // Add typing effect to hero title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    let i = 0;
    
    function typeWriter() {
      if (i < text.length) {
        heroTitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    
    // Start typing effect after a short delay
    setTimeout(typeWriter, 1000);
  }
});

// Add resize handler for responsive adjustments
window.addEventListener('resize', function() {
  // Adjust layout for different screen sizes
  const heroContent = document.querySelector('.hero-content');
  const featuresGrid = document.querySelector('.features-grid');
  
  if (window.innerWidth <= 768) {
    if (heroContent) {
      heroContent.style.flexDirection = 'column';
    }
    if (featuresGrid) {
      featuresGrid.style.flexDirection = 'column';
    }
  } else {
    if (heroContent) {
      heroContent.style.flexDirection = 'row';
    }
    if (featuresGrid) {
      featuresGrid.style.flexDirection = 'row';
    }
  }
});
