
const cartButtons = document.getElementsByClassName("cart-btn");
const wishlistButtons = document.getElementsByClassName("wishlist-btn");


for (let i=0; i<cartButtons.length; i++){
    cartButtons[i].addEventListener("click", () => {
        if (cartButtons[i].textContent === "Add to Cart"){
            cartButtons[i].textContent = "Remove from Cart";
        } else {
            cartButtons[i].textContent = "Add to Cart";
        }
    })
};

for (let i=0; i<wishlistButtons.length; i++){
    wishlistButtons[i].addEventListener("click", () => {
        if (wishlistButtons[i].textContent === "Add to Wishlist"){
            wishlistButtons[i].textContent = "Remove from Wishlist";
        } else {
            wishlistButtons[i].textContent = "Add to Wishlist";
        }
    })
};
// console.log(cartButtons);
// console.log(cartButtons[1])