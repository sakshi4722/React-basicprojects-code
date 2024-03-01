import Cardppt from "./Cardppt";


function Cardpptparent() {
    return (
    <div>
    <h1>Featured Products</h1>
    <Cardppt
    title="Product 1"
    image="https://example.com/product1.jpg"
    description="This is a description of product 1."
    link="https://example.com/product1"
    />
    <Cardppt
    title="Product 2"
    image="https://example.com/product2.jpg"
    description="This is a description of product 2."
    link="https://example.com/product2"
    />
    </div>
    );
   }
   export default Cardpptparent