//Meteor.subscribe("data");

var cols;

Meteor.call("getRes", "https://data.oregon.gov/api/views/kiyy-dbi3/rows.json?accessType=DOWNLOAD", function(err, res){
  if(err) {
    console.error(err);
  } else {
    cols = res.data.meta.view.columns;
    console.log("done");
  }
});
