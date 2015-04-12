Template.resultsList.helpers({
  results: function() {
    return Session.get("urls");
  },
  state: function(){
    return Session.get("state");
  }
});


