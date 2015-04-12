Template.table.helpers({
  data: function(){
    return Session.get("data"); 
  },
  url: function(){
    return Session.get("url");
  },
  title: function(){
    return Session.get("title");
  }
});

Template.thead.helpers({
  colNames: function(){
    return _.pluck(Session.get("cols"), "name"); 
  }
});

