const respuesta = await question(
 `Recomiendo artistas por género.
Selecciona:
1 - Pop
2 - Reguetón
Introduce número: `)
if (respuesta === "1") {
 await log("Ariana Grande.")
} else if (respuesta === "2") {
 await log("Bad Bunny.")
}
await log("Adios.")