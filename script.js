```javascript
/* ================================= */
/* Custom Guitar Builder JavaScript */
/* ================================= */


/* ================================= */
/* 1. Select Page Elements */
/* ================================= */

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


/* ================================= */
/* Variables and Constants */
/* ================================= */

const basePrice = 500;

let buildCount = 0;

let guitarIsBuilt = false;


/* ================================= */
/* 6. Read an Attribute */
/* ================================= */

/*
    The image has a data-guitar attribute
    in the HTML.

    JavaScript reads that attribute and
    stores the value in a variable.
*/

const guitarType = guitarImage.dataset.guitar;

console.log("Guitar type:", guitarType);


/* ================================= */
/* 2 + 4. Build Guitar Function */
/* ================================= */

function buildGuitar() {

    /* Get the user's guitar name */

    const name = guitarName.value.trim();


    /* If the user leaves the name blank,
       give the guitar a default name. */

    let finalName;

    if (name === "") {
        finalName = "My Custom Guitar";
    } else {
        finalName = name;
    }


    /* Get selected guitar parts */

    const body = bodyType.value;
    const pickups = pickupType.value;
    const neck = neckType.value;
    const hardware = hardwareType.value;
    const finish = finishType.value;


    /* ================================= */
    /* Calculate Price */
    /* ================================= */

    const bodyPrice =
        Number(bodyType.options[bodyType.selectedIndex].dataset.price);

    const pickupPrice =
        Number(pickupType.options[pickupType.selectedIndex].dataset.price);

    const neckPrice =
        Number(neckType.options[neckType.selectedIndex].dataset.price);

    const hardwarePrice =
        Number(hardwareType.options[hardwareType.selectedIndex].dataset.price);

    const finishPrice =
        Number(finishType.options[finishType.selectedIndex].dataset.price);


    const totalPrice =
        basePrice +
        bodyPrice +
        pickupPrice +
        neckPrice +
        hardwarePrice +
        finishPrice;


    /* ================================= */
    /* Update Visible Page Text */
    /* ================================= */

    guitarDescription.textContent =
        `${finalName} has been built!`;

    guitarPrice.textContent =
        `Estimated Price: $${totalPrice}`;

    buildMessage.textContent =
        `${body}, ${pickups}, ${neck}, ${hardware}, and ${finish}.`;


    /* ================================= */
    /* 3. Create Visual State */
    /* ================================= */

    buildResult.classList.add("built");

    guitarImage.classList.add("guitar-selected");


    /* ================================= */
    /* 5. Create Elements Dynamically */
    /* ================================= */

    /* Remove the old list */

    partsList.innerHTML = "";


    /* Create an array containing the selected parts */

    const selectedParts = [
        `Body: ${body}`,
        `Pickups: ${pickups}`,
        `Neck: ${neck}`,
        `Hardware: ${hardware}`,
        `Finish: ${finish}`
    ];


    /* Create a new <li> for every part */

    selectedParts.forEach(function(part) {

        const item = document.createElement("li");

        item.textContent = part;

        partsList.append(item);

    });


    /* ================================= */
    /* 6. Update an Attribute */
    /* ================================= */

    guitarImage.alt =
        `${finalName} custom electric guitar with ${pickups.toLowerCase()}`;

    guitarImage.dataset.guitar = finalName;


    /* ================================= */
    /* Update Build Count */
    /* ================================= */

    buildCount++;

    guitarIsBuilt = true;


    console.log("Build number:", buildCount);
    console.log("Guitar built:", guitarIsBuilt);
}


/* ================================= */
/* 4. Click Event Listener */
/* ================================= */

buildButton.addEventListener("click", buildGuitar);


/* ================================= */
/* 4. Second Event Listener */
/* ================================= */

/*
    The input event runs whenever the user
    types into the Guitar Name box.
*/

guitarName.addEventListener("input", function() {

    const currentName = guitarName.value.trim();


    if (currentName !== "") {

        buildMessage.textContent =
            `Your guitar will be named "${currentName}".`;

    } else {

        buildMessage.textContent =
            "Enter a name for your custom guitar.";

    }

});


/* ================================= */
/* Optional Change Event */
/* ================================= */

/*
    This gives the page another interactive
    event. When the user changes the finish,
    the guitar image gets a visual state.
*/

finishType.addEventListener("change", function() {

    guitarImage.classList.toggle("guitar-selected");

});
```
