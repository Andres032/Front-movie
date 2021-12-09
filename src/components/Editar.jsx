import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Editar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      pelicula: [],
    };
  }

  cambioValor = (e) => {
    const state = this.state.pelicula;
    state[e.target.name] = e.target.value;
    this.setState({ pelicula: state });
  };

  enviarDatos = (e) => {
    e.preventDefault();
    console.log("Formulario enviado ..");
    const {
      id,
      imagen,
      nombre,
      idioma,
      clasificacion,
      estreno,
      duracion,
      url,
      director,
      sipnosis,
    } = this.state.pelicula;
    console.log(id);
    console.log(imagen);
    console.log(nombre);
    console.log(idioma);
    console.log(clasificacion);
    console.log(estreno);
    console.log(duracion);
    console.log(url);
    console.log(director);
    console.log(sipnosis);
  };

  componentDidMount () {
    console.log(this.props.match.params.id)
    axios
    .put("http://localhost:9000/api/" + this.props.match.params.id)
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        this.setState({ datosCargados: true, pelicula: datosRespuesta });
      })
      .catch(console.log);
  };

  render() {
    const { pelicula } = this.state;

    
      return (
        <div className="">
          <div className="card">
            <div className="card-header">Editar Pelicula</div>
            <div className="card-body">
              <form onSubmit={this.enviarDatos}>
                <div className="form-group">
                  <label htmlFor="">ID</label>
                  <input
                    type="text"
                    readOnly
                    className="form-control"
                    name="id"
                    id="id"
                    value={pelicula.id}
                    onChange={this.cambioValor}
                    aria-describedby="helpId"
                    placeholder=""
                  />
                  <small id="helpId" className="form-text text-muted">
                    Help text
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="">Nombre:</label>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    className="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                    onChange={this.cambioValor}
                    value={pelicula.nombre}
                    required
                  />
                  <small id="helpId" className="text-muted">
                    El nombre de la pelicula
                  </small>
                </div>
                <div className="form-group">
                  <label className="col-sm-2 control-label">Imagen</label>
                  <div className="col-sm-8">
                    <input
                      type="file"
                      className="form-control"
                      required
                      name="imagen"
                      id="imagen"
                      onChange={this.cambioValor}
                      value={pelicula.imagen}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">Idioma:</label>
                  <input
                    type="text"
                    name="idioma"
                    id="idioma"
                    className="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                    required
                    onChange={this.cambioValor}
                    value={pelicula.idioma}
                  />
                  <small id="helpId" className="text-muted">
                    ej: Escriba idioma
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="">Clasificacion:</label>
                  <input
                    type="text"
                    name="clasificacion"
                    id="clasificacion"
                    className="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                    onChange={this.cambioValor}
                    value={pelicula.clasificacion}
                  />
                  <small id="helpId" className="text-muted">
                    ej: Opciones de respuesta 12+ 14+ Todo publico
                  </small>
                </div>

                <div className="form-group">
                  <label htmlFor="">Fecha de estreno:</label>
                  <input
                    id="estreno"
                    name="estreno"
                    type="date"
                    className="form-control"
                    onChange={this.cambioValor}
                    value={pelicula.estreno}
                    required
                  />

                  <div className="form-group">
                    <label htmlFor="">Duracion:</label>
                    <input
                      type="number"
                      id="duracion"
                      name="duracion"
                      className="form-control"
                      placeholder=""
                      required
                      aria-describedby="helpId"
                      onChange={this.cambioValor}
                      value={pelicula.duracion}
                    />
                    <small id="helpId" className="text-muted">
                      Escriba los minutos
                    </small>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Url</label>
                  <input
                    type="text"
                    className="form-control"
                    id="url"
                    name="url"
                    required
                    onChange={this.cambioValor}
                    value={pelicula.url}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">Director:</label>
                  <input
                    type="text"
                    name="director"
                    id="director"
                    className="form-control"
                    placeholder=""
                    aria-describedby="helpId"
                    required
                    onChange={this.cambioValor}
                    value={pelicula.director}
                  />
                  <small id="helpId" className="text-muted">
                    Nombre director
                  </small>
                </div>

                <div className="form-group">
                  <label className="form-label">Sipnosis</label>
                  <textarea
                    className="form-control"
                    name="sipnosis"
                    id="sipnosis"
                    onChange={this.cambioValor}
                    value={pelicula.sipnosis}
                    required
                    rows="3"
                  ></textarea>
                </div>

                <div className="btn-group" role="group" aria-label="">
                  <button type="submit" className="btn btn-success">
                    Guardar
                  </button>
                  <Link to={"/lista"} className="btn btn-cancel">
                    Cancelar
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }


export default Editar;
