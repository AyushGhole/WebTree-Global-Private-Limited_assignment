import { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard.jsx";
import Main from "./components/Main.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // API URL Declaration
  const givenApi = "https://randomuser.me/api/?page=1&results=1&seed=abc";

  // Use of useState For storing API Data
  let [display, setDisplay] = useState("main");
  let [firstName, setfirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [gender, setGender] = useState("");
  let [imageUrl, setImageUrl] = useState("");
  let [phone, setPhone] = useState("");
  let [street, setStreet] = useState("");
  let [city, setCity] = useState("");
  let [state, setState] = useState("");
  let [country, setCountry] = useState("");
  let [code, setCode] = useState("");

  // Function for Fetching API data
  let fetchData = async () => {
    let response = await fetch(givenApi);
    let jasonResponse = await response.json();
    setfirstName(jasonResponse.results[0].name.first);
    setLastName(jasonResponse.results[0].name.last);
    setGender(jasonResponse.results[0].gender);
    setImageUrl(jasonResponse.results[0].picture.large);
    setPhone(jasonResponse.results[0].phone);
    setStreet(jasonResponse.results[0].location.street.name);
    setCity(jasonResponse.results[0].location.city);
    setState(jasonResponse.results[0].location.state);
    setCountry(jasonResponse.results[0].location.country);
    setCode(jasonResponse.results[0].location.postcode);
  };
  return (
    <>
      {display === "main" ? (
        <Main setDisplay={setDisplay} fetchData={fetchData} />
      ) : (
        ""
      )}
      {display === "ProfileCard" ? (
        <ProfileCard
          firstName={firstName}
          lastName={lastName}
          gender={gender}
          imageUrl={imageUrl}
          phone={phone}
          street={street}
          city={city}
          state={state}
          country={country}
          code={code}
          setDisplay={setDisplay}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
