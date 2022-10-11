export function checkUser(req,res){
    res.send({message: 'User ist ok'})
}

export function postData(req,res){
    res.send(req.body)
}