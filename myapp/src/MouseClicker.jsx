export function MouseClicker({name}){
    function handleButtonClick(event){
       console.log(`Button clicked: ${event.target.name}`)
    }
    function handleImgClick(event){
     console.log(event.target.src)
     event.stopPropagation()
     
        
    }
    return (
        <button name={name} onClick={handleButtonClick}>
        <img onClick ={handleImgClick} src="#" width={30}/>
        Click me {name}</button>
    )
}