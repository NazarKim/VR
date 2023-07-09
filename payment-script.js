const menuToggle = document.getElementById('menu-toggle');
const menuIconSpans = document.querySelectorAll('.menu-icon span');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('change', function() {
    if (this.checked) {
        menuItems.style.display = 'block';
        menuItems.style.opacity = '1';
        menuItems.style.visibility = 'visible';
        menuItems.style.transform = 'translateX(-100%)';
        menuIconSpans[0].style.transform = 'translateY(10px) rotate(45deg)';
        menuIconSpans[1].style.opacity = '0';
        menuIconSpans[2].style.transform = 'translateY(-10px) rotate(-45deg)';
        menuItems.style.transition = 'transform 0.3s ease-in-out';
        setTimeout(function() {
            menuItems.style.transform = 'translateX(0)';
        }, 10);
    } else {
        menuItems.style.opacity = '0';
        menuItems.style.visibility = 'hidden';
        menuIconSpans[0].style.transform = 'translateY(0) rotate(0)';
        menuIconSpans[1].style.opacity = '1';
        menuIconSpans[2].style.transform = 'translateY(0) rotate(0)';
        menuItems.style.transition = 'transform 0.3s ease-in-out';
        menuItems.style.transform = 'translateX(-100%)';
        setTimeout(function() {
            menuItems.style.display = 'none';
        }, 300);
    }
});

const urlParams = new URLSearchParams(window.location.search);

const productImage = document.getElementById('productImage');
const modelElement = document.getElementById('model');
const priceElement = document.getElementById('price');
const quantityElement = document.getElementById('quantity');
const descriptionElement = document.getElementById('description');

const model = urlParams.get('model');
const price = urlParams.get('price');
const quantity = urlParams.get('quantity');
const photo = urlParams.get('photo');
const description = urlParams.get('description');

productImage.src = photo;
modelElement.textContent = model;
priceElement.textContent = `Price: $${price}`;
quantityElement.textContent = `Quantity: ${quantity}`;
descriptionElement.textContent = description;

const submitButton = document.querySelector('.btn');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    const addressInput = document.getElementById('address');
    const cardNumberInput = document.getElementById('cardNumber');
    const cvvInput = document.getElementById('cvv');

    const address = addressInput.value.trim();
    const cardNumber = cardNumberInput.value.trim();
    const cvv = cvvInput.value.trim();

    // Проверка введенных данных
    if (address === '') {
        addressInput.classList.add('error');
        return;
    } else {
        addressInput.classList.remove('error');
    }

    if (cardNumber === '' || !cardNumber.match(/^\d{16}$/)) {
        cardNumberInput.classList.add('error');
        return;
    } else {
        cardNumberInput.classList.remove('error');
    }

    if (cvv === '' || !cvv.match(/^\d{3}$/)) {
        cvvInput.classList.add('error');
        return;
    } else {
        cvvInput.classList.remove('error');
    }

    const formData = new FormData();
    formData.append('address', address);
    formData.append('cardNumber', cardNumber);
    formData.append('cvv', cvv);

    fetch('server', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                addressInput.value = '';
                cardNumberInput.value = '';
                cvvInput.value = '';
            } else {
                throw new Error('Error server');
            }
        })
        .catch(error => {
            alert(error);
        });
});
