let num, num2, x 

x=0
num=1

do{
    num=1
    while(num<11){
        num2= x*num

        console.log(x + '*' + num + '=' + num2)
        num++
    }
    x++
}while(x<=10)