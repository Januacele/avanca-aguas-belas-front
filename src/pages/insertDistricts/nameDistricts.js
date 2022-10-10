import styled from 'styled-components';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { iconsDistrictStreatStyle } from './styles';
import { Box } from '@mui/system';
import BasicModal from '../../common/modal';

function District(props) {
  const { id, districtName } = props;

  return (
        <Div>
            <Box 
                sx={iconsDistrictStreatStyle.box}
                key={id}>
                    <h1> {districtName} </h1> 
                    <BasicModal />
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



export default District;