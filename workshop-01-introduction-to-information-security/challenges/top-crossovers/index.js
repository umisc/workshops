const path = require('path')
const puppeteer = require('puppeteer')
const querystring = require('querystring')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'pug')

const index_view = path.join(__dirname, 'views/index.pug')
const post_preview_view = path.join(__dirname, 'views/post_preview.pug')
const port = process.env.PORT || 3000

var browser = null

app.get('/', (req, res) => {
    res.render(index_view)
})

app.get('/g3n3r4t3_w1n_c00ki3', (req, res) => {
    console.log('generate win cookie hit')
    res.cookie('flag', 'MISCCTF{you_have_some_eXcellent_SkillS}', { maxage: 2592000000 })
    res.status(200).end()
})

app.post('/make_post', async (req, res) => {
    if(!req.body.title || !req.body.story || !req.body.action) {
        return res.status(400).render(index_view, { message: "Please enter both a title and a story." })
    }
    let { title, story, action } = req.body
    if(/<script\s*>/i.test(story)) {
        return res.status(400).render(index_view, { message: "Hacking attempt detected." })
    }
    if(action == 'preview') {
        return res.render(post_preview_view, { title, story })
    }
    if(action == 'review') {
        const page = await browser.newPage() 
        await page.goto('http://localhost:'+port+'/g3n3r4t3_w1n_c00ki3')
        await page.setRequestInterception(true)
        page.once('request', async (request) => {
            console.log(request.url())
            if(request.url().includes('make_post')) {
                var data = {
                    method: 'POST',
                    postData: querystring.stringify({ title, story, action: 'preview' }),
                    headers: { ...request.headers(), 'Content-Type': 'application/x-www-form-urlencoded' }
                }
                request.continue(data)
                console.log('[ATTEMPT] visiting page with story:', story)
                await page.setRequestInterception(false)
            } else {
                request.continue()
            }
        })
        var R = await page.goto('http://localhost:'+port+'/make_post')
        return res.send('Thank you for your submission. If your story is a top crossover, you\'ll hear back from us soon :)')
    }
})

async function setup_puppeteer() {
    return new Promise(async (res, rej) => {
        browser = await puppeteer.launch({ executablePath: '/usr/bin/chromium-browser', headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] })
        return res(1)
    })
}

setup_puppeteer().then(() => {
    app.listen(port, () => {
        console.log('listening on port', port)
    })
})
