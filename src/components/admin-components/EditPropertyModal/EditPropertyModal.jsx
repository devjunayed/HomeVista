import React from 'react'
import Modal from 'react-modal';

const EditPropertyModal = ({ data, setIsOpen, modalIsOpen }) => {

    function closeModal() {
        setIsOpen(false);
    }

    const handleSubmit = () => {

    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}

                onRequestClose={closeModal}

            >
                <h2 >Hello</h2>
                <button onClick={closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    )
}

export default EditPropertyModal
