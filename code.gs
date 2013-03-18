function doGet(){
	var app = App.createApplication();
  var textBox = app.createTextArea().setId("textBox").setName("textBox");
  var button = app.createButton('Search Results');
  var logo = app.createImage('http://r31.cooltext.com/rendered/cooltext958056081.png')
  var panel = app.createVerticalPanel();
  var label = app.createLabel('').setId('statusLabel');
  textBox.setSize(800, 500)
  app.setStyleAttribute("color", "green")
  panel.add(logo)
  panel.add(textBox);
  panel.add(button);
  panel.add(label);
  var handler = app.createServerHandler('myClickHandler');
  
  
  handler.addCallbackElement(panel);
  button.addClickHandler(handler);
  app.add(panel);

  return app;
}

function myClickHandler(e) {
  var app = UiApp.getActiveApplication();
  var test = e.parameter.textBox
  
  //var label = app.getElementById('statusLabel').setText(test);
  
  var keyWords = getKeywords(test);
  
  var stuff = generalSearch(keyWords);
  var names = nameSearch(keyWords);
  var finalString = "";
  app.add(app.createHTML("<h1>Links:</h1>"))
  var precedent = "";
  for(var i = 0; i < stuff.length; i++)
    //app.add(app.createHTML('<a href="' + stuff[i] + '">' + names[i] + '</a>'))
    app.add(app.createHTML('<h2>' + stuff[i] + '</h2>'))
  var label = app.getElementById('statusLabel').setText(finalString);
  label.setVisible(true);

  app.close();
  return app;
}

