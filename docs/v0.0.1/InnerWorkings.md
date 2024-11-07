# InnerWorkings
Limited customization of the backend.
```ts
let InnerWorkings = {
  Feedback?: <GoogleFormFeedback|undefined>
}
```

## Properties
### Feedback <GoogleFormFeedback|undefined>
An object representing configuration on how to handle feedback. *(Optional)*

## Types
### GoogleFormFeedback
All of the "keys" are the internal IDs of inputs in Google Forms. You have to use View-Source and/or Inspect Element to find the IDs of inputs.
```ts
let feedback:GoogleFormFeedback? = {
  Type: "GoogleForm",
  FormViewID: string,
  EmailAddressKey: string,
  BookIDKey: string,
  SelectedTextKey: string,
  JSONKey: string,
  SuggestionsKey: string
}
```

#### Example working configuration
```javascript
// Modify the inner workings (to a limited extent)
var InnerWorkings = {
  Feedback: {
    Type: 'GoogleForms',
    FormViewID: 'CENSORED_TO_PREVENT_SPAMMING',
    EmailAddressKey: '1387144609',
    BookIDKey: '621539592',
    SelectedTextKey: '1335900217',
    JSONKey: '742317699',
    SuggestionsKey: '1789107585'
  }
};
```
