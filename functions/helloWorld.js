exports.handler = async (event, context, cb) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World💙" })
    }
}