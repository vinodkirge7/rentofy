import { AREA_POST_FAILURE, AREA_POST_REQUEST, AREA_POST_SUCCESS, GET_POST_FAILURE, GET_POST_REQUEST, GET_POST_SUCCESS, POST_CREATE_FAILURE, POST_CREATE_REQUEST, 
    POST_CREATE_SUCCESS, SEARCH_POST_FAILURE, SEARCH_POST_REQUEST, SEARCH_POST_SUCCESS } from "./post.actionType";

const initialState ={
    post :null,
    error:null,
    loading:false,
    posts:[],
    searchPost:[],
    areaPost:[],

}


export const postReducer =(state=initialState,action)=>{
       
    switch (action.type) {
        case POST_CREATE_REQUEST:
            case GET_POST_REQUEST:
         case SEARCH_POST_REQUEST:  
         case AREA_POST_REQUEST:     
    return{...state, error:null,loading:false}
            
        case POST_CREATE_SUCCESS:
            return{...state , post:action.payload,error:null,loading:false,
                posts:[action.payload,...state.post]
            }   

            case GET_POST_SUCCESS:
                return{
                    ...state, posts:action.payload,loading:false,error:null
                }

                case SEARCH_POST_SUCCESS:
                return{
                    ...state, searchPost:action.payload,loading:false,error:null

                    
                }

                case AREA_POST_SUCCESS:
                return{
                    ...state, searchPost:action.payload,loading:false,error:null

                    
                }

         case POST_CREATE_FAILURE:
            case GET_POST_FAILURE:
            case SEARCH_POST_FAILURE:
                case AREA_POST_FAILURE:    
            return{...state, error:action.payload,loading:false}   
    
        default:
            return state;
    }
}