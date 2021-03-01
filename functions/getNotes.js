const faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
    secret: process.env.FAUNA_SECRET_KEY
})

exports.handler = async (event) => {
    try {
        const { data } = await client.query(
            q.Map(q.Paginate(q.Match(q.Index('note_sort_by_ts_desc')), { size: 1000 }),
                q.Lambda(["ts", "ref"], q.Get(q.Var('ref')))
            )
        )
        data.forEach(doc => {
            doc.id = doc.ref.id
            delete doc.ref
        })
        return { statusCode: 200, body: JSON.stringify({ data, report: true }) }
    } catch (error) {
        console.log(error)
        return { statusCode: 500, body: JSON.stringify({ message: "Somthing went Wrong", report: false }) }
    }
}