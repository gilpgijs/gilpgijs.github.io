(() => {
  const lo = console.log;
  const err = console.error;
  console.log = (...arguments) => {
    lo.apply(null, arguments);
    const div = document.createElement("div");
    div.textContent = arguments.join(" ");
    document.body.append(div);
  }
  console.error = (...arguments) => {
    err.apply(null, arguments);
    const div = document.createElement("div");
    div.textContent = arguments.join(" ");
    document.body.append(div);
  }
<<<<<<< HEAD
})();
=======
})();
>>>>>>> f95a88dbb0ec8c32966249ce4b04b9b1470df007
