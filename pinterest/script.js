var arr = [
    {name: "child naruto", image: "https://i.pinimg.com/564x/96/71/aa/9671aac619fa889884a4a635e1169e58.jpg"},
    {name: "naruto", image: "https://i.pinimg.com/564x/0a/5a/d4/0a5ad48884e7b8660792f7e53c47e3c0.jpg" },
    {name: "Team 7", image: "https://i.pinimg.com/564x/64/0e/55/640e551906c73d915548aefbb415d2fd.jpg" },
    {name: "Entry of Itachi", image: "https://i.pinimg.com/564x/73/71/28/73712841408eefb6f5d3bc5e85c5c552.jpg" },
    {name: "naruto and sasuke", image: "https://i.pinimg.com/736x/70/cc/ee/70ccee8a003f3d630a17e34896535d3b.jpg"},
    {name: "naruto shippuden", image: "https://i.pinimg.com/564x/82/69/3e/82693ee38e59d0858d7aff9c721a5644.jpg"},
    {name: "fight", image: "https://i.pinimg.com/564x/90/39/cd/9039cd5be69b80312f15cf1420aa912a.jpg"},
    {name: "fight2", image:"https://i.pinimg.com/564x/3f/0b/01/3f0b018ec8da14288238c221ca048df1.jpg"},
    {name:"Team 7 firse", image:"https://i.pinimg.com/564x/29/79/fe/2979fe1a29c95d33eebbb390f256a7bf.jpg"},
    {name:"kakashi", image:"https://i.pinimg.com/564x/05/63/66/056366105f0a316585d0d41a05da4576.jpg"},
    {name:"minato", image:"https://i.pinimg.com/564x/c9/19/7a/c9197a6e2759988a89a3f4bccc10a3e0.jpg"},
    {name:"rocklee", image:"https://i.pinimg.com/564x/c6/59/da/c659dac3fc4aa192b94e7f77cc49aacc.jpg"},
    {name:"Gaara", image:"https://i.pinimg.com/564x/cf/b1/b9/cfb1b96e2ece66d383a36bcbdb1bf878.jpg"},
    {name:"shikamaru", image:"https://i.pinimg.com/564x/9e/45/a3/9e45a3fc9dbf6db520f53beaa00603bf.jpg"},
    {name:"tobi", image:"https://i.pinimg.com/564x/1f/e3/a3/1fe3a34702723714ca39b845ddc196b4.jpg"},
    {name:"sasuri", image:"https://i.pinimg.com/564x/45/5b/ef/455bef3dec0e09d19e626f6c0ddf35e6.jpg"},
    {name:"jirayasensei", image:"https://i.pinimg.com/564x/f9/2f/4e/f92f4e47db1c2fa9aa6865df6712a42b.jpg"},
    {name:"tobi and rin", image:"https://i.pinimg.com/564x/82/99/03/82990313b92ac5dde9715976c506f3dc.jpg"},
    {name:"Shikamaru and timari", image:"https://i.pinimg.com/564x/ba/27/67/ba27679d04b6a079c6bd996a349d0062.jpg"},
    {name:"hinata", image:"https://i.pinimg.com/564x/00/d2/26/00d2261b4b92ad59a2e64371b08a6be7.jpg"},
    {name:"group", image:"https://i.pinimg.com/564x/20/57/c8/2057c822d9399612d7b692fa9d0db0f0.jpg"},
    {name:"Hokages", image:"https://i.pinimg.com/564x/e0/15/c9/e015c9695e91ecc89c8a2474393c7ac9.jpg"},
    {name:"Tsunade", image:"https://i.pinimg.com/736x/af/3f/12/af3f1206ead941cbcc0a8df0fb2f3b93.jpg"},
    {name:"last", image:"https://i.pinimg.com/736x/7c/2e/81/7c2e8136a12b3a33b585187606a705b9.jpg"}
]

function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })

    document.querySelector(".container")
    .innerHTML = clutter;
}

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    

    input
    .addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block";
    })

    input
    .addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none";
    })

    input
    .addEventListener("input", function(){
        const filteredArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value.toLowerCase()));
        var clutter = " ";
        filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-2 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
        
          
    document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}
showTheCards();
handleSearchFunctionality();