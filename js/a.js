var data = [
    {
        name: 'Simon Smith',
        img: '../img/Artist/1.jpg',
        Description: 'Hello, everyone!<br />I am the computer designer of Storm<br />Hope you guys like my design!',
        product: [
            '../img/best/1.jpg',
            '../img/best/2.jpg',
            '../img/best/3.jpg'
        ],
        productNum : [1,2,3]
        
    }, {
        name: 'Royce Allen',
        img: '../img/Artist/2.jpg',        
        Description: 'Hello, everyone!<br />I am the phone case designer of Storm.<br />Hope you guys like my design!',
        product: [
            '../img/best/4.jpg',
            '../img/best/5.jpg',
            '../img/best/6.jpg'
        ],
        productNum : [4,5,6]
    }
];

$(function() {
    var n = location.search.match(/\d/)[0];
    var aInfo = data[+n - 1];
    var name = aInfo.name;
    var img = aInfo.img;
    var Description = aInfo.Description;
    var product = aInfo.product;
    var productNum = aInfo.productNum;
    var pString = '';
    for (var i = 0; i < product.length; i++) {
        var that = product[i];
        var num = productNum[i];
        pString += '<a href="./productDetail.html?product=' + (num) +'"><img class="p' + i + '" src="' + that + '" />';
    }
    $('h1.name').text(name);
    $('.artistInfo').append('<img src="' + img + '" />');
    $('.product').append(pString);    
    $('.artistInfo p').append(Description);
});