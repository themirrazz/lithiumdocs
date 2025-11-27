# Lithium
Thanks for checking out Lithium! If you're a writer, I'm sure you'll love to implement this! If you're a beta reader who wants a better reader experience, then look no further for an app to recommend to the author!

> [!WARNING]
> It seems that the AI Explanations broke (expected, since we were freeloading off of DuckDuckGo), I'm lazy so I don't feel like fixing this. Feel free to add your own AI Explanations using a proper API

## Wait... What the heck is Lithium?
Oh, right. Sorry - forgot our manners! Let's introduce ourselves by answering a few questions you might have.

### What is Lithium?
Lithium is a Google Apps Script program that is designed for writers. But contrary to what you might think this Google Docs extension does, it's not designed to enhance the writing experience - it's actually designed to enhance the reading experience.

### The reading experience?
Yes! The reading experience! Writers often have people who give feedback on their drafts, or just give certain people (like friends and family) early access to their book. Google Docs is an amazing writing suite, but if you're just trying to read something, it's pretty limited. Lithium fixes this by adding amazing features that beta readers and early access members can use - with the push of a button, too!

### Okay, I'm interested. What does it do?
Our main focus is our "Explain Live" feature - it's a pop-out sidebar that shows useful information. It features entries from the themirrazz' [DictionaryXYZ](https://github.com/themirrazz/DictionaryXYZ) dictionary, and it supports displaying any footnotes added via the native Google Docs Footnote feature and leaving feedback directly from the UI. ~~It even supports AI Explanations!~~

### I don't want AI training on my stories!
Ah, I see. Lots of artists - of both images, photos, songs - hate AI for being trained on their data and using it without permission. But we believe that AI can work *with* artists - and this is example. And we try to minimize the possibility of having your data trained on without your permission. Don't believe us? Well then, boy, do we have the document for you: check out the [AI Explanations Data Policy](/AIDataPolicy.md)!

### If you say so... How do I get started?
Just keep reading! Once you have the Google Docs set up for using Lithium, we have an entire document for once you've gotten it installed and are ready to get started *for real*!

## Let's install Lithium to your Document!
### Step 1. Make sure your document is properly prepared.
Lithium requires a structure. As someone getting into both professional and fanfic writing myself, I'd like to show you how I personally structure my Lithium-compatible documents:<br/>
![Screenshot 2024-11-06 10 28 35 AM](https://github.com/user-attachments/assets/40d4a23c-7ec2-4779-8d31-0d41a8813880)

Of course, you don't have to have it structured _exactly_ like this, this is just a suggestion. But certain elements are required.
* The first document tab must be a tab that contains all of your works (or work, if it's only one story).
  * The name of the "folder tab" and your works does not matter.
* After that, no specific order of tabs is required.
* If you want to add a "Canon & Lore" tab that supports AI Explanations, you can create a special tab.
  * This tab does not have to be in a specific index.
  * The tab's name must much exactly "Canon & Lore" or the same phrase in Japanese, "カノン&ロア" (this exact transliteration must be used).
  * Only AI Explanations work there as of now.

### Step 2. Prepare the Apps Script!
This extension isn't available on the G Suite Marketplace, so you'll have to add it to each document you want to use it on (I know, so *booooriiiinggg!*). Start by clicking `Extensions > Apps Script` from the Google Docs toolbar:<br/>
![Screenshot 2024-11-06 11 03 31 AM](https://github.com/user-attachments/assets/5b8ad697-c716-421a-aa43-deb66c720f0f)

You'll be greeted with a foreign new dashboard, which will probably look like this:<br/>
![Screenshot 2024-11-06 11 05 16 AM](https://github.com/user-attachments/assets/43ce3671-1cea-485a-b386-ed5f0ff8aa1f)

### Step 3. Prepare the other files.
Rename the default file, `Code.gs`, to `Lithium.gs` by hovering over it and click the three-dot menu. Just type `Lithium` - in Google Apps Script editor, it automatically adds the file extension. Now, press the "+" button and create four new scripts: `Utils`, `ExplainAI`, `GoogleForms`, and `Preferences`. Then, add one HTML file called `ExplainLive`. It should now look like this:<br/>
![Screenshot 2024-11-06 11 09 22 AM](https://github.com/user-attachments/assets/48210119-9326-43d3-847e-b4b50cd64196)

### Step 4. Copy and paste time!
Go into the [`main:/lib`](/lib/) folder and open the copy the files' contents. Paste them into the corresponding files in your Apps Script. Remember to delete the default content Google shoved into the files!

### Step 5. Add a trigger
Hover over the sidebar and select "triggers". Then, add a trigger to run `OnDocumentOpen` whenever the document is opened:<br/>
![Screenshot 2024-11-06 11 12 45 AM](https://github.com/user-attachments/assets/38198447-0f80-4ac9-82a3-fb6d3ecf0df1)

### Step 6.
Go to line 166 of `ExplainLive.html` and populate it with your own list of books.

### Step 7. Viola!
Enjoy, because it's now set up! So yeah, your betas will thank you!
