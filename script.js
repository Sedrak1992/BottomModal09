function h1Title(props) {
  const h1 = document.createElement("h1");
  h1.className = props.className;
  h1.innerText = props.tekst;
  props.container.append(h1);
  return h1;
}
const title = h1Title({
  tekst: "Bottom Modal",
  container: document.body,
});

function add(props) {
  const buttonAdd = document.createElement("button");
  buttonAdd.className = props.className;
  buttonAdd.innerText = props.addBtn;
  props.container.append(buttonAdd);
  return buttonAdd;
}
const opnBtn = add({
  className: "a",
  addBtn: "Open model",
  container: document.body,
});

function backgroundDiv(props) {
  const backgroundDivBox = document.createElement("div");
  backgroundDivBox.className = props.className;
  props.container.append(backgroundDivBox);
  return backgroundDivBox;
}
const transparency = backgroundDiv({
  container: document.body,
});

function btss(props) {
  const div = document.createElement("div");
  div.className = props.className;
  props.container.appendChild(div);
  return div;
}
const divBox = btss({
  className: "model addd",
  container: document.body,
});

function btss1(props) {
  const div = document.createElement("div");
  div.className = props.className;
  props.container.appendChild(div);
  return div;
}
const divBox1 = btss({
  className: "model1",
  container: divBox,
});

function btss2(props) {
  const div = document.createElement("div");
  div.className = props.className;
  props.container.appendChild(div);
  return div;
}
const divBox2 = btss2({
  className: "model2",
  container: divBox,
});

function h2Title(props) {
  const h2 = document.createElement("h2");
  h2.className = props.className;
  h2.innerText = props.tekst;
  props.container.appendChild(h2);
  return h2;
}
const title2 = h2Title({
  className: "h2vernagir",
  tekst: "Modal Header",
  container: divBox1,
});
function cretOpnBtn(props) {
  const button = document.createElement("button");
  button.className = props.className;
  button.innerText = props.tox;
  props.container.appendChild(button);
  return button;
}
const closBtn = cretOpnBtn({
  className: "clozbtn",
  tox: " X ",
  container: divBox1,
});

function paragraf(props) {
  const p = document.createElement("p");
  p.innerText = props.tekst;
  p.className = props.className;
  props.container.appendChild(p);
  return p;
}
const title3 = paragraf({
  className: "aa",
  tekst: "Some text in the Modal Body",
  container: divBox2,
});

function paragraf(props) {
  const p = document.createElement("p");
  p.className = props.className;
  p.innerText = props.tekst;
  props.container.appendChild(p);
  return p;
}
const title4 = paragraf({
  className: "ssd",
  tekst: "Some other text...",
  container: divBox2,
});
function futer(props) {
  const div = document.createElement("div");
  div.className = props.className;
  props.container.appendChild(div);
  return div;
}
const modalFutem = futer({
  className: "futer",
  container: divBox,
});

function futers(props) {
  const h2 = document.createElement("h2");
  h2.className = props.className;
  h2.innerText = props.tekst;
  props.container.appendChild(h2);
  return h2;
}
const futerText = futers({
  className: "h2vernagir",
  tekst: "Modal Futter",
  container: modalFutem,
});

const toggleModal = () => {
  divBox.classList.toggle("addd");
  transparency.classList.toggle("transparencyBody");
  opnBtn.classList.toggle("transparencyBodyBtn");
};
transparency.onclick = toggleModal
  
closBtn.onclick = toggleModal;

opnBtn.onclick = toggleModal;
