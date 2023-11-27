// import {addProject} from "./utilities";

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
MULTISTEP FORM
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

function showStep(stepToShow) {
  const steps = ["step1", "step2", "step3", "step4"]; // array of all step IDs (divs)

  steps.forEach((step) => {
    document.getElementById(step).style.display = 'none'; // hide all steps
  });

  document.getElementById(`step${stepToShow}`).style.display = 'block'; // show the selected step
}

// addEventListener for navigation buttons

const navButtons = document.querySelectorAll('.navbtn') // selecting all items with the class .navbtn

navButtons.forEach((button, index) => { // button represents the current button element being processed in the NodeList - index is the position of that button in the NodeList (starting at 0)
  button.addEventListener('click', (e) => {
    navButtons.forEach(button => {
      // first, remove 'selected' class from all buttons
      button.classList.remove("selected");
      button.classList.add("navbtn-default");
    });
    
    // add 'selected' class to clicked button and remove 'default' class
    e.target.classList.add("selected");
    e.target.classList.remove("navbtn-default");
    
    showStep(index + 1);
  }) // for each button an eventListener is added - when a button is clicked, the showFunction is called
  // index + 1 is passed to showStep, which corresponds to the step number associated with the button. This is because array indexes start at 0, but my step numbering starts at 1
})

// longer version
/* document.getElementById('navBtn1').addEventListener('click', () => {
  showStep(1);
})
document.getElementById('navBtn2').addEventListener('click', () => {
  showStep(2);
})
document.getElementById('navBtn3').addEventListener('click', () => {
  showStep(3);
})
document.getElementById('navBtn4').addEventListener('click', () => {
  showStep(4);
})
*/

// next buttons
document.getElementById('nextBtn1').addEventListener('click', () => {
  showStep(2);
})
document.getElementById('nextBtn2').addEventListener('click', () => {
  showStep(3);
})
document.getElementById('nextBtn3').addEventListener('click', () => {
  showStep(4);
})

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
SUBMITTING DATA FROM MULTISTEP FORM
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

const offerForm = document.getElementById('offerForm');

if (!localStorage.getItem('offerForm')) {
  localStorage.setItem('offerForm', JSON.stringify([])); // array hier anlegen sinnvoll, damit klar ist, dass wir in nem array arbeiten
}

// function to save the data from step 1-4 in local storage - addEventListener finish button

function submitOffer(event) {
  event.preventDefault();

  // step 1 - capture data from GENERAL INFORMATION FORM
  const projectName = document.getElementById('projectName').value;
  const offerNumber = document.getElementById('offerNumber').value;
  const clientName = document.getElementById('clientName').value;
  const contactName = document.getElementById('contactName').value;
  const email = document.getElementById('email').value;
  const street = document.getElementById('street').value;
  const city = document.getElementById('city').value;
  const postalCode = document.getElementById('postalCode').value;
  const projectDescription = document.getElementById('projectDescription').value;
  
  const newProject = {
    projectName,
    offerNumber,
    clientName,
    contactName,
    email,
    street,
    city,
    postalCode,
    projectDescription
  }

  // step 2 - select employee
  // step 3 - calculate costs

  addProject(newProject);
}

// eventListener for finish button

//function to render the two first team members from teamMember local storage (in step 2 and 3)