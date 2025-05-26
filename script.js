gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

let sections = document.querySelectorAll("section");
const homepage = document.querySelector(".parallax");
let box1 = document.getElementById("box1");
let shopNow = document.querySelector(".shopNowBtn");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box5 = document.getElementById("box5Mob");
let nav = document.getElementById("box5");
let decor1 = document.getElementById("decor1");
let decor2 = document.getElementById("decor2");
let frame = document.getElementById("frame");
let artsbyfnb = document.getElementById("artsbyfnb");
let bannerLogo = document.getElementById("bannerLogo");
let moonParent = document.querySelector(".logo-container");
let moon = document.querySelector(".LogoInSec");
let page1 = document.getElementById("page1");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let slide = document.getElementById("slide");
let title = document.getElementById("title");
const special = document.querySelector(".special");
let description = document.getElementById("description");
const cursor = document.querySelector('.cursor');

document.addEventListener('DOMContentLoaded', () => {
    if (window.location.hash) {
        history.pushState('', document.title, window.location.pathname);
        window.scrollTo(0, 0);
    }
    gsap.from(".item2 h2", {
        y: 0,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
    });
    gsap.from(".item5", {
        x: 0,
        opacity: 0.3,
        scale: 0.7,
        duration: 1.2,
        ease: "none",
        delay: 0.2
    });

    initializeProducts();
    initReviewsAnimation();
    initFAQs();
    initFAQsAnimation();
    document.fonts.ready.then(() => {
        let split = SplitText.create(".item2 h2", { type: "words, chars" });
        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: split.chars,
                start: "top 90%",
                end: "top 30%",
                scrub: false,
                markers: false
            },
            scaleX: 0,
            x: -10,
            TransformOrigin: "top",
            stagger: 0.1
        });
    });

    const navToggle = document.querySelector('.nav-toggle');
    const navBar = document.querySelector('.item5');

    navToggle.addEventListener('click', () => {
        navBar.classList.toggle('active');
    });
    navBar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navBar.classList.remove('active');
        });
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        history.pushState('', document.title, window.location.pathname);
    }
}

window.addEventListener("mousemove", (e) => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
});

function gotoHomePage() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

let lastScroll = 0;
window.addEventListener("scroll", () => {
    let maxScroll = window.innerHeight * 2;
    let value = Math.min(window.scrollY, maxScroll);
    if (!homepage || !nav) return;
    if (window.scrollY > 500) {
        nav.classList.add("change-nav");
    }
    else {
        nav.classList.remove("change-nav");
    }
    const currentScroll = window.pageYOffset;
    if (currentScroll < 100) {
        nav.classList.add("nav-visible");
    }
    else if (currentScroll < lastScroll) {
        nav.classList.add("nav-visible");
    }
    else {
        nav.classList.remove("nav-visible");
    }
    lastScroll = currentScroll;
});


document.fonts.ready.then(() => {
    let split = SplitText.create(".split", { type: "words, chars" });
    gsap.from(split.chars, {
        scrollTrigger: {
            trigger: split.chars,
            start: "top 90%",
            end: "top 30%",
            scrub: true,
            markers: false
        },
        scaleX: 0,
        x: -10,
        TransformOrigin: "left",
        stagger: 0.5
    });
});



window.addEventListener('load', function () {
    nav.classList.add("nav-visible");
    gotoHomePage();
});


// const productImages = [
//     './images/Mini Album.jpg',
//     './images/Large Album.jpg',
//     './images/Handwritten Letter.jpg',
//     './images/Phone Case.jpg',
//     './images/Small Frame.jpg',
//     './images/Message Jars.jpg',
//     './images/Polaroid Hamper.jpg',
//     './images/BookMark.jpg'
// ];

// function cycleImages(box, imageElement, startIndex) {
//     let currentIndex = startIndex;
//     setInterval(() => {
//         imageElement.classList.add("hidden");
//         setTimeout(() => {
//             currentIndex = (currentIndex + 1) % productImages.length;
//             imageElement.src = productImages[currentIndex];
//             imageElement.alt = `Product ${currentIndex + 1}`;
//             imageElement.classList.remove("hidden");
//         }, 200);
//     }, 3000);
// }

