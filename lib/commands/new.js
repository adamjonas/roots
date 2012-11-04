var path = require('path'),
    ncp = require('ncp').ncp,
    run = require('child_process').exec,
    colors = require('colors'),
    current_directory = path.normalize(process.cwd());

var _new = function(commands){
  var source = path.join(__dirname, '../../templates/new');
  var destination = path.join(current_directory, commands[0]);

  ncp(source, destination, function (err) {
   if (err) { return console.error(err); }
   console.log('\nnew project created at /'.green + commands[0].green + '\n');
  });

  run("cd " + destination + "; git init", function(err){
    if (err) { 
      console.log("You should install git ASAP.".red);
      console.log('Check out http://git-scm.com/ for a quick and easy download\n'.yellow);
    }
  });
}

module.exports = { execute: _new }