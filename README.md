# Website_Project
This is a website project that uses Javascript, HTML, and CSS

# Eexplanation
This project is essentially a web-based pet management system. Imagine you own a pet boarding facility, and you need to keep track of each pet's owner, the pet's name, type, services they require, and special instructions, if any.

Here's a brief overview of what each function does:

    showExternalAlert(): This is just a simple function that displays an alert saying "My first external javascript!". It's likely I was testing my JavaScript linkage to my HTML.

    addRow(): When you want to add a new pet and its associated details, this function comes into play. It grabs the data entered by the user from the 'Add' modal, logs it to the console, and then appends this data as a new row in the main table. After adding, it hides the modal and clears the fields.

    editRow(ctl): When you click on the 'Edit' button on a particular row in the table, this function activates the 'Edit' modal and populates it with the data from the row you wish to edit.

    editedRow(id): This function creates a new row with the edited details.

    saveChanges(): After editing the details in the 'Edit' modal, when you decide to save those changes, this function will replace the old row with the updated row you just edited.

    rowDelete(td): If you no longer want a record in the table, clicking the 'Delete' button will invoke this function. It prompts you to confirm the deletion. If you agree, it will remove the row from the table.

    clearAll(): After adding a new pet's details, or if you change your mind while doing so, this function will clear all the input fields in the 'Add' modal.
