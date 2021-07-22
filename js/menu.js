var nav = document.createElement('nav');
nav.innerHTML = `        <ul>
<li><a href="index.html">Inicio</a></li>
<li><a href="">Link1</a></li>
<li><a href="link2.html">Link2</a></li>
<li><a href="">Link3</a></li>
<li><a href="">Link4</a></li>

</ul>`;
document.body.insertBefore(nav, document.body.firstChild);


var contenido = document.getElementsByClassName('contenido')[0];
var hr = document.createElement('hr');
contenido.insertBefore(hr, contenido.children[1]);


let div = document.createElement('div');
div.classList.add('seccion') // div.className = 'seccion'
let h3 = document.createElement('h3')
h3.innerText = "Seccion";
div.appendChild(h3);
document.body.insertBefore(div, document.body.children[2]);

var ul = document.getElementsByTagName("ul")[0];
ul.innerHTML += ' <li><a href="">Link 5</a></li>';

let uld = document.getElementsByTagName('ul')[0]
for (let index = 0; index < 2; index++) {
    //uld.removeChild(uld.lastElementChild);
}
// uld.removeChild(uld.children[uld.children.length - 1]);
// uld.removeChild(uld.children[uld.children.length - 1]);

var datat = [{
        a: "q",
        b: "e",
        c: "t"
    },
    {
        a: "y",
        b: "i",
        c: "l"
    },
    {
        a: "r",
        b: "5",
        c: "f"
    }
];
var seccion = document.getElementsByClassName('seccion')[0];
var trs = "";
for (let index = 0; index < datat.length; index++) {
    const element = datat[index];
    trs += `<tr>
    <td>${element.a}</td>
    <td>${element.b}</td>
    <td>${element.c}</td>
</tr>`
}

// seccion.innerHTML += `<table>
// <thead>
//     <th>Col 1</th>
//     <th>Col 2</th>
//     <th>Col 3</th>
// </thead>
// <tbody>
//     ${trs}
// </tbody>
// </table>
// `;

var table = document.createElement('table'); // <table></table>
table.innerHTML = `<thead>
<th>Col 1</th>
<th>Col 2</th>
<th>Col 3</th>
</thead>
<tbody>
${trs}
</tbody>
`;
seccion.appendChild(table);
var btn = document.createElement('button');
btn.innerText = 'Go';
seccion.appendChild(btn);