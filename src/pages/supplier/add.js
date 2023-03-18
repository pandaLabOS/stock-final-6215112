import { useState } from "react";
import { useForm } from "react-hook-form";
import Head from 'next/head'
import Link from 'next/link'

export default function AddSupplier() {
    const {register, handleSubmit, watch, formState: { errors } } = useForm(); //handleSubmit is a tool provided by the react-hook-form hook
    const [data, setData] = useState("");

    const saveSupplier = async (data) => {
        const response = await fetch('/api/stock/supplier', {
            method: "POST",
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
        setData(JSON.stringify(data)) // an arrow function that receives a single parameter, data, and sets the state of data to the stringified version of the data parameter
    }

    return (
        <div style = {{backgroundColor: "var(--light-grey)", display: "flex", justifyContent: "center", alignContent: "center", padding: "3rem", width: "100vw"}}>
            <Head>
                <title>Add New Supplier</title>
            </Head>
            <form onSubmit = {handleSubmit(saveSupplier)} style = {{padding: "1rem", width: "30rem"}}>
                <h3>Add New Supplier</h3>
                <hr className="solid"/><br/>
                <div class="form-group">
                    <h3>Personal Information</h3>
                    <label htmlFor = "first_name">First Name</label><br/>
                    <input class = "form-control text-input" id = "first_name" name = "firstName" {...register('first_name', {required: 'This field is required'})} placeholder = "First name" required/><br/>
                    <span> {errors.firstName && errors.firstName.message}</span>

                    <label htmlFor = "last_name">Last Name</label><br/>
                    <input id = "last_name" {...register("last_name")} placeholder = "Last name" class="form-control" required/><br/>
                </div>

                <br/>

                <div class = "form-group">
                    <h3>Contact Information</h3>
                    <label htmlFor="phone">Phone Number</label><br />
                    <input id="phone" {...register("phone")} placeholder="Phone Number" class="form-control"/>
                    <div id="phoneHelp" class="form-text">0123456789</div><br/>

                    <label htmlFor="address">Address</label><br/>
                    <textarea id = "address" {...register("address")} placeholder = "Address" class="form-control"/><br/>
                </div>

                <div class = "form-group hGroup">
                    <Link href = "/supplier" style = {{textDecoration: "none", color: "var(--blue)"}}>
                        <p>Back</p>
                    </Link>
                    <br/><br/>
                    {/* <Link href = "/supplier" style = {{textDecoration: "none", color: "var(--blue)"}}> */}
                        <input type="submit" class = "submit" value = "Save"/>
                    {/* </Link>                 */}
                </div>
                <p>{data}</p>
                
            </form>
            
        </div>
    )
}