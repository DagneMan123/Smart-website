document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Sticky Header
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Set active navigation link based on scroll position
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a, .mobile-menu a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Enhanced Vehicle Data with Multiple Images
    const vehicles = [
        {
            id: 1,
            name: 'Toyota Corolla',
            type: 'economy',
            price: 45,
            seats: 5,
            transmission: 'Automatic',
            fuel: 'Hybrid',
            images: [
                'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
                'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
                'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            ],
            features: ['Bluetooth', 'Air Conditioning', 'Navigation', 'Backup Camera']
        },
        {
            id: 2,
            name: 'Honda Civic',
            type: 'economy',
            price: 48,
            seats: 5,
            transmission: 'Automatic',
            fuel: 'Gasoline',
            images: [
                'https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80',
                'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1283&q=80',
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            ],
            features: ['Apple CarPlay', 'Android Auto', 'Lane Assist', 'Keyless Entry']
        },
        {
            id: 3,
            name: 'BMW 3 Series',
            type: 'luxury',
            price: 95,
            seats: 5,
            transmission: 'Automatic',
            fuel: 'Gasoline',
            images: [
                'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                
                'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1555626906-fcf10d6851b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            ],
            features: ['Leather Seats', 'Premium Sound', 'Heated Seats', 'Sunroof']
        },
        {
            id: 4,
            name: 'Mercedes-Benz C-Class',
            type: 'luxury',
            price: 110,
            seats: 5,
            transmission: 'Automatic',
            fuel: 'Gasoline',
            images: [
                'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80',
                'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1215&q=80',
                'https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
            ],
            features: ['Panoramic Roof', 'Ambient Lighting', 'Parking Assist', 'Wireless Charging']
        },
        {
            id: 5,
            name: 'Ford Explorer',
            type: 'suv',
            price: 75,
            seats: 7,
            transmission: 'Automatic',
            fuel: 'Gasoline',
            images: [
                'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            ],
            features: ['Third Row Seating', 'All-Wheel Drive', 'Towing Package', 'Roof Rails']
        },
        {
            id: 6,
            name: 'Chevrolet Tahoe',
            type: 'suv',
            price: 85,
            seats: 8,
            transmission: 'Automatic',
            fuel: 'Gasoline',
            images: [
               
                'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            ],
            features: ['Spacious Interior', 'Power Liftgate', 'DVD Entertainment', 'Heated Seats']
        },
        {
            id: 7,
            name: 'Porsche 911',
            type: 'sports',
            price: 250,
            seats: 4,
            transmission: 'Automatic',
            fuel: 'Gasoline',
            images: [
                'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            ],
            features: ['Sport Seats', 'Performance Tires', 'Sport Exhaust', 'Track Mode']
        },
        {
            id: 8,
            name: 'Tesla Model 3',
            type: 'luxury',
            price: 120,
            seats: 5,
            transmission: 'Automatic',
            fuel: 'Electric',
            images: [
                'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
            ],
            features: ['Autopilot', 'Large Touchscreen', 'Premium Audio', 'Over-the-air Updates']
        }
    ];
    
    // Display Vehicles
    const vehicleGrid = document.querySelector('.vehicle-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    function displayVehicles(filter = 'all') {
        vehicleGrid.innerHTML = '';
        
        const filteredVehicles = filter === 'all' 
            ? vehicles 
            : vehicles.filter(vehicle => vehicle.type === filter);
        
        filteredVehicles.forEach(vehicle => {
            const vehicleCard = document.createElement('div');
            vehicleCard.className = 'vehicle-card';
            vehicleCard.innerHTML = `
                <div class="vehicle-image">
                    <img src="${vehicle.images[0]}" alt="${vehicle.name}">
                    <div class="image-count-badge">${vehicle.images.length} images</div>
                </div>
                <div class="vehicle-info">
                    <div class="vehicle-meta">
                        <span><i class="fas fa-users"></i> ${vehicle.seats} seats</span>
                        <span><i class="fas fa-gas-pump"></i> ${vehicle.fuel}</span>
                    </div>
                    <h3 class="vehicle-title">${vehicle.name}</h3>
                    <div class="vehicle-meta">
                        <span><i class="fas fa-cog"></i> ${vehicle.transmission}</span>
                        <span><i class="fas fa-car"></i> ${vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}</span>
                    </div>
                    <div class="vehicle-price">
                        <div class="price">$${vehicle.price}<span>/day</span></div>
                        <button class="btn outline rent-btn" data-id="${vehicle.id}">Rent Now</button>
                    </div>
                </div>
            `;
            vehicleGrid.appendChild(vehicleCard);
        });
        
        // Add event listeners to rent buttons
        document.querySelectorAll('.rent-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const vehicleId = parseInt(this.getAttribute('data-id'));
                const vehicle = vehicles.find(v => v.id === vehicleId);
                openVehicleModal(vehicle);
            });
        });
        
        // Add event listeners to vehicle images to show gallery
        document.querySelectorAll('.vehicle-image').forEach((img, index) => {
            img.addEventListener('click', function() {
                const vehicleId = parseInt(this.closest('.vehicle-card').querySelector('.rent-btn').getAttribute('data-id'));
                const vehicle = vehicles.find(v => v.id === vehicleId);
                openImageGallery(vehicle);
            });
        });
    }
    
    // Filter Vehicles
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            displayVehicles(filter);
        });
    });
    
    // Initialize with all vehicles
    displayVehicles();
    
    // Vehicle Modal
    const vehicleModal = document.getElementById('vehicleModal');
    
    function openVehicleModal(vehicle) {
        const modalBody = document.querySelector('#vehicleModal .modal-body');
        modalBody.innerHTML = `
            <div class="vehicle-modal-content">
                <div class="vehicle-modal-image">
                    <img src="${vehicle.images[0]}" alt="${vehicle.name}" id="mainVehicleImage">
                    <div class="vehicle-thumbnails">
                        ${vehicle.images.map((img, index) => `
                            <img src="${img}" alt="${vehicle.name} - ${index + 1}" class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                        `).join('')}
                    </div>
                    <button class="view-all-images-btn" onclick="openImageGallery(${vehicle.id})">View All Images</button>
                </div>
                <div class="vehicle-modal-details">
                    <h2>${vehicle.name}</h2>
                    <div class="vehicle-modal-price">$${vehicle.price}<span>/day</span></div>
                    
                    <div class="vehicle-modal-features">
                        <div class="feature-item">
                            <i class="fas fa-users"></i>
                            <span>${vehicle.seats} Seats</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-cog"></i>
                            <span>${vehicle.transmission} Transmission</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-gas-pump"></i>
                            <span>${vehicle.fuel}</span>
                        </div>
                        <div class="feature-item">
                            <i class="fas fa-car"></i>
                            <span>${vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}</span>
                        </div>
                    </div>
                    
                    <h3>Features</h3>
                    <ul class="features-list">
                        ${vehicle.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
                    </ul>
                    
                    <form class="vehicle-modal-form" id="rentalForm">
                        <div class="form-group">
                            <label for="rental-pickup-date"><i class="fas fa-calendar-alt"></i> Pickup Date</label>
                            <input type="date" id="rental-pickup-date" required>
                        </div>
                        <div class="form-group">
                            <label for="rental-return-date"><i class="fas fa-calendar-alt"></i> Return Date</label>
                            <input type="date" id="rental-return-date" required>
                        </div>
                        <div class="form-group">
                            <label for="rental-location"><i class="fas fa-map-marker-alt"></i> Pickup Location</label>
                            <select id="rental-location" required>
                                <option value="">Select Location</option>
                                <option value="airport">Airport</option>
                                <option value="downtown">Downtown</option>
                                <option value="suburb">Suburb Branch</option>
                            </select>
                        </div>
                        <button type="submit" class="btn primary">Complete Reservation</button>
                    </form>
                </div>
            </div>
        `;
        
        // Set min date for pickup to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('rental-pickup-date').min = today;
        
        // Set min date for return to pickup date
        document.getElementById('rental-pickup-date').addEventListener('change', function() {
            document.getElementById('rental-return-date').min = this.value;
        });
        
        // Handle thumbnail clicks
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                document.getElementById('mainVehicleImage').src = vehicle.images[index];
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        // Handle form submission
        document.getElementById('rentalForm').addEventListener('submit', function(e) {
            e.preventDefault();
            vehicleModal.classList.remove('active');
            document.body.style.overflow = '';
            
            const successModal = document.getElementById('successModal');
            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = `Your reservation for the ${vehicle.name} has been received. We'll contact you shortly to confirm your booking.`;
            successModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        vehicleModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Image Gallery Modal
    function openImageGallery(vehicle) {
        // If vehicle is passed by ID (from view all images button)
        if (typeof vehicle === 'number') {
            vehicle = vehicles.find(v => v.id === vehicle);
        }
        
        const galleryModal = document.createElement('div');
        galleryModal.className = 'modal active';
        galleryModal.id = 'galleryModal';
        galleryModal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <div class="modal-body">
                    <div class="gallery-container">
                        <div class="gallery-main-image">
                            <img src="${vehicle.images[0]}" alt="${vehicle.name}">
                        </div>
                        <div class="gallery-controls">
                            <button class="gallery-prev"><i class="fas fa-chevron-left"></i></button>
                            <div class="gallery-thumbnails">
                                ${vehicle.images.map((img, index) => `
                                    <img src="${img}" alt="${vehicle.name} - ${index + 1}" class="${index === 0 ? 'active' : ''}" data-index="${index}">
                                `).join('')}
                            </div>
                            <button class="gallery-next"><i class="fas fa-chevron-right"></i></button>
                        </div>
                        <div class="gallery-info">
                            <h3>${vehicle.name}</h3>
                            <div class="image-counter">1 of ${vehicle.images.length}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(galleryModal);
        document.body.style.overflow = 'hidden';
        
        // Gallery functionality
        let currentImageIndex = 0;
        const mainImage = galleryModal.querySelector('.gallery-main-image img');
        const thumbnails = galleryModal.querySelectorAll('.gallery-thumbnails img');
        const imageCounter = galleryModal.querySelector('.image-counter');
        
        function updateGallery(index) {
            currentImageIndex = index;
            mainImage.src = vehicle.images[index];
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            thumbnails[index].classList.add('active');
            imageCounter.textContent = `${index + 1} of ${vehicle.images.length}`;
        }
        
        // Thumbnail click
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                updateGallery(index);
            });
        });
        
        // Next button
        galleryModal.querySelector('.gallery-next').addEventListener('click', function() {
            const nextIndex = (currentImageIndex + 1) % vehicle.images.length;
            updateGallery(nextIndex);
        });
        
        // Previous button
        galleryModal.querySelector('.gallery-prev').addEventListener('click', function() {
            const prevIndex = (currentImageIndex - 1 + vehicle.images.length) % vehicle.images.length;
            updateGallery(prevIndex);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function handleKeyDown(e) {
            if (e.key === 'ArrowRight') {
                const nextIndex = (currentImageIndex + 1) % vehicle.images.length;
                updateGallery(nextIndex);
            } else if (e.key === 'ArrowLeft') {
                const prevIndex = (currentImageIndex - 1 + vehicle.images.length) % vehicle.images.length;
                updateGallery(prevIndex);
            } else if (e.key === 'Escape') {
                closeGallery();
            }
        });
        
        // Close button
        galleryModal.querySelector('.modal-close').addEventListener('click', closeGallery);
        
        // Close when clicking outside
        galleryModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeGallery();
            }
        });
        
        function closeGallery() {
            document.removeEventListener('keydown', handleKeyDown);
            galleryModal.remove();
            document.body.style.overflow = '';
        }
    }
    
    // Close Modal
    const modalCloseButtons = document.querySelectorAll('.modal-close, #successModalClose');
    const modals = document.querySelectorAll('.modal');
    
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function() {
            modals.forEach(modal => {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    });
    
    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentSlide = 0;
    
    function showSlide(index) {
        testimonialSlides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonialSlides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length;
        showSlide(currentSlide);
    }
    
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Add click event to dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
        });
    });
    
    // Auto slide change every 5 seconds
    setInterval(nextSlide, 5000);
    
    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all items first
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it was closed
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Form Submissions
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const successModal = document.getElementById('successModal');
            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = "We've found available vehicles matching your criteria. Please check the vehicles section below.";
            successModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const successModal = document.getElementById('successModal');
            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = "Thank you for your message! Our team will get back to you within 24 hours.";
            successModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.reset();
        });
    }
    
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const successModal = document.getElementById('successModal');
            const successMessage = document.getElementById('successMessage');
            successMessage.textContent = "Thank you for subscribing to our newsletter! You'll receive our latest deals and offers soon.";
            successModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            this.reset();
        });
    }
    
    // Set min date for booking form
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('pickup-date').min = today;
    
    // Set min return date based on pickup date
    document.getElementById('pickup-date').addEventListener('change', function() {
        document.getElementById('return-date').min = this.value;
    });
    
    // Make openImageGallery available globally for the view all images button
    window.openImageGallery = openImageGallery;
});

// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const mobileLoginBtn = document.getElementById('mobileLoginBtn');
const mobileRegisterBtn = document.getElementById('mobileRegisterBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const showRegister = document.getElementById('showRegister');
const showLogin = document.getElementById('showLogin');
const authModalClose = document.querySelectorAll('.auth-modal-close');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

// Open Login Modal
function openLoginModal() {
    loginModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Open Register Modal
function openRegisterModal() {
    registerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modals
function closeModals() {
    loginModal.classList.remove('active');
    registerModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
}

// Event Listeners
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openLoginModal();
});

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openRegisterModal();
});

mobileLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMobileMenu();
    openLoginModal();
});

mobileRegisterBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMobileMenu();
    openRegisterModal();
});

showRegister.addEventListener('click', (e) => {
    e.preventDefault();
    closeModals();
    openRegisterModal();
});

showLogin.addEventListener('click', (e) => {
    e.preventDefault();
    closeModals();
    openLoginModal();
});

authModalClose.forEach(closeBtn => {
    closeBtn.addEventListener('click', closeModals);
});

mobileMenuBtn.addEventListener('click', toggleMobileMenu);
mobileMenuClose.addEventListener('click', toggleMobileMenu);

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        closeModals();
    }
    if (e.target === registerModal) {
        closeModals();
    }
});

