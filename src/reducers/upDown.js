const initialdata=0;
const changeNum=(state=initialdata,action) =>{
    switch(action.type){
        case 'Increment': return state + 1;
        case 'Decrement': return state - 1;
        default:return state;
    }

}

export default changeNum;