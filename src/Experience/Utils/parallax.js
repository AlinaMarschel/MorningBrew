// source code for parallax effect by https://codepen.io/oscicen/pen/zyJeJw

(function() {
    // Add event listener
    document.addEventListener("mousemove", parallax);
    const elem = document.querySelector("#product-section");
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let _depth1 = `${30 - (_mouseX - _w) * 0.04}% ${30 - (_mouseY - _h) * 0.04}%`;
        let x = `${_depth1}`;
        elem.style.backgroundPosition = x;
    }

})();