var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Web Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Designer')
    .pauseFor(2500)
    .deleteChars(8)
    .typeString('Creative')
    .pauseFor(2500)
    .start();