import './styles.scss'

const Modal = ({ setIsOpen, content="" }) => (
    <div className='modal'>
        <div className='modal__content'>
            <div className='modal__content-header'><span onClick={() => setIsOpen(false)}>X</span></div>
            <p>{content}</p>
        </div>
    </div>
  )


export default Modal