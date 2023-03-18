import {connect, model, models, Schema} from "mongoose"
const connectionString = process.env.MONGODB_URI

export default async function handler(req, res) {
    await connect(connectionString);

    if (req.method === 'GET') {
        const docs = await Supplier.find().sort({first_name: 1})
        res.status(200).json(docs)

    } else if (req.method === 'POST') {
        const doc = await Supplier.create(req.body)
        res.status(200).json(doc)

    } else {
        res.setHeader('Allow', ['GET', 'POST'])
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