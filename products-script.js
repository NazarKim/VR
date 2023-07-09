let server = {
    "products": [
        {
            "model": "VR X100",
            "price": 1000,
            "quantity": 125,
            "photo": "https://hd2.tudocdn.net/847263?w=1920",
            "description": "Model VR X100 is a lightweight and versatile virtual reality headset designed for immersive gaming experiences. It features advanced motion tracking technology and high-resolution displays, providing a lifelike visual experience."
        },
        {
            "model": "VR X200",
            "price": 1250,
            "quantity": 133,
            "photo": "https://media.cnn.com/api/v1/images/stellar/prod/oculus-quest-2-comparison-card.jpg?c=16x9&q=h_720,w_1280,c_fill",
            "description": "Model VR X200 offers an exceptional virtual reality experience with its ergonomic design and intuitive controls. It combines comfort and performance, allowing users to fully immerse themselves in virtual worlds."
        },
        {
            "model": "VR P100",
            "price": 1200,
            "quantity": 98,
            "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Oculus-Rift-CV1-Headset-Front_with_transparent_background.png/1200px-Oculus-Rift-CV1-Headset-Front_with_transparent_background.png",
            "description": "Introducing the VR P100, a cutting-edge virtual reality headset that delivers stunning visuals and precise tracking. Its sleek design and lightweight construction make it a comfortable choice for extended gaming sessions."
        },
        {
            "model": "VR P400",
            "price": 1300,
            "quantity": 101,
            "photo": "https://hiper-power.com/upload/iblock/6e7/VR%C2%A0NEO_003_1000x1000.jpg",
            "description": "Step into a new dimension with the VR P400. This high-performance virtual reality headset offers a wide field of view and exceptional graphics, providing a truly immersive experience for gaming enthusiasts."
        },
        {
            "model": "VR Q001",
            "price": 1500,
            "quantity": 145,
            "photo": "https://img.mvideo.ru/Pdb/50044255b.jpg",
            "description": "Discover the next level of virtual reality with the VR Q001. Featuring state-of-the-art technology and a comfortable fit, this headset delivers breathtaking visuals and realistic audio for an unparalleled gaming adventure."
        },
        {
            "model": "VR Q010",
            "price": 950,
            "quantity": 79,
            "photo": "https://msk.ipgifts.ru/upload/iblock/240/ochki-virtualnoy-realnosti-reality-chernyy-belyy-280465-foto-0.jpg",
            "description": "Experience virtual reality like never before with the VR Q010. This sleek and compact headset offers easy setup and impressive visuals, making it the perfect choice for both casual gamers and VR enthusiasts."
        }
    ]
}
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

class Product {
    constructor(model, price, quantity, photo, description) {
        this.model = model;
        this.price = price;
        this.quantity = quantity;
        this.photo = photo;
        this.description = description;
    }

    createCard() {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = this.photo;
        image.alt = this.model;
        card.appendChild(image);

        const heading = document.createElement('h2');
        heading.textContent = this.model;
        card.appendChild(heading);

        const price = document.createElement('p');
        price.textContent = `Price: $${this.price}`;
        card.appendChild(price);

        const quantity = document.createElement('p');
        quantity.textContent = `Quantity: ${this.quantity}`;
        card.appendChild(quantity);

        const button = document.createElement('button');
        button.type = 'button';
        button.classList.add('button');
        button.innerHTML = `
      <span class="button__text">Add Item</span>
      <span class="button__icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg">
          <line y2="19" y1="5" x2="12" x1="12"></line>
          <line y2="12" y1="12" x2="19" x1="5"></line>
        </svg>
      </span>
    `;

        button.classList.add('button');
        button.querySelector('.button__text').classList.add('button__text');
        button.querySelector('.button__icon').classList.add('button__icon');
        button.querySelector('.svg').classList.add('svg');

        button.addEventListener('click', () => {
            const url = 'payment.html';
            window.location.href = url;
            const params = new URLSearchParams();
            params.append('description', this.description);
            params.append('model', this.model);
            params.append('price', this.price);
            params.append('quantity', this.quantity);
            params.append('photo', this.photo);
            window.location.href = `${url}?${params.toString()}`;
        });

        card.appendChild(button);

        return card;
    }
}

const serverData = server.products;
const mainContainer = document.querySelector('main');

serverData.forEach(productData => {
    const product = new Product(
        productData.model,
        productData.price,
        productData.quantity,
        productData.photo,
        productData.description
    );

    const card = product.createCard();
    mainContainer.appendChild(card);
});