// Form Submissions
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.querySelector('#loginForm input[type="checkbox"]').checked;
    
    // Here you would typically send this data to your backend
    console.log('Login attempt with:', { email, password, rememberMe });
    
    // For demo purposes, just show a success message
    alert('Login successful! (This is a demo)');
    closeModals();
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const phone = document.getElementById('register-phone').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm').value;
    
    // Simple validation
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Here you would typically send this data to your backend
    console.log('Registration attempt with:', { name, email, phone, password });
    
    // For demo purposes, just show a success message
    alert('Registration successful! (This is a demo)');
    closeModals();
});

// Close modals with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModals();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // FAQ functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        // Close all answers except the first one initially
        if (item !== faqItems[0]) {
            answer.style.display = 'none';
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        } else {
            answer.style.display = 'block';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
        
        question.addEventListener('click', () => {
            // Toggle the current answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            } else {
                answer.style.display = 'block';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
            }
            
            // Close other open answers
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    const otherIcon = otherItem.querySelector('.faq-question i');
                    otherAnswer.style.display = 'none';
                    otherIcon.classList.remove('fa-chevron-up');
                    otherIcon.classList.add('fa-chevron-down');
                }
            });
        });
    });

    // Optional: Add smooth animation for FAQ answers
    const faqAnswers = document.querySelectorAll('.faq-answer');
    faqAnswers.forEach(answer => {
        answer.style.transition = 'max-height 0.3s ease, padding 0.3s ease';
        
        // Store the full height of the answer
        const fullHeight = answer.scrollHeight + 'px';
        
        // Set initial state
        if (answer.style.display === 'block') {
            answer.style.maxHeight = fullHeight;
        } else {
            answer.style.maxHeight = '0';
            answer.style.paddingTop = '0';
            answer.style.paddingBottom = '0';
            answer.style.overflow = 'hidden';
        }
    });

    // Update the click handler to use animation
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');
        
        question.addEventListener('click', () => {
            const fullHeight = answer.scrollHeight + 'px';
            
            if (answer.style.maxHeight === '0px' || !answer.style.maxHeight) {
                // Open this answer
                answer.style.maxHeight = fullHeight;
                answer.style.paddingTop = '15px';
                answer.style.paddingBottom = '15px';
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-up');
                
                // Close other answers
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        const otherIcon = otherItem.querySelector('.faq-question i');
                        otherAnswer.style.maxHeight = '0';
                        otherAnswer.style.paddingTop = '0';
                        otherAnswer.style.paddingBottom = '0';
                        otherIcon.classList.remove('fa-chevron-up');
                        otherIcon.classList.add('fa-chevron-down');
                    }
                });
            } else {
                // Close this answer
                answer.style.maxHeight = '0';
                answer.style.paddingTop = '0';
                answer.style.paddingBottom = '0';
                icon.classList.remove('fa-chevron-up');
                icon.classList.add('fa-chevron-down');
            }
        });
    });
});

