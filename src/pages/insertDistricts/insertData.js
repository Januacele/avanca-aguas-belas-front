/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import styled from 'styled-components';
import {CommonButton} from '../../common/commonButton';
import { useContext } from "react";
import UserContext from '../../contexts/UserContext';

    
export default function InsertData() {

    const navigate = useNavigate();
    const [districtName, setDistrictName] = useState("");
    const { token, setToken } = useContext(UserContext);

    const localToken = localStorage.getItem("token");
    const URL = "http://localhost:5020/";


    useEffect(() => {
        if (!localToken) {
          navigate("/");
        } else {
          setToken({ ...localToken });
        }
        InsertDistrictsName();
    }, [localToken, navigate, setToken, token.token]);
      
    
        async function InsertDistrictsName() {
            try {
                const body = {
                    districtName: districtName
                }
                const config = {
                  headers: { Authorization: `Bearer ${(localToken)}` },
                };
                const response = await axios.post(`${URL}district`, body, config);
                setDistrictName(response.data);
              } catch (e) {
                setDistrictName(["error"]);
                console.log(e);
              }
        }
    

	return (
		<Div>
			Cadastrar bairros:
            <InputBusca>
                <input 
                    type = "text" 
                    placeholder="Inserir nome de bairro" 
                    value={districtName} 
                    onChange={e => setDistrictName(e.target.value)} />
            </InputBusca>
            <CommonButton
                variant="contained"
                onClick={InsertDistrictsName}
                sx={{marginLeft: '210px'}}
            >
                Cadastrar
            </CommonButton>
          
		</Div>
	);
}

const Div = styled.div`
    width: 200px;
    height: 200px;
    margin-left: 500px;
    margin-top: 40px;
    z-index: -2;
`

const InputBusca = styled.div`
 

    input{
        padding: 12px;
        background-color: white;
        box-shadow: 0px 2px 4px 2px #0000001a;
        border-radius: 3px;
        margin: 10px 15px;
        cursor: pointer;
        width: 500px;
        height: 50px;
    }
`;
