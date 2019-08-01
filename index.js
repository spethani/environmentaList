//creating variables for each country div
var china=$("img.china");
var us=$("img.us");
var india=$("img.india");
var russia=$("img.russia");
var japan=$("img.japan");
var germany=$("img.germany");
var skorea=$("img.skorea");
var iran=$("img.iran");
var canada=$("img.canada");
var sarabia=$("img.sarabia");
var brazil=$("img.brazil");
var mexico=$("img.mexico");
var indonesia=$("img.indonesia");
var safrica=$("img.safrica");
var uk=$("img.uk");
var australia=$("img.australia");
var italy=$("img.italy");
var turkey=$("img.turkey");
var france=$("img.france");
var poland=$("img.poland");

//creating variables for each country text
var chinaText=$("p.china");
var usText=$("p.us");
var indiaText=$("p.india");
var russiaText=$("p.russia");
var japanText=$("p.japan");
var germanyText=$("p.germany");
var skoreaText=$("p.skorea");
var iranText=$("p.iran");
var canadaText=$("p.canada");
var sarabiaText=$("p.sarabia");
var brazilText=$("p.brazil");
var mexicoText=$("p.mexico");
var indonesiaText=$("p.indonesia");
var safricaText=$("p.safrica");
var ukText=$("p.uk");
var australiaText=$("p.australia");
var italyText=$("p.italy");
var turkeyText=$("p.turkey");
var franceText=$("p.france");
var polandText=$("p.poland");

//variable for all images
var allImg=$(".maps img");

//on page load, hide all text
var allText=$(".maps p");
allText.hide();

//variable for donations
var donate=$("#donate");

//click functions for each country picture
china.on("click", function(){
  allImg.show();
  allText.hide();
  china.hide();
  chinaText.show();
  $("div.china").css("border", "1px dashed black");
});
chinaText.on("click", function(){
  china.show();
  chinaText.hide();
});

us.on("click", function(){
  allImg.show();
  allText.hide();
  us.hide();
  usText.show();
  $("div.us").css("border", "1px dashed black");
});
usText.on("click", function(){
  us.show();
  usText.hide();
});

india.on("click", function(){
  allImg.show();
  allText.hide();
  india.hide();
  indiaText.show();
  $("div.india").css("border", "1px dashed black");
});
indiaText.on("click", function(){
  india.show();
  indiaText.hide();
});

russia.on("click", function(){
  allImg.show();
  allText.hide();
  russia.hide();
  russiaText.show();
  $("div.russia").css("border", "1px dashed black");
});
russiaText.on("click", function(){
  russia.show();
  russiaText.hide();
});

japan.on("click", function(){
  allImg.show();
  allText.hide();
  japan.hide();
  japanText.show();
  $("div.japan").css("border", "1px dashed black");
});
japanText.on("click", function(){
  japan.show();
  japanText.hide();
});

germany.on("click", function(){
  allImg.show();
  allText.hide();
  germany.hide();
  germanyText.show();
  $("div.germany").css("border", "1px dashed black");
});
germanyText.on("click", function(){
  germany.show();
  germanyText.hide();
});

skorea.on("click", function(){
  allImg.show();
  allText.hide();
  skorea.hide();
  skoreaText.show();
  $("div.skorea").css("border", "1px dashed black");
});
skoreaText.on("click", function(){
  skorea.show();
  skoreaText.hide();
});

iran.on("click", function(){
  allImg.show();
  allText.hide();
  iran.hide();
  iranText.show();
  $("div.iran").css("border", "1px dashed black");
});
iranText.on("click", function(){
  iran.show();
  iranText.hide();
});

canada.on("click", function(){
  allImg.show();
  allText.hide();
  canada.hide();
  canadaText.show();
  $("div.canada").css("border", "1px dashed black");
});
canadaText.on("click", function(){
  canada.show();
  canadaText.hide();
});

