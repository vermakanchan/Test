/**
   Start this app from your command line with:
   node examples/helloparam.js
   then visit: http://localhost:3000/YOURNAME
*/
var Hapi   = require('hapi');
var server = new Hapi.Server();

server.connection({
    host: '0.0.0.0',
    port: 3000
});

server.route({
	method: 'GET',
	path: '/{p*}',
	handler: function(req, reply){
		return reply('Hello ' + req.params.p);
	}
})

server.start(function(){
  console.log('Now Visit: http://localhost:' + server.info.port + '/YOURNAME');
});
