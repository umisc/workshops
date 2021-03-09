const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
app.use(bodyParser.json())
app.use(cookieParser())

const BASICS_1_FLAG = 'MISCCTF{h3r3_1s_a_fl4g_f0r_y0u}'
const BASICS_2_FLAG = 'MISCCTF{au7h3nt1c4t10n_w17h_us3r_4g3n7_b4d}'
const BASICS_3_FLAG = 'MISCCTF{c00k13_1s_yUmMY}'

app.get('/', (req, res) => {
    res.status(418).send('I\'m a Teapot!')
})

//basics #1
app.post('/post_to_me', (req, res) => {
    if(!req.body.postcode) {
        res.status(400).send('Missing "postcode" field')
    }
    if(!req.body.flag) {
        res.status(400).send('Missing "flag" field')
    }
    let { postcode, flag } = req.body
    console.log('[BASICS #1]', postcode, flag)
    if(flag != '0' && flag != 'false') {
        res.status(200).send(BASICS_1_FLAG)
    } else {
        res.send('No flag for you!')
    }
})

//basics #2
app.get('/spy_base', (req, res) => {
    var ua = req.header('User-Agent')
    const target_agent = 'Agent Secure 1337'
    if(ua == target_agent) {
        res.status(200).send(BASICS_2_FLAG)
    } else {
        res.send('You are "' + ua + '", not "' + target_agent + '"!')
    }
})

//basics #3
app.get('/flag', (req, res) => {
    var admin = req.cookies.admin
    if(admin == null) {
        res.cookie('admin', 0, { maxAge: 1333333337 })
        return res.send('You are not admin!')
    }
    if(admin != '0' && admin != 'false') {
        res.send(BASICS_3_FLAG)
    } else {
        res.send('You are not admin!')
    }
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('listening on port', port))
