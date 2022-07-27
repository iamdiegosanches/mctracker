import {useEffect, useState} from "react";
import {Maintenance} from "../../models/maintenance";
import {BASE_URL} from "../../utils/request";
import axios from "axios";
import DeleteButton from "../DeleteButton";
import ReactPaginate from 'react-paginate';

import "./style.css"
import AddMaintenance from "../AddMaintenance";

function MaintenanceList() {

    const [maintenance, setMaintenance] = useState<Maintenance[]>([]);
    const [pageCount, setPageCount] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);
    let [page, setPage] = useState<number>(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/maintenance?page=${page}`)
            .then(response => {
                setMaintenance(response.data.content);
                setPageCount(response.data.totalPages);
                setTotal(response.data.content.price);
                console.log(total);
            });
    }, [page]);

    return (
        <div className="container">
            <div className="head">
                <h1>Lista de Manutenções</h1>
            </div>
            <div id="container">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    previousLabel="< previous"
                    onPageChange={() => {
                        setPage(ReactPaginate.length);
                    }}
                    pageCount={pageCount}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            </div>
            <div className="parent">
            {maintenance.map(maintenance => {
                return(
                    <div className="content" key={JSON.stringify(maintenance.id)}>
                        <h2>Detalhes da Manutenção</h2>
                        <p >Nome do mecânico: {maintenance.mechanicsName}</p>
                        <p >Nome da oficina: {maintenance.workshopName}</p>
                        <p >Local: {maintenance.workshopLocation}</p>
                        <p >Descrição da manutenção: {maintenance.description}</p>
                        <p >Preço da peça substituida R$ {maintenance.piecePrice}</p>
                        <p >Total da manutenção R$ {maintenance.price}</p>
                        <p >Data da manutenção {maintenance.date}</p>
                        <DeleteButton maintenanceId={maintenance.id}/>
                    </div>
                )
            })}
                <AddMaintenance />
            </div>
            <h3>Total pago: {total} </h3>
        </div>
    )
}

export default MaintenanceList;