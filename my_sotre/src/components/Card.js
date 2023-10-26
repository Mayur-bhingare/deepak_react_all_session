const Card = (props) => {
  let { value } = props;
  return (
    <>
      <div
        className="card my-2 show-hover-effect shadow-sm p-2"
        style={{ width: "18rem" }}
        title={value.title}
      >
        <img
          src={value.image}
          className="card-img-top"
          alt="Product"
          style={{ height: "50vh" }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {value.title.length > 20
              ? value.title.substring(0, 20) + "..."
              : value.title}
          </h5>
          <p className="card-text">
            {value.description.substring(0, 60)}... <a href="#">Read More</a>
          </p>
          <p>
            Rs.
            <span className="fw-bold text-primary ms-1 me-2">
              {value.price}
            </span>
            <span className="text-decoration-line-through fw-bold text-muted">
              {value.price * 2}
            </span>
            <span className="fs-5 fw-bold text-success ms-2">50% off</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
