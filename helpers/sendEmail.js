const path = require('path');
require('dotenv').config({path: path.resolve(process.cwd(), '.env')})
const SibApi = require("sib-api-v3-sdk")
console.log(process.cwd())
SibApi.ApiClient.instance.authentications['api-key'].apiKey = process.env.SIB_API_KEY


const sendEmail = async({subject, url, toEmail, templateId, fromEmail}) => {
    return new SibApi.TransactionalEmailsApi().sendTransacEmail({
        "sender": {"email": fromEmail, "name": "FileShare"},
        "subject": subject,
        "templateId": templateId,
        "params": {
            "name": "Buddy!!",
            "url": url 
        },
        messageVersions: [
            {
                "to": [
                    {
                        "email": toEmail,
                        "name": "File Share",
                    }
                ]
            }
        ]
    })
}

module.exports = sendEmail
