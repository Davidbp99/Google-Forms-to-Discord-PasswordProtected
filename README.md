![THIS](https://user-images.githubusercontent.com/40523727/114236868-8c164500-9982-11eb-8804-0d167a25f601.png)

# Basic Setup
1) Create a [Google Form](https://docs.google.com/forms/u/0/) for use with this script
2) Make the form however you'd like.

3) Go to the Script editor.

![script editor](https://pillow.s-ul.eu/iLfUuy9l.png)

4) Paste the contents of `code.gs`. Make sure each user* have content inside it. Even if it would just be
```javascript
var user* = {
"agsdgshfddfhfhdsdafag":"System"
}
```

5) Open Discord and make a channel where you'd like the responses to be sent.
6) Create a webhook and copy the URL. Replace `WEBHOOKURL` at the top of the script with the URL you copied.

![Create a new Webhook.](https://pillow.s-ul.eu/9G6CaZ7P)
![Copy Webhook URL.](https://pillow.s-ul.eu/fcfrn7vt)

7) Add a trigger by selecting Current project's triggers in the Edit menu, and creating a new trigger using the settings given below.

![trigger settings](https://user-images.githubusercontent.com/44692189/58762106-1236f880-856e-11e9-9a97-e275ffea9d65.jpg)

8) Submit a test response to make sure it works.


# Additional Options

In this section, we will outline the multiple different cosmetic customizations that you can add to your webhook. You can use any combination of the options displayed below.

#### Colour
This option will allow you to set a colour to your embed. The colour option requires a numerical input instead of hexadecimal.
E.g. Red in Hexadecimal is #FF0000. As a decimal, this would be translated into 16711680.
```javascript
// place to get colors from https://convertingcolors.com/hex-color-0000FF.html?search=blue
var colornice = "15745792" // Default colors
var color_type_dict = {
  // "google form question from a place": "color"
 
}
```
### Config
Need to change colors or avatar image or something else? Then you got a very easy to use config
```javascript
var POST_URL = "" // for error catching

var whoposted = "Someone that should not have access"


// when it comes to users it needs to be something in each group to block others to bypass the system and still send request when they should not
var user = {
  // "password": "who the password is for"
}
var user2 = {

}
var user3 = {

}
var user4 = {

}


var URL_type_dict = {
 // "google form question from a place": "discord hook", 

}

// place to get colors from https://convertingcolors.com/hex-color-0000FF.html?search=blue
var colornice = "15745792" // Default colors
var color_type_dict = {
  // "google form question from a place": "color"
 
}

var avatarlogo = ""

var footerlogo = ""
```
### Add more users
Need more users in your form with password? Then there is some steps you need to take

Step 1 (replace * with a number)
```javascript
var user* = {

}
```
Step 2 (replace * with the number you gave above. If you made more then one you need to do it more then once
```javascript
for (password in user*) {
if (parts[0] == password){
      // Set the form_type variable (which we use later on) to our Key, and set the webhook variable, POST_URL to the value associated with that key.
     whoposted = user*[password];

    
     
     
      break;
} 
```
### Permission System
Need to restrict one of the users to not be enabled to use a part of the form.
```javascript
// add this to the config area
var usersperms = false // if it is false then
 
```
```javascript
for (password in user*) {
if (parts[0] == password){
     whoposted = user*[password];

    if (user* == "false"){
       // checks if the users form submission got the correct form_type to run next code. If not then it will skip it
    if (form_type == "your thing you want to restrict them with") {
      POST_URL = ""; // send it to another channel or trash channel

     }}
     
     
      break;
} 
```
### Author
This option adds an author block to the embed. The author block (object) includes three values:
  * name - the name field.
  * url - allows for a hyperlink to be attached to the name.
  * icon_url - avatar displayed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "author": {
      "name": "AUTHOR NAME CHANGE THIS IN SCRIPT",
      "url": "URL CHANGE THIS IN SCRIPT",
      "icon_url": "ICON URL CHANGE THIS IN SCRIPT"
    }
  }]
}
```

### URL
This option binds a url link to the title of your embed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "url": "URL CHANGE THIS IN SCRIPT"
  }]
}
```

### Description
Displays a description for the embed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "description": "DESCRIPTION CHANGE THIS IN SCRIPT"
  }]
}
```

### Image
Displays an image inside of the embed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "image": {
      "url": "URL CHANGE THIS IN SCRIPT"
    }
  }]
}
```

### Thumbnail
Allows for a thumbnail to be displayed in the embed.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "thumbnail": {
      "url": "URL CHANGE THIS IN SCRIPT"
    }
  }]
}
```

### Footer icon
An optional customization you can make to footer text, is to add an icon image which will be displayed next to it.
```javascript
{
  "embeds" :[{
    "title": "TOP TEXT CHANGE THIS IN SCRIPT",
    "fields": items,
    "footer": {
      "text": "BOTTOM TEXT CHANGE THIS IN SCRIPT",
      "icon_url": "URL CHANGE THIS IN SCRIPT"
    }
  }]
}
```




## Trash area
![image](https://user-images.githubusercontent.com/40523727/114236751-5709f280-9982-11eb-941e-2f68de81dad2.png)

## Where it will go

![image](https://user-images.githubusercontent.com/40523727/114236824-7b65cf00-9982-11eb-9aef-25b6f144d10f.png)
![image](https://user-images.githubusercontent.com/40523727/114236868-8c164500-9982-11eb-8804-0d167a25f601.png)

## Example Form
The example form I used to make this [Example Form](https://docs.google.com/forms/u/0/)
### Credits
I used the images from [other script](https://github.com/Iku/Google-Forms-to-Discord)
