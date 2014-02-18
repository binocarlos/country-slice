var fs = require('fs');
var path = require('path');
var split = require('split');

var countries = module.exports = {
	raw:function(){
		return require('./countries.json');
	},
	stream:function(){

		return countries
		.filestream()
    .pipe(split(function(line){
    	if(line.charAt(0)=='['){
				line = line.replace(/^\[/, '');
			}
			if(line.charAt(line.length-1)==']'){
				line = line.replace(/\]$/, '');
			}
			line = line.replace(/,$/, '');
			
			if(line){
				return JSON.parse(line);	
			}
			
    }))
    
	},
	filepath:function(){
		return path.normalize(__dirname + '/countries.json');
	},
	filestream:function(){
		return fs.createReadStream(countries.filepath(), 'utf8');
	}
}