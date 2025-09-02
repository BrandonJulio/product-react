import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alerta } from "../functions";
const ShowProducts = () => {
  const url = "http://api.run/productsController.php";
  const [products, setProducts] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [operation, setOperation] = useState(1);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const respuesta = await axios.get(url);
    setProducts(respuesta.data);
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-4 offset-md-4">
            <div className="d-grid mx-auto">
              <button
                className="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#modalProducts"
              >
                <i className="fa-solid fa-circle-plus"></i> Añadir
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-lg-8 offset-0 offset-lg-2">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>PRODUCTOS</th>
                    <th>DESCRIPCION</th>
                    <th>PRECIO</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  {products.map((product, i) => (
                    <tr key={product.id}>
                      <td>{i + 1}</td>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>
                        ${new Intl.NumberFormat("es-MX").format(product.price)}
                      </td>
                      <td>
                        <button className="btn btn-warning" onClick={() => {}}>
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                        &nbsp;
                        <button className="btn btn-danger" onClick={() => {}}>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div id="modalProducts" className="modal fade" arial-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <label className="modal-title">{title}</label> 
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <input type="hidden" id="id"></input>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="fa-solid fa-tag"></i></span>
                        <input type="text" id="nombre" className="form-control" placeholder="Nombre del producto" value={name}
                        onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="fa-solid fa-comment"></i></span>
                        <input type="text" id="description" className="form-control" placeholder="Descripcion del producto" value={description}
                        onChange={(e) => setDescription(e.target.value)}></input>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text"><i className="fa-solid fa-dollar-sign"></i></span>
                        <input type="number" id="precio" className="form-control" placeholder="Precio del producto" value={price}
                        onChange={(e) => setPrice(e.target.value)}></input>
                    </div>
                    <div className="d-grid col-6 mx-auto">
                        <button className="btn btn-success">
                        <i className="fa-solid fa-floppy-disk"></i> Guardar
                        </button>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProducts;
