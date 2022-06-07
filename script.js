const createElement = (element, props) => {
  const el = document.createElement(element);
  el.className = props.className;
  if (props.innerText) {
    el.innerText = props.innerText;
  }
  return el;
}

const title = createElement("h1", { innerText: "Bottom Modal" });
document.body.append(title);

const opnBtn = createElement("button", {
  className: "a",
  innerText: "Open model",
});
document.body.append(opnBtn);

const transparency = createElement("div", {});
document.body.append(transparency);

const divBox = createElement("div", { className: "model addd" });
document.body.append(divBox);

const divBox1 = createElement("div", { className: "model1" });
divBox.appendChild(divBox1);

const divBox2 = createElement("div", { className: "model2" });
divBox.appendChild(divBox2);

const title2 = createElement("h2", {
  className: "h2vernagir",
  innerText: "Modal Header",
});
divBox1.appendChild(title2);

const closBtn = createElement("button", {
  className: "clozbtn",
  innerText: "X",
});
divBox1.appendChild(closBtn);

const title3 = createElement("p", {
  className: "aa",
  innerText: "Some text in the Modal Body",
});
divBox2.appendChild(title3);

const title4 = createElement("p", {
  className: "ssd",
  innerText: "Some other text...",
});
divBox2.appendChild(title4);

const modalFutem = createElement("div", { className: "futer" });
divBox.appendChild(modalFutem);

const futerText = createElement("h2", {
  className: "h2vernagir",
  innerText: "Modal Futter",
});
modalFutem.appendChild(futerText);

const toggleModal = () => {
  divBox.classList.toggle("addd");
  transparency.classList.toggle("transparencyBody");
  opnBtn.classList.toggle("transparencyBodyBtn");
};
transparency.onclick = toggleModal;

closBtn.onclick = toggleModal;

opnBtn.onclick = toggleModal;
