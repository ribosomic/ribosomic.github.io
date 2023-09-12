var data = [
 {
   "display": "404 Page Test",
   "page": "404"
 }
]

console.log(data);

for(var i = 0; i < data.length; i++) {
    var link = document.createElement("a");
  
    link.innerHTML = data[i].display;
    link.href = document.URL.concat(data[i].page);
  
    document.body.appendChild(link);
}
