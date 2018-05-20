var data =[
  {
    img: '../img/pro/1.jpg',
    title: 'Budda<br />By Simon Smith<br />Product ID：10001',
    Description: 'Description: <br />The most popular ‘Budda’ print especially within the Asia region. It represents a combination of tradition and popular culture together. It presents the most popular meme on a new lifestyle.',
    price: 'Price：AU$230',
    ShippingInformation: '-Only available to ship to Australia, not shipping to other countries.<br />-Free Delievery to any region in Australia if purchase amount exceed $100!<br />-Charge $8 for delievery if purchase amount under $100.'
  },{
    img: '../img/pro/2.jpg',
    title: 'Bunny<br />By Simon Smith<br />Product ID：10002',
    Description: 'Description: <br />The pink bunny is one of the most popular design for the computer. The colour pink is favoured by most of girls and the bunny print gives life to it.',
    price: 'Price：AU$150',
    ShippingInformation: '-Only available to ship to Australia, not shipping to other countries.<br />-Free Delievery to any region in Australia if purchase amount exceed $100!<br />-Charge $8 for delievery if purchase amount under $100.'
  },{
    img: '../img/pro/3.jpg',
    title: 'Caribbean<br />By Simon Smith<br />Product ID：10003',
    Description: 'Description: <br />Caribbean” is a very popular computer. Its design inspiration comes from the movie “Pirates of the Caribbean.',
    price: 'Price：AU$150',
    ShippingInformation: '-Only available to ship to Australia, not shipping to other countries.<br />-Free Delievery to any region in Australia if purchase amount exceed $100!<br />-Charge $8 for delievery if purchase amount under $100.'
  },{
    img: '../img/pro/4.jpg',
    title: 'Dollar dog<br />By Royce Allen<br />Product ID：20001',
    Description: 'Description: <br />Doggie on the Dollar<br />Hundred Dollars, Lovely doggie, Rich life',
    price: 'Price：AU$35',
    ShippingInformation: '-Only available to ship to Australia, not shipping to other countries.<br />-Free Delievery to any region in Australia if purchase amount exceed $100!<br />-Charge $8 for delievery if purchase amount under $100.'
  },{
    img: '../img/pro/5.jpg',
    title: 'Garfield <br />By Royce Allen<br />Product ID：20002',
    Description: 'Description: <br />When Garfield meet The Scream<br />Fiery sky, Blue fjord, Black spider, Screaming Garfield',
    price: 'Price：AU$30',
    ShippingInformation: '-Only available to ship to Australia, not shipping to other countries.<br />-Free Delievery to any region in Australia if purchase amount exceed $100!<br />-Charge $8 for delievery if purchase amount under $100.'
  },{
    img: '../img/pro/6.jpg',
    title: 'Marvel<br />By Royce Allen<br />Product ID：20003',
    Description: 'Description: <br />Marvel is the most popular comic brand in the word. This case is designed for the fans of Marvel. ',
    price: 'Price：AU$45',
    ShippingInformation: '-Only available to ship to Australia, not shipping to other countries.<br />-Free Delievery to any region in Australia if purchase amount exceed $100!<br />-Charge $8 for delievery if purchase amount under $100.'
  },
];

$(function(){
  var n = location.search.match(/\d/)[0];
  var pInfo = data[+n - 1];
  var img = '<img class="" src="' + pInfo.img + '" />';
  var title = pInfo.title;
  var Description = pInfo.Description;
  var price = pInfo.price;
  var info = pInfo.ShippingInformation;
  $('.productImg').prepend(img);
  $('.productTitle').prepend(title);
  $('.productDescription').prepend(Description);
  $('.productPrice').prepend(price);
  $('.productShippingInfo').prepend(info);
});