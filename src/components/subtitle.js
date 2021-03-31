// import React from 'react';

// function Subtitle (props){
//     return (
//         <div className='title sub-title'>
//             Number of students:{props.studentsLength}
//         </div>
//     );
// }

// export default Subtitle;

//#2

import React from 'react';

function Subtitle(props) {
    return (
        <h3 className = 'title sub-title'>Number of students:{props.studentsLength}</h3>
    )
}

export default Subtitle;