function Button({handleClick ,buttonName }){
    return(
        <button onClick={handleClick}>{buttonName}</button>
    )
}

export default Button