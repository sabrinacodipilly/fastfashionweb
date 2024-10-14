/* .js files add interaction to your website */
var factList = [ 
    "Clothing production is the third biggest manufacturing industry after the automotive and technology industries. Textile production contributes more to climate change than international aviation and shipping combined (House of Common Environmental Audit Committee, 2019)", 
    "More than $500 billion of value is lost every year due to clothing underutilization and the lack of recycling (Ellen MacArthur Foundation, 2017)", 
    "Fast fashion brands like Fashion Nova, Boohoo, Revolve, Pretty Little Thing and Forever 21 all score less than 10% on the Fashion Transparency Index (Fashion Transparency Index, 2020)", 
    "One in three young women, the biggest segment of consumers, consider garments worn once or twice to be old (The Guardian, 2019)", 
    "The average American throws away around 81 pounds of clothing yearly (Saturday Evening Post, 2018)", 
    "Less than 11% of brands are implementing recycling strategies for their items (Peppermint Magazine, 2019)", 
    "Three out of five fast fashion items end up in a landfill (Clean Clothes Campaign, 2019)", 
    "Washing, solvents, and dyes used in manufacturing are responsible for one-fifth of industrial water pollution (McKinsey, 2020)", 
    "Nearly 70 million barrels of oil are used each year to make the world’s polyester fiber, which is now the most commonly used fiber in our clothing. But it takes more than 200 years to decompose.” (Forbes, 2015)"
  ]
  var fact = document.getElementById("fact");
  var factBtn = document.getElementById("factButton");
  var count = 0;
  
  if (factButton) {
    factButton.addEventListener("click", displayFact);
  }
  
  function displayFact() {
    fact.innerHTML = factList[count];
    count++;
    if (count == factList.length) {
      count = 0;
    }
  }