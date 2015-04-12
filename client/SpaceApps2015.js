//Meteor.subscribe("data");

var urls = [{"url": "https://data.oregon.gov/api/views/7zxm-9fbf/rows.json?accessType=DOWNLOAD", "title": "MARINE BOARD PERMITTED EVENTS"}, 
            {"url": "https://data.oregon.gov/api/views/kiyy-dbi3/rows.json?accessType=DOWNLOAD", "title": "Bills Signed By Governor Brown 2015"}];

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
  "click #title": function(event){
    console.log(event.target.parentElement.parentElement.children.url.textContent);
    Meteor.call("getRes", event.target.parentElement.parentElement.children.url.textContent, function(err, res){
      if(err) {
        console.error(err);
      } else {
        Session.set("cols", res.data.meta.view.columns);
        Session.set("data", res.data.data);
        Session.set("title", res.data.meta.view.name);
        Session.set("tags", res.data.meta.view.tags);
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
