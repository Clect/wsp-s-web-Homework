var data =[
  {
    img: './img/best/1.jpg',
    title: 'Bunny<br />By Simon Smith<br />Product ID：10001',
    Description: 'Description: <br />没想好先空着',
    price: 'Price：AU$150',
    ShippingInformation: '-Only available to ship to Australia, not shipping to other countries.<br />-Free Delievery to any region in Australia if purchase amount exceed $100!<br />-Charge $8 for delievery if purchase amount under $100.'
  },{
    img: './img/best/2.jpg',
    title: 'Budda<br />By Simon Smith<br />Product ID：10001',
    Description: 'Description: <br />没想好先空着',
    price: 'Price：AU$230',
    ShippingInformation: '-Only available to ship to Australia, not shipping to other countries.<br />-Free Delievery to any region in Australia if purchase amount exceed $100!<br />-Charge $8 for delievery if purchase amount under $100.'
  },{
    img: './img/best/3.jpg',
    title: 'Caribbean<br />By Simon Smith<br />Product ID：10001',
    Description: 'Description: <br />没想好先空着',
    price: 'Price：AU$150',
    ShippingInformation: '-Only available to ship to Australia, not shipping to other countries.<br />-Free Delievery to any region in Australia if purchase amount exceed $100!<br />-Charge $8 for delievery if purchase amount under $100.'
  },{
    img: './img/best/4.jpg',
    title: 'Dollar dog<br />By Simon Smith<br />Product ID：20001',
    Description: 'Description: <br />没想好先空着',
    price: 'Price：AU$35',
    ShippingInformation: '-Only available to ship to Australia, not shipping to other countries.<br />-Free Delievery to any region in Australia if purchase amount exceed $100!<br />-Charge $8 for delievery if purchase amount under $100.'
  },{
    img: './img/best/5.jpg',
    title: 'Bunny By Royce Allen<br />By Simon Smith<br />Product ID：20002',
    Description: 'Description: <br />没想好先空着',
    price: 'Price：AU$30',
    ShippingInformation: '-Only available to ship to Australia, not shipping to other countries.<br />-Free Delievery to any region in Australia if purchase amount exceed $100!<br />-Charge $8 for delievery if purchase amount under $100.'
  },{
    img: './img/best/6.jpg',
    title: 'Bunny By Royce<br />By Simon Smith<br />Product ID：20003',
    Description: 'Description: <br />没想好先空着',
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