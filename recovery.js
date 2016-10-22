

client = require('elasticsearch').Client({
  hosts: 'search-twitt-map-db-w5h27iafbziaho2txcmqs6teei.us-east-1.es.amazonaws.com',
  connectionClass: require('http-aws-es'),
  amazonES: {
    region: 'us-east-1',
    accessKey: 'AKIAIW4WAKJH337NBF7A',
    secretKey: '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'
  } ,
  log :"trace"
}
);

client.indices.delete({index: "twitter"},function()
{
client.indices.create({index: "twitter"},function(){

var body = {
    tweet_debug:{
        properties:{
            location     : {"type" : "geo_point"}
        }
    }
}
client.indices.putMapping({index:"twitter", type:"tweet_debug", body:body});


});

} );

