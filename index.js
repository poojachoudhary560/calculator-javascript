import './style.css';
/*
document.getElementById("app").innerHTML = `

`; */
function enterKey(e) {
  // console.log(e, document.getElementById("result").innerHTML);
  // let res = document.getElementById('result')
  document.getElementById('result').innerHTML =
    document.getElementById('result') + e;
}
