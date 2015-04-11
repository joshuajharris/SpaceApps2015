//Meteor.subscribe("data");

var url = "https://data.oregon.gov/api/views/7zxm-9fbf/rows.json?accessType=DOWNLOAD";

Meteor.call("getRes", url, function(err, res){
  if(err) {
    console.error(err);
  } else {
    Session.set("cols", res.data.meta.view.columns);
    Session.set("data", res.data.data);
    console.log("done");
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
