"use strict";
let $ = require("jquery");
let ev = require("./math");

let input = $("#input");
let inputNum1;
let inputNum2;
let calResult;

function selectASMD() {
	let key = event.target.id;
		//calResult = input.val(calResult);
		console.log("event.target.id",key );
		console.log("calResult", calResult);
	inputNum1 = input.val();
		console.log("inputNum1",inputNum1 );
	if(inputNum1){
		 input.val(" ");
	} if(input.value){
			inputNum2 = input.val();
			console.log("inputNum2",inputNum2 );
	}
			console.log("first integer", inputNum1 );
			console.log("second integer", inputNum2 );
	input.focus();
	input.bind('keypress', function(event) {
		console.log("this is working",event );
		if(event.keyCode === 13){
		
			inputNum2 = input.val();
			input.val("");
			calResult = ev[key](inputNum1, inputNum2);
			//calResult = ev.subtract(inputNum1, inputNum2);
			calResult = input.val(calResult);
			console.log("num2", inputNum2 );
			console.log("calResult",calResult );
		}
	});
}

function selectSSR() {
	let key = event.target.id;
	console.log("event.target.id", key );
	inputNum1 = input.val();
		if(inputNum1){
		input.val("");

		} if(input.val("")){
		// calResult = ev.squareRoot(inputNum1);
		calResult = ev[key](inputNum1, inputNum2);
		calResult = input.val(calResult);
		console.log("num2", inputNum2 );
		}
}

let multiplyKey = $("#multiply");
multiplyKey.click(function(event){
	selectASMD();});
console.log("multiplyKey working", multiplyKey );

let addKey = $("#add");
addKey.click(function(event){
	console.log("click key working", event.target.id);
	selectASMD();
});
//console.log("test result",clickHandler());
let subtractKey = $("#subtract");
subtractKey.click(function(event){
	selectASMD(subtractKey);
});

let divideKey = $("#divide");
divideKey.click(function(event){
	console.log("click key working",event.target.id );
	selectASMD();
});

let squareKey = $("#square");
squareKey.click(function(event){
	console.log("click event working",event.target.id );
	selectSSR();
});

let squareRootKey = $("#squareRoot");
squareRootKey.click(function(event){
	console.log("click key working",event.target.id );
	selectSSR();
});


















		