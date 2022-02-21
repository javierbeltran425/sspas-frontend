import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import './cssFiles/Carousel.css';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const CarouselComponent = () => {
    const [products, setProducts] = useState([]);
    const [yearReports, setYearReports] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '600px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '480px',
            numVisible: 1,
            numScroll: 1
        }
    ];

 
    useEffect(() => { 
        //direccion de lista : reporte_anual/lista
        //direccion de descarga reporte_anual/descarga/#pk
            axios.get(process.env.REACT_APP_API_URL + "reporte_anual/lista")
              .then((res) => {
                console.log(res.data);
                setYearReports(res.data);
              }) 
              .catch((err) => {
                alert('Ha ocurrido un error')
              });

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const productTemplate = (document) => {
        return (
            <div className="product-item">
                <div className="product-item-content">
                    <div className="mb-3">
                        {/*<img src="" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.anyo} className="product-image" />*/}
                        <Icon icon={faFile} className="text-4xl text-gray-500 mt-5" />
                    </div>
                    <div>
                        <h4 className="mb-1">{document.nombre}</h4>
                        <h6 className="mt-0 mb-3">{document.anyo}</h6>
                        <div className="car-buttons mt-5">
                            <a href={process.env.REACT_APP_API_URL + 'reporte_anual/descarga/' + document.id}>
                                <Button icon="pi pi-download" className="p-button p-button-rounded mr-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="carousel-demo">
            <div className="card">
                <Carousel value={yearReports} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions}
                    itemTemplate={productTemplate} header={<h5>Reportes</h5>} />
            </div>
        </div>
    );
}

export default CarouselComponent