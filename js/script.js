function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}  
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

// слайдер

// const left = document.querySelector("#left");
// const right = document.querySelector("#right");
// const items = document.querySelector("#items");
// const computed = getComputedStyle(items);

// right.addEventListener("click", function(e) {
//     e.preventDefault ();

//     let currentRight = parseInt(computed.right);

//     if (!currentRight); {
//         currentRight == 0;
//     }

//     if (currentRight < 1780) {
//         items.style.right = currentRight + 380 + "px";
//     }
    
// });

// left.addEventListener("click", function(e) {
//     e.preventDefault ();

//     let currentRight = parseInt(computed.right);

//     if (!currentRight); {
//         currentRight == 0;
//     }

//     if (currentRight > 0) {
//         items.style.right = currentRight - 380 + "px";
//     }

// });