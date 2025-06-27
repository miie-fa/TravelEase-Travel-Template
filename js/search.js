// Search page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Filter toggle functionality
    const filterToggle = document.querySelector('button[aria-expanded]');
    
    if (filterToggle) {
        filterToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            
            const filters = this.nextElementSibling;
            filters.classList.toggle('hidden');
        });
    }
    
    // Price range slider
    const priceRange = document.querySelector('input[type="range"]');
    if (priceRange) {
        const priceMin = document.querySelector('.price-min');
        const priceMax = document.querySelector('.price-max');
        
        priceRange.addEventListener('input', function() {
            const value = this.value;
            const min = parseInt(this.min);
            const max = parseInt(this.max);
            
            // Calculate position for the tooltip
            const percent = ((value - min) / (max - min)) * 100;
            
            // Update displayed values
            if (priceMin) priceMin.textContent = '$' + min;
            if (priceMax) priceMax.textContent = '$' + max;
            
            // Here you would typically filter results based on the price range
            // For this example, we're just logging the value
            console.log('Price range selected:', value);
        });
    }
    
    // Star rating filter
    const starFilters = document.querySelectorAll('.star-filter');
    starFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            starFilters.forEach(f => f.classList.remove('bg-indigo-100', 'text-indigo-700'));
            this.classList.add('bg-indigo-100', 'text-indigo-700');
            
            const rating = this.dataset.rating;
            console.log('Filtering by rating:', rating);
            
            // Here you would typically filter results based on the star rating
        });
    });
    
    // Sort dropdown functionality
    const sortDropdown = document.querySelector('.sort-dropdown');
    if (sortDropdown) {
        sortDropdown.addEventListener('change', function() {
            const sortOption = this.value;
            console.log('Sorting by:', sortOption);
            
            // Here you would typically sort results based on the selected option
        });
    }
    
    // Flight/hotel tabs
    const resultTabs = document.querySelectorAll('.result-tab');
    resultTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            resultTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const tabType = this.dataset.tab;
            console.log('Showing:', tabType);
            
            // Here you would typically show/hide flight or hotel results
        });
    });
    
    // Initialize map (placeholder - would use a map library like Google Maps or Mapbox in a real implementation)
    const mapContainer = document.querySelector('.map-container');
    if (mapContainer) {
        console.log('Initializing map...');
        // In a real implementation, you would initialize your map library here
    }
    
    // Pagination
    const paginationLinks = document.querySelectorAll('.pagination a');
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            paginationLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const page = this.textContent;
            console.log('Loading page:', page);
            
            // Here you would typically load the next/previous page of results
        });
    });
});