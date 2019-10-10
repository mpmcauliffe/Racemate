const jwt = require('jsonwebtoken')
const config    = require('config')

const secret    = config.get('JWT_SECRET')


const getUserId = (header, requireAuth = true) => {

    // console.log(request.connection)
    // const header = request.request 
    //     ? request.request.headers.authorization 
    //     : request.connection.context.Authorization

    if (header) {
        const token = header.replace('Bearer ', '')
        const decoded = jwt.verify(token, secret)
        return decoded.userId
    }

    if (requireAuth) {
        throw new Error('Authentication required')
    } 
    
    return null
}


module.exports = getUserId
