import * as React from 'react';
import styles from '@/styles/Navbar.module.css';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <div className = {styles.container}>
            <div className = {styles.linksContainer}>
                <Link 
                    href = "/supplier" 
                    style = {{textDecoration: "none"}}
                >
                    <p className = {styles.a}>Supplier Management Dashboard</p>
                </Link>
                <Link href = "/supplier/add">
                    <button type = "button" class = "btn btn-primary">Add New Supplier</button>
                </Link>
            </div>
        </div>
    )
}