import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { iconsDistrictStreatStyle } from '../../pages/insertDistricts/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import CommonButton from '../../common/commonButton';
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import styled from 'styled-components';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
};


export default function ModalStreats() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { setToken } = useContext(UserContext);

  const [checked, setChecked] = React.useState(true);
  const [area, setArea] = React.useState('');
   
  const handleChange = (event) => {
    setChecked(event.target.checked);
  }

  function sendDistrictInformation(){
   

    const body = () => Typography.map(item => item.id);
    const click = () => FormControlLabel.map(item => item.onChange);

    if (click === checked){
      const result = {
        body: body.click
      }

      const URL = "http://localhost:5020/streat/information";
      const promise = axios.post(URL, result);

      promise.then(response => {
        const { data } = response;
        let token = localStorage.setItem("token", data.token);
        setToken(token);
    });
    promise.catch(err => {
        alert("Insira dados válidos");
    });
    }
  }
  

  return (
    <div>
      <ArrowForwardIosIcon
        sx={iconsDistrictStreatStyle.iconsSet}
        onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">

          <Typography id="hasBasicSanitation">
            Qual a exntensão da rua em metros quadrados?
          </Typography>

            <InputContainer>
                <input typeof="text" placeholder="Area Total" value={area} onChange={(e) => setArea(e.target.value)} />
            </InputContainer>

          <Typography id="hasBasicSanitation">
            Nessa rua tem seneamento básico?
          </Typography>
            <FormControlLabel control={<Checkbox
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />} label="Sim" />
            <FormControlLabel control={<Checkbox />} label="Não" />
          

          <Typography id="hasAsphalt">
            Essa rua é asfaltada?
          </Typography>
              
          <FormControlLabel control={<Checkbox
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />} label="Sim" />
            <FormControlLabel control={<Checkbox />} label="Não" />
            
          <Typography id="hasPaving">
            Essa rua é pavimentada?
          </Typography>

          <FormControlLabel control={<Checkbox
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />} label="Sim" />
            <FormControlLabel control={<Checkbox />} label="Não" />
            
          <Typography id="hasStreetLighting">
            Nessa rua tem iluminação pública?
          </Typography>
            
          <FormControlLabel control={<Checkbox
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />} label="Sim" />
            <FormControlLabel control={<Checkbox />} label="Não" />

          <Typography id="hasCleanWaterAccess">
            Essa rua tem acesso ao abastecimento público de água?
          </Typography>
            
          <FormControlLabel control={<Checkbox
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />} label="Sim" />
            <FormControlLabel control={<Checkbox />} label="Não" />

          <Typography id="hasKindergartens">
            Nesse bairro tem creche?
          </Typography>
            
          <FormControlLabel control={<Checkbox
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />} label="Sim" />
            <FormControlLabel control={<Checkbox />} label="Não" />

          </Typography>

          <CommonButton 
            onClick={sendDistrictInformation}
          >
                Enviar
          </CommonButton>
        </Box>
      </Modal>
    </div>
  );

}


const InputContainer = styled.div`
    
    input {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 15px;
        gap: 206px;
        width: 100px;
        height: 30px;
        border: 1px solid #000000;
        border-radius: 5px;
        font-weight: 400;
        font-size: 16px;
    }
`;

