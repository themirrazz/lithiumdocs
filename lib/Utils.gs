// Get footnotes from selection
function GetFootnotesFromSelection() {
  var doc = DocumentApp.getActiveDocument();
  var sel = doc.getSelection();
  if(!sel) {
    return []; // no selection
  }
  var ranges = sel.getRangeElements();
  var footnotes = [];
  var footnote_els = doc.getActiveTab().asDocumentTab().getFootnotes();
  var footnote_texts = [];
  footnote_els.forEach(footnote_element => {
    footnote_texts.push(footnote_element.getFootnoteContents().getText());
  });
  ranges.forEach(range => {
    if(range.getElement().getType() === DocumentApp.ElementType.FOOTNOTE) {
      if(footnote_texts.includes(range.getElement().asFootnote().getFootnoteContents().getText())) {
        footnotes.push(
          {
            id: footnote_texts.indexOf(range.getElement().asFootnote().getFootnoteContents().getText())+1,
            text: range.getElement().asFootnote().getFootnoteContents().getText()
          }
        );
      }
    } else if(range.getElement().getType() === DocumentApp.ElementType.PARAGRAPH && !range.isPartial()) {
      var foundElementRange = range.getElement().asParagraph().findElement(DocumentApp.ElementType.FOOTNOTE);
      var foundElement = foundElementRange ? foundElementRange.getElement() : null;
      if(foundElement) {
        if(footnote_texts.includes(foundElement.asFootnote().getFootnoteContents().getText())) {
          footnotes.push(
            {
              id: footnote_texts.indexOf(foundElement.asFootnote().getFootnoteContents().getText())+1,
              text: foundElement.asFootnote().getFootnoteContents().getText()
            }
          );
        }
      }
    }
  });
  return footnotes;
}

// Get selected text
function GetSelectionTextFromRanges (ranges) {
  var text = "";
  ranges.forEach(range => {
    try {
      var rangeText = range.getElement().asText().getText();
      var start_offset = range.getStartOffset()===-1 ? 0 : range.getStartOffset();
      var end_offset = range.getEndOffsetInclusive()===-1 ? rangeText.length : range.getEndOffsetInclusive() + 1;
      text += rangeText.slice(start_offset, end_offset);
    } catch {
      // this is the easiest way
      void(0);
    }
  });
  return text;
}

// Extract text
function ExtractValue(text, startStr, endStr) {
  var start = text.indexOf(startStr) + startStr.length;
  var slice = text.slice(start);
  var end = slice.indexOf(endStr) || 0;
  return slice.slice(0, end);
}
