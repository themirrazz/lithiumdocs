/*
============================ README =================================
All information is stored here. Unless you're trying to change any
of the functionality of Lithium, this is the only file that you
should ever need to modify.

Though there is one exception:
If there is a newer version of Lithium available, you can update it.
it. To update it, you should find the corresponding file on
themirrazz' GitHub and paste it into the correct file. For example,
paste the contents of themirrazz/lithiumdocs:main/Lithium.gs into
the Lithium.gs file in your Apps Script.

Make sure you paste the correct files during update, or otherwise,
Explain Live won't work correctly. If you aren't good with technical
aspects, then don't mess with the other files - while anything broken
can be fixed by simply using the update process, it's still annoying
to have to take time out of your writing to fix the UX, and can be
even more annoying to accidentally break something without even
noticing it.

For instructions, please see the GitHub's project documentation:
https://github.com/themirrazz/lithiumdocs/tree/main/docs
*/

// Change the user experience (UX) to your liking/style.
var UXSettings = {
  AIExplanations: true
};


// Modify the inner workings (to a limited extent)
var InnerWorkings = {
  Feedback: null
};


// Any data inside this object is sent to AI Explanations.
var AIData = {};
