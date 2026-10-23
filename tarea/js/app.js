async function mostrarPosts() {
  const lista = document.querySelector("#posts");
  try {
    // 1. fetch a la URL de las publicaciones del usuario 1
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
    if (!res.ok) throw new Error("No se encontró la información");
    // 2. convertir la respuesta a JSON
    const posts = await res.json();
    // 3. mostrar los títulos con map, join e innerHTML
    lista.innerHTML = posts
      .map(p => `<li>${p.title}</li>`)
      .join("");
  } catch (error) {
    // 4. mensaje de error
    lista.innerHTML = "<li>No se pudo cargar la información</li>";
  }
}
mostrarPosts();