sarabia.on("click", function(){
  allImg.show();
  allText.hide();
  sarabia.hide();
  sarabiaText.show();
  $("div.sarabia").css("border", "1px dashed black");
});
sarabiaText.on("click", function(){
  sarabia.show();
  sarabiaText.hide();
});

brazil.on("click", function(){
  allImg.show();
  allText.hide();
  brazil.hide();
  brazilText.show();
  $("div.brazil").css("border", "1px dashed black");
});
brazilText.on("click", function(){
  brazil.show();
  brazilText.hide();
});

mexico.on("click", function(){
  allImg.show();
  allText.hide();
  mexico.hide();
  mexicoText.show();
  $("div.mexico").css("border", "1px dashed black");
});
mexicoText.on("click", function(){
  mexico.show();
  mexicoText.hide();
});

indonesia.on("click", function(){
  allImg.show();
  allText.hide();
  indonesia.hide();
  indonesiaText.show();
  $("div.indonesia").css("border", "1px dashed black");
});
indonesiaText.on("click", function(){
  indonesia.show();
  indonesiaText.hide();
});

safrica.on("click", function(){
  allImg.show();
  allText.hide();
  safrica.hide();
  safricaText.show();
  $("div.safrica").css("border", "1px dashed black");
});
safricaText.on("click", function(){
  safrica.show();
  safricaText.hide();
});

uk.on("click", function(){
  allImg.show();
  allText.hide();
  uk.hide();
  ukText.show();
  $("div.uk").css("border", "1px dashed black");
});
ukText.on("click", function(){
  uk.show();
  ukText.hide();
});

australia.on("click", function(){
  allImg.show();
  allText.hide();
  australia.hide();
  australiaText.show();
  $("div.australia").css("border", "1px dashed black");
});
australiaText.on("click", function(){
  australia.show();
  australiaText.hide();
});

italy.on("click", function(){
  allImg.show();
  allText.hide();
  italy.hide();
  italyText.show();
  $("div.italy").css("border", "1px dashed black");
});
italyText.on("click", function(){
  italy.show();
  italyText.hide();
});

turkey.on("click", function(){
  allImg.show();
  allText.hide();
  turkey.hide();
  turkeyText.show();
  $("div.turkey").css("border", "1px dashed black");
});
turkeyText.on("click", function(){
  turkey.show();
  turkeyText.hide();
});

france.on("click", function(){
  allImg.show();
  allText.hide();
  france.hide();
  franceText.show();
  $("div.france").css("border", "1px dashed black");
});
franceText.on("click", function(){
  france.show();
  franceText.hide();
});

poland.on("click", function(){
  allImg.show();
  allText.hide();
  poland.hide();
  polandText.show();
  $("div.poland").css("border", "1px dashed black");
});
polandText.on("click", function(){
  poland.show();
  polandText.hide();
});

//donate button functionality
donate.on("click", donateFunction);

function donateFunction(){
  var charities= [
    "https://www.americanforests.org/ways-to-give/help-us-plant/",
    "https://bluemissions.kindful.com/",
    "https://donate.unicefusa.org/page/contribute/help-save-childrens-lives-29161?ms=Referral_MAR_2018_Brand_20180905_UnicefusaOrg_TopDonateButton_none_none&initialms=Referral_MAR_2018_Brand_20180905_UnicefusaOrg_TopDonateButton_none_none&_ga=2.99960214.900507282.1564667424-321226618.1564667424",
    "https://rainforestpartnership.org/?gclid=CjwKCAjwm4rqBRBUEiwAwaWjjAxn4dNyXj8yxh8OQTjGmqZErhcdDuOMmdB4d4oXamF2yQcCxu_FqhoC3uEQAvD_BwE",
    "https://350.org/",
    "https://www.edf.org/",
    "https://www.ucsusa.org/"
  ];
  var randomNum=Math.floor(Math.random()*charities.length);
  window.open(charities[randomNum], "_blank");
}
