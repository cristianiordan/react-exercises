// import Student from './student';
// import studentsListData from '../data/student-list';
// import Button from './button';
// import React, {useState} from 'react';


// function List(){
//     const [isBlack, setIsBlack] = useState(false);
//     const toggleColor = function(){
//         if(isBlack === true){
//             setIsBlack(false);
//         }else {
//             setIsBlack(true);
//         }
//     }

//     const [showStudentList, setShowStudentList] = useState(false);

//     const setStudentListHandler = () => {
//         showStudentList ? setShowStudentList(false) : setShowStudentList(true);
//     }

//     let proxy = [];

//     if(showStudentList === true){
//         proxy = studentsListData;
//     }else {
//         proxy = [];
//     }

// 	return (
// 		<div>
//             <Button changeColor={
//                 toggleColor
//             }/>
// 		{
// 			proxy.map( (dateStudent) => 
// 			(
// 				<Student key={dateStudent.id} 
//                 data={dateStudent} age='23' 
//                 isBlack={isBlack} toggleColor={toggleColor}/>
// 			)
// 			)
// 		}
// 		</div>
// 	)
// }

// export default List;

///#2

import React ,{useState} from 'react';
import Student from './student'
import studentsListData from '../data/student-list'
import Button from './button';

function List(props){
    const [isBlack, setIsBlack] = useState(false);
    const toggleColor = () =>{
        if(isBlack){
            setIsBlack(false);
        }else setIsBlack(true);
    }

    const [showStudentsList, setShowStudentList] = useState(false)
    const renderStudents = () =>{
        if(showStudentsList) setShowStudentList(false);
        else setShowStudentList(true);
    }

    let proxy = [];
        if(showStudentsList){
            proxy = studentsListData;
        }else proxy = [];

    return (
        <div>
            <Button buttonTitle='Toggle Color'
             click = {toggleColor}/>
            <Button 
            click = {renderStudents}
            buttonTitle={showStudentsList ? 'Hide' : 'Show'} 
            changeColor = {renderStudents} 
            style={showStudentsList ? 'red' : 'green'}
            />


            {proxy.map(dateStudent =>
                <Student 
                    key ={dateStudent.id} 
                    data = {dateStudent} 
                    isBlack={isBlack} 
                    toggleColor={toggleColor}
                />
                )}
        </div>
    )
}

export default List;