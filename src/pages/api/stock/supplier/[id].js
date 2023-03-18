import {connect, model, models, Schema} from "mongoose"
const connectionString = process.env.MONGODB_URI

export default async function handler(req, res) {
    await connect(connectionString);

    const id = req.query.id

    if (req.method === 'GET') { //READ
        const docs = await Supplier.findOne({_id: id})
        res.status(200).json(docs)
    } 

    else if (req.method === 'PUT') {
        const updatedDoc = await Supplier.updateOne({_id: id}, req.body)
        res.status(200).json(updatedDoc)
    }
    
    else if (req.method === 'POST') { //CREATE
        const doc = await Supplier.create(req.body)
        res.status(201).json(doc)
    } 
    
    else if (req.method === 'DELETE') { //DELETE
        const doc = await Supplier.deleteOne({_id: id})
        res.status(201).json(doc)
    } 

    else {
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}

const supplierSchema = new Schema({
    first_name: String,
    last_name: String,
    address: String,
    phone: String
})

const Supplier = models?.supplier || model('supplier', supplierSchema);