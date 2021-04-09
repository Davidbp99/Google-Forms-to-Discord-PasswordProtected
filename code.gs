// We can use the Utilities module to get the Date
today_date = Utilities.formatDate(new Date(), "GMT-0", "HH:mm:ss  dd/MM/yyyy");


// config start
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

// end of config
// This function will be triggered once the form is submitted.
function onSubmit(e) {
  var form = FormApp.getActiveForm();
  var allResponses = form.getResponses();
  var latestResponse = allResponses[allResponses.length - 1];
  var response = latestResponse.getItemResponses();
  var items = [];
  
  var answer = response[0].getResponse() // We need to get the place where you input the sections
  // To get the actual text of the first questions answer, we need to filter the unnecessary characters out using regex.
  try {
    var parts = answer.match(/[\s\S]{1,1024}/g) || [];
  } catch (e) {
    var parts = answer;
  }
  
  // Now that we have the text of the answer, since it matches the Keys in our dictionary, we can just search for the key using a loop to get our configuration!
  for (var key in URL_type_dict){
    
    // If the answer matches a key (aka a type)
    if (parts[0] == key){
      // Set the form_type variable (which we use later on) to our Key, and set the webhook variable, POST_URL to the value associated with that key.
      var form_type = key;
      POST_URL = URL_type_dict[key];
       colornice = color_type_dict[key];
      // Once the form type has been found, we can break out of the loop.
      break;
    }
    else{
      // Incase an error arises, we can inform the user through an embed.
      var form_type = "This form type is not handled!"; 
    }
  }
  
var answer = response[1].getResponse() // We need to get the place where you input the password 1= the 2nd question in your form 
  try {
    var parts = answer.match(/[\s\S]{1,1024}/g) || [];
  } catch (e) {
    var parts = answer;
  }
 
for (var password in user){
    
    // If the answer matches a key (aka a type)
    if (parts[0] == password){
     
     whoposted = user[password];
      // Once the form type has been found, we can break out of the loop.
      break;
    }for (password in user2) {
if (parts[0] == password){
      
     whoposted = user2[password];
      // Once the form type has been found, we can break out of the loop.
      break;
} for (password in user3) {
if (parts[0] == password){
    
     whoposted = user3[password];
      // Once the form type has been found, we can break out of the loop.
      break;
} for (password in user4) {
if (parts[0] == password){
      // Set the form_type variable (which we use later on) to our Key, and set the webhook variable, POST_URL to the value associated with that key.
     whoposted = user4[password];

     // checks if cm got the right to use ruleupdate. If yes then it will skip and then break out of the loop
     
      // Once the form type has been found, we can break out of the loop.
      break;
} 
else{
  // this runs if none of the above could be found
      POST_URL = ""; // if you need to send it to a trash channel
    }
    }}}}

  


  
  // This loop will get all of the Section 2 answers. This skips the answer of the first section.
for (var i = 2; i < response.length; i++) { // To not send the password over this will need to be set to 2. 
    var question = response[i].getItem().getTitle();
    var answer = response[i].getResponse();
    try {
      var parts = answer.match(/[\s\S]{1,1024}/g) || [];
    } catch (e) {
      var parts = answer;
    }
    
    if (answer == "") {
      continue;
    }
   
      
 for (var j = 0; j < parts.length; j++) {
      if (j == 0) {
        items.push({
          "name": question,
          "value": parts[j],
          "inline": false
        });
      } else {
        items.push({
          "name": question.concat(" (cont.)"),
          "value": parts[j],
          "inline": false
        });
      }
    } 
  }
   var posted = "\n" + "This was sent by " + whoposted
  var time = today_date + posted

  var options = {
    "method": "post",
    "contentType": "application/json",
    "payload": JSON.stringify({
      "avatar_url": avatarlogo,
      "username": form_type,
      "content": null, // This is not an empty string
      "embeds": [{
              "thumbnail": {
      "url": avatarlogo
    },
        "title": form_type,
        "color": colornice,
        "fields": items,
        "footer": {
          "text": time,
          "icon_url": footerlogo,
          
        }
        
      }]
    })
    
  };
  
  
  UrlFetchApp.fetch(POST_URL, options);
 
};
