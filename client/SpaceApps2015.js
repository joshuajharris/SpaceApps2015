//Meteor.subscribe("data");

var urls = ["https://data.oregon.gov/api/views/7zxm-9fbf/rows.json?accessType=DOWNLOAD",
            "https://data.oregon.gov/api/views/kiyy-dbi3/rows.json?accessType=DOWNLOAD"];
Session.set("urls", urls);

Template.resultsList.helpers({
  results: function() {
    return Session.get("urls");
  },
  state: function(){
    return Session.get("state");
  }
});

Template.resultLink.events({
  "click #url": function(event){
    Meteor.call("getRes", event.currentTarget.text, function(err, res){
      if(err) {
        console.error(err);
      } else {
        Session.set("cols", res.data.meta.view.columns);
        Session.set("data", res.data.data);
        console.log("done");
      }
    });
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
