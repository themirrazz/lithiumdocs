# Collecting Feedback With Google Forms
## Step 1. Create your Google Form.
I recommend a structure similar to the one pictured below:<br/>
![Screenshot 2024-11-07 9 28 32 AM](https://github.com/user-attachments/assets/b26e4f03-a927-41c8-ac70-894027e56b33)

## Step 2. Preview it and copy the ID
Click the eye button in the Google Forms editor to preview it. Now copy the ID from the URL.<br/>
![Screenshot 2024-11-07 9 29 44 AM](https://github.com/user-attachments/assets/a55bbfb5-e1a7-4aa7-850c-8ac5376649dc)
<br/>
Now you can insert it into the configuration.

## Step 3. View Source
If you're on a managed device and can't use the view-source menu, like me:<br/>
![Screenshot 2024-11-07 9 30 22 AM](https://github.com/user-attachments/assets/14c1a7aa-bed4-4f3b-9655-9e5706a1d223)
<br/>
There is a way. Enter `view-source:` behind the rest of the URL (this only works on Chrome)
![Screenshot 2024-11-07 9 31 14 AM](https://github.com/user-attachments/assets/eaef67bc-de72-4633-9ef0-fd47235125b8)


## Step 4. Copy all of the code
![Screenshot 2024-11-07 9 31 58 AM](https://github.com/user-attachments/assets/69886660-ce1f-4988-85a5-962262b2080d)

## Step 5. Paste it into VSCode.
If you have VSCode, launch it. If not, or are on a device like a Chromebook, visit https://www.vscode.dev/ in your browser.

## Step 6. Make sure the language is HTML
![Screenshot 2024-11-07 9 33 31 AM](https://github.com/user-attachments/assets/56c84428-52d6-4c8c-a97a-4c4a8b3c70b3)

## Step 7. Right click and choose "Format Document"
![Screenshot 2024-11-07 9 34 01 AM](https://github.com/user-attachments/assets/edc61cbb-8c67-4c4f-bfee-f6c893f55bc2)

## Step 8. Find each element
Search for the title of each question in your form using Find and Replace (`Ctrl+F`).<br/>
![Screenshot 2024-11-07 9 34 43 AM](https://github.com/user-attachments/assets/269ab717-2f6d-49df-a6ac-10ad410466b6)
<br/>
Keep choosing the next match until you see something that looks similar to this:<br/>
![Screenshot 2024-11-07 9 36 38 AM](https://github.com/user-attachments/assets/2e32dfe2-e6d4-4ec0-9557-77bf7b219145)

## Step 9. Copy the second ID
The second ID is the second number.<br/>
![Screenshot 2024-11-07 9 37 31 AM](https://github.com/user-attachments/assets/5ea19086-3460-4d37-878a-e4ba0130861f)
<br/>
Now, just paste it into your config like I have:<br/>
![Screenshot 2024-11-07 9 38 20 AM](https://github.com/user-attachments/assets/01b13a05-2deb-40ad-9168-597b49fcea5f)

## Step 10. Repeat for all properties required by Lithium
And that's what it's all about (hokey pokey reference)
