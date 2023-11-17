import "./Formulario.css";

export function Formulario() {
  return (
    <>
      <div className="fondoReservar">
        <div className="row">
          <div className="col-12 col-md-4jmn">
            <h3 className="titulo">¡Reserva con Nosotros!</h3>
            <br />
            <form>
              <div className="row letra">
                <div className="col-12 col-md-6">
                  <div class="mb-3">
                    <label class="form-label">
                      <i class="fa-solid fa-user"></i> Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="xxxxxxxxx"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div class="mb-3">
                    <label class="form-label">
                      <i class="fa-solid fa-user"></i> Apellido
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="xxxxxxxxx"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div class="mb-3">
                    <label class="form-label">
                      <i class="fa-solid fa-phone"></i> Telefono
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="xxxxxxxxx"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div class="mb-3">
                    <label class="form-label">
                      <i class="fa-solid fa-users"></i> Numero de Personas
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="xxxxxxxxx"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div class="mb-3">
                    <label class="form-label">
                      <i class="fa-solid fa-calendar-days"></i> Fecha Inicial
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div class="mb-3">
                    <label class="form-label">
                      <i class="fa-solid fa-calendar-days"></i> Fecha Final
                    </label>
                    <input type="date" className="form-control" />
                  </div>
                </div>
                <button type="button" class="btn btn-light">
                  Reservar
                </button>
              </div>
              <div className="row"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
