var countries = require('../');
var through = require('through');

describe('country-slice', function(){
	
	it('should get the raw list of countries', function() {
		var list = countries.raw();

		list.length.should.equal(250);
		list[0].name.should.equal('Afghanistan');

	})

	it('should make an object stream', function(done){

		this.timeout(3000);

		var counter = 0;
		var country = null;

		var t = through(function(c){
			counter++;
			if(counter==45){
				country = c;
			}
		})
		var stream = countries.stream();

		t.on('end', function(){
			counter.should.equal(250);
			country.name.should.equal('Chad');
			done();
		})

		stream.pipe(t);

	})
	


})
