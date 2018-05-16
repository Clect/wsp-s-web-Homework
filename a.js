var data = [
    {
        name: 'Simon Smith',
        img: './img/Artist/1.jpg',
        Description: '',
        product: [
            './img/best/1.jpg',
            './img/best/2.jpg',
            './img/best/3.jpg'
        ]
        
    }, {
        name: 'Royce Alle',
        img: './img/Artist/2.jpg',        
        Description: '',
        product: [
            './img/best/4.jpg',
            './img/best/5.jpg',
            './img/best/6.jpg'
        ]
    }
];

$(function() {
    var n = location.search.match(/\d/)[0];
    var aInfo = data[+n - 1];
    var name = aInfo.name;
    var img = aInfo.img;
    var Description = aInfo.Description;
    var product = aInfo.product;
    var pString = '';
    for (var i = 0; i < product.length; i++) {
        var that = product[i];
        pString += '<img class="p' + i + '" src="' + that + '" />';
    }
    $('h1.name').text(name);
    $('.artistInfo').append('<img src="' + img + '" />');
    $('.product').append(pString);    
});