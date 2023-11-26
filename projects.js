function showStep(stepToShow) {
  const steps = ["step1", "step2", "step3", "step4"]; // array of all step IDs (divs)

  steps.forEach((step) => {
    document.getElementById(step).style.display = 'none'; // hide all steps
  });

  document.getElementById(`step${stepToShow}`).style.display = 'block'; // show the selected step
}

// addEventListener

// navigation buttons
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

const navButtons = document.querySelectorAll('.navbtn')

navButtons.forEach((button, index) => {
  button.addEventListener('click', () => showStep(index + 1))
})

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