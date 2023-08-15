const InputContact = ({className, type, icon, styleIcon, placeholder, containerStyle}) => {
    return ( 
        <div className={containerStyle}>
            <input type={type} className={className} placeholder={placeholder}/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <label className={styleIcon}>{icon}</label>
        </div>
     );
}
 
export default InputContact;