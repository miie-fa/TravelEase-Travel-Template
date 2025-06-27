// Main JavaScript for the website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    const mobileMenu = document.querySelector('.hidden.md\\:flex');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('block');
            mobileMenu.classList.toggle('absolute');
            mobileMenu.classList.toggle('top-16');
            mobileMenu.classList.toggle('left-0');
            mobileMenu.classList.toggle('right-0');
            mobileMenu.classList.toggle('bg-white');
            mobileMenu.classList.toggle('shadow-lg');
            mobileMenu.classList.toggle('p-4');
            mobileMenu.classList.toggle('z-40');
        });
    }
    
    // FAQ accordion functionality
    const faqButtons = document.querySelectorAll('[aria-expanded]');
    
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            
            const answer = this.nextElementSibling;
            answer.classList.toggle('hidden');
        });
    });
    
    // Date picker initialization for search forms
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        if (!input.value) {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            
            input.value = today.toISOString().split('T')[0];
            
            // If it's a return date input, set it to tomorrow
            if (input.id.includes('return')) {
                input.value = tomorrow.toISOString().split('T')[0];
            }
        }
    });
    
    // Search tab switching
    const searchTabs = document.querySelectorAll('.border-b button');
    searchTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            searchTabs.forEach(t => t.classList.remove('text-indigo-600', 'border-b-2', 'border-indigo-600'));
            this.classList.add('text-indigo-600', 'border-b-2', 'border-indigo-600');
            
            // Here you would typically load different search forms based on the tab
            // For this example, we're just toggling visibility
        });
    });
    
    // Initialize any image lazy loading
    if ('loading' in HTMLImageElement.prototype) {
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        // You might want to include a lazy loading library here
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add parallax effect to elements with .parallax class
    const parallaxElements = document.querySelectorAll('.parallax');
    
    if (parallaxElements.length > 0) {
        window.addEventListener('scroll', function() {
            const scrollPosition = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                element.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
            });
        });
    }
    
    // Initialize any tooltips
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute z-50 bg-gray-800 text-white text-xs rounded py-1 px-2';
            tooltip.textContent = this.dataset.tooltip;
            
            const rect = this.getBoundingClientRect();
            tooltip.style.top = (rect.top - 30) + 'px';
            tooltip.style.left = (rect.left + rect.width / 2) + 'px';
            tooltip.style.transform = 'translateX(-50%)';
            
            document.body.appendChild(tooltip);
            
            this._tooltip = tooltip;
        });
        
        trigger.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.remove();
            }
        });
    });
});