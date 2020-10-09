import {DISPLAY_VALUE,SOLVE,CLEAR} from './action'
import {result} from './state'

export let reducer = ( state = result ,action )=>{

    switch(action.type){
        case DISPLAY_VALUE:
          var newlocalvalue = [...state]
            newlocalvalue =newlocalvalue+action.payload
            return newlocalvalue;
        
        case SOLVE:
            break;
 
        case CLEAR:
            break;
        default:
            break;
    }
    return state;
}
