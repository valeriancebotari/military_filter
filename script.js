 const militaryVehicles = [
   {
     id: 1,
     name: "AMX Tank",
     category: "tanks",
     price: 10,
     img: "./images/amx_tank.jpg",
     details: `AMX Tank Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison bulb yuccie microdosing.`,
   },
   {
     id: 2,
     name: "Eurofighter Jet",
     category: "jets",
     price: 15.99,
     img: "./images/eurofighter_jet.jpg",
     details: `Eurofighter Jet Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison bulb yuccie microdosing.`,
   },
   {
     id: 3,
     name: "Armoured A1B1",
     category: "armoured",
     price: 3.55,
     img: "./images/armoured1_av.jpg",
     details: `A1B1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison bulb yuccie microdosing.`,
   },
   {
     id: 4,
     name: "Armoured Helix",
     category: "armoured",
     price: 3.89,
     img: "./images/armoured2_av.jpg",
     details: `Armoured Helix Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison bulb yuccie microdosing.`,
   },
   {
     id: 5,
     name: "F-16 Jet",
     category: "jets",
     price: 13.4,
     img: "./images/f16_jet.jpg",
     details: `F-16 Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison bulb yuccie microdosing.`,
   },
   {
     id: 6,
     name: "F-22 Jet",
     category: "jets",
     price: 18,
     img: "./images/f22_jet.jpg",
     details: `F-22 Jet - Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison bulb yuccie microdosing.`,
   },
   {
     id: 7,
     name: "T-55 Tank",
     category: "tanks",
     price: 4.99,
     img: "./images/t55_tank.jpg",
     details: `T-55 Tank - Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison bulb yuccie microdosing.`,
   },
   {
     id: 8,
     name: "T-90 Tank",
     category: "tanks",
     price: 8.29,
     img: "./images/t90_tank.jpg",
     details: `T-90 Tank - Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison bulb yuccie microdosing.`,
   },
   {
     id: 9,
     name: "Armoured Husky",
     category: "armoured",
     price: 3.6,
     img: "./images/armoured3_av.jpg",
     details: `Armoured Husky - Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison bulb yuccie microdosing.`,
   },
   {
     id: 10,
     name: "Centurion Tank",
     category: "tanks",
     price: 12.09,
     img: "./images/centurion_tank.jpg",
     details: `Tank Centurion - Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison bulb yuccie microdosing.`,
   },
   {
     id: 11,
     name: "F-35 Jet",
     category: "jets",
     price: 20.09,
     img: "./images/f35_jet.jpg",
     details: `F-35 Jet - Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison bulb yuccie microdosing.`,
   },
   {
     id: 12,
     name: "Armoured Falcon",
     category: "armoured",
     price: 4.1,
     img: "./images/armoured4_av.jpg",
     details: `Falcon Armoured Vehicle - Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison yuccie micro.`,
   },
   {
     id: 13,
     name: "Leopard Tank",
     category: "tanks",
     price: 11.53,
     img: "./images/leopard_tank.jpg",
     details: `Leopard Tank - Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison bulb yuccie microdosing.`,
   },
   {
     id: 14,
     name: "Patriot Air Defence",
     category: "air-defence",
     price: 5.22,
     img: "./images/patriot_air.webp",
     details: `Patriot Air Defence - Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison bulb yuccie microdosing.`,
   },
   {
     id: 15,
     name: "S-300 System",
     category: "air-defence",
     price: 3.17,
     img: "./images/s300_air.jpg",
     details: `S-300 Air Defence - Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure dignissimos aperiam perspiciatis. Live-edge lyft af, edison bulb yuccie microdosing.`,
   },
 ];

 const sectionCenter = document.querySelector('.section-center');
 const btnContainer = document.querySelector('.btn-container');

 window.addEventListener('DOMContentLoaded', function(){
     displayMilitaryItems(militaryVehicles);
     displayMilitaryButtons();    
 }); 

 function displayMilitaryItems(militaryItems){
   const displayMilitary = militaryItems.map(function(item){
     return `<article class="military-item">
               <img src=${item.img} class="photo-armour" alt=${item.name}>
               <div class="item-info">
                 <header>
                   <h4>${item.name}</h4>
                   <h4 class="price">$${item.price}M</h4>
                 </header>   
                 <p class="item-text">${item.details}</p>           
               </div>
             </article>`;
   }).join('');

   sectionCenter.innerHTML = displayMilitary;
 } // end function displayMilitaryItems


 function displayMilitaryButtons(){
   const categories = militaryVehicles.reduce(function(values, item){
     if(!values.includes(item.category)){
         values.push(item.category);
     }
       return values;
   },['all']);    

   const categoryBtns = categories.map(function(categoryItem){
     return `<button class="filter-btn" type="button" data-id=${categoryItem}>${categoryItem}</button>`;
   }).join('');

   btnContainer.innerHTML = categoryBtns;
   const filterBtns = document.querySelectorAll('.filter-btn');       

   filterBtns.forEach(function(btn){
     btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id;
        const categoryList = militaryVehicles.filter(function(item){
          if (category === item.category){
            return item;
          }
        });
     
        if(category === 'all'){
          displayMilitaryItems(militaryVehicles);
        }
        else {
          displayMilitaryItems(categoryList);
        } 
     }); // end btn event listener
   }); // end filterBtns
 } // end function displayMilitaryButtons

