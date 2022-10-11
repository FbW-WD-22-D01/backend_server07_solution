// Verschiedenen Funktionen zur Manipulation der Daten

export function capitalize(req, res, next){
    const {firstName, lastName} = req.body
    req.body.firstName = firstName[0].toUpperCase() + firstName.slice(1)
    req.body.lastName = lastName[0].toUpperCase() + lastName.slice(1)
    next()
}

export function sortFavorite(req,res,next){
    req.body.favoriteBands.sort()
    next()
}

export function convertToNum(req,res,next){
    const {age, fbw} = req.body
    req.body = {...req.body, age: Number(age), fbw: Number(fbw)}
    next()
}