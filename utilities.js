/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
STORING DATA IN LOCAL STORAGE
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

// function to get items of array, convert it from string to array, push a new item into the array, convert the array back to string and save it in the local storage

export function addTeamMember(teamMember) {
    // localStorage.setItem('teamMember', JSON.stringify(teamMember));
    const teamMemberArrayString = localStorage.getItem('teamMember'); // get item only needs one argument - will show me what's stored under the given key
    const teamMemberArray = JSON.parse(teamMemberArrayString); // string converted to array
    // teamMemberArray = JSON.parse(localStorage.getItem('teamMember')) - short way to get array and directly parse it
    console.log(teamMemberArrayString);

    teamMemberArray.push(teamMember); // pushed new team member into array

    const newTeamMemberArrayString = JSON.stringify(teamMemberArray);
    console.log(newTeamMemberArrayString);

    localStorage.setItem('teamMember', newTeamMemberArrayString); // every function call adds a new object to the existing array
}