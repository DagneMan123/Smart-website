// Select all navigation items, the cube container, and tab elements
const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');
const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxes = document.querySelectorAll('.resume-box');
const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxes = document.querySelectorAll('.portfolio-box');

// Add click event listeners to navigation items
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        // Remove active class from the currently active navigation item
        document.querySelector('.nav-list li.active').classList.remove('active');
        // Add active class to the clicked navigation item
        nav.classList.add('active');

        // Rotate the cube based on the clicked navigation item's index
        cube.style.transform = `rotateY(${idx * -90}deg)`;

        // Remove active class from the currently active section
        document.querySelector('.section.active').classList.remove('active');
        // Add active class to the corresponding section
        sections[idx].classList.add('active');

        // Check if middle sections (1, 2, 3) are active to add contact action class
        const arrSecs = Array.from(sections).slice(1, 4); // Get sections 1, 2, 3 (indices 1-3)
        if (arrSecs.some(section => section.classList.contains('active'))) {
            sections[4].classList.add('action-contact');
        } else {
            sections[4].classList.remove('action-contact');
        }
    });
});

// Add click event listeners to resume tabs
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        // Remove active class from the currently active resume tab
        document.querySelector('.resume-list.active').classList.remove('active');
        // Add active class to the clicked resume tab
        list.classList.add('active');

        // Remove active class from the currently active resume box
        document.querySelector('.resume-box.active').classList.remove('active');
        // Add active class to the corresponding resume box
        resumeBoxes[idx].classList.add('active');
    });
});

// Add click event listeners to portfolio tabs
portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        // Remove active class from the currently active portfolio tab
        document.querySelector('.portfolio-list.active').classList.remove('active');
        // Add active class to the clicked portfolio tab
        list.classList.add('active');

        // Remove active class from the currently active portfolio box
        document.querySelector('.portfolio-box.active').classList.remove('active');
        // Add active class to the corresponding portfolio box
        portfolioBoxes[idx].classList.add('active');
    });
});

setTimeout(() => {
    sections[4].classList.remove('active');   
}, 1500);

