console.log (`hello there!`);

const products = [
    {
      name: `X-Wing`,    
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/xwing.jpg`,
      cost: 40000000,
      category: `Rebellion`
    },{
      name: `Star Destroyer`,
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/stardestroyer.jpg`,
      cost: 400000000, 
      category: `Imperial`
    },{
      name: `Tie Fighter`,
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/tiefighter.jpg`,
      cost: 400000000, 
      category: `Unk`
    },{
      name: `X-Wing`,    
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/2rv72ntt7ff21.jpg`,
      cost: 40000000,
      category: `Rebellion`
    },{
      name: `Star Destroyer`,
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/19ef02a662df79154005e0d42d8b3936299e329f_hq.jpg`,
      cost: 400000000, 
      category: `Imperial`
    },{
      name: `Tie Fighter`,
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/23c12173479b8a32121d994e7320fde0.jpg`,
      cost: 400000000, 
      category: `Unk`
    },{
      name: `X-Wing`,    
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/68-684023_star-wars-star-wars-snow-speeder.png`,
      cost: 40000000,
      category: `Rebellion`
    },{
      name: `Star Destroyer`,
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/571f807c8b96c-1440x564_c.jpg`,
      cost: 400000000, 
      category: `Imperial`
    },{
      name: `Tie Fighter`,
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/c57f5465ebc51b8794f4137a91263337.jpg`,
      cost: 400000000, 
      category: `Unk`
    },{
      name: `X-Wing`,    
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/dart54.jpg`,
      cost: 40000000,
      category: `Rebellion`
    },{
      name: `Star Destroyer`,
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/starbc52-1067x600.jpg`,
      cost: 400000000, 
      category: `Imperial`
    },{
      name: `Tie Fighter`,
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/xwing.jpg`,
      cost: 400000000, 
      category: `Unk`
    },{
      name: `X-Wing`,    
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/Millennium-Falcon-1070x535.jpeg`,
      cost: 40000000,
      category: `Rebellion`
    },{
      name: `Star Destroyer`,
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/secutor94.jpg`,
      cost: 400000000, 
      category: `Imperial`
    },{
      name: `Tie Fighter`,
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/u8ad69gldquy.jpg`,
      cost: 400000000, 
      category: `Unk`
     },{
      name: `X-Wing`,    
      colour: `Grey`,
      condition: `Brand New`,
      prvOwner: `Ashoka Tano`,
      image: `imgs/ZZ6538A402.jpg`,
      cost: 40000000,
      category: `Rebellion`
      }
  ]
  


function getProductAsHtmlString(prod) {

    // If the cost of a course is less than $1000, tell the user this is a "GREAT DEAL!"
  
return `
<div class="item">
<li class="itemarea">
  <a href="itempage.html" class="clickitem">
  <div class="photo">
    <img width="250px" src="${prod.image}" alt="xwing">
  </div>
  <a href="itempage.html" class="itemname">
    ${prod.name}
  </a>
  <span class="price">
    <strong>
    ${prod.cost}
    </strong>
  </span>
  </a>
  <p class="detail-prod">Colour: <strong>${prod.colour}</strong></p>
  <p class="detail-prod">Previous Owner: <strong>${prod.prvOwner}</strong></p>
  <p class="detail-prod">Condition: <strong>${prod.condition}</strong></p>
</li>
</div>`;
}





function renderProducts(arr) {
document.getElementById(`products`).innerHTML = arr.map(getProductAsHtmlString).join(``)
;
}

renderProducts(products);




/***************Search Bar*****************/

function isMatchingName(prodNme) {
    // Trim the input of white space, then uppercase it, then check if it's included
    if (prodNme.name.toUpperCase().includes(this.trim().toUpperCase())) {
      return true;
    } else {
      return false;
    }
  }

function loadProductByName(event) {
    const nameImSearchingFor = event.target.value; // Get the value from the field
    renderProducts(products.filter(isMatchingName, nameImSearchingFor));
  }


document.getElementById('productName').addEventListener('input', loadProductByName);

