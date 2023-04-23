import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {navigate} from '../navigationRef';
import tracker from "../api/tracker";

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
            // case 'signup':
            //     return {errorMessage: '', token: action.payload};
            case 'signin':
                return {errorMessage: '', token: action.payload};
                case 'clear_error_message':
                    return {...state, errorMessage: ''};
        default:
            return state;
    }
};

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token')
    if(token){
        dispatch({type: 'signin', payload: token})
        navigate('TrackList');
    }else {
        navigate('Signup');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'})
}

const signup =  (dispatch) =>  async ({ email, password }) => {
      try {
        const response = await tracker.post("/signup", { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({
            type: 'signin',
            payload: response.data.token
        });

        navigate('TrackList');
        console.log(response.data);
      } catch (err) {
        console.log(err)
       dispatch({
        type: 'add_error', 
        payload: 'Something went wrong with sign up'
    })
      }
      // make api request to sign up with that email and password

      // if we sign up, modify our state, and say that we are authenticated

      // if signing up fails, we probably need to reflect an error message

      // somewhe
    };


const signin = (dispatch) =>  async ({email, password}) => {

        try {
            const response = await tracker.post('/signin', {email, password});
            // 
            
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({
                type: 'signin',
                payload: response.data.token
            })
            navigate('TrackList');
        } catch (err) {
            // console.log(err.message)
            dispatch({
                type: 'add_error',
                payload: 'Something went wrong with sign in'
            })
        }
// Try to sign in
// Handle sucess by updating state
// Handle failure by showing error message(somehow)
    };


const signout = (dispatch) => () => {
    

        // somehow sign out
    }

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup, clearErrorMessage, tryLocalSignin},
    {token: null, errorMessage: ''}
);