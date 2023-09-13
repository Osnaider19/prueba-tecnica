export async function getData(url) {
  try {
    const res = await fetch(url);
    if (!res) {
      throw new Error("ocurrio un error " + res.status + res.statusText);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
