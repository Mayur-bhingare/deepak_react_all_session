import { useProductContext } from "../context/product.context";
import Card from "./Card";

const ProductList = () => {
  let { productList } = useProductContext();
  return (
    <>
      <section className="col-12 d-flex flex-wrap justify-content-evenly ">
        {productList.length === 0 ? (
          <p className="text-primary fw-bold h4">Loading ....</p>
        ) : (
          productList.map((value, index) => {
            return <Card value={value} />;
          })
        )}
      </section>
    </>
  );
};

export default ProductList;
