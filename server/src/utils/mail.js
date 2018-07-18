import mailgunLoader from 'mailgun-js';
import { config } from '../config';
let domain = 'sandbox1c171b02a9394895a975dfb36e459142.mailgun.org';
let apiKey = config.MAILGUN_API_KEY;
let mailgun = mailgunLoader({apiKey, domain});

function sendEmail(to, from, subject, content) {
    let data = {
        from,
        to,
        subject,
        html: content
    };

    return mailgun.messages().send(data)
}



export { sendEmail }