// Typed.js initialization - corrected
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener('DOMContentLoaded', function() {
    // Image elements
    const profileImage = document.querySelector('.home-img img');
    const aboutImage = document.querySelector('.about-img img');
    const portfolioImages = document.querySelectorAll('.work-img img');
    
    // 1. Lazy Loading with Intersection Observer
    const lazyLoadImages = (images) => {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            }, { threshold: 0.1 });

            images.forEach(img => {
                if (img.dataset.src) {
                    imageObserver.observe(img);
                }
            });
        } else {
            // Fallback for browsers without IntersectionObserver
            images.forEach(img => {
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                }
            });
        }
    };

    // Initialize lazy loading for all images
    lazyLoadImages(document.querySelectorAll('img[data-src]'));

    // 2. Dynamic 3D Hover Effects
    const add3DHoverEffect = (element) => {
        if (!element) return;

        element.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 15;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 15;
            element.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
            element.style.transition = 'none';
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'rotateY(0) rotateX(0)';
            element.style.transition = 'transform 0.5s ease';
        });
    };

    // Apply to profile images
    add3DHoverEffect(profileImage);
    add3DHoverEffect(aboutImage);

    // 3. Portfolio Image Zoom Effect
    portfolioImages.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.transform = 'scale(1.05)';
            img.style.transition = 'transform 0.3s ease';
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // 4. Responsive Image Handling
    function handleResponsiveImages() {
        const screenWidth = window.innerWidth;
        
        // Adjust profile image size based on screen width
        if (profileImage) {
            if (screenWidth < 768) {
                profileImage.style.maxWidth = '250px';
            } else {
                profileImage.style.maxWidth = '350px';
            }
        }
        
        // Adjust portfolio image layout
        portfolioImages.forEach(img => {
            if (screenWidth < 600) {
                img.parentElement.style.flexDirection = 'column';
            } else {
                img.parentElement.style.flexDirection = 'row';
            }
        });
    }

    // Initial call and window resize listener
    handleResponsiveImages();
    window.addEventListener('resize', handleResponsiveImages);

    // 5. Click to Enlarge Feature
    document.querySelectorAll('.work-img img').forEach(img => {
        img.addEventListener('click', function() {
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = '1000';
            overlay.style.cursor = 'zoom-out';

            const enlargedImg = document.createElement('img');
            enlargedImg.src = this.src;
            enlargedImg.style.maxHeight = '90vh';
            enlargedImg.style.maxWidth = '90vw';
            enlargedImg.style.objectFit = 'contain';

            overlay.appendChild(enlargedImg);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // 1. Download CV Button
    const downloadBtn = document.querySelector('.btn-sci .btn');
    if (downloadBtn) {
      downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create a temporary link to trigger download
        const link = document.createElement('a');
        link.href = 'path/to/your-cv.pdf'; // Replace with actual CV path
        link.download = 'Dagne_Ayidenfu_CV.pdf'; // Customize filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Animation effect
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 200);
      });
    }
  
    // 2. Social Media Buttons
    const socialButtons = document.querySelectorAll('.sci a');
    socialButtons.forEach(button => {
      // Click effect
      button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Pulse animation
        this.style.transform = 'scale(1.2)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 300);
        
        // Get platform name from class or tooltip
        const platform = this.querySelector('i').classList[1].replace('bxl-', '');
        console.log(`${platform} button clicked`);
        
        // Add your actual link destinations here
        const socialLinks = {
          github: 'https://github.com/yourusername',
          linkedin: 'https://linkedin.com/in/yourprofile',
          twitter: 'https://twitter.com/yourhandle',
          youtube: 'https://youtube.com/yourchannel'
        };
        
        // Open the appropriate social media link
        if (socialLinks[platform]) {
          setTimeout(() => {
            window.open(socialLinks[platform], '_blank');
          }, 300);
        }
      });
      
      // Hover effects
      button.addEventListener('mouseenter', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'translateY(-5px)';
        icon.style.transition = 'transform 0.3s ease';
        
        // Show tooltip
        const tooltip = this.querySelector('.tooltip');
        if (tooltip) {
          tooltip.style.visibility = 'visible';
          tooltip.style.opacity = '1';
        }
      });
      
      button.addEventListener('mouseleave', function() {
        const icon = this.querySelector('i');
        icon.style.transform = 'translateY(0)';
        
        // Hide tooltip
        const tooltip = this.querySelector('.tooltip');
        if (tooltip) {
          tooltip.style.visibility = 'hidden';
          tooltip.style.opacity = '0';
        }
      });
    });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.btn[href="#"]');
    
    if (downloadBtn) {
      // Add click animation and functionality
      downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Add pulse animation
        this.style.transform = 'scale(0.95)';
        this.style.boxShadow = '0 0 0 rgba(0,0,0,0.2)';
        
        // Reset animation after 300ms
        setTimeout(() => {
          this.style.transform = '';
          this.style.boxShadow = '';
        }, 300);
        
        // Create and trigger download
        simulateCVDownload();
      });
      
      // Hover effects
      downloadBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 6px 12px rgba(0,0,0,0.15)';
      });
      
      downloadBtn.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      });
    }
    
    function simulateCVDownload() {
      // Replace this with your actual CV download logic
      console.log('Initiating CV download...');
      
      // Example using a fake download (replace with real file)
      const link = document.createElement('a');
      link.href = 'path/to/your-cv.pdf'; // Replace with actual path
      link.download = 'Dagne_Ayidenfu_CV.pdf'; // Custom filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Optional: Show download confirmation
      const confirmation = document.createElement('div');
      confirmation.textContent = 'Download started!';
      confirmation.style.position = 'fixed';
      confirmation.style.bottom = '20px';
      confirmation.style.right = '20px';
      confirmation.style.padding = '10px 20px';
      confirmation.style.background = '#4CAF50';
      confirmation.style.color = 'white';
      confirmation.style.borderRadius = '4px';
      confirmation.style.zIndex = '1000';
      document.body.appendChild(confirmation);
      
      setTimeout(() => {
        confirmation.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(confirmation);
        }, 500);
      }, 3000);
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Select the contact form
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get all form elements
            const formElements = this.elements;
            const submitButton = this.querySelector('button[type="submit"]');
            
            // Store original button text
            const originalButtonText = submitButton.textContent;
            
            try {
                // Disable button during submission
                submitButton.disabled = true;
                submitButton.textContent = 'Sending...';
                
                // Validate form
                if (!validateForm()) {
                    return;
                }
                
                // Prepare form data
                const formData = new FormData(this);
                
                // Simulate form submission (replace with actual fetch in production)
                const response = await simulateFormSubmission(formData);
                
                // Show success message
                showMessage('Message sent successfully!', 'success');
                
                // Reset form
                this.reset();
            } catch (error) {
                console.error('Error:', error);
                showMessage('Failed to send message. Please try again.', 'error');
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
        
        // Form validation function
        function validateForm() {
            let isValid = true;
            const requiredFields = contactForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = 'red';
                    
                    // Remove error style when user starts typing
                    field.addEventListener('input', function() {
                        this.style.borderColor = '';
                    });
                }
            });
            
            // Validate email format
            const emailField = contactForm.querySelector('input[type="email"]');
            if (emailField.value && !isValidEmail(emailField.value)) {
                isValid = false;
                emailField.style.borderColor = 'red';
                showMessage('Please enter a valid email address', 'error');
            }
            
            return isValid;
        }
        
        // Email validation helper
        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }
        
        // Show message to user
        function showMessage(message, type) {
            // Remove any existing messages
            const existingMessage = document.querySelector('.form-message');
            if (existingMessage) {
                existingMessage.remove();
            }
            
            // Create message element
            const messageElement = document.createElement('div');
            messageElement.className = `form-message ${type}`;
            messageElement.textContent = message;
            
            // Insert before form
            contactForm.parentNode.insertBefore(messageElement, contactForm);
            
            // Auto-remove after 5 seconds
            setTimeout(() => {
                messageElement.remove();
            }, 5000);
        }
        
        // Simulate form submission (replace with actual fetch in production)
        function simulateFormSubmission(formData) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // Convert FormData to object for demo purposes
                    const formValues = {};
                    formData.forEach((value, key) => {
                        formValues[key] = value;
                    });
                    
                    console.log('Form would be submitted with:', formValues);
                    
                    // Simulate 90% success rate for demo
                    Math.random() > 0.1 ? resolve({ status: 'success' }) : reject(new Error('Server error'));
                }, 1500); // Simulate network delay
            });
        }
        
        // For production, replace simulateFormSubmission with:
        /*
        async function submitForm(formData) {
            try {
                const response = await fetch('your-api-endpoint', {
                    method: 'POST',
                    body: formData,
                    // headers: { 'Content-Type': 'multipart/form-data' } 
                    // ^ Normally not needed - browser sets this automatically for FormData
                });
                
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                
                return await response.json();
            } catch (error) {
                console.error('Error submitting form:', error);
                throw error;
            }
        }
        */
    }
});
 