// Enhanced JavaScript code to search cars by exact name and navigate to location
document.addEventListener('DOMContentLoaded', function() {
    const cars = [
        { name: "porsche-911-gt3", price: 222500},
        { name: "ferrari-sf90", price: 590000},
        { name: "dodge-challenger-demon",  price: 76590 },
        { name: "audi-rs6", price: 125800},
        { name: "nissan-gtr-r35", price: 174990},
        { name: "subaru-impereza-wrx-sti", price: 32735},
        { name: "mcLaren-p1", price:1150000},
        { name: "porsche-gt3rs",  price:241300},
        { name: "golf-gti", price: 31935},
        { name: "lamborghini-urus",  price: 237848},
        { name: "corvette-stingray", price: 84030},
        { name: "bugatti-chiron", price:4300000 },      
        
    ];

    const filterForm = document.querySelector('.search-box');
    const searchInput = filterForm.querySelector('input[type="text"]');
    const searchButton = filterForm.querySelector('button');

    searchButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default button behavior

        const searchQuery = searchInput.value.trim();
        if (!searchQuery) {
            alert('Please enter a car name to search!');
            return;
        }

        const carId = searchQuery.replace(/\s+/g, '-').toLowerCase();
        const carElement = document.getElementById(carId);

        if (carElement) {
            carElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            alert('Car not found! Please check the name and try again.');
        }
    });
});
