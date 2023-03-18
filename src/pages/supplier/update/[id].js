import Head from 'next/head'
import Link from 'next/link'
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Supplier({ supplier }) {
    const {register, handleSubmit} = useForm(); //handleSubmit is a tool provided by the react-hook-form hook
    const [data, setData] = useState("");

    const saveSupplier = async (data) => {
        const response = await fetch(`/api/stock/supplier/${supplier._id}`, {
            method: "PUT",
            mode: "cors",
            cache: "no-cache",
            headers: {
              "Content-Type": "application/json",
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data),
          });
        const result = await response.json();
        console.log(`result: ${result}`)
        setData(JSON.stringify(data)) // an arrow function that receives a single parameter, data, and sets the state of data to the stringified version of the data parameter
    }

    if (!supplier) return (
        <div>
            <p>Supplier not found</p>
            <Link href = "/supplier">Back</Link>
        </div>
    )

    return (
        <div style = {{backgroundColor: "var(--light-grey)", display: "flex", justifyContent: "center", alignContent: "center", padding: "3rem", width: "100vw"}}>
            <Head>
                <title> Update Supplier Information</title>
            </Head>
            <form onSubmit = {handleSubmit(saveSupplier)} style = {{padding: "1rem", width: "30rem"}}>
                <h3>Update Supplier Information</h3>
                <hr className="solid"/><br/>
                <div class="form-group">
                    <h3>Personal Information</h3>
                    <label htmlFor = "first_name">First Name</label><br/>
                    <input class = "text-input form-control" id = "first_name" {...register("first_name")} placeholder = "First name" defaultValue = {supplier.first_name}/><br/>
                
                    <label htmlFor = "last_name">Last Name</label><br/>
                    <input id = "last_name" {...register("last_name")} placeholder = "Last name" class="form-control" defaultValue = {supplier.last_name}/><br/>
                </div>

                <br/>

                <div class = "form-group">
                    <h3>Contact Information</h3>
                    <label htmlFor="phone">Phone Number</label><br />
                    <input id="phone" {...register("phone")} placeholder="Phone Number" class="form-control" defaultValue = {supplier.phone}/>
                    <div id="phoneHelp" class="form-text">0123456789</div><br/>

                    <label htmlFor="address">Address</label><br/>
                    <textarea id = "address" {...register("address")} placeholder = "Address" class="form-control" defaultValue = {supplier.address}/><br/>
                </div>
                <div class = "form-group hGroup">
                    <Link href = "/supplier" style = {{textDecoration: "none", color: "var(--blue)"}}>
                        <p>Back</p>
                    </Link>
                    <br/><br/>
                    <input type="submit" class = "submit" value = "Save"/>
                </div>
            </form>
            
        </div>
    )
}

//STEP 1: Function executed server-side before rendering page ---- Whether you write the function above or below the html section makes no difference
//params.id == params comes from the file name. If the file name blog_id, then it will be param.blog_id. Basically, param.<fileName>
export async function getServerSideProps({ params }) {
    const res = await fetch(`https://stock-final-6215112.vercel.app/api/stock/supplier/${params.id}`)
    const supplier = await res.json()
    return { props: { supplier } }
}