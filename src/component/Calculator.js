import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper,Container, Grid, Fab} from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    
      
    },
  },
    paper: {
      
      maxWidth:"270px",
      alignItems: 'center',
    },
    realPaper:{
        padding:"10px",
        borderRadius:"20px",
        background:'#f9fcfb'
    },
    mainGrid:{
       marginLeft:"5px"
    },
    whiteColorButton:{
        background:"white",
        color:'#61c6f2',
        fontSize:"30px",
        boxShadow: '8 8 8 0.2rem #61c6f2',
        '&:hover': {
            background:"white",
           
            borderColor: '#61c6f2',
            boxShadow: '0 0 0 0.2rem #61c6f2',
          },
    },
    TextField:{
        maxWidth:"250px"
    },
    blueColorButton:{
        background:"#61c6f2",
        color:'white',
        fontSize:"30px",
        boxShadow: '8 8 8 0.2rem #61c6f2',
        '&:hover': {
            background:"#61c6f2",
           
            borderColor: 'white',
            boxShadow: '0 0 0 0.2rem #f2f2f2',
          },
    },
    rowGrid:{
        marginLeft:"0px",
        marginTop:"10px",
    },
    container:{
        paddingTop:"20vh",
        [theme.breakpoints.down('sm')]:{
          paddingLeft:"35px"
        },
    }
   
  }));
  

