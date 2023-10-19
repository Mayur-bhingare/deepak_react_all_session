let Table = () => {
  return (
    <>
      <section className="col-10 m-auto">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th width="10%">Sr No</th>
              <th width="28%">First</th>
              <th width="17%">Email</th>
              <th width="17%">Mobile</th>
              <th width="27%">Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Table;
