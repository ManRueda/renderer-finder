var RendererFinder = require('../src/RendererFinder.js');
var finder = new RendererFinder();
/*
finder.findOne(true, function(err, info, msg, desc){
  console.log(info);
  console.log(msg);
  console.log(desc);
});
*/
finder.on('found', function(info, msg, desc){
  console.log(info);
  console.log(msg);
  console.log(desc);
});

finder.stop(true);
