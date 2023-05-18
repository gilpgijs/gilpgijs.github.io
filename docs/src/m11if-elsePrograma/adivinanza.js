const respuesta = await question(
 `Agua pasa por mi casa
cate de mi corazón.
Adivina (en minúsculas): `);
if (respuesta === "el aguacate") {
 await log("Bien.");
} else {
 await log("Mal.");
}
await log("Adios.")