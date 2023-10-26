import Input from "./components/Input";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <Input />
          <ProductList />
        </section>
      </section>
    </>
  );
}

export default App;
