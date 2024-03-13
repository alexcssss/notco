let cartClass = "cart-open";
function openDrawer() {
    document.querySelector("body")?.classList.add("hide-overflow");
    document.querySelector(".cart-modal")?.classList.add(cartClass);
    document.querySelector(".drawer")?.classList.add(cartClass);
}

function closeDrawer() {
    document.querySelector("body")?.classList.remove("hide-overflow");
    document.querySelector(".cart-modal")?.classList.remove(cartClass);
    document.querySelector(".drawer")?.classList.remove(cartClass);
}

function handleWhyNotBtn() {
    if(!anime) return;

    anime({
        targets: '.interested-menu',
        translateY: "-100vh",
        duration: 800,
        easing: 'linear',
        begin: function(anim) {
            document.querySelector(".interested-menu")?.classList.remove("hide-section");
        },
        complete: function(anim) {
            document.querySelector(".landing-page")?.classList.add("hide-section");
            document.querySelector(".interested-menu").style["transform"] = "none";
        }
    });

    
}

function handleMenuOption() {
    if(!anime) return;

    anime({
        targets: '.notco-recipe',
        translateY: "-100vh",
        duration: 800,
        easing: 'linear',
        begin: function(anim) {
            document.querySelector(".notco-recipe")?.classList.remove("hide-section");
        },
        complete: function(anim) {
            document.querySelector(".interested-menu")?.classList.add("hide-section");
            document.querySelector(".notco-recipe").style["transform"] = "none";

            document.querySelector("body")?.classList.remove("hide-overflow");
        }
    });
}

