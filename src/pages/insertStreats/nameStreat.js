import styled from 'styled-components';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { iconsDistrictStreatStyle } from '../insertDistricts/styles';
import { Box } from '@mui/system';
import ModalStreats from './modalStreats';

function Streat(props) {
  const { id, streatName } = props;

  return (
    <Div>
        <Box 
            sx={iconsDistrictStreatStyle.box}
            key={id}>
                <h1> {streatName} </h1> 
                <ModalStreats />
                <CreateIcon 
                sx={iconsDistrictStreatStyle.iconsEdit}
                />
                <DeleteIcon 
                sx={iconsDistrictStreatStyle.iconsDelete}
                />
        </Box>
    </Div>
  );
}

const Div = styled.div`
margin-left: -1px;

`



export default Streat;