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


        convertedred /= 255;
        convertedgreen /= 255;
        convertedblue /= 255;
        console.log(convertedred)
        console.log(convertedgreen)
        console.log(convertedblue)


        let h, s, l;

        const min = Math.min(convertedred, convertedgreen, convertedblue);
        console.log(min)

        const max = Math.max(convertedred, convertedgreen, convertedblue);
        console.log(max)

        if (max === min) {
            h = 0;
            // console.log(h)
        } else
        if (max === convertedred) {
            h = 60 * (0 + (convertedgreen - convertedblue) / (max - min));
            // console.log(h)

        } else
        if (max === convertedgreen) {
            h = 60 * (2 + (convertedblue - convertedred) / (max - min));
            // console.log(h)

        } else
        if (max === convertedblue) {
            h = 60 * (4 + (convertedred - convertedgreen) / (max - min));
            // console.log(h)

        }

        if (h <= 0) {
            h = h + 360;
            // console.log(h)

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
        l *= 100;
        let roundL = Math.round(l);


        // console.log("hsl(%f,%f%,%f%)", h, roundS, roundL); // just for testing
        document.getElementById("HSL").innerHTML = "HSL: " + h + "," + roundS + "," + roundL;


    }

    hexToRGB(theInput.value);
})