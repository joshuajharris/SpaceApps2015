Meteor.methods({
  getData: function(url){
    Meteor.http.get(url, function(err, res){
      if(err) {
        console.error(err);
      } else {
        //console.log(res);
        console.log("The end of res");
      }
    });
  }
});
