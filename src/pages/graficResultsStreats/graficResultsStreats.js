import React from 'react';
import { Chart } from "react-google-charts";
import Grid from '@mui/material/Grid';
import NavBarOption from "../../components/navBarOption";
import Header from "../../components/Header/Header";
import styled from "styled-components";

const GraficResultsStreats = () => {



   const data = [
        ["Ruas", "Hours per Day"],
        ["Rua1", 15],
        ["Rua2", 8],
        ["Rua3", 4],
        ["Rua4", 2],
        ["Rua5", 7],
      ];
      
     const options = {
        title: "Exemplo - Ruas com Saneamento Básico",
      };
      
    function CreatChart() {
        return (
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"80%"}
            height={"350px"}
          />
        );
      }

    return(
      <>
        <Header />
        <NavBarOption />
          <Container>
              <h1>Página em Construção</h1>
          </Container>     
        <Grid style={{marginLeft: '400px', marginTop: '20px'}}>
          <CreatChart />
        </Grid>
      </>
        
    );
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    height: 100%;

    h1{
        font-size: 28px;

    }
`;


export default GraficResultsStreats

