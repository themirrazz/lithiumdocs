# InnerWorkings
Limited customization of the backend.
```ts
let InnerWorkings = {
  Feedback?: {
    Type: "GoogleForms",
    FormViewID?: string,
    EmailAddressKey?: string,
    BookIDKey?: string,
    SelectedTextKey?: string,
    JSONKey?: string,
    SuggestionsKey?: string
  }
}
```
## Feedback &lt;Object&gt;
An object representing a configuration for receiving Feedback. Right now, we only support Google Forms, but we're planning on adding support for other platforms like Microsoft Forms or MailChimp Survey.

### Type &lt;String&gt;
The type of form. As of now, values besides "GoogleForms" are ignored.

### FormViewID &lt;String?&gt;
The ID from the URL used to access and  fill out your form. If your form's URL was `https://docs.google.com/forms/d/e/abcdef38924824892548/viewform`, then you'd just put `abcdef38924824892548`. (Putting the entire URL will cause a critical error!) *Only used by Google Forms.*

### \*Key &lt;String?&gt;
The secret internal IDs for the inputs you want to send the specified information to. (You have to dig through the Google Forms source code to find these.) *Only used by Google Forms.*
