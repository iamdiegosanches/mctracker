import {useEffect, useState} from "react";
import {Maintenance} from "../../models/maintenance";
import {BASE_URL} from "../../utils/request";
import axios from "axios";
import DeleteButton from "../DeleteButton";


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
            <h3>List of Maintenance</h3>
            <thead>
            <tr>
                <th className="show576">Nome do mecânico</th>
                <th>Nome da oficina </th>
                <th className="show992">Local</th>
                <th className="show992">Descrição da manutenção</th>
                <th className="show992">Preço</th>
            </tr>
            </thead>
            <tbody>
            {maintenance.map(maintenance => {
                return(
                    <tr key={JSON.stringify(maintenance.id)}>
                        <td className="c1">{maintenance.mechanicsName}</td>
                        <td className="c1">{maintenance.workshopName}</td>
                        <td className="c1">{maintenance.workshopLocation}</td>
                        <td className="c1">{maintenance.description}</td>
                        <td className="c1">R$ {maintenance.price}</td>
                        <DeleteButton maintenanceId={maintenance.id}/>
                    </tr>
                )
            })}
            </tbody>
        </div>
    )
}

export default MaintenanceList;