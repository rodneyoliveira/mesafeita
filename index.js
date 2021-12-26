const url = "https://www.mesafeita.com.br/xml/ec834/facebook.xml";

let api = fetch(url)
.then(response => response.text())
.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
.then(data => {
    const itens = data.querySelectorAll('item');
    let html = ``;
    itens.forEach((el, index) => {
       // console.log(el)
        html += `
        <article id=${index}>
        <div class="imagem">
         <img src="${el.querySelector("image_link").innerHTML}" alt="${el.querySelector("title").innerHTML.replace(/<!\[CDATA\[(.*)\]\]>/g, "$1")}" >
        </div>
        <div class="titulo_produto">
         <p>${el.querySelector("title").innerHTML.replace(/<!\[CDATA\[(.*)\]\]>/g, "$1")}<br>Código: ${index}</p>
        </div>
        <div class="corpo_produto">
         <p>${el.querySelector("description").innerHTML.replace(/<!\[CDATA\[(.*)\]\]>/g, "$1")}</p>
        </div>
        </article>
        
        `;
    });
//document.body.insertAdjacentHTML("beforeend", html);

document.getElementById("app").innerHTML = html;
});

