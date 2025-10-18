Debugging Analysis — Assignment 4

Name: Lichao Huang
Date: 10/17/2025

Breakpoint 1 — Submit a blank name

    Location: Line 13"if (value === "")"
    Purpose: Check if input is empty.

    Screenshots:

    breakpoint1_before.png: Check button when input is empty.

    breakpoint1_after.png: validateName return false.

    Observation: A warning pops up that the name cannot be empty and the form is not submitted.

    

Breakpoint 2 — Submit valid name

    Location: Line 13"if (value === "")"
    Purpose: Ensure that qualified input will be passed.

    Screenshots:

    breakpoint2_before.png: Check button when input is valid.

    breakpoint2_after.png: validateName return true.

    Observation: No warning pops up.

    

Breakpoint 3 — Confirm that the name is qualified when clicking the submit button

    Location: line 51 "for (let input of talentInputs)"
    Purpose: Check if the multiselect check loop is working correctly.

    Screenshots:

    breakpoint3_before.png: The loop will check if each option is selected.

    breakpoint3_after.png: There is no option is selected, return false.

    Observation: A warning pops up that Please select at least one talent.



Files included in this analysis folder
     `breakpoint_1_before.png`
     `breakpoint_1_after.png`
     `breakpoint_2_before.png`
     `breakpoint_2_after.png`
     `breakpoint_3_before.png`
     `breakpoint_3_after.png`
     `DEBUGGER_STEPS.md`