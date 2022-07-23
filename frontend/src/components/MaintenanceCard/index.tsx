import {useEffect, useState} from "react";
import {Maintenance} from "../../models/maintenance";
import {BASE_URL} from "../../utils/request";
import axios from "axios";
import DeleteButton from "../DeleteButton";

import "./style.css"


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
            <h1>Lista de manutenções</h1>
            <div className="parent">
            {maintenance.map(maintenance => {
                return(
                    <div className="content" key={JSON.stringify(maintenance.id)}>
                        <td >Nome do mecânico: {maintenance.mechanicsName}</td>
                        <td >Nome da oficina: {maintenance.workshopName}</td>
                        <td >Local: {maintenance.workshopLocation}</td>
                        <td >Descrição da manutenção: {maintenance.description}</td>
                        <td >R$ {maintenance.price}</td>
                        <DeleteButton maintenanceId={maintenance.id}/>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default MaintenanceList;