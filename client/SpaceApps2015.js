//Meteor.subscribe("data");

var urls = ["https://data.oregon.gov/api/views/7zxm-9fbf/rows.json?accessType=DOWNLOAD",
            "https://data.oregon.gov/api/views/kiyy-dbi3/rows.json?accessType=DOWNLOAD"];
Session.set("urls", urls);
/*
Meteor.call("getRes", url, function(err, res){
  if(err) {
    console.error(err);
  } else {
    Session.set("cols", res.data.meta.view.columns);
    Session.set("data", res.data.data);
    console.log("done");
  }
});*/

Template.resultsList.helpers({
  results: function() {
    return Session.get("urls");
  }
});

Template.resultLink.events({
  "click #url": function(){
    console.log("hello");
  }
});

Template.table.helpers({
  data: function(){
    return Session.get("data"); 
  }
});

Template.thead.helpers({
  colNames: function(){
    return _.pluck(Session.get("cols"), "name"); 
  }
});
