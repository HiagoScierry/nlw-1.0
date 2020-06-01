const express = require('express')

const app =  express()
app.get('/', (req, res) => {
    console.log('listagem de usuarios')

    res.json({
        'message': 'Hello Typescript !!!'
    })
})

app.listen(3333)