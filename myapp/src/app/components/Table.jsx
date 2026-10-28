"use client";
//Hye Shim componenet

import React from "react";

export default function Table() {
    return (
        <div>
            <h2>Client/Data table</h2>
            <table>
                <thead>
                    <tr style={{ backgroundColor: "skyblue" }}>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>John Doe</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>John Doe</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
