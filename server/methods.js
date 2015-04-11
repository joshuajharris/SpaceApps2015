Meteor.methods({
  getRes: function(url){
    Meteor.http.get(url, function(err, res){
      if(err) {
        console.error(err);
      } else {
        //console.log(res.data);
        return res.data;
      }
    });
  }
});
