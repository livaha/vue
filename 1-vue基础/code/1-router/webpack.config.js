const pathlib = require('path')

module.exports={
	entry:'./js/main.js',
	output:{
		path:pathlib.resolve('dest'),
		filename:'bundle.js'
	}
}