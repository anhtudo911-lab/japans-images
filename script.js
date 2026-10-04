/* =====================================================
   INTERACTIVE PHOTO GALLERY
   ===================================================== */


/*
    FUNCTION 1
    Runs when the mouse moves over an image
    OR when a gallery item receives keyboard focus.
*/

function upDate(element) {

    console.log("upDate() triggered.");

    /*
        Find the image inside the figure.
    */

    const image = element.querySelector("img");

    console.log("Alt text:", image.alt);
    console.log("Image source:", image.src);


    /*
        Change the large preview text.
    */

    document.getElementById("image").innerHTML = `
        <div class="preview-content">

            <span class="preview-symbol" aria-hidden="true">
                ✦
            </span>

            <p class="preview-label">
                Selected photograph
            </p>

            <h3>
                ${image.alt}
            </h3>

            <p>
                Move your mouse away or press Tab to continue.
            </p>

        </div>
    `;


    /*
        Change the background image
        of the large preview.
    */

    document.getElementById("image").style.backgroundImage =
        "url('" + image.src + "')";
}


/*
    FUNCTION 2
    Runs when the mouse leaves an image
    OR when keyboard focus leaves a gallery item.
*/

function undo(element) {

    console.log("undo() triggered.");


    /*
        Return the background image
        to its original empty state.
    */

    document.getElementById("image").style.backgroundImage = "url('')";


    /*
        Return the preview text
        to its original state.
    */

    document.getElementById("image").innerHTML = `
        <div class="preview-content">

            <span class="preview-symbol" aria-hidden="true">
                ✦
            </span>

            <p class="preview-label">
                Interactive Gallery
            </p>

            <h3>
                Hover or focus on a photograph
            </h3>

            <p>
                Choose an image below to bring it into focus.
            </p>

        </div>
    `;
}


/*
    FUNCTION 3
    Automatically adds tabindex="0"
    to every figure in the gallery.
*/

function addTabFocus() {

    console.log("addTabFocus() triggered.");

    /*
        Select all gallery figures.
    */

    const figures = document.querySelectorAll(".gallery-card");

    console.log("Number of gallery items:", figures.length);


    /*
        Loop through every figure.
    */

    for (let i = 0; i < figures.length; i++) {

        figures[i].setAttribute("tabindex", "0");

        console.log(
            "Added tabindex to gallery item:",
            i + 1
        );
    }
}


/*
    FUNCTION 4
    Adds keyboard support.

    Enter or Space can activate
    the currently focused gallery item.
*/

function addKeyboardSupport() {

    console.log("addKeyboardSupport() triggered.");

    const figures = document.querySelectorAll(".gallery-card");


    for (let i = 0; i < figures.length; i++) {

        figures[i].addEventListener("keydown", function(event) {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                upDate(this);

            }

        });

    }
}


/*
    FUNCTION 5
    Theme button.
*/

function setupThemeButton() {

    console.log("Theme button ready.");

    const button = document.getElementById("themeButton");

    button.addEventListener("click", function() {

        document.body.classList.toggle("light-theme");

        console.log("Theme changed.");

    });
}


/*
    ONLOAD EVENT
    Runs automatically after the page loads.
*/

window.onload = function() {

    console.log("Page loaded successfully.");

    addTabFocus();

    addKeyboardSupport();

    setupThemeButton();

};