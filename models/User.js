screenName: {
    type: String,
    required: true,
},
email: {
    type: String,
    required: true,
    unique: true,
},
password: {
    type: String,
    required: true,
},
avatar
type User {
    _id: ID!
    name: String!
    email: String!
    password: String
}
input UserInput {
    name: String!
    email: String!
    password: String!
}