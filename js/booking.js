// Booking process specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Passenger form handling
    const addPassengerBtn = document.querySelector('.add-passenger');
    if (addPassengerBtn) {
        addPassengerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const passengerForms = document.querySelector('.passenger-forms');
            const passengerCount = document.querySelectorAll('.passenger-form').length;
            const newPassengerNumber = passengerCount + 1;
            
            const newPassengerForm = document.createElement('div');
            newPassengerForm.className = 'passenger-form mb-6';
            newPassengerForm.innerHTML = `
                <h4 class="font-medium text-gray-700 mb-3">Passenger ${newPassengerNumber}</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input type="text" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input type="text" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500">
                    </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <select class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                        <input type="date" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Passport Number</label>
                        <input type="text" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500">
                    </div>
                </div>
            `;
            
            passengerForms.appendChild(newPassengerForm);
            
            // Update the passenger count in the summary
            const passengerCountElement = document.querySelector('.passenger-count');
            if (passengerCountElement) {
                passengerCountElement.textContent = `${newPassengerNumber} Passengers`;
            }
            
            // Update the total price
            const pricePerPassenger = 649; // This would come from your data
            const totalPriceElement = document.querySelector('.total-price');
            if (totalPriceElement) {
                totalPriceElement.textContent = `$${(pricePerPassenger * newPassengerNumber).toLocaleString()}`;
            }
        });
    }
    
    // Seat selection modal
    const seatSelectionBtn = document.querySelector('.select-seat');
    if (seatSelectionBtn) {
        seatSelectionBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // In a real implementation, this would open a modal with seat map
            console.log('Opening seat selection...');
            
            // For demo purposes, we'll just show an alert
            alert('Seat selection would open here in a real implementation.');
        });
    }
    
    // Meal selection
    const mealOptions = document.querySelectorAll('.meal-option');
    mealOptions.forEach(option => {
        option.addEventListener('click', function() {
            mealOptions.forEach(o => o.classList.remove('border-indigo-500', 'bg-indigo-50'));
            this.classList.add('border-indigo-500', 'bg-indigo-50');
            
            const mealType = this.dataset.meal;
            console.log('Selected meal:', mealType);
        });
    });
    
    // Baggage selection
    const baggageOptions = document.querySelectorAll('.baggage-option');
    baggageOptions.forEach(option => {
        option.addEventListener('click', function() {
            baggageOptions.forEach(o => o.classList.remove('border-indigo-500', 'bg-indigo-50'));
            this.classList.add('border-indigo-500', 'bg-indigo-50');
            
            const baggageType = this.dataset.baggage;
            console.log('Selected baggage:', baggageType);
            
            // Update the price if needed
            // This would depend on your pricing structure
        });
    });
    
    // Payment method selection
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            paymentMethods.forEach(m => m.classList.remove('border-indigo-500', 'bg-indigo-50'));
            this.classList.add('border-indigo-500', 'bg-indigo-50');
            
            const paymentType = this.dataset.payment;
            console.log('Selected payment method:', paymentType);
        });
    });
    
    // Form validation before submission
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form fields
            let isValid = true;
            const requiredFields = this.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('border-red-500');
                    isValid = false;
                } else {
                    field.classList.remove('border-red-500');
                }
            });
            
            if (isValid) {
                console.log('Form is valid, proceeding to payment...');
                // In a real implementation, you would submit the form or proceed to payment
                window.location.href = 'booking-payment.html';
            } else {
                console.log('Please fill in all required fields.');
                // Show error message to user
                const errorMessage = document.createElement('div');
                errorMessage.className = 'bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4';
                errorMessage.textContent = 'Please fill in all required fields.';
                
                const firstError = this.querySelector('.border-red-500');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                
                const existingError = this.querySelector('.bg-red-100');
                if (!existingError) {
                    this.prepend(errorMessage);
                }
            }
        });
    }
    
    // Initialize any date pickers
    const dateInputs = document.querySelectorAll('input[type="date"]');
    dateInputs.forEach(input => {
        if (!input.value) {
            const today = new Date();
            input.value = today.toISOString().split('T')[0];
        }
    });
});