import './Cub.css'
function Cub ({arr,text,func}){
    return(
        <>
        <img src = {arr} alt='картинка'/>
        <button onClick={func}>{text}</button>
        </>
        
    )
}
export default Cub