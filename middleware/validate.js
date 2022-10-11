
// Check ob alle Eigenschaften gesendet wurden 
export function checkProperty(req,res,next){
    const {firstName, lastName, age, fbw, email} = req.body
    if (firstName && lastName && age && fbw && email){
        next()
    } else {
        const error = new Error('Eigenschaften fehlerhaft')
        error.status = 418
        next(error)
    }
}

// Check ob richtige Alter
export function checkAge(req,res,next){
    const {firstName, lastName, age, fbw, email} = req.body
    if (age>18){
        next()
    }  else {
        const error = new Error('Zu jung, geh nach Hause')
        error.status = 418
        next(error)
    }
}