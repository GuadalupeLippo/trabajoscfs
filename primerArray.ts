/*Construya un algoritmo que tenga un arreglo de números y se los muestre al usuario
El arreglo debe ser llamado num 
El arreglo num debe contener los siguientes datos: 20, 14, 8, 0, 5, 19 y 24.
Mostrar los valores resultantes del arreglo*/

const nums: number[] = [20,14,8,0,5,19,24]
function mostrarElements ( arr : number[]) {
    for (let i = 0; i< arr.length; i++) {
        console.log(arr[i]);
        
    }
}
mostrarElements(nums);

