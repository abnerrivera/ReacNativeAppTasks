const getTasks = async () => {
  //la peticion al estar en local debe apuntar a la ip del pc para que sea reconocida
  const response = await fetch('http://MIIP/tasks');
  const data = await response.json();
  return data;
};