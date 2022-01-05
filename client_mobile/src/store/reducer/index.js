
const initialState = {
    users: [{user: 'franco' , password: '1234'},{user: 'juani' , password: '1234'}],
}

const reducer = (state=initialState , action) => {
    switch (action.type){
        default: return state;
    }
};

export default reducer;