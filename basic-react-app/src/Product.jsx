import "./Product.css"

function Product({title,price=1,features1, features2 ,features3}){   //here price=1 is a default value if you haven't declared any value then default value will assigned.

    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>Price: {price}</h5>
             {/* //React can render an array of strings, but they will appear without separators, display the features properly, use the join() method. */}
            <p>features: {features1}</p> 
            {/* <p>{features2.a}</p> */}
            <p>{features2}</p>
            {/* <p>{features3.a}</p> */}
            <p style={{ backgroundColor: "red",borderRadius:4}}>{price>=50000?<p>discountPrice:{(price*5)/100} </p>:null}</p>
            
        </div>
    );
}
export default Product;

