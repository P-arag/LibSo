let upAnim = anime({
  targets: [".title", ".input-container", ".submit"],
  translateY: ["20vh", 0],
  easing: "easeOutElastic(1, 0.6)",
  delay: anime.stagger(120),
});

let ball1Anim = anime({
  targets: ".ball1",
  translateY: "50vh",
  duration: 500,
  loop: 2,
  direction: "alternate",
  easing: "easeInCubic",
});

let ball2Anim = anime({
  delay: 100,
  targets: ".ball2",
  rotate: "1turn",
  borderRadius: 0,
  easing: "easeInOutQuad",
  direction: "alternate",
  loop: 3,
});
document.querySelector(".submit").addEventListener("click", () => {
  login();
});

function login() {
  let uname = document.querySelector("#uname").value;
  let password = document.querySelector("#pass").value;

  if (uname != "p" || password != "12") {
    alert("Invalid Username or password!!");
    document.querySelector("#uname").value = "";
    document.querySelector("#pass").value = "";
  } else {
    window.location.href = "./index.html";
    console.log("redirrrrrrr");
  }
}
