import './ingresoReparacion.css';

function ingresoReparacion() {
  return (
    <div>
        <h1 className="d-flex justify-content-center">Ingreso de Nueva Reparación</h1>
        <p className="d-flex justify-content-center"> Complete el formulario para registrar un nuevo equipo en el sistema</p>
        
        <form>
            <div className="card pb-3 mb-4">
                <div className="card-top">
                    <h2>Datos del Cliente</h2>
                    <p>Información de contacto del propietario del equipo</p>
                </div>
                <div className="card-bottom">
                    <div>
                        <label className="subtitulo">Nombre completo</label>
                        <input type="text" placeholder="Nombre completo"/>
                    </div>
                    <div>
                        <label className="subtitulo">Teléfono</label>
                        <input type="tel" placeholder="Teléfono"/>
                    </div>
                </div>
            </div>
            <div className="card pb-3 mb-4">
                <div className="card-top">
                    <h2>Datos del Dispositivo</h2>
                    <p>Especificaciones y problema reportado por el cliente</p>
                </div>
                <div className="card-bottom">
                    <div>
                        <label className="subtitulo">Tipo de dispositivo</label>
                        <input type="text" placeholder="Tipo de dispositivo"/>
                    </div>
                    <div>
                        <label className="subtitulo">Modelo</label>
                        <input type="text" placeholder="Modelo"/>
                    </div>
                    <div>
                        <label className="subtitulo">Problema reportado</label>
                        <input type="text" placeholder="Problema reportado"/>
                    </div>
                </div>
            </div>
            <div className="card pb-3 mb-4">
    
                <div className="card-top">
                    <h2>Estado del Equipo</h2>
                    <p>Condición visual y accesorios incluidos al momento de la recepción.</p>
                </div>

                <div className="card-bottom">
                    <div className="subtitulo">Observaciones Estéticas y Accesorios</div>
                    <textarea placeholder="Describa el estado estético (rayones, golpes, etc.) y mencione los accesorios entregados (cargador, funda)."></textarea>
                </div>

                </div>
            <div className="card pb-3 mb-4">
                <div className="card-top">
                    <h2>Administrativo</h2>
                    <p>Detalles administrativos para el registro</p>
                </div>
                <div className="card-bottom"> 
                    <div>
                        <label className="subtitulo">Fecha de Ingreso</label>
                        <input type="date" />
                    </div>
                    <div>
                        <label className="subtitulo">Estado inicial</label>
                        <input type="text" placeholder="Estado inicial"/>
                    </div>
                </div>
            </div>
        </form>
        <div className="d-flex justify-content-center">
            <button className="btn btn-light border border-secondary-subtle me-2">Limpiar formulario</button>
            <button className="btn btn-primary">Registrar Reparación</button>
        </div>
    </div>
  )
}

export default ingresoReparacion