function generalSearch(searchString) {
  searchString = stringFromDoc(searchString);
  var object = UrlFetchApp.fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyCHBds7vY-RJDMs_11Mj62gLbXffX6L0vk&cx=013036536707430787589:_pqjad5hr1a&q=" + searchString + "&alt=json")
  var parsed = JSON.parse(object.getContentText());
  
  var links = new Array();
  
  for(var i = 0; i < 10; i++){
    links[i] = parsed.items[i].link
    //Logger.log(links[i])
  }
  Logger.log(links);
  return links;
  
}

function nameSearch(searchString) {
  searchString = stringFromDoc(searchString);
  var object = UrlFetchApp.fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyCHBds7vY-RJDMs_11Mj62gLbXffX6L0vk&cx=013036536707430787589:_pqjad5hr1a&q=" + searchString + "&alt=json")
  var parsed = JSON.parse(object.getContentText());
  
  var links = new Array();
  
  for(var i = 0; i < 10; i++){
    links[i] = parsed.items[i].title
    //Logger.log(links[i])
  }
  Logger.log(links);
  return links;
  
}

function pdfSearch(searchString){
  searchString = stringFromDoc();
  var object = UrlFetchApp.fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyCHBds7vY-RJDMs_11Mj62gLbXffX6L0vk&cx=013036536707430787589:_pqjad5hr1a&q=" + searchString + "&alt=json")
  var parsed = JSON.parse(object.getContentText());
  
  var links = new Array();
  
  for(var i = 0; i < 10; i++){
    links[i] = parsed.items[i].link
    //Logger.log(links[i])
  }
  Logger.log(links);
  return links;
}

function stringFromDoc(docName){
  //docName = ["deviation", "standard", "blah", "google"];
  var returnString = "";
  for(var i = 0; i < docName.length; i++){
    returnString += " " + docName[i];
  }
  searchString = "variance standard deviation mathematics mean average mode statistics median histogram";
  Logger.log(returnString);
  return returnString;
}
