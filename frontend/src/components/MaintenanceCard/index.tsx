import {useEffect, useState} from "react";
import {Maintenance} from "../../models/maintenance";
import {BASE_URL} from "../../utils/request";
import axios from "axios";


function MaintenanceList() {

    const [maintenance, setMaintenance] = useState<Maintenance[]>([]);

    useEffect(() => {
        axios.get(`${BASE_URL}/maitenance`)
            .then(response => {
                setMaintenance(response.data.content);
            })
    }, []);

    return (
        <div className="container">
            <h3>List of Maintenance</h3>
            <thead>
            <tr>
                <th className="show576">Data</th>
                <th>Vendedor </th>
                <th className="show992">Visitas</th>
                <th className="show992">Vendas</th>
                <th>Total </th>
            </tr>
            </thead>
            <tbody>
            {maintenance.map(maintenance => {
                return(
                    <tr key={maintenance.price}>
                        <td className="c1">{maintenance.mechanicsName}</td>
                        <td className="c1">{maintenance.workshopName}</td>
                        <td className="c1">{maintenance.workshopLocation}</td>
                        <td className="c1">{maintenance.description}</td>
                        <td className="c1">R$ {maintenance.price}</td>
                    </tr>
                )
            })}
            </tbody>
        </div>
    )
}

export default MaintenanceList;