Template.table.helpers({
  data: function(){
    return Session.get("data"); 
  },
  url: function(){
    return Session.get("url");
  },
  title: function(){
    return Session.get("title");
  },
  miscNums: function(){
    return [5,7,4,3,5,6,7,8,9];
  },
  tags: function(){
    return Session.get("tags");
  }
});

Template.thead.helpers({
  colNames: function(){
    return _.pluck(Session.get("cols"), "name"); 
  }
});

