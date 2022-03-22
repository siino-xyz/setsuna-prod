export default function handler(req, res) {  

  let response = null;
  
  if(req.method === 'POST') {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_APIKEY); 
     
    const msg = {
      to: req.body.email,
      from: 'support@example.com',
      subject: 'お問合せありがとうございました。',
      text: 'お問合せを受け付けました。回答をお待ちください。' + req.body.message,
      html: 'お問合せを受け付けました。回答をお待ちください。' + req.body.message,
    };
 
    (async () => {
      try {
       response =  await sgMail.send(msg);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body)
        }
      }
    })();
  }
 
  res.status(200)
  res.send(response);
}