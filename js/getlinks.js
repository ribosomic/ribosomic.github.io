import data from '/json/links.json' assert { type: 'json' };

console.log(data);

for(var i = 0; i < data.length; i++) {
    var link = document.createElement("a");
  
    link.innerHTML = data[i].display;
    link.href = document.URL.concat('/').concat(data[i].page);
  
    document.body.appendChild(link);
}
