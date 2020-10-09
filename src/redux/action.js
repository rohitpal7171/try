export const DISPLAY_VALUE ="DISPLAY_VALUE"
export const SOLVE ="SOLVE"
export const CLEAR ="CLEAR"

export function displayValue( value ){
    return{
        type :DISPLAY_VALUE,
        payload : value

    }
}

export function solveValue( value ){
    return{
        type :SOLVE,
      

    }
}

export function clearValue(  ){
    return{
        type :CLEAR,

    }
}