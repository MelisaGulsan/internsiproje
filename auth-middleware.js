const jwt=require('jsonwebtoken');

const app_secret="myappsecret";
const username="admin";
//const password="secret";

module.exports=function(req,res,next){
    if(req.url==='/login'&& req.method=='POST'){
        if(req.body.username===username){
            let token=jwt.sign({data:username, experseIn:'1h'},app_secret);
            res.json({success:true, token:token});
        }
        else{
            res.json({success:false});
        }
        res.end();
        return;
    }else{
        if((req.url.startsWith("/container") || req.url.startsWith("/weather")) && (req.method!='GET')){
            let token=req.headers['authorization'];

            if(token!=null && token.startsWith('Bearer<')){
                token=token.substring(7,token.length); //bearer stringinden itibaren token içerisine alınıyor
                try{
                    jwt.verify(token,app_secret);
                    next();
                    return;
                }
                catch(err){}
            }
            res.statusCode=401;
            res.end();
            return;
        }
        console.log(token)
    }
    next(); //login veya sorgulama yoksa middleware devam etmesini sağlar
}