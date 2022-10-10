/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import authImage from "../../assets/images/authImage.png";

function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [secretaria, setSecretaria] = useState("");
    const navigate = useNavigate();

    function cadastrar() {
        const URL = "http://localhost:5020/signup";

        const promise = axios.post(URL, {
            email: email,
            password: senha,
            name: nome,
            cpf: cpf,
            secretary: secretaria,
        });

        promise.then(response => {
            const { data } = response;
            console.log(data);
            navigate("/");
        });
        promise.catch(err => {
            alert("Insira dados válidos");
        });
    }
    
    return (
        <Container>
           <img src={authImage}/>
            <InputsContainer>
                <input data-cy="input-email" typeof="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input data-cy="input-password" typeof="text" placeholder="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <input data-cy="input-name" typeof="text" placeholder="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input data-cy="input-cpf" typeof="text" placeholder="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                <input data-cy="input-secretary" typeof="text" placeholder="secretaria" value={secretaria} onChange={(e) => setSecretaria(e.target.value)} />
                <Button data-cy="input-submit" onClick={cadastrar}>Cadastrar</Button>

                <StyledLink to="/">Voltar para o login</StyledLink>
            </InputsContainer>

        </Container>

    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F8F8F8;
    width: 100%;
    height: 100%;


    @media (max-width: 500px) {
        width: 428px;
        height: 926px;
        left: 405px;
        top: 24px;
        background: #F8F8F8;
      
    }

    img {
        width: 272px;
        height: 315px;
    }
`;

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 15px;
    width: 390px;
    height: 222px;
    left: calc(50% - 390px/2);
    top: calc(50% - 222px/2 + 129px);

    
    input {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 15px;
        gap: 206px;
        width: 388px;
        height: 54px;
        border: 1px solid #000000;
        border-radius: 5px;
        font-weight: 400;
        font-size: 16px;
    }
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    gap: 206px;
    width: 388px;
    height: 54px;
    background: #293845;
    border: 1px solid #000000;
    border-radius: 5px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
    color: #FFFFFF;
    cursor: pointer;
`;

const StyledLink = styled(Link)`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    margin-top: 20px;
    color: red;
    cursor: pointer;
`;

export default RegisterScreen;