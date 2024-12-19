import React, {useState} from "react"

type formData = {
  firstname: string,
  lastname: string,
  age: number,
  favoriteFoods:string[]
}

const App = () => {
  const [formData, setFormData] = useState<formData>({
    firstname: "",
    lastname: "",
    age: 0,
    favoriteFoods:[]
  })
  const [showOutput, setShowOutput] = useState(false);
  
  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type, checked} = e.target

    if (type === "checkbox") {
      setFormData(prevState => ({
        ...prevState,
        favoriteFoods: checked
          ? [...prevState.favoriteFoods, value]
          : prevState.favoriteFoods.filter(food => food !== value)
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: type === "number" ? Number(value) : value
      }));
    }
  }

  const handleDisplay = () => {
    setShowOutput(true);
  };

  const handleClear = () => {
    setFormData({
      firstname: "",
      lastname: "",
      age: 0,
      favoriteFoods: []
    });
    setShowOutput(false);
  };


  return (
    <div>
      <h1>User Form</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" name="firstname" onChange={handleForm}
          value={formData.firstname}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" name="lastname" onChange={handleForm}
          value={formData.lastname}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" onChange={handleForm}
          value={formData.age}
          />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input type="checkbox" id="chicken" name="favoriteFoods" value="Chicken" 
              onChange={handleForm}
              checked={formData.favoriteFoods.includes("Chicken")}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input type="checkbox" id="beef" name="favoriteFoods" value="Beef" onChange={handleForm}
            checked={formData.favoriteFoods.includes("Beef")}
            />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input type="checkbox" id="vegetables" name="favoriteFoods" value="Vegetables" onChange={handleForm} checked={formData.favoriteFoods.includes("Vegetable")}/>
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input type="checkbox" id="dessert" name="favoriteFoods" value="Dessert" onChange={handleForm} checked={formData.favoriteFoods.includes("Dessert")}/>
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input type="checkbox" id="pork" name="favoriteFoods" value="Pork" onChange={handleForm} checked={formData.favoriteFoods.includes("Pork")}/>
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button onClick={handleDisplay}>Display User</button>
      <button onClick={handleClear}>Clear</button>

      <div className="output">
        {showOutput && (
          <>
        <p>Hi! My name is{formData.firstname} {formData.lastname}! I am {formData.age} years old. Favorite Foods are {formData.favoriteFoods.join(", ")}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default App
