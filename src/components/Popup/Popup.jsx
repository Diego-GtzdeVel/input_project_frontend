function Popup(props) {
    
    const {onClose, title, children} = props;

    function handleSubmit(event) {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
  }

    return (
        <div className="popup">
            <div className="popup__container">
                {title && <h3 className="popup__title">{title}</h3>}
                {children}
            </div>
        </div>
    )
}

export default Popup;