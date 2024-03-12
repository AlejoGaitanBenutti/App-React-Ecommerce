import { useState,useEffect, useContext } from "react";
import { getAllProductosTienda, getAllMtb, getAllBmx, getAllRecambiosMtb } from "../services/productosServices";
import { Container, Row } from "react-bootstrap";
import CardProductosTienda from "./CardProductosTienda";
import estilos from "../Components/estilos.module.css"
import Dropdown from 'react-bootstrap/Dropdown';
import { StoreContext } from "../Context/StoreContext";



function ProductosTienda(){

        // Estados 
    const {loading,setLoading, prodTienda, setProdTienda, buscar,setBuscar} = useContext(StoreContext)

    function filtroMtb() {
        const request=async() =>{
            try{
                const dataMTB = await getAllMtb();
                setProdTienda(dataMTB.docs)
                setLoading(false)
            }
            catch(e){
                console.log("error",e)
            }
        }
        request();

    }
    
    function filtroBmx() {

        const request=async() =>{
            try{
                const dataBMX = await getAllBmx();
                setProdTienda(dataBMX.docs)
                setLoading(false)
            }
            catch(e){
                console.log("error",e)
            }
        }
        request();    
    }

    function filtroRepuestos(){
        const request=async()=>{
            try{
                const dataRepuestos= await getAllRecambiosMtb();
                setProdTienda(dataRepuestos.docs)
                setLoading(false)
            }
            catch(e){
                console.log("error",e)
            }
        }
        request();
    }

    function verTodo(){
        const request = async() =>{
            try{
                const data = await getAllProductosTienda();
                console.log(data)
                setProdTienda(data.docs)
                setLoading(false)
            }catch(e){
                console.log("error",e)
            }
        };
        request();
    }
    

    
    useEffect(()=>{
        const request = async() =>{
            try{
                const data = await getAllProductosTienda(buscar);
                console.log(data);
                setProdTienda(data.docs)
                setLoading(false)
            }catch(e){
                console.log("error",e)
            }
        };
        request();
    },
    [buscar]);

    if(loading){
        return (
        <div className={estilos.container}>
            <div className={estilos.bar}></div>
            <div className={estilos.bar}></div>
            <div className={estilos.bar}></div>
            <div className={estilos.bar}></div>
        </div>)
    }else{

    return(
    <Container fluid>

        <Container className="w-100">
            
            <input  placeholder="¿Que estas buscando?" type="search" className={estilos.buscador} value={buscar} onChange={(e) => setBuscar(e?.target?.value)}/>
        
        </Container>
        <Container fluid className={estilos.containerCategorias}>
            <Dropdown >
                <Dropdown.Toggle  className={estilos.ButtonCategorias} id="dropdown-basic">
                    Categorias
                </Dropdown.Toggle>

                <Dropdown.Menu   className="bg-dark" >
                    <Dropdown.Item onClick={verTodo} className={estilos.categoriasDropdown} href="#/action-1">Ver Todo</Dropdown.Item>
                    <Dropdown.Item onClick={filtroMtb} className={estilos.categoriasDropdown} href="#/action-1">Bicicletas MTB</Dropdown.Item>
                    <Dropdown.Item onClick={filtroBmx} className={estilos.categoriasDropdown} href="#/action-2">Bicicletas BMX</Dropdown.Item>
                    <Dropdown.Item onClick={filtroRepuestos} className={estilos.categoriasDropdown} href="#/action-3">Repuestos</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Container>

        <Row className={estilos.ProdTienda}>
            {prodTienda.map((productoTienda) => (

                <CardProductosTienda
                {...productoTienda.data()} key={productoTienda.id}
                />
            ))}
        </Row>

    </Container>
    )}    
}

export default ProductosTienda;