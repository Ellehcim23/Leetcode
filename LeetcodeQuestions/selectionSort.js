//sample input

array = [8, 5, 2, 9, 5, 6, 3]

function selectionSort(array) {
     for (let i = 0; i < array.length; i++){
          let min = i;
          for (let j = i + 1; j <array.length; j++){
              if (array[j] < array[min]){
                  min = j
              }
          }
          [array[i], array[min]] = [array[min], array[i]]
      }
      return array
  }

// function selectionSort(array){
//     for (let i = 0; i < array.length; i++){
//         let min = i;
//         for (let j = i + 1; j <array.length; j++){
//             if (array[j] < array[min]){
//                 swap(min, j, array)
//             }
//         }
//     }
//     return array
// }

// function swap(i, j, array){
//     let temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
// }

console.log(selectionSort(array))


