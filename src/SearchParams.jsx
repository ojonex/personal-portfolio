import { useState } from "react";
const ANIMALS = ["bird", "cat", "dinosaur", "reptile", "dog", "tiger", "fish"];

const SearchParams = () => {
  const [location, setLocation] = useState("London, UK");
  const [animal, setAnimal] = useState("Select Animal");
  const [breed, setBreed] = useState("Select Breed");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location" className="form">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <label htmlFor="animal" className="form">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option />
            {Animals.map((animal) => (
              <option key={animal} value={animal}></option>
            ))}
          </select>
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchParams;
