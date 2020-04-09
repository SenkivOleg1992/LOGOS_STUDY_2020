let askAddress = prompt('URL адреса');

if (askAddress.includes('https:')) {
    console.log(askAddress.slice(8));
} else if (askAddress.includes('http:')) {
    console.log(askAddress.slice(11))
} else {
    console.log('URL address is not correct')
};