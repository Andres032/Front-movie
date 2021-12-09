import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Lista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datosCargados: false,
      pelicula: [],
    };
  }

  //Eliminar
  borrarRegistros = async (id) => {
    await axios.delete("http://localhost:9000/api/" + id);
    this.cargarDatos();
  };

  cargarDatos() {
    fetch("http://localhost:9000/api")
      .then((respuesta) => respuesta.json())
      .then((datosRespuesta) => {
        console.log(datosRespuesta);
        this.setState({ datosCargados: true, pelicula: datosRespuesta });
      })
      .catch(console.log);
  }

  componentDidMount() {
    this.cargarDatos();
  }

  render() {
    const { datosCargados, pelicula } = this.state;
    if (!datosCargados) {
      return <div>Cargando INICIAR LA API.</div>;
    } else {
      return (
        <div align="center" className="card">
          <div className="card-header">
            <Link className="btn btn-success" to={"/crear"}>
              Nueva pelicula
            </Link>
          </div>
          <div className="card-body">
            <h4> Lista de Peliculas</h4>
            <div className="container">
              <table className="table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Clasificacion</th>
                    <th>Estreno</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {pelicula.map((pelicula) => (
                    <tr key={pelicula.id}>
                      <td>{pelicula.id}</td>
                      <td>
                      <img src={pelicula.imagen}></img>
  
                      </td>

                      <td>{pelicula.nombre}</td>
                      <td>{pelicula.clasificacion}</td>
                      <td>{pelicula.estreno}</td>
                      <td>
                        <div className="btn-group" role="group" aria-label="">
                          <Link className="btn btn-primary" to={"/editar/"+pelicula.id}>
                            Editar
                          </Link>
                          <button type="button" className="btn btn-danger" onClick={()=>this.borrarRegistros(pelicula.id)}>
                            Borrar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Lista;
