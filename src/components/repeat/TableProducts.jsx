import "./TableProducts.css"
import products from "../../data/products";
import React from "react";


export default (props) => {
    const productsList = products.map((product, i) => {
        return (
            <tr className={i % 2 === 0 ? "table--even" : "table--odd"} key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    })

    return (
        <table className="table">
            <thead>
                <tr className="table__th">
                    <th>Id</th>
                    <th>Name</th>
                    <th>Price(R$)</th>
                </tr>
            </thead>
            <tbody>
                {productsList}
            </tbody>
        </table>
    )
}