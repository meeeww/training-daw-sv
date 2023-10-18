window.onload = async function () {
  console.log("document loaded");

  try {
    const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Hubo un error al realizar la solicitud:", error);
  }
};
