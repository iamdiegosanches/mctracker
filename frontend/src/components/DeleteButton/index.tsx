import {BASE_URL} from "../../utils/request";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import maintenanceCard from "../MaintenanceCard";
import MaintenanceCard from "../MaintenanceCard";

type Props = {
    maintenanceId: string;
}

function handleClick(id : string) {
    axios.delete(`${BASE_URL}/maintenance/${id}`)
        .then(r => (
            toast.info("Deletado com sucesso")
        ));
}

function DeleteButton( {maintenanceId} : Props) {
    return (
        <div onClick={() => handleClick(maintenanceId)}>
            <p>Delete</p>
            <ToastContainer
                position="bottom-left"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    )
}

export default DeleteButton;
