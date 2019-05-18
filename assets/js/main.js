var sometext = 'First string';
console.log(sometext||'Default');


var browser = {
    name: 'Chrome',
    version: '74.0.3729.157',
    flash: 'off',
    language: 'russian',
    plugins: function() {
        return 'Chrome PDF Plugin, Chrome PDF Viewer, Native Client';
    }
}
console.log(browser);
console.log(browser.plugins());


var n;
for (n = 2; n <= 20; n++) {
        if (n % 2 === 0) {
                console.log(n);        
        }
}


var product = 'milk',
price;
switch(product) {
  case 'butter': price = 30; break;
  case 'bread': price = 12; break;
  case 'juice': price = 25; break;
  case 'milk': price = 22; break;
  default: price = 'Please, add a price';
}
console.log(product + ' ' + price + '(UAH)');


var age = 7;
var dif = 18 - age;
var message = age >= 18 ? 'You can buy alcohol' : 'You can not buy alcohol, plese, wait for ' + dif + ' years';
console.log(message);

var k = 1;
while (k <= 7) {
  console.log(k++);
}


var a = 2, b = 4, c = Math.pow(a,b);
function someFunc (a, b, callback) {
  console.log('число a в степени b');
  callback();
}
someFunc(a, b, function() {
  console.log('Результат ' + c);
}
)
