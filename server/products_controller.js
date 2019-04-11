
function create(request,response) {
    let db =request.app.get('db')
    db.create_product([request.body.name,request.body.description,request.body.price,request.body.image_url])
    .then(result => response.json(result))
    .catch(error => {
        response.status(500).json("an error occured")
        console.log(error)
        })
}
function getOne(request,response) {
    let db =request.app.get('db')
    db.read_product([request.params.id])
    .then(result => response.json(result))    
    .catch(error => {
        response.status(500).json("an error occured")
        console.log(error)
        })
}
function getAll(request,response) {
    let db =request.app.get('db')
    db.read_products()
    .then(result => response.json(result))
    .catch(error => {
        response.status(500).json("an error occured")
        console.log(error)
        })
}
function update(request,response) {
    let db =request.app.get('db')
    db.update_product([request.query.desc,request.params.id])
    .then(result => response.json(result))
    .catch(error => {
        response.status(500).json("an error occured")
        console.log(error)
        })
}
function remove(request,response) {
    let db =request.app.get('db')
    db.delete_product([request.params.id])
    .then(result => response.json(result))
    .catch(error => {
        response.status(500).json("an error occured")
        console.log(error)
        })
}


module.exports = {
    create,
    getOne,
    getAll,
    update,
    remove
}