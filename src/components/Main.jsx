import "../styles/Main.css";

function Main({ setDisplay, fetchData }) {
  return (
    <>
      <div className="card text-center">
        <div className="card-header">Fetch Your Profile !!</div>
        <div className="card-body">
          <button
            href="#"
            className="btn btn-primary"
            onClick={() => {
              setDisplay("ProfileCard");
              fetchData();
            }}>
            Fetch Profile!!
          </button>
        </div>
      </div>
    </>
  );
}

export default Main;
