// import { useProductContext } from "../context/product.context";

const Input = () => {
  //   let {  } = useProductContext();
  return (
    <>
      <section className="col-12 d-flex flex-wrap justify-content-evenly ">
        <div className="form-floating my-3" style={{ width: "50vw" }}>
          <input
            type="text"
            className="form-control"
            id="product"
            placeholder="Enter Product Name"
          />
          <label for="product">Search Product Name</label>
        </div>
      </section>
    </>
  );
};

export default Input;
