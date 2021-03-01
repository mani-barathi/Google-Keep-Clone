const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY
})


exports.handler = async (event, context, cb) => {
    if (event.httpMethod != 'POST')
        return { statusCode: 401, body: JSON.stringify({ message: "Un Authorized request! ", report: false }) }

    const { title, text } = JSON.parse(event.body)
    console.log({ title, text })

    try {
        const { data, ref, ts } = await client.query(q.Create(q.Collection('notes'), { data: { title, text } }))
        const newNote = { id: ref.id, data, ts }
        return {
            statusCode: 200,
            body: JSON.stringify({ data: newNote, report: true })
        }
    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ message: "Somthing went Wrong", report: false }) }
    }
}