import Product from "./Product.jsx"
function ProductTab(){
    let options = ["hi-tech","durable","fast"];
    // let options2 = {a:"hi-tech",b :"durable",c:"fast"}
    return (
        <div>
            <Product title="Phone" price={150000/2} features1={options} features2 = {["hi-tech","durable","fast"]} features3 = {{a:"hi-tech",b :"durable",c:"fast"}}/> 
            <Product title="Laptop" price={50000} />
            <Product title="Pen" price={undefined} />
        </div>
    );
}

export default ProductTab;