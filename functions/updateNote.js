const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY
})


exports.handler = async (event) => {
    if (event.httpMethod != 'POST')
        return { statusCode: 401, body: JSON.stringify({ message: "Un Authorized request! ", report: false }) }

    const { id, ...changedData } = JSON.parse(event.body)

    try {
        const { data, ref, ts } = await client.query(q.Update(q.Ref(q.Collection('notes'), id), { data: changedData }))
        const updatedNote = { id: ref.id, data, ts }
        return {
            statusCode: 200,
            body: JSON.stringify({ data: updatedNote, report: true })
        }
    } catch (error) {
        console.log(error)
        return { statusCode: 500, body: JSON.stringify({ message: "Somthing went Wrong", report: false }) }
    }
}