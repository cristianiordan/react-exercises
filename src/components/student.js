// import Button from './button';

// // function Student(props){
// // 	return (
// // 		<div className="card">
// // 			{props.isBlack}
// // 			<h1 style=
// // 			{(props.isBlack ?
// // 			 {color: 'black'} :
// // 			  {color: props.data.color})
// // 			  }>{props.data.firstName} 
// // 			  {props.data.lastName}</h1>
// // 			<h3>Course: {props.data.course}</h3>
// // 			<p><b>Email</b>: {props.data.email}</p>
// // 			<p>Age: {props.age}</p>
// // 			<Button changeColor={
// //                 props.toggleColor
// // 			}/>
// // 		</div>
// // 	)
// // }
// function Student(props){
// 	let currentColor = null;
// 	if(props.isBlack === true){
// 		currentColor = 'black';
// 	}else {
// 		currentColor = props.data.color;
// 	}
// 	const age = function(){
// 		return Math.floor(Math.random() * 99 + 1);
// 	}
// 	return (
// 		<div className="card">
// 			{props.isBlack}
// 			<h1 style={{color: currentColor}}>
// 			  {props.data.lastName} {props.data.firstName}</h1>
// 			<h3>Course: {props.data.course}</h3>
// 			<p><b>Email</b>: {props.data.email}</p>
// 			<p>Age: {age()}</p>
// 			<Button changeColor={
//                 props.toggleColor
// 			}/>
// 		</div>
// 	)
// }

// export default Student;

//#2

import React from 'react';
import Button from './button';

function Student(props) {
	let currentColor = null;
	if(props.isBlack) currentColor = 'black';
	else currentColor = props.data.color;
	return (
		<div className='card'>
			<h1 
				style = {{color: currentColor}}>
				{props.data.firstName} {props.data.lastName}
			</h1>
			<h3>Course:{props.data.course}</h3>
			<p>Email:{props.data.email}</p>
			<p>Age:{Math.floor(Math.random() * 100)}</p>
			<Button buttonTitle='Toggle Color' click = {props.toggleColor}/>
		</div>
	)
	
}

export default Student;