// our services

document.addEventListener('DOMContentLoaded', function() {
    const servicesSection = document.querySelector('.services');
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Initialize card states
    function initServiceCards() {
        serviceCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        });
    }
    
    // Check if cards are in viewport
    function checkCardVisibility() {
        const sectionTop = servicesSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            animateCards();
            window.removeEventListener('scroll', checkCardVisibility);
        }
    }
    
    // Animate cards into view
    function animateCards() {
        serviceCards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }
    
    // Add hover effects
    function addHoverEffects() {
        serviceCards.forEach(card => {
            const icon = card.querySelector('.service-icon');
            
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px)';
                card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
                
                if (icon) {
                    icon.style.transform = 'rotateY(180deg) scale(1.1)';
                    icon.style.backgroundColor = '#0066ff';
                }
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0)';
                card.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                
                if (icon) {
                    icon.style.transform = 'rotateY(0) scale(1)';
                    icon.style.backgroundColor = '';
                }
            });
        });
    }
    
    // Initialize everything
    initServiceCards();
    addHoverEffects();
    
    // Check visibility on load and scroll
    checkCardVisibility();
    window.addEventListener('scroll', checkCardVisibility);
    
    // Reset animations on resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            initServiceCards();
            checkCardVisibility();
        }, 200);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Get all social media links
    const socialLinks = document.querySelectorAll('.social-links a');
    
    // Add click event to each social link
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the social media platform from the icon class
            const iconClass = this.querySelector('i').className;
            let platform = '';
            
            if (iconClass.includes('facebook')) platform = 'facebook';
            else if (iconClass.includes('twitter')) platform = 'twitter';
            else if (iconClass.includes('instagram')) platform = 'instagram';
            else if (iconClass.includes('linkedin')) platform = 'linkedin';
            
            // Define the URLs for each platform (replace with your actual URLs)
            const urls = {
                'facebook': 'https://www.facebook.com/yourpage',
                'twitter': 'https://www.twitter.com/yourhandle',
                'instagram': 'https://www.instagram.com/yourprofile',
                'linkedin': 'https://www.linkedin.com/yourcompany'
            };
            
            // Open the social media page in a new tab
            if (urls[platform]) {
                window.open(urls[platform], '_blank');
            } else {
                console.error('Unknown social media platform');
            }
        });
    });
});
/* node js*/
// Dark Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Apply saved theme
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      icon.classList.replace('bx-moon', 'bx-sun');
    }
    
    // Toggle between light/dark mode
    themeToggle.addEventListener('click', function() {
      const isDark = document.body.classList.toggle('dark-mode');
      
      // Update icon and save preference
      if (isDark) {
        icon.classList.replace('bx-moon', 'bx-sun');
        localStorage.setItem('theme', 'dark');
      } else {
        icon.classList.replace('bx-sun', 'bx-moon');
        localStorage.setItem('theme', 'light');
      }
    });
    
    // Load BoxIcons if not already loaded
    if (!document.querySelector('link[href*="boxicons"]')) {
      const link = document.createElement('link');
      link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    // Social Login Buttons - Direct to provider websites
    const googleBtn = document.querySelector('.social-btn.google');
    const facebookBtn = document.querySelector('.social-btn.facebook');
    
    // Forgot Password Link
    const forgotPasswordLink = document.querySelector('.forgot-password');
    
    // Create Forgot Password Modal
    const forgotPasswordModal = document.createElement('div');
    forgotPasswordModal.id = 'forgotPasswordModal';
    forgotPasswordModal.className = 'auth-modal';
    forgotPasswordModal.innerHTML = `
        <div class="auth-modal-content">
            <span class="auth-modal-close">&times;</span>
            <h2>Reset Your Password</h2>
            <form class="auth-form" id="forgotPasswordForm">
                <div class="form-group">
                    <label for="forgot-email">Email Address</label>
                    <input type="email" id="forgot-email" placeholder="Enter your registered email" required>
                </div>
                <button type="submit" class="btn primary">Send Reset Link</button>
                <div class="auth-switch">
                    Remember your password? <a href="#" id="showLoginFromForgot">Login here</a>
                </div>
            </form>
        </div>
    `;
    document.body.appendChild(forgotPasswordModal);

    // Google Login - Direct to Google OAuth
    googleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your actual Google OAuth client ID and redirect URI
        const clientId = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
        const redirectUri = encodeURIComponent('YOUR_REDIRECT_URI');
        const scope = encodeURIComponent('profile email');
        const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&access_type=offline`;
        window.location.href = googleAuthUrl;
    });

    // Facebook Login - Direct to Facebook OAuth
    facebookBtn.addEventListener('click', function(e) {
        e.preventDefault();
        // Replace with your actual Facebook App ID and redirect URI
        const appId = 'YOUR_FACEBOOK_APP_ID';
        const redirectUri = encodeURIComponent('YOUR_REDIRECT_URI');
        const scope = encodeURIComponent('public_profile,email');
        const facebookAuthUrl = `https://www.facebook.com/v12.0/dialog/oauth?client_id=${appId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
        window.location.href = facebookAuthUrl;
    });

    // Forgot Password Modal Handling
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        forgotPasswordModal.style.display = 'block';
        
        // Close login modal if open
        const loginModal = document.getElementById('loginModal');
        if (loginModal) loginModal.style.display = 'none';
    });

    // Close Forgot Password Modal
    const forgotCloseBtn = forgotPasswordModal.querySelector('.auth-modal-close');
    forgotCloseBtn.addEventListener('click', function() {
        forgotPasswordModal.style.display = 'none';
    });

    // Show Login from Forgot Password
    const showLoginFromForgot = document.getElementById('showLoginFromForgot');
    if (showLoginFromForgot) {
        showLoginFromForgot.addEventListener('click', function(e) {
            e.preventDefault();
            forgotPasswordModal.style.display = 'none';
            const loginModal = document.getElementById('loginModal');
            if (loginModal) loginModal.style.display = 'block';
        });
    }

    // Forgot Password Form Submission
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('forgot-email').value;
            
            // In a real app, you would send this to your backend
            fetch('/api/auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Password reset link sent to your email!');
                    forgotPasswordModal.style.display = 'none';
                } else {
                    alert('Error: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to send reset link. Please try again.');
            });
            
            // For demo purposes (remove in production):
            alert(`Password reset link would be sent to: ${email}\n(Backend integration required)`);
            forgotPasswordModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === forgotPasswordModal) {
            forgotPasswordModal.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Contact Information Interaction
    const contactItems = document.querySelectorAll('.contact-item');
    
    // Add click event listeners to each contact item
    contactItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            contactItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get the contact type and value
            const contactType = this.querySelector('h3').textContent;
            const contactValue = this.querySelector('p').textContent;
            
            // For phone number, enable click-to-call on mobile
            if (contactType === 'Phone') {
                this.classList.add('clickable');
                this.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) { // Only on mobile
                        e.preventDefault();
                        window.location.href = `tel:${contactValue.trim()}`;
                    }
                });
            }
            
            // For email, enable click-to-email
            if (contactType === 'Email') {
                this.classList.add('clickable');
                this.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.href = `mailto:${contactValue.trim()}`;
                });
            }
            
            // For address, open in maps
            if (contactType === 'Headquarters') {
                this.classList.add('clickable');
                this.addEventListener('click', function(e) {
                    e.preventDefault();
                    const address = encodeURIComponent(contactValue.replace('<br>', ', '));
                    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
                });
            }
        });
    });

    // Copy contact info to clipboard functionality
    contactItems.forEach(item => {
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-btn';
        copyBtn.innerHTML = '<i class="far fa-copy"></i>';
        copyBtn.title = 'Copy to clipboard';
        
        copyBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the parent click event
            
            const textToCopy = item.querySelector('p').textContent;
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Show copied feedback
                const originalIcon = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i>';
                this.style.color = '#4CAF50';
                
                setTimeout(() => {
                    this.innerHTML = originalIcon;
                    this.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
        
        item.appendChild(copyBtn);
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;
            
            // Here you would typically send the data to a server
            // For demonstration, we'll just show a success message
            console.log('Contact form submitted:', { name, email, subject, message });
            
            // Show success modal
            document.getElementById('successMessage').textContent = 
                'Your message has been sent successfully. We will get back to you soon!';
            document.getElementById('successModal').style.display = 'block';
            
            // Reset form
            contactForm.reset();
        });
    }

    // Close modals
    const closeButtons = document.querySelectorAll('.modal-close, #successModalClose');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });

    // Responsive adjustments for contact section
    function adjustContactLayout() {
        const contactSection = document.querySelector('.contact');
        if (window.innerWidth <= 768) {
            // Mobile layout adjustments
            contactSection.querySelector('.contact-content').style.order = '2';
            contactSection.querySelector('.contact-form').style.order = '1';
        } else {
            // Desktop layout
            contactSection.querySelector('.contact-content').style.order = '';
            contactSection.querySelector('.contact-form').style.order = '';
        }
    }

    // Run on load and resize
    adjustContactLayout();
    window.addEventListener('resize', adjustContactLayout);
});

// You can also add some CSS for the new elements in your stylesheet:
/*
.copy-btn {
    position: absolute;
    right: 10px;
    top: 10px;
    background: none;
    border: none;
    color: #666;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.3s;
}

.contact-item:hover .copy-btn {
    opacity: 1;
}

.contact-item.clickable {
    cursor: pointer;
    transition: transform 0.2s;
}

.contact-item.clickable:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.contact-item.active {
    background-color: #f8f9fa;
    border-left: 3px solid #007bff;
}
*/
