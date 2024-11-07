function SubmitGoogleForm(options) {
  if(!options) {
    return false;
  }
  var form = {};
  form['entry.'+InnerWorkings.Feedback.EmailAddressKey] = options.EmailAddress;
  form['entry.'+InnerWorkings.Feedback.BookIDKey] = options.BookID;
  form['entry.'+InnerWorkings.Feedback.SelectedTextKey] = options.SelectedText;
  form['entry.'+InnerWorkings.Feedback.JSONKey] = options.JSON;
  form['entry.'+InnerWorkings.Feedback.SuggestionsKey] = options.Suggestions;
  form['submissionTimeStamp'] = String(Date.now());
  UrlFetchApp.fetch('https://docs.google.com/forms/d/e/'+InnerWorkings.Feedback.FormViewID+'/formResponse', {
    method: 'post',
    payload: form,
    headers: {
      'origin': 'https://docs.google.com/',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Safari/537.36',
      'content-type': 'application/x-www-form-urlencoded'
    }
  });
}
