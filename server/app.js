const express = require('express')
const cors = require('cors')
const app = express()

app.use((req, res, next)=>{
	res.header('Access-control-allow-origin', '*')
	res.header('Access-control-allow-headers', '*')
	res.header('Access-control-allow-methods', '*')
	next()
})

app.get('/api/users', (req, res)=>{
	res.send([
		{
			name: 'Anil'
		},
		{
			name: 'Suraj'
		}
	])
})

app.listen(3000, ()=>{
	console.log('Server listening on port 3000')
})