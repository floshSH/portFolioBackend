import nodemailer from 'nodemailer';

const mail=(email, subject, name, message)=>{

    let mailTransporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'ssubash042@gmail.com',
            pass:'udgr ldvp lcrz uoyt'
        }
    });
    
    let details={
        from:'ssubash042@gmail.com',
        to:`flosh04love@gmail.com`,
        subject:`${subject}`,
        text:`Name: ${name},
              email: ${email},
              message:${message} 
        `
    };
    
    mailTransporter.sendMail(details,(err)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Email sent")
        }
    });
    
    
}

export default mail;