/*
Lithium is (c) themirrazz 2024, licensed under the GPL GNUv3 license.
For more information, see https://github.com/themirrazz/lithiumdocs

Not a technical user? That's perfectly fine!
Lithium is a software designed for all kinds of users, including
both ones familiar and unfamiliar with the technical aspects and
their inner-workings. Please head over to the 'Preferences.gs' file
and read the comment at the top of the file to learn how to use this.

Thanks for using Lithium!
*/

function OnDocumentOpen() {
  var tools = DocumentApp.getUi().createMenu('Lithium');
  tools.addItem('Explain Live', 'FootnotesV2');
  tools.addItem('About', 'OnAboutShow');
  tools.addToUi();
}

function OnAboutShow() {
  DocumentApp.getUi().alert(
    'Lithium by themirrazz, v0.0.1\n'
    + '(C) themirrazz, 6 November 2024, all rights reserved\n\n' +
    'Licensed under GNU GPLv3'
    + '\n' +
    'https://github.com/themirrazz/lithiumdocs/'
  );
}

// Footnotes V2
function FootnotesV2() {
  var ui = DocumentApp.getUi();
  var html = HtmlService.createHtmlOutputFromFile('ExplainLive');
  html.setTitle('Explain Live');
  ui.showSidebar(html);
}

// Load everything for Explain Live
function LoadFootnotesV2() {
  var doc = DocumentApp.getActiveDocument();
  var selection = doc.getSelection();
  var tab = doc.getActiveTab();
  if(!selection) {
    return {
      selected: false,
      range: "",
      ranges: [],
      data: {
        footnotes: [],
        feedback: InnerWorkings.Feedback ? true: false,
        aiInput: null,
        tabTitle: tab ? tab.getTitle() : null,
        myWorks: doc.getTabs()[0].getChildTabs().includes(tab),
        tabId: tab ? tab.getId() : null,
        UXSettings: UXSettings
      }
    }
  };
  var ranges = selection.getRangeElements();
  var data = {
    selected: true,
    range: GetSelectionTextFromRanges(ranges),
    ranges: [],
    data: {
      footnotes: GetFootnotesFromSelection(),
      feedback: InnerWorkings.Feedback ? true: false,
      aiInput: GetSelectionTextFromRanges(ranges),
      tabTitle: tab ? tab.getTitle() : null,
      myWorks: doc.getTabs()[0].getChildTabs().includes(tab),
      tabId: tab ? tab.getId() : null,
      UXSettings: UXSettings
    }
  };
  return data;
};

function SwitchToBook(id) {
  var doc = DocumentApp.getActiveDocument();
  doc.setActiveTab(doc.getTabs()[0].getChildTabs()[id].getId());
}


function SubmitFeedback(options) {
  var doc = DocumentApp.getActiveDocument();
  var tab = doc.getActiveTab();
  if(!doc.getTabs()[0].getChildTabs().includes(tab)) {
    return false;
  }
  var selection = doc.getSelection();
  var ranges = selection ? selection.getRangeElements() : [];
  var text = selection ? GetSelectionTextFromRanges(ranges) : undefined;
  var payload = {
    EmailAddress: options.EmailAddress,
    Suggestions: options.Suggestions,
    BookID: tab.getTitle() || "Unknown Work",
    SelectedText: text || undefined,
    JSON: JSON.stringify(options.JSON||{})
  };
  if(InnerWorkings.Feedback.Type === 'GoogleForms') {
    SubmitGoogleForm(payload);
  }
}
