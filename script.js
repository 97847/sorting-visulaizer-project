
var inp_as=document.getElementById('a_size'),array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var butts_algos=document.querySelectorAll(".algos button");

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
  function update_array_size()
  {
      array_size=inp_as.value;
      generate_array();
  }

 window.onload=update_array_size();

  
// Promise to swap two blocks

// // Promise to swap two blocks
// function swap(el1, el2) {
// 	return new Promise((resolve) => {

// 		// For exchanging styles of two blocks
// 		var temp = el1.style.transform;
// 		el1.style.transform = el2.style.transform;
// 		el2.style.transform = temp;

// 		window.requestAnimationFrame(function() {

// 			// For waiting for .25 sec
// 			setTimeout(() => {
// 				container.insertBefore(el2, el1);
// 				resolve();
// 			}, 250);
// 		});
// 	});
// }

// // Asynchronous BubbleSort function
// async function BubbleSort(delay = 100) {
// 	var blocks = document.querySelectorAll(".block");

// 	// BubbleSort Algorithm
// 	for (var i = 0; i < blocks.length; i += 1) {
// 		for (var j = 0; j < blocks.length - i - 1; j += 1) {

// 			// To change background-color of the
// 			// blocks to be compared
// 			blocks[j].style.backgroundColor = "#FF4949";
// 			blocks[j + 1].style.backgroundColor = "#FF4949";

// 			// To wait for .1 sec
// 			await new Promise((resolve) =>
// 				setTimeout(() => {
// 					resolve();
// 				}, delay)
// 			);

// 			console.log("run");
// 			var value1 = Number(blocks[j].childNodes[0].innerHTML);
// 			var value2 = Number(blocks[j + 1]
// 						.childNodes[0].innerHTML);

// 			// To compare value of two blocks
// 			if (value1 > value2) {
// 				await swap(blocks[j], blocks[j + 1]);
// 				blocks = document.querySelectorAll(".block");
// 			}

// 			// Changing the color to the previous one
// 			blocks[j].style.backgroundColor = "#6b5b95";
// 			blocks[j + 1].style.backgroundColor = "#6b5b95";
// 		}

// 		//changing the color of greatest element
// 		//found in the above traversal
// 		blocks[blocks.length - i - 1]
// 				.style.backgroundColor = "#13CE66";
// 	}
// }

//  Calling generatearray function
//  generatearray();

// // Calling BubbleSort function
// BubbleSort();
