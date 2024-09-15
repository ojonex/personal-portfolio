import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState("London, UK");
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
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchParams;
