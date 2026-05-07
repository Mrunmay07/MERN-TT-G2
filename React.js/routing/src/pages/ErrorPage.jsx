import { useNavigate, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  const navigate = useNavigate()
  console.log(navigate)

  function handleGoBack(){
    navigate(-1)
  }

  return (
    <>
      <h1>Yeh Error Page hai</h1>
      <h2>{error.data}</h2>
      <p>{error.status}</p>
      <h3>{error.statusText}</h3>
      <button onClick={handleGoBack}>Go Back</button>
    </>
  );
}

export default ErrorPage;
