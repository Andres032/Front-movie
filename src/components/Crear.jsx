import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Crear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      imagen: "",
      idioma: "",
      clasificacion: "",
      estreno: "",
      duracion: "",
      url: "",
      director: "",
      sipnosis: " ",
     
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:9000/api", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    this.setState({
      nombre: "",
      imagen: "",
      idioma: "",
      clasificacion: "",
      estreno: "",
      duracion: "",
      url: "",
      director: "",
      sipnosis: " ",
    });
  };

  render() {
    const { nombre,imagen, idioma, clasificacion, estreno, duracion, url, director, sipnosis} = this.state;

    return (
      <div className="">
        <div className="card">
          <div className="card-header">Pelicula</div>
          <div className="card-body">
            <form onSubmit={this.submitHandler}>
              <div className="form-group">
                <label htmlFor="">Nombre:</label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  onChange={this.changeHandler}
                  value={nombre}
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
                    onChange={this.changeHandler}
                    value={imagen}
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
                  onChange={this.changeHandler}
                  value={idioma}
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
                  onChange={this.changeHandler}
                  required
                  value={clasificacion}
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
                  onChange={this.changeHandler}
                  required
                  value={estreno}
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
                    onChange={this.changeHandler}
                    value={duracion}
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
                  onChange={this.changeHandler}
                  value={url}
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
                  onChange={this.changeHandler}
                  value={director}
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
                  onChange={this.changeHandler}
                  value={sipnosis}
                  required
                  rows="3"
                ></textarea>
              </div>

              <div className="btn-group" role="group" aria-label="">
                <button type="submit" className="btn btn-success">
                  Agregar
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

export default Crear;
