const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY
})

exports.handler = async (event, context, cb) => {
    try {
        const response = await client.query(
            q.Get(q.Ref(q.Collection('notes'), '291611980704252417'))
        )
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "getNotes", data: response.data })
        }
    } catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Somthing went Wrong" })
        }
    }
}