import { Modal } from "bootstrap";
import { useEffect, useRef } from "react";


function BoostrapModal() {

    const alertModal = useRef(null);

    useEffect(() => {
        alertModal.current = new Modal('#exampleModal', {
            backdrop: "static"
        })
    },[])

    const openModal = () => {
        alertModal.current.show();
    }
    const closeModal = () => {
        alertModal.current.hide();
    }


    return (
        <>
            <p className="text-danger">npm install @popperjs/core</p>

            <button type="button" className="btn btn-primary" onClick={openModal}>
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            Alert Infomation
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={closeModal}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoostrapModal;