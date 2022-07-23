import {useEffect, useState} from "react";
import {Maintenance} from "../../models/maintenance";
import {BASE_URL} from "../../utils/request";
import axios from "axios";
import DeleteButton from "../DeleteButton";

import "./style.css"
import AddMaintenance from "../AddMaintenance";


function MaintenanceList() {

    const [maintenance, setMaintenance] = useState<Maintenance[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/maintenance`)
            .then(response => {
                setMaintenance(response.data.content);
            });
    }, []);

    return (
        <div className="container">
            <div className="head">
                <h1>Lista de Manutenções</h1>
            </div>
            <div className="parent">
            {maintenance.map(maintenance => {
                return(
                    <div className="content" key={JSON.stringify(maintenance.id)}>
                        <h2>Detalhes da Manutenção</h2>
                        <td >Nome do mecânico: {maintenance.mechanicsName}</td>
                        <td >Nome da oficina: {maintenance.workshopName}</td>
                        <td >Local: {maintenance.workshopLocation}</td>
                        <td >Descrição da manutenção: {maintenance.description}</td>
                        <td >R$ {maintenance.price}</td>
                        <DeleteButton maintenanceId={maintenance.id}/>
                    </div>
                )
            })}
                <AddMaintenance />
            </div>
        </div>
    )
}

export default MaintenanceList;