export default function Calculator (){


  

const [showValue,setshowValue]= React.useState([])
const [resultValue,setresultValue] = React.useState('')
const [isLastOperator,setisLastOperator] = React.useState(true)





const handleClear=()=>{
  setshowValue('')
  setresultValue('')
}

const addToInput =(val)=>{
  var children=[]
  if( val === "+" ||val === "-" ||val === "*" ||val === "/"|| val === "%"){
      
    if (!isLastOperator) {
     
      children.push(showValue + val)
      setshowValue(children)
      setisLastOperator(true)
    }
    else if(isLastOperator){
      
      // var local = String([...showValue[0]])
     var local = showValue[0]
    
     var newlocal= local.replace(local.charAt(local.length-1), val);
     
       setshowValue([newlocal])
    }
    
  }
  else if (val === "1" || val === "2" || val ==="3"||val === "4" || val === "5" || val ==="6"|| val ==="7"||val === "8" || val === "9" || val ==="0"|| val ===".")
  {
  
    
    children.push(showValue + val)
    setshowValue(children)
    setisLastOperator(false)
  }

}


const findResult =()=>{
  if(!isLastOperator) 
  {
  
    if(String(eval(showValue[0]))==="NaN")
    {
      setresultValue("Not Defined")
    }
    else if(String(eval(showValue[0]))==="Infinity") {
      setresultValue("Result Is Infinity")
  }
  else
  {
    setresultValue(eval(showValue[0]))
  }
}
}

    const classes = useStyles()
    return(
        <Container component="main" maxWidth="xs" className={classes.container}>
            <div className={classes.paper}>
            <Paper className={classes.realPaper}>
                <Grid className={classes.mainGrid}>

                <div style={{textAlign:"right",color:"#61c6f2",fontSize:"25px",width:"240px",height:"10px",overflow:"auto"}}>
              
               </div>

{/* input field */}
{/* <form className={classes.root} noValidate autoComplete="off">
                <Grid className={classes.TextField}>
              
                 <TextField
                id="outlined-textarea"
                fullWidth
                disabled
                color="primary"
                margin="normal"
                style={{color:"#61c6f2"}}
                value={showValue}
                multiline 
                
                 />
                 
             </Grid>
             </form> */}
 <div style={{textAlign:"right",color:"#90d7f5",fontSize:"35px",width:"240px",height:"50px",overflow:"auto"}}>
               {showValue} 
               </div>

{/* input field */}
             {/* <Grid className={classes.TextField}>
                <InputBase
                
                fullWidth
                // value={endResult}
                value={resultValue}
                disabled
                multiline
                style={{textAlign:"right",color:"#61c6f2",fontSize:"25px",direction:'rtl'}}
                 inputProps={{ 'aria-label': 'naked' }}
                />
             </Grid> */}
             {/* <Grid className={classes.TextField}> */}
               <div style={{textAlign:"right",color:"#61c6f2",fontSize:"25px",width:"240px",height:"40px",overflow:"auto"}}>
               {resultValue} 
               </div>
               
             {/* </Grid> */}

 {/* 1st row */}
            <Grid container spacing={1} className={classes.rowGrid}>
             <Grid item xs={6}>
             <Fab size="small" fullWidth variant="extended" style={{width:"100px",height:"40px",fontSize:"22px"}} className={classes.whiteColorButton} onClick={handleClear}>
             Clear
               </Fab>
            </Grid>
            {/* <Grid item xs={3}>
            <Fab size="small" className={classes.whiteColorButton} onClick={changeToNegative}>
             +/-
               </Fab> 
            </Grid> */}
            <Grid item xs={3}>
            <Fab size="small" className={classes.whiteColorButton} onClick={()=>addToInput('%')}>
              &#37;
               </Fab> 
            </Grid>
            <Grid item xs={3}>
            <Fab size="small" className={classes.blueColorButton} onClick={()=>addToInput('/')}>
             &#247;
               </Fab> 
            </Grid>
            </Grid>
 {/* 2nd row */}
 <Grid container spacing={1} className={classes.rowGrid}>
             <Grid item xs={3}>
             <Fab size="small" value="7" onClick={()=>addToInput('7')} className={classes.whiteColorButton}>
             7
               </Fab>
            </Grid>
            <Grid item xs={3}>
            <Fab size="small" onClick={()=>addToInput('8')} className={classes.whiteColorButton}>
             8
               </Fab> 
            </Grid>
            <Grid item xs={3}>
            <Fab size="small" onClick={()=>addToInput('9')} className={classes.whiteColorButton}>
             9
               </Fab> 
            </Grid>
            <Grid item xs={3}>
            <Fab size="small" className={classes.blueColorButton} onClick={()=>addToInput('*')}>
             &times;
               </Fab> 
            </Grid>
            </Grid>
{/* 3rd row */}
             <Grid container spacing={1} className={classes.rowGrid}>
             <Grid item xs={3}>
             <Fab size="small" onClick={()=>addToInput('4')} className={classes.whiteColorButton}>
             4
               </Fab>
            </Grid>
            <Grid item xs={3}>
            <Fab size="small" onClick={()=>addToInput('5')} className={classes.whiteColorButton}>
             5
             </Fab> 
            </Grid>
            <Grid item xs={3}>
            <Fab size="small" onClick={()=>addToInput('6')} className={classes.whiteColorButton}>
             6
               </Fab> 
            </Grid>
            <Grid item xs={3}>
            <Fab size="small" className={classes.blueColorButton} onClick={()=>addToInput('-')}>
             &minus;
               </Fab> 
            </Grid>
            </Grid>
{/* 4th row */}
             <Grid container spacing={1} className={classes.rowGrid}>
             <Grid item xs={3}>
             <Fab size="small" onClick={()=>addToInput('1')} className={classes.whiteColorButton}>
             1
               </Fab>
            </Grid>
            <Grid item xs={3}>
            <Fab size="small" onClick={()=>addToInput('2')} className={classes.whiteColorButton}>
             2
               </Fab> 
            </Grid>
            <Grid item xs={3}>
            <Fab size="small" onClick={()=>addToInput('3')} className={classes.whiteColorButton}>
             3
               </Fab> 
            </Grid>
            <Grid item xs={3}>
            <Fab size="small" className={classes.blueColorButton} onClick={()=>addToInput('+')}>
             +
               </Fab> 
            </Grid>
            </Grid>
 {/* 5th row */}
             <Grid container spacing={1} className={classes.rowGrid}>
             <Grid item xs={3}>
             <Fab size="small" onClick={()=>addToInput('0')} className={classes.whiteColorButton}>
             0
               </Fab>
            </Grid>
            <Grid item xs={3}>
            <Fab size="small" className={classes.whiteColorButton} onClick={()=>addToInput('.')}>
             .
               </Fab> 
            </Grid>
            <Grid item xs={6}>
            <Fab size="small" fullWidth variant="extended" className={classes.blueColorButton} style={{width:"100px",height:"40px"}} onClick={findResult}>
             =
               </Fab> 
            </Grid>
            
            </Grid>


            </Grid>
            </Paper>
            </div>
        </Container>
    )
}