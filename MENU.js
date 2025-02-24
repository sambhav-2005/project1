const product = [
    {
        id: 0,
        image: "/menu/1.png",
        title: 'Toffee Nut Crunch Latte',
        price: 5,
    },
    {
        id: 1,
        image: "/menu/2.jpg",
        title: 'Iced Toffee Nut Crunch Latte',
        price: 6,
    },
    {
        id: 2,
        image: "/menu/3.png",
        title: 'Classic Iced Coffee',
        price: 3,
    },
    {
        id: 3,
        image: "/menu/4.jpg",
        title: 'Caffè Americano',
        price: 3,
    },
    {
        id: 4,
        image: '/menu/5.jpg',
        title: 'Cappuccino',
        price: 3,
    },
    {
        id: 5,
        image: '/menu/6.jpg',
        title: 'Chocolate Cappuccino',
        price: 4,
    },
    {
        id: 6,
        image: '/menu/7.jpg',
        title: 'Doppio Espresso',
        price: 7,
    },
    {
        id: 7,
        image: '/menu/8.jpg',
        title: 'Iced Caffè Latte',
        price: 8,
    },
    {
        id: 8,
        image: '/menu/9.jpg',
        title: 'Bake In Mushroom Cheese Melt Baguette SW',
        price: 10,
    },
    {
        id: 9,
        image: '/menu/10.jpg',
        title: 'Bake In Pesto Veggie Sourdough SW',
        price: 9,
    },
    {
        id: 10,
        image: '/menu/11.png',
        title: 'Spinach & Corn Sandwich',
        price: 9,
    },
    {
        id: 11,
        image: 'menu/12.png',
        title: 'Paneer Tikka Sandwich',
        price: 8,
    }
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')


var cart = [];


function addtocart(a) {
    cart.push({...categories[a] });
    displaycart();
}
function delElement(a) {
    cart.splice(a, 1);
    displaycart();
}


function displaycart() {
    let j = 0, total = 0;
    document.getElementById("count").innerHTML = cart.length;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    }
    else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
            // var {image, title, price} = items;
            total = total + items.price;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${items.image}>
                </div>
                <p style='font-size:12px;'>${items.title}</p>
                <h2 style='font-size: 15px;'>$ ${items.price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement(" + (j++) + ")'></i></div>"
            );
        }).join('');
    }



}
