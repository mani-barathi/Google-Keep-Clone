const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY
})


exports.handler = async (event) => {
    if (event.httpMethod != 'POST')
        return { statusCode: 401, body: JSON.stringify({ message: "Un Authorized request! ", report: false }) }

    const { id } = JSON.parse(event.body)

    try {
        const response = await client.query(q.Delete(q.Ref(q.Collection('notes'), id)))
        return { statusCode: 200, body: JSON.stringify({ id: response.ref.id, report: true }) }
    } catch (error) {
        console.log(error)
        return { statusCode: 500, body: JSON.stringify({ message: "Somthing went Wrong", report: false }) }
    }
}