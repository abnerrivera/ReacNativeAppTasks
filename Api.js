
const API = 'http://MIIP/tasks'

export const getTasks = async () => {
  //la peticion al estar en local debe apuntar a la ip del pc para que sea reconocida
  const response = await fetch(API);
  return response.json();
};