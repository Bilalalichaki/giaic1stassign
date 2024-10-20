import React from "react";
import Link from "next/link";

const service = () => {
    return (
        <div>
            <h1>Service Page</h1>
            <p>This is the service page. You can add your service content here.</p>
            <li>
                <Link href="./service/serviceus">ServiceUs</Link>
            </li>
        </div>
    )
}

export default service;