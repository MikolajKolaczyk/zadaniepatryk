

function Button () {
    
    const styles = {
            backgroundColor: "lightblue",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
    }

    const handleClick = (e) => e.target.textContent = "aha spoko";

        {/*const handleClick2 = (name) => console.log(`${"bro"} stop clicking me`)
        onClick={() => handleClick2("bro")}
        dalej to wywołanie w koswoli po kliknięci "name" w tym przypadku "bro"
        */}

    return (
        <button onClick={ (e) => handleClick(e)} style={styles}>Click me</button>
    );
}

export default Button