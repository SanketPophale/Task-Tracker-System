class PUBLIC_DATA {

    static port = process.env.PORT || 4000
    static mongo_uri = process.env.MONGO_URI || `moongodb://localhost/tasktracker`
    static jwt_auth = process.env.JWT_AUTH || `@#$%^&*(@#$%^&*($%^))#$%^&`
}

module.exports = {
    PUBLIC_DATA

}