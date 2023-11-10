export function Formulario() {
  return (
    <>
      <form>
        <div className="row">
          <div className="col-12 col-md-6">
            <div class="mb-3">
              <label class="form-label">
                Usuario
              </label>
              <input type="password" className="form-control"/>
            </div>
          </div>
          <div className="col-12 col-md-6">
          <div class="mb-3">
              <label class="form-label">
                Telefono
              </label>
              <input type="number" className="form-control"/>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </form>
    </>
  );
}
