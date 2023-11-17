export function Formulario() {
  return (
    <>
      <form>
        <div className="row letra">
          <div className="col-12 col-md-6">
            <div class="mb-3">
              <label class="form-label">
                Nombre <i class="fa-solid fa-user"></i>
              </label>
              <input type="text" className="form-control"/>
            </div>
          </div>
          <div className="col-12 col-md-6">
          <div class="mb-3">
              <label class="form-label">
                Apellido <i class="fa-solid fa-user"></i>
              </label>
              <input type="text" className="form-control"/>
            </div>
          </div>
          <div className="col-12 col-md-6">
          <div class="mb-3">
              <label class="form-label">
                Telefono <i class="fa-solid fa-phone"></i>
              </label>
              <input type="number" className="form-control"/>
            </div>
          </div>
          <div className="col-12 col-md-6">
          <div class="mb-3">
              <label class="form-label">
                Numero de Personas <i class="fa-solid fa-users"></i>
              </label>
              <input type="number" className="form-control"/>
            </div>
          </div>
          <div className="col-12 col-md-6">
          <div class="mb-3">
              <label class="form-label">
                Fecha Inicial <i class="fa-solid fa-calendar-days"></i>
              </label>
              <input type="date" className="form-control"/>
            </div>
          </div>
          <div className="col-12 col-md-6">
          <div class="mb-3">
              <label class="form-label">
                Fecha Final <i class="fa-solid fa-calendar-days"></i>
              </label>
              <input type="date" className="form-control"/>
            </div>
          </div>
        </div>
        <div className="row"></div>
      </form>
    </>
  );
}
