import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Table, Button } from 'react-bootstrap';
import 'src/styles/Button.module.css';

export default function SupplierManagement({ returnProps }) {
  const suppliers = returnProps[0]
  const API_URL = returnProps[1]
  console.log(`API_URL: ${API_URL}`)

  function deleteSupplier(id, API_URL) {
    
    fetch(`/api/stock/supplier/${id}`, 
    { 
      method: 'DELETE', 
      headers: { 'Content-Type': 'application/json; charset=UTF-8'  }
    })
    .then(res => res.json())
    .then(data => {
        window.location.reload(false);
    })
    
  }
  return (
    <>
      <Head>
        <title>Supplier Management</title>
      </Head>

      <main style = {{width: "90vw", display: "flex", alignContent: "center", justifyContent: "center"}}>        
        <Table hover responsive = "md">
          <thead>
            <tr>
              <th width = "25%">Supplier Name</th>
              <th width = "40%">Address</th>
              <th width = "35%">Phone Number</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {suppliers.map((supplier) => (
              <tr key={supplier._id}>
                <td><p>{supplier.first_name} {supplier.last_name}</p></td>
                <td><p>{supplier.address}</p></td>
                <td><p>{supplier.phone}</p></td>
                <td>
                  <Link href = {`/supplier/update/${supplier._id}`}>
                    <button type="button" class="btn btn-outline-secondary">Update</button>
                  </Link>
                </td>
                <td>
                  <button type="button" class="btn btn-outline-danger" onClick = {() => deleteSupplier(supplier._id, API_URL)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </>
  );
}

export async function getServerSideProps() {
    console.log(`API_URL: ${process.env.API_URL}`)
    const res = await fetch("https://stock-final-6215112.vercel.app/api/stock/supplier")
    const suppliers = await res.json()
    const returnProps = [ suppliers, process.env.API_URL ]

    return { props: { returnProps } }
}