// document.querySelectorAll(".box").forEach((box, index) => {
//     const image = box.querySelector(".product-image");
//     image.src = productImages[index % productImages.length];
//     image.alt = `Product ${index % productImages.length + 1}`;
//     cycleImages(box, image, index % productImages.length);
// });

// document.querySelector('.craft-gallery').addEventListener('mouseleave', () => {
//     document.querySelectorAll('.product-image').forEach(img => {
//         img.style.transition = 'opacity 1s ease-in-out';
//     });
// });

const products = [
    {
        name: 'Mini Album',
        images: ['images/Mini album.jpg',
            'images/AestFlora.png',
            'images/Mini album.jpg',
        ],
        description: 'A compact and charming photo album perfect for preserving your cherished memories. Handcrafted with love, this mini album features decorative elements and space for your favorite snapshots.',
        price: '500₹'
    },
    {
        name: 'Large Album',
        images: ['images/Large album.jpg', 
            'images/Large album.jpg', 
            'images/Large album.jpg'],
        description: 'Our signature photo album with ample space for all your precious moments. Beautifully designed with premium materials and intricate details, this album becomes a treasured keepsake for generations.',
        price: '1000₹'
    },
    {
        name: 'Handwritten Letter',
        images: ['images/Handwritten letter.jpg','images/Handwritten letter.jpg','images/Handwritten letter.jpg'],
        description: 'Express your feelings with our beautifully crafted handwritten letters. Each letter is personally penned with elegant calligraphy and decorated with artistic touches to make your message truly special.',
        price: '200₹'
    },
    {
        name: 'Phone Case',
        images: ['images/Phone case.jpg','images/Phone case.jpg','images/Phone case.jpg'],
        description: 'Protect your phone in style with our customized phone cases. Each case features unique handcrafted designs and durable protection while adding a personal touch to your device.',
        price: '800₹'
    },
    {
        name: 'Small Frame',
        images: ['images/Small frame.jpg','images/Small frame.jpg','images/Small frame.jpg'],
        description: 'Elegant handcrafted frames perfect for displaying your favorite moments. Each frame is carefully decorated with intricate details to complement your cherished photos or artwork.',
        price: '300₹'
    },
    {
        name: 'Message Jars',
        images: ['images/Message jars.jpg','images/Message jars.jpg','images/Message jars.jpg'],
        description: 'A collection of heartfelt messages in a beautifully decorated jar. Each jar contains handwritten notes of love, inspiration, or gratitude, making it a perfect gift for someone special.',
        price: '400₹'
    },
    {
        name: 'Polaroid Hamper',
        images: ['images/Polaroid Hamper.jpg','images/Polaroid Hamper.jpg','images/Polaroid Hamper.jpg'],
        description: 'A luxurious gift hamper featuring instant photos and handcrafted decorative elements. This premium collection includes customized polaroids arranged in an aesthetically pleasing presentation.',
        price: '1500₹'
    },
    {
        name: 'BookMark',
        images: ['images/BookMark.jpg','images/BookMark.jpg','images/BookMark.jpg'],
        description: 'Handcrafted bookmarks that add a touch of elegance to your reading experience. Each bookmark is uniquely designed with artistic elements and durable materials for long-lasting use.',
        price: '100₹'
    }
]

function initializeProducts() {
    const slider = document.querySelector(".product-slider");
    const mainProduct = document.querySelector(".main-product-card");

    if (!slider || !mainProduct) {
        console.error("Requirements elements not found");
        return;
    }

    slider.innerHTML = '';
    mainProduct.innerHTML = `
        <div class="product-image-slider">
        
        <img id="mainProductImage" src="" alt="Product Image">
        <div class="slider-controls">
        <button class="main-img-prev">&lt;</button>
        <button class="main-img-next">&gt;</button>
        </div>
        </div>
        <div class="product-info">
            <h2 id="mainProductName"></h2>
            <p id="mainProductDesc"></p>
            <h3 id="mainProductPrice"></h3>
            <button class="orderBtn" id="mainOrderBtn">Order Now!</button>
        </div>
    `;

    products.forEach((product, index) => {
        const thumb = document.createElement("div");
        thumb.className = 'product-thumb';
        thumb.innerHTML = `
            <h3>${product.name}</h3>
            <img src="${product.images[0]}" alt="${product.name}">
        `;
        thumb.addEventListener("click", () => {
            updateMainProduct(product);
            updateActiveThumb(thumb);
        });

        slider.appendChild(thumb);
        if (index === 0) thumb.click();
    });
    initializeSliderControls();
}

function updateMainProduct(product) {
    let currentImgIndex = 0;
    const mainImage = document.getElementById("mainProductImage");
    const mainName = document.getElementById("mainProductName");
    const mainDesc = document.getElementById("mainProductDesc");
    const mainPrice = document.getElementById("mainProductPrice");
    const orderBtn = document.getElementById("mainOrderBtn");
    const prevBtn = document.querySelector('.main-img-prev');
    const nextBtn = document.querySelector('.main-img-next');

    function showImage(idx){
        mainImage.src = product.images[idx];
    }
    showImage(currentImgIndex);

    if (mainImage) mainImage.src = product.images[currentImgIndex];
    if (mainName) mainName.textContent = product.name;
    if (mainDesc) mainDesc.textContent = product.description;
    if (mainPrice) mainPrice.textContent = product.price;
    if (orderBtn) orderBtn.setAttribute("data-product", product.name);

    if(prevBtn && nextBtn){
        prevBtn.onclick = () => {
            currentImgIndex = (currentImgIndex - 1 + product.images.length) % product.images.length;
            showImage(currentImgIndex);
        };
        nextBtn.onclick = () => {
            currentImgIndex = (currentImgIndex + 1) % product.images.length;
            showImage(currentImgIndex);
        };
    }
    orderBtn.addEventListener("click", function () {
        let productName = this.getAttribute("data-product");
        sendMessage(productName);
    });
}


function updateActiveThumb(selectedThumb) {
    document.querySelectorAll('.product-thumb').forEach(thumb => {
        thumb.classList.remove('active');
    });
    selectedThumb.classList.add('active');
}

function initializeSliderControls() {
    const slider = document.querySelector('.product-slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            slider.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        });
    }
}

function sendMessage(productName) {
    let username = "arts.by.fnb";
    let message = `Hey! I want to buy ${productName}`;
    let encodedMessage = encodeURIComponent(message);
    let instaLink = `https://www.instagram.com/direct/t/17847653325279516/?text=${encodedMessage}`;
    window.open(instaLink, "_blank");
}

function initReviewsAnimation() {
    const container = document.querySelector('.reviews-container');
    const cards = gsap.utils.toArray('.review-card');
    const cardWidth = cards[0].offsetWidth;
    const totalScroll = cardWidth * (cards.length - 1);

    gsap.to(container, {
        x: () => `-${totalScroll}px`,
        ease: "none",
        scrollTrigger: {
            trigger: ".reviews",
            start: "top top",
            end: () => `+=${totalScroll} + 100px`,
            pin: true,
            pinSpacing: true,
            scrub: 2,
            anticipatePin: 1,
        }
    });
}


function initFAQs() {
    const faqButtons = document.querySelectorAll('.faq-question');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            faqButtons.forEach(otherBtn => {
                if (otherBtn !== button) {
                    otherBtn.setAttribute('aria-expanded', 'false');
                }
            });
            button.setAttribute('aria-expanded', !isExpanded);
        })
    });
}

function initFAQsAnimation() {
    gsap.from(".faqs-heading", {
        scrollTrigger: {
            trigger: ".faqs",
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none reverse",
            scrub: true
        },
        y: 50,
        opacity: 0,
        duration: 1
    });

    gsap.from(".faq-item", {
        scrollTrigger: {
            trigger: ".faqs-list",
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none reverse"
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8
    });
}

function sendEmail() {
    let params = {
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_xkbju75", "template_zi15bnn", params).then(
        alert("Your message has been sent successfully!"),
        document.getElementById("email").value = "",
        document.getElementById("message").value = ""
    );
}

