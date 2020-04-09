let askEmail = prompt('write your email');
if(!askEmail.includes('@')){
    console.log('пароль має складатись із @')
}else if(askEmail.startsWith('@')){
    console.log('email не повинен починатись на ,@,')
}else if(askEmail.endsWith('@')){
    console.log('email не повинен закінчуватись на ,@,')
}else if(askEmail.includes('@')){
    console.log('Welcome')
}