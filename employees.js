import './main.css'
import './employees/employees-list.css'
import {addTeamMember} from './utilities'

// selecting the "Add new"-button and the modal (container coz everything is stored inside there)
const addButton = document.querySelector('.button-new');
const modal = document.querySelector('.modal-container');

// adding the eventlistener to the addButton on 'click'
addButton.addEventListener('click', () => {
    modal.style.display = 'flex';
})

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
SUBMITTING FORM
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// STEP 1 -  Selecting the form via ID
const form = document.getElementById('addEmployeeForm');

// STEP 2 - INITIALIZE ARRAY!!! empty array as value in the beginning of operation - use if statement, so that the array is only stringified empty when nothing's in the array
// wenn wir das ohne condition machen, wird beim refreshen immer ein leerer string gespeichert!
if (!localStorage.getItem('teamMember')) {
    localStorage.setItem('teamMember', JSON.stringify([])); // array hier anlegen sinnvoll, damit klar ist, dass wir in nem array arbeiten
}

// 1st function - addTeamMember (in utilities)

// 2nd function - submitting the inputs of the form
function formSubmit(event) {
    event.preventDefault();

    // CAPTURE DATA FROM FORM
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const department = document.getElementById('department').value;
    const hoursWeek = document.getElementById('hours-week').value;
    const hourSalary = document.getElementById('hourSalary').value;

    // CREATE NEW MEMBER OBJECT
    const newTeamMember = {
        firstName,
        lastName,
        department,
        hoursWeek,
        hourSalary
    }

    console.log(newTeamMember);
    addTeamMember(newTeamMember);
    renderTeamMembers();

    modal.style.display = 'none';
}

// addEventListener submit
form.addEventListener('submit', formSubmit);

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
RENDERING TO DOM
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// über unseren array loopen und html hinzufügen
function renderTeamMembers(){
    // array aus local storage holen
    const teamMembers = JSON.parse(localStorage.getItem('teamMember'));

    const teamListContainer = document.querySelector('.table-content');
   
    // container leer machen, header beibehalten
    teamListContainer.innerHTML = `
        <div class="table-row table-head semibold-s">
            <span style="grid-column-start: 2">Employee Name</span>
            <span>Department</span>
            <span>Hours/Week</span>
            <span>Hour Salary in €</span>
        </div>
        <span></span>
    `
    // array loop to render new team members
    teamMembers.forEach((teamMember, index) => {

        const newTeamMemberDiv = document.createElement('div');
        newTeamMemberDiv.classList.add("table-row", "employees-info", `row${index + 1}`)
        
        newTeamMemberDiv.innerHTML = `
        <span></span>
        <span>${teamMember.firstName} ${teamMember.lastName}</span>
        <span>${teamMember.department}</span>
        <span>${teamMember.hoursWeek}</span>
        <span>${teamMember.hourSalary}</span>
        `;
        
        teamListContainer.appendChild(newTeamMemberDiv);

        const deleteTeamMemberButton = document.createElement('button');
        deleteTeamMemberButton.classList.add("remove-employee", "flex", "justify-center", "items-center")

        deleteTeamMemberButton.innerHTML = `
        <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <g clip-path="url(#clip0_20_937)">
                  <path
                    d="M14 8C14 5.79 12.21 4 10 4C7.79 4 6 5.79 6 8C6 10.21 7.79 12 10 12C12.21 12 14 10.21 14 8ZM12 8C12 9.1 11.1 10 10 10C8.9 10 8 9.1 8 8C8 6.9 8.9 6 10 6C11.1 6 12 6.9 12 8Z"
                    fill="currentColor"
                  />
                  <path
                    d="M2 18V20H18V18C18 15.34 12.67 14 10 14C7.33 14 2 15.34 2 18ZM4 18C4.2 17.29 7.3 16 10 16C12.69 16 15.77 17.28 16 18H4Z"
                    fill="currentColor"
                  />
                  <path d="M23 10H17V12H23V10Z" fill="currentColor" />
                </g>
                <defs>
                  <clipPath id="clip0_20_937">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
        `
        teamListContainer.appendChild(deleteTeamMemberButton);

        // delete members from dom and local storage
        //deleteTeamMemberButton.addEventListener('click' () =>)
    });

}

renderTeamMembers();

