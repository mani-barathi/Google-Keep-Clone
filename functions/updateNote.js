const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY
})


exports.handler = async (event) => {
    if (event.httpMethod != 'POST')
        return { statusCode: 401, body: JSON.stringify({ message: "Un Authorized request! ", report: false }) }

    const { id, title, text } = JSON.parse(event.body)
    const updateData = {}
    if (title) updateData.title = title
    if (text) updateData.text = text

    try {
        const { data, ref, ts } = await client.query(q.Update(q.Ref(q.Collection('notes'), id), { data: updateData }))
        return {
            statusCode: 200,
            body: JSON.stringify({ id: ref.id, ts, data, report: true })
        }
    } catch (error) {
        console.log(error)
        return { statusCode: 500, body: JSON.stringify({ message: "Somthing went Wrong", report: false }) }
    }
}