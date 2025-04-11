export function Product(props) {
    return(
    <li>
        {props.product.name}  {props.product.price}
    </li>
    )
}

export function ProductList(props) {
    return (
    <ul>
        {props.ProductList.map((product) => (
            <Product key={product.id} product={product}/>
        ))}
    </ul>
    )
}