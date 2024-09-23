import mail from "../Services/service.js"
export const mails= async(req, res)=>{
    try{
        const {name, email,subject, message}= req.body;
        mail(email, subject, name, message);
        res.status(200).send("Mail sent successfully")
    }catch(error){
        console.log(error);
    }
    
}