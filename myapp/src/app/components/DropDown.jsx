// Gurjots Component Lets go, i love coding, i am the lebron of this coding shit 

export default function DropDownComponent(){




    return(
        <div className="dropDown" 

        style={
            {
                color: "white",
                border: "1px solid white",
                maxWidth: "200px"
            }
        }
        
        >

            <label for="menu">Dropdown</label>
            <select id="menu1" name="options">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
            </select>

        </div>
    )
}
