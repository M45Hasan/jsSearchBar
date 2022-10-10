function myFunction() {
  let input = document.querySelector("#mySearch");
  let filter = input.value.toUpperCase();

  let ul = document.querySelector("#myMenu");
  let li = ul.querySelectorAll("li");

  let arr = Array.from(li);
  arr.map((item) => {
    let x = item.querySelectorAll("a");
    let arr2 = Array.from(x);
    for (let itm = 0; itm < x.length; itm++) {
      let a = x[itm];
      
      if (a.innerHTML.toUpperCase().search(filter) > -1) {
        a.style.display = "";
      } else {
        a.style.display = "none";
      }
    }
  });
}
