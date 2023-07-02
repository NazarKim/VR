window.addEventListener('scroll', function() {
    let menuIcon = document.querySelector('.menu');
    menuIcon.classList.add('fixedm')
});
let server = {
    "products": [
        {
            "model": "VR X100",
            "price": 1000,
            "quantity": 5,
            "photo": "https://hd2.tudocdn.net/847263?w=1920"
        },
        {
            "model": "VR X200",
            "price": 1250,
            "quantity": 3,
            "photo": "https://media.cnn.com/api/v1/images/stellar/prod/oculus-quest-2-comparison-card.jpg?c=16x9&q=h_720,w_1280,c_fill"
        },
        {
            "model": "VR P100",
            "price": 1200,
            "quantity": 8,
            "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Oculus-Rift-CV1-Headset-Front_with_transparent_background.png/1200px-Oculus-Rift-CV1-Headset-Front_with_transparent_background.png"
        }
    ]
}

