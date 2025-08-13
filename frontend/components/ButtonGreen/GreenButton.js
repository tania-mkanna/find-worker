import "./GreenButton.css"
export function GreenButton ({lable,className,onClick}){

    return(
        <button className={`btn1 ${className}`} onClick={onClick}>
        {lable}
        </button>
    );

    

}