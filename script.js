```javascript
/* ================================= */
/* Custom Guitar Builder JavaScript */
/* ================================= */


/* Select HTML elements */

const guitarName = document.querySelector("#guitarName");
const bodyType = document.querySelector("#bodyType");
const pickupType = document.querySelector("#pickupType");
const neckType = document.querySelector("#neckType");
const hardwareType = document.querySelector("#hardwareType");
const finishType = document.querySelector("#finishType");

const buildButton = document.querySelector("#buildButton");

const guitarImage = document.querySelector("#guitarImage");

const buildResult = document.querySelector("#buildResult");
const guitarDescription = document.querySelector("#guitarDescription");
const guitarPrice = document.querySelector("#guitarPrice");
const buildMessage = document.querySelector("#buildMessage");

const partsList = document.querySelector("#partsList");


/* Check that JavaScript is running */

console.log("Custom Guitar Builder JavaScript is working!");



/* ================================= */
/* Build Guitar */
/* ================================= */

function buildGuitar() {

    console.log("Build button was clicked!");


    /* Get guitar name */

    let name = guitarName.value.trim();

    if (name === "") {
        name = "My Custom Guitar";
    }


    /* Get selected parts */

    const body = bodyType.value;
    const pickups = pickupType.value;
    const neck = neckType.value;
    const hardware = hardwareType.value;
    const finish = finishType.value;


    /* Get prices from the selected options */

    const bodyPrice = Number(
        bodyType.options[bodyType.selectedIndex].dataset.price
    );

    const pickupPrice = Number(
        pickupType.options[pickupType.selectedIndex].dataset.price
    );

    const neckPrice = Number(
        neckType.options[neckType.selectedIndex].dataset.price
    );

    const hardwarePrice = Number(
        hardwareType.options[hardwareType.selectedIndex].dataset.price
    );

    const finishPrice = Number(
        finishType.options[finishType.selectedIndex].dataset.price
    );


    /* Calculate total */

    const basePrice = 500;

    const totalPrice =
        basePrice +
        bodyPrice +
        pickupPrice +
        neckPrice +
        hardwarePrice +
        finishPrice;


    /* ================================= */
    /* Update Text */
    /* ================================= */

    guitarDescription.textContent =
        `${name} has been built!`;

    guitarPrice.textContent =
        `Estimated Price: $${totalPrice}`;

    buildMessage.textContent =
        `${body} body with ${pickups}, a ${neck}, ${hardware}, and a ${finish}.`;


    /* ================================= */
    /* Add Visual State */
    /* ================================= */

    buildResult.classList.add("built");

    guitarImage.classList.add("guitar-selected");


    /* ================================= */
    /* Create Parts List */
    /* ================================= */

    partsList.innerHTML = "";


    const parts = [
        `Body: ${body}`,
        `Pickups: ${pickups}`,
        `Neck: ${neck}`,
        `Hardware: ${hardware}`,
        `Finish: ${finish}`
    ];


    parts.forEach(function(part) {

        const item = document.createElement("li");

        item.textContent = part;

        partsList.appendChild(item);

    });


    /* ================================= */
    /* Update Image Attribute */
    /* ================================= */

    guitarImage.alt =
        `${name} custom electric guitar`;

    guitarImage.dataset.guitar = name;


    console.log("Guitar successfully built!");
}



/* ================================= */
/* Click Event */
/* ================================= */

buildButton.addEventListener("click", buildGuitar);



/* ================================= */
/* Guitar Name Input Event */
/* ================================= */

guitarName.addEventListener("input", function() {

    if (guitarName.value.trim() === "") {

        buildMessage.textContent =
            "Enter a name for your custom guitar.";

    } else {

        buildMessage.textContent =
            `Your guitar will be named "${guitarName.value}".`;

    }

});



/* ================================= */
/* Finish Change Event */
/* ================================= */

finishType.addEventListener("change", function() {

    guitarImage.classList.toggle("guitar-selected");

});
```
