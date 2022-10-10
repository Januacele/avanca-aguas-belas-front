/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBarOption from '../../components/navBarOption';
import Header from '../../components/Header/Header';
import District from './nameDistricts';
import InsertData from './insertData';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from '../../contexts/UserContext';
import { iconsDistrictStreatStyle } from './styles';

export default function InsertDistrict() {

    const navigate = useNavigate();
    const [districtName, setDistrictName] = useState([]);
    const { token, setToken } = useContext(UserContext);

    const localToken = localStorage.getItem("token");
    const URL = "http://localhost:5020/";


    useEffect(() => {
        if (!localToken) {
          navigate("/");
        } else {
          setToken({ ...localToken });
        }
        getDistrictsName();
    }, [setToken, token.token, localToken, navigate]);
      
    
    async function getDistrictsName() {
      try {
        const config = {
          headers: { Authorization: `Bearer ${(localToken)}` },
        };
        
        const response = await axios.get(`${URL}districts`, config);
          setDistrictName(response.data);
      } catch (e) {
          setDistrictName(["error"]);
          console.log(e);
        }
      }
          
        function showDistricts() {
            if (districtName.length > 0) {
              return districtName.map(district => {
                const { id, districtName } = district;
                return <District key={id} id={id} districtName={districtName} />;
              });
            } else {
              return <p>Carregando Bairros...</p>;
            }
          }

  const districtsOnScreen = showDistricts();

  return (
    <div>
      <Header />
      <NavBarOption />
      <Container
      sx={iconsDistrictStreatStyle.text}>
        <InsertData />
        <h1>Insira os dados dos bairros</h1>
        <Districts>
          {districtsOnScreen}
          {/* {districtName.map(district => {
            const { id, districtName } = district;
            return <District key={id} id={id} poster={districtName} />;
          })} */}
        </Districts>
      </Container>
    </div>
  );

}

const Districts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 250px;
`;

const Container = styled.div`
margin-top: 20px;
  h1 {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
