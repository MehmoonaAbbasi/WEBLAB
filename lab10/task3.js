function addNewClass() {
  let para = document.getElementById("myPara");
  const style = document.createElement("style");
  style.innerHTML = `
    .secondClass {
      background-color: green;
      font-weight: bold;
      padding: 10px;
      color: white;
    }`;
  document.head.append(style);
  para.classList.add("secondClass");

  console.log("New class added!");
}
