import axios from "axios";
import "./style.css"
import {BASE_URL} from "../../utils/request";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function handleClick( name : string, wName : string, location: string, price: number, desc: string, date: string) {
    axios.post(`${BASE_URL}/maintenance`, {
        mechanicsName: name,
        workshopName: wName,
        workshopLocation: location,
        price: price,
        description: desc,
        date: date
    }).then(r => window.location.reload())
    console.log(date)
}

function AddMaintenance() {
    const [mechanicsName, setMechanicsName] = useState<string>("");
    const [workshopName, setWorkshopName] = useState<string>("");
    const [workshopLocation, setWorkshopLocation] = useState<string>("");
    const [textAreaValue, setTextAreaValue] = useState<string>("");
    const [price, setPrice] = useState<number>(0);

    const [date, setDate] = useState(new Date());

    return (
        <>
            <a href={"#modal-opened"} className="link-1" id="modal-closed">
                <span className="material-symbols-sharp">add_circle</span>
            </a>

            <div className="modal-container" id="modal-opened">
                <div className="modal">

                    <form>
                        <label htmlFor="fname">Nome do mecânico:</label>
                        <input type="text" id="mName" value={mechanicsName}
                               onChange={(
                                   ev: React.ChangeEvent<HTMLInputElement>,): void => setMechanicsName(ev.target.value)}
                               placeholder="Nome do mecanico..." />

                        <label htmlFor="fname">Nome da oficina:</label>
                        <input type="text" id="fname" value={workshopName}
                               onChange={(
                                   ev: React.ChangeEvent<HTMLInputElement>,): void => setWorkshopName(ev.target.value)}
                               placeholder="Nome da oficina..." />

                        <label htmlFor="fname">Local:</label>
                        <input type="text" id="fname" value={workshopLocation}
                               onChange={(
                                   ev: React.ChangeEvent<HTMLInputElement>,): void => setWorkshopLocation(ev.target.value)}
                               placeholder="Local..." />

                        <label htmlFor="fname">Descrição da manutenção:</label>
                        <textarea id="fname" value={textAreaValue}
                                  onChange={(
                                      ev: React.ChangeEvent<HTMLTextAreaElement>,): void => setTextAreaValue(ev.target.value)}
                                  placeholder="Descrição da manutenção..."/>

                        <label htmlFor="fname">Preço:</label>
                        <input type="number" id="fname" value={price}
                               onChange={(
                                   ev: React.ChangeEvent<HTMLInputElement>,): void => {setPrice(
                                   parseInt(ev.target.value, 10),);
                               }}
                               placeholder="Preço..." />

                        <DatePicker
                            selected={date}
                            onChange={(date: Date) => setDate(date)}
                            dateFormat="dd/MM/yyyy"
                        />

                        <input type="submit" value="Submit" onClick={() =>
                            handleClick(mechanicsName, workshopName, workshopLocation, price, textAreaValue,
                                date.toISOString().slice(0, 10))} />
                        
                    </form>
                    <a href={"#modal-closed"} className="link-2">
                        <span className="material-symbols-sharp">cancel</span>
                    </a>

                </div>
            </div>
        </>

    )
}

export default AddMaintenance;