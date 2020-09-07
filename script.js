var theInput = document.querySelector("body > input[type=color]");
theInput.addEventListener("input", function () {

    document.getElementById("hex").innerHTML = "Hex: " + theInput.value;
    document.querySelector("body > div").style.backgroundColor = theInput.value;

    function hexToRGB(color) {

        let r = color.substring(1, 3)
        let convertedred = parseInt(r, 16)
        let g = color.substring(3, 5)
        let convertedgreen = parseInt(g, 16)
        let b = color.substring(5)
        let convertedblue = parseInt(b, 16)
        let newcolorhexToRGB = "r: " + convertedred + ", g: " + convertedgreen + ", b: " + convertedblue
        document.getElementById("rgb").innerHTML = "RGB: " + newcolorhexToRGB;


        r /= 255;
        g /= 255;
        b /= 255;

        let h, s, l;

        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);

        if (max === min) {
            h = 0;
        } else
        if (max === r) {
            h = 60 * (0 + (g - b) / (max - min));
        } else
        if (max === g) {
            h = 60 * (2 + (b - r) / (max - min));
        } else
        if (max === b) {
            h = 60 * (4 + (r - g) / (max - min));
        }

        if (h < 0) {
            h = h + 360;
        }

        l = (min + max) / 2;

        if (max === 0 || min === 1) {
            s = 0;
        } else {
            s = (max - l) / (Math.min(l, 1 - l));
        }
        // multiply s and l by 100 to get the value in percent, rather than [0,1]
        s *= 100;
        let roundS = Math.round(s);
        console.log(roundS)
        l *= 100;
        let roundL = Math.round(l);
        console.log(roundL)


        console.log("hsl(%f,%f%,%f%)", h, roundS, roundL); // just for testing
        document.getElementById("HSL").innerHTML = "HSL: " + h + "," + roundS + "," + roundL;


    }

    hexToRGB(theInput.value);
})