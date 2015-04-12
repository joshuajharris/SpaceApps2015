Template.resultLink.events({
  "click #title": function(event){
    //console.log(event.target.parentElement.parentElement.children.url.textContent);
    Meteor.call("getRes", event.target.parentElement.parentElement.children.url.textContent, function(err, res){
      if(err) {
        console.error(err);
      } else {
        Session.set("cols", res.data.meta.view.columns);
        Session.set("data", res.data.data);
        Session.set("title", res.data.meta.view.name);
        Session.set("tags", res.data.meta.view.tags);
        Session.set("url", event.target.parentElement.parentElement.children.url.textContent);
        console.log("done");
      }
    });
  }
});


