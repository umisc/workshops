const SMTPServer = require("simple-smtp-listener").Server
const nodemailer = require('nodemailer')
const server = new SMTPServer(2525)
const { GMAIL_PW } = require('./.env')

async function main() {
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "misccat.gives.free.flag@gmail.com",
            pass: GMAIL_PW
        }
    })

    server.on("misccat@mail.umisc.info", async (mail) => {
        var from = mail.headers.get('from').value[0].address
        var flag = mail.headers.get('flag')
        if(!flag || flag != 'yes please!') {
            var info = await transporter.sendMail({
                from: 'misccat',
                to: from,
                subject: 'Flag Delivery Failed',
                text: 'You didn\'t ask nicely for the flag. If you want the flag, include a "flag" header with value "yes please!" in your email.'
            })
            console.log('bad!', info)
        } else {
            var info = await transporter.sendMail({
                from: 'misccat',
                to: from,
                subject: 'Flag Delivery',
                text: 'Here is your flag: MISCCTF{w04h_smtp_1s_S0_c00L!}'
            })
            console.log('win!', info)
        }
    })
}

main().catch(console.error)
