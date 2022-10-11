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

  let p = document.querySelectorAll("P");
  let arr3 = Array.from(p);
  arr3.map((im) => {
    let z = im.innerHTML.toUpperCase();
    console.log(im);

    if (z.match(filter)) {
      document.getElementById("demo").innerHTML = z.match(filter);

      im.style.color = "yellow";
    } else {
      im.style.color = "red";
    }
  });
}
