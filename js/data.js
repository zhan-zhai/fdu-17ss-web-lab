function createHtml() {
    const countries = [
        { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
        { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
        { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
        { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
    ];

    let container = document.createElement("div");
    container.className = "flex-container justify";

    let div1 = document.createElement("div");
    div1.className = "hero item";
    let div2 = document.createElement("div");
    div2.className = "hero item";
    let div3 = document.createElement("div");
    div3.className = "hero item";
    let div4 = document.createElement("div");
    div4.className = "hero item";

    let d1h1 = document.createElement("h1");
    d1h1.innerHTML = countries[0].name;
    let d1h3 = document.createElement("h3");
    d1h3.innerHTML = countries[0].continent;
    let d1box1 = document.createElement("div");
    d1box1.className = "inner-box";

    let d1box1h2 = document.createElement("h2");
    d1box1h2.innerHTML = "Cities";

    let d1box1ul = document.createElement("ul");
    for (let i = 0;i < countries[0].cities.length;i ++){
        let d1box1ulLi = document.createElement("li");
        d1box1ulLi.innerHTML = countries[0].cities[i];
        d1box1ul.appendChild(d1box1ulLi);
    }
    d1box1.appendChild(d1box1h2);
    d1box1.appendChild(d1box1ul);

    let d1box2 = document.createElement("div");
    d1box2.className = "inner-box justify";
    let d1box2h2 = document.createElement("h2");
    d1box2h2.innerHTML = "Popular Photos";
    let d1box2fig = document.createElement("ul");
    d1box2fig.className = "justify";
    let d1box2li = document.createElement("li");
    for(let i = 0;i < countries[0].photos.length;i ++){
        let d1box2img = document.createElement("img");
        d1box2img.className = "photo";
        d1box2img.src = "./images/" + countries[0].photos[i];
        d1box2li.appendChild(d1box2img);
        d1box2fig.appendChild(d1box2li);
    }
    d1box2.appendChild(d1box2h2);
    d1box2.appendChild(d1box2fig);

    let d1button = document.createElement("button");
    d1button.innerHTML = "Visit";

    div1.appendChild(d1h1);
    div1.appendChild(d1h3);
    div1.appendChild(d1box1);
    div1.appendChild(d1box2);
    div1.appendChild(d1button);


    let d2h1 = document.createElement("h1");
    d2h1.innerHTML = countries[1].name;
    let d2h3 = document.createElement("h3");
    d2h3.innerHTML = countries[1].continent;
    let d2box1 = document.createElement("div");
    d2box1.className = "inner-box";

    let d2box1h2 = document.createElement("h2");
    d2box1h2.innerHTML = "Cities";

    let d2box1ul = document.createElement("ul");
    for (let i = 0;i < countries[1].cities.length;i ++){
        let d2box1ulLi = document.createElement("li");
        d2box1ulLi.innerHTML = countries[1].cities[i];
        d2box1ul.appendChild(d2box1ulLi);
    }
    d2box1.appendChild(d2box1h2);
    d2box1.appendChild(d2box1ul);

    let d2box2 = document.createElement("div");
    d2box2.className = "inner-box justify";
    let d2box2h2 = document.createElement("h2");
    d2box2h2.innerHTML = "Popular Photos";
    let d2box2fig = document.createElement("ul");
    d2box2fig.className = "justify";
    let d2box2li = document.createElement("li");
    for(let i = 0;i < countries[1].photos.length;i ++){
        let d2box2img = document.createElement("img");
        d2box2img.className = "photo";
        d2box2img.src = "./images/" + countries[1].photos[i];
        d2box2li.appendChild(d2box2img);
        d2box2fig.appendChild(d2box2li);
    }
    d2box2.appendChild(d2box2h2);
    d2box2.appendChild(d2box2fig);

    let d2button = document.createElement("button");
    d2button.innerHTML = "Visit";

    div2.appendChild(d2h1);
    div2.appendChild(d2h3);
    div2.appendChild(d2box1);
    div2.appendChild(d2box2);
    div2.appendChild(d2button);


    let d3h1 = document.createElement("h1");
    d3h1.innerHTML = countries[2].name;
    let d3h3 = document.createElement("h3");
    d3h3.innerHTML = countries[2].continent;
    let d3box1 = document.createElement("div");
    d3box1.className = "inner-box";

    let d3box1h2 = document.createElement("h2");
    d3box1h2.innerHTML = "Cities";

    let d3box1ul = document.createElement("ul");
    for (let i = 0;i < countries[2].cities.length;i ++){
        let d3box1ulLi = document.createElement("li");
        d3box1ulLi.innerHTML = countries[2].cities[i];
        d3box1ul.appendChild(d3box1ulLi);
    }
    d3box1.appendChild(d3box1h2);
    d3box1.appendChild(d3box1ul);

    let d3box2 = document.createElement("div");
    d3box2.className = "inner-box justify";
    let d3box2h2 = document.createElement("h2");
    d3box2h2.innerHTML = "Popular Photos";
    let d3box2fig = document.createElement("ul");
    d3box2fig.className = "justify";
    let d3box2li = document.createElement("li");
    for(let i = 0;i < countries[2].photos.length;i ++){
        let d3box2img = document.createElement("img");
        d3box2img.className = "photo";
        d3box2img.src ="./images/" +  countries[2].photos[i];
        d3box2li.appendChild(d3box2img);
        d3box2fig.appendChild(d3box2li);
    }
    d3box2.appendChild(d3box2h2);
    d3box2.appendChild(d3box2fig);

    let d3button = document.createElement("button");
    d3button.innerHTML = "Visit";

    div3.appendChild(d3h1);
    div3.appendChild(d3h3);
    div3.appendChild(d3box1);
    div3.appendChild(d3box2);
    div3.appendChild(d3button);


    let d4h1 = document.createElement("h1");
    d4h1.innerHTML = countries[3].name;
    let d4h3 = document.createElement("h3");
    d4h3.innerHTML = countries[3].continent;
    let d4box1 = document.createElement("div");
    d4box1.className = "inner-box";

    let d4box1h2 = document.createElement("h2");
    d4box1h2.innerHTML = "Cities";

    let d4box1ul = document.createElement("ul");
    for (let i = 0;i < countries[3].cities.length;i ++){
        let d4box1ulLi = document.createElement("li");
        d4box1ulLi.innerHTML = countries[3].cities[i];
        d4box1ul.appendChild(d4box1ulLi);
    }
    d4box1.appendChild(d4box1h2);
    d4box1.appendChild(d4box1ul);

    let d4box2 = document.createElement("div");
    d4box2.className = "inner-box justify";
    let d4box2h2 = document.createElement("h2");
    d4box2h2.innerHTML = "Popular Photos";
    let d4box2fig = document.createElement("ul");
    d4box2fig.className = "justify";
    let d4box2li = document.createElement("li");
    for(let i = 0;i < countries[3].photos.length;i ++){
        let d4box2img = document.createElement("img");
        d4box2img.className = "photo";
        d4box2img.src ="./images/" +  countries[3].photos[i];
        d4box2li.appendChild(d4box2img);
        d4box2fig.appendChild(d4box2li);
    }
    d4box2.appendChild(d4box2h2);
    d4box2.appendChild(d4box2fig);

    let d4button = document.createElement("button");
    d4button.innerHTML = "Visit";

    div4.appendChild(d4h1);
    div4.appendChild(d4h3);
    div4.appendChild(d4box1);
    div4.appendChild(d4box2);
    div4.appendChild(d4button);


    container.appendChild(div1);
    container.appendChild(div2);
    container.appendChild(div3);
    container.appendChild(div4);
    document.body.appendChild(container);

}
createHtml();