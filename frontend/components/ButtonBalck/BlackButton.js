import "./BlackButton.css"

export function BlackButton({lable,className,onClick,type="submit"}){
    return(
        <button className="btn2" onClick={onClick} type={type}>
        {lable}
        </button>
    );
    

}