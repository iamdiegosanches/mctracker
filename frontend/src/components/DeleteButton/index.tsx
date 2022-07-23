import {BASE_URL} from "../../utils/request";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./style.css"

type Props = {
    maintenanceId: string;
}

function handleClick(id : string) {
    axios.delete(`${BASE_URL}/maintenance/${id}`)
        .then(r => (
            toast.info("Deletado com sucesso!"))
        );
}

function DeleteButton( {maintenanceId} : Props) {
    return (
        <>
            <button onClick={() => handleClick(maintenanceId)} className="btn" type="button">
                <span className="material-symbols-sharp">delete</span>
            </button>
            <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default DeleteButton;
