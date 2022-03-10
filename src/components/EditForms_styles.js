import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import '../App.css'

export const Content = styled(Box)({
    position: 'absolute',
    width: '360px',
    height: '663px',
    left: '0px',
    top: '135px',
    
    background: '#FFFFFF',
    boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)',
    borderRadius: '25px 25px 0px 0px',
  })
  export const Return = styled(Button)({
    position: 'absolute',
    width: '109px',
    height:'32px',
    left:' 233px',
    top:' 41px',
    color:'#FFFFFF',
    
    
  })
  export const Input = styled('input')({
    border:'none',
    width: '320px',
    height: '30px',
    backgroundColor:'#F3F3F3',
    borderRadius:'8px',
    padding: '8px 16px 8px 8px',
    margin:'0 auto',
    '&:focus': {
      border:'none',
      zIndex:99
      
   },
  })
  export const Profile = styled(Box)({
    position: 'absolute',
    width: '100px',
    height:'100px',
    left:' 132.6px',
    top:' 48px',
    borderRadius:'50% ',
    backgroundColor:'#AB47BC',
    zIndex:8,
    border:'white solid 4px'

    
  })
  export const InnerProfile = styled(Box)({
    position: 'absolute',
    width: '34px',
    height:'34px',
    left:' 75.6px',
    top:' 62px',
    borderRadius:'50% ',
    backgroundColor:'#55A6FF',
    zIndex:9,
    border:'white solid 4px'


    
  })

  export const BirthdayBox = styled(Box)({
    position:'absolute',
    width: '200px',
    height:'100px',
    top:'540px',
    left:'125px'
   
   

    
  })
  export const TextInput = styled(TextField)({
    position:'absolute',
    width: '320px',
    height: '70px',
    
   

    
  })
