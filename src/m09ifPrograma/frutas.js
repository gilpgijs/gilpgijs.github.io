const fruta =
 await question("¿Qué fruta prefieres? ")
if (fruta === "pera") {
 await log(
  "El que es 🍐, desespera.")
}
await log("Tu fruta:", fruta)