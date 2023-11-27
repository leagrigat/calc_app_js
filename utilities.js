/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
STORING DATA IN LOCAL STORAGE
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// function to get items of array, convert it from string to array, push a new item into the array, convert the array back to string and save it in the local storage

export function addTeamMember(teamMember) {
    // localStorage.setItem('teamMember', JSON.stringify(teamMember));
    const teamMemberArrayString = localStorage.getItem('teamMember'); // get item only needs one argument - will show me what's stored under the given key
    const teamMemberArray = JSON.parse(teamMemberArrayString); // string converted to array
    // teamMemberArray = JSON.parse(localStorage.getItem('teamMember')) - short way to get array and directly parse it
    // console.log(teamMemberArrayString);

    teamMemberArray.push(teamMember); // pushed new team member into array

    const newTeamMemberArrayString = JSON.stringify(teamMemberArray);
    // console.log(newTeamMemberArrayString);

    localStorage.setItem('teamMember', newTeamMemberArrayString); // every function call adds a new object to the existing array
}

// addProject function

export function addProject(project) {
    const projectArray = JSON.parse(localStorage.getItem(project));
    projectArray.push(project);

    localStorage.setItem('project', JSON.stringify(projectArray));
}

/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
DELETE TEAM MEMEBER FROM STORAGE AND DOM
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

export function deleteTeamMember(id) {
    const teamMembers = JSON.parse(localStorage.getItem('teamMember'));
    const lessTeamMembers = teamMembers.filter((teamMember) => {
        return id !== teamMember.id  /* wenn die id NICHT mit der teamMember.id übereinstimmt, bekommen wir true raus -> item bleibt im array
        andernfalls (also id und teamMember.id sind gleich, erhalten wir false (weil wir auf Ungleichheit checken) und das item wird rausgefiltert) */
    })
    localStorage.setItem('teamMember', JSON.stringify(lessTeamMembers));
};


/*
export function addItemToLocalStorageArray(teamMember, localStorageKey) {
    // localStorage.setItem('teamMember', JSON.stringify(teamMember));
    const teamMemberArrayString = localStorage.getItem(localStorageKey); // get item only needs one argument - will show me what's stored under the given key
    const teamMemberArray = JSON.parse(teamMemberArrayString); // string converted to array
    // teamMemberArray = JSON.parse(localStorage.getItem('teamMember')) - short way to get array and directly parse it
    console.log(teamMemberArrayString);

    teamMemberArray.push(teamMember); // pushed new team member into array

    const newTeamMemberArrayString = JSON.stringify(teamMemberArray);
    console.log(newTeamMemberArrayString);

    localStorage.setItem(localStorageKey, newTeamMemberArrayString); // every function call adds a new object to the existing array
}

export function deleteItemFromLocalStorageArrayById(id, localStorageKey) {
    const teamMembers = JSON.parse(localStorage.getItem(localStorageKey));
    const lessTeamMembers = teamMembers.filter((teamMember) => {
        return id !== teamMember.id   
    })
    localStorage.setItem(localStorageKey, JSON.stringify(lessTeamMembers));
};
*/