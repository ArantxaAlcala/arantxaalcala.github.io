let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #d940b3;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #d940b3;">Estudiante de Ingeniería en Diseño Mecánico Aeronáutico.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
