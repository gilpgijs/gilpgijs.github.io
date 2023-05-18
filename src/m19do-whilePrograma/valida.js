let respuesta = "";
do {
 respuesta = await question(
  `Selecciona:
1 - Pop
2 - Reguetón
Introduce número: `)
} while (respuesta !== "1"
 && respuesta !== "2")
await log("Adios.")