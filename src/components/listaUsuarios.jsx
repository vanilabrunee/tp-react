import { useState,useEffect} from "react"
import "./ListaUsuarios.css";

function ListaUsuarios(){
    const [usuario, setUsuario]= useState([]);

    const fetchUsuarios = async () => {
      try{
          const response = await fetch('https://jsonplaceholder.typicode.com/users')
          const datos = await response.json();
          console.log(datos);
          setUsuario(datos);
      }   
      catch (error) {
      console.error("Error:", error);   
    }
  };


useEffect (() => {
  
    fetchUsuarios();
},[]);

const eliminarUsuario = (id) => {
  setUsuario(usuario.filter(u => u.id !== id))
}


return (
  <div className="contenedor">
    <h1 className="titulo">Lista de usuarios</h1>
    {usuario.length === 0 ? (
      <p>Cargando o sin datos...</p>
    ) : (
    <table border="1px"  className="tabla">
    <thead className="encabezado">
      <tr className="columnas">
        <th>Id</th>
        <th>Nombre</th>
        <th>Email</th>
        <th>UserName</th>
        <th>Accion</th>
      </tr>
    </thead>
    <tbody className="datos">
      {usuario.map(u => (
        <tr className="tabla-filas"> key={u.id}
        <td>{u.name}</td>
        <td>{u.email}</td>
        <td>{u.username}</td>
        <button className="botonEliminar" onClick={() => eliminarUsuario(u.id)}>
          Eliminar
        </button>
        </tr>
      ))}
    </tbody>
    </table>
    )}
  </div>
)
}
export default ListaUsuarios;