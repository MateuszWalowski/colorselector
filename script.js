var theInput = document.querySelector("body > input[type=color]");
theInput.addEventListener("input", readvalue);


function readvalue() {
    let hexvalue = theInput.value
    console.log(theInput.value);
    showcolor(hexvalue);
    showhexvalue(hexvalue);
    hexToRGB(hexvalue);
    return (hexvalue)
}

function showcolor(hexvalue) {
    document.querySelector("body > div").style.backgroundColor = hexvalue;
}

function showhexvalue(hexvalue) {
    document.getElementById("hex").innerHTML = "Hex: " + hexvalue;
}

function hexToRGB(hexvalue) {
    let r = hexvalue.substring(1, 3)
    let convertedred = parseInt(r, 16)
    let g = hexvalue.substring(3, 5)
    let convertedgreen = parseInt(g, 16)
    let b = hexvalue.substring(5)
    let convertedblue = parseInt(b, 16)
    showRGB(convertedred, convertedgreen, convertedblue)
    RGBtoHSL(convertedred, convertedgreen, convertedblue)
    return {
        convertedred,
        convertedgreen,
        convertedblue
    }
}

function showRGB(convertedred, convertedgreen, convertedblue) {
    let newcolorhexToRGB = "r: " + convertedred + ", g: " + convertedgreen + ", b: " + convertedblue
    document.getElementById("rgb").innerHTML = "RGB: " + newcolorhexToRGB;
}

function RGBtoHSL(convertedred, convertedgreen, convertedblue) {
    convertedred /= 255;
    convertedgreen /= 255;
    convertedblue /= 255;
    let h, s, l;
    const min = Math.min(convertedred, convertedgreen, convertedblue);
    const max = Math.max(convertedred, convertedgreen, convertedblue);
    if (max === min) {
        h = 0;
    } else
    if (max === convertedred) {
        h = 60 * (0 + (convertedgreen - convertedblue) / (max - min));
    } else
    if (max === convertedgreen) {
        h = 60 * (2 + (convertedblue - convertedred) / (max - min));
    } else
    if (max === convertedblue) {
        h = 60 * (4 + (convertedred - convertedgreen) / (max - min));
    }
    if (h <= 0) {
        h = h + 360;
    }
    l = (min + max) / 2;
    if (max === 0 || min === 1) {
        s = 0;
    } else {
        s = (max - l) / (Math.min(l, 1 - l));
    }
    h = Math.round(h);
    s *= 100;
    s = Math.round(s);
    l *= 100;
    l = Math.round(l);

    showHSL(h, s, l)
    return {
        h,
        s,
        l
    }
}

function showHSL(h, s, l) {

    document.getElementById("HSL").innerHTML = "HSL: " + h + "," + s + "," + l;

}