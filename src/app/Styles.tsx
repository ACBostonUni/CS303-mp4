import styled from 'styled-components';
import Link from "next/link";

export const StyledMain = styled.div`

    align-items: center;
    text-align: center;
    
    
    

`

export const AirlineButtonContainer = styled.div`
    
    display: flex;
    flex-direction: row;
    align-items: center;
    text-align: center;
    width: 40%;
    margin: 3% auto;
    
    padding: 1%;
    
    border: darkslategray 10px solid;
    border-radius: 10px;
    background-color: white;

    @media screen and (max-width: 800px) {
        width: 90%;
        
    }
   
    
    
`

export const AirlineButton = styled.button`

    align-items: center;
    text-align: center;
    justify-content: center;
    
    margin: auto;

    :active { /* I learned that this active keyword allows us to change the CSS of the button when it is active */

        background-color: rgb(184 242 255 / 0.84);
        border: transparent;
        border-radius: 10px;
    }
`

export const AirlinePicture = styled.img`
    width: 50%;
    margin: auto;
    max-width: 100%;
    
    
    
`

export const DeltaAirlinePicture = styled.img`
    width: 50%;
    margin: 0 auto;
    padding-left: 3%;
    max-width: 100%;
    
    
    
`


export const GetButton = styled.button`
    
    background-color: dodgerblue;
    color: white;
    font-family: Tahoma, sans-serif;
    font-weight: bold;
    font-size: calc(4px + 1.2vw);
    height: 45%;
    width: 30%;
    border: dodgerblue 10px solid;
    border-radius: 10px;
    margin: 3% 0 0 10%;
    
    @media screen and (max-width: 800px) {
        height: 40%;
        font-size: calc(8px + 1.2vw);
    }

`

export const StyledHeading = styled.h2`

    margin: 2% 3%;
    font-weight: bold;
    font-size: calc(10px + 2vw);
    color: #171717;
`

export const StyledAirlineText = styled.p`

    font-size: calc(7px + 1.1vw);
    font-family: "Arial Narrow", Helvetica, sans-serif;
    color: #171717;

    @media screen and (max-width: 800px) {
        font-size: calc(8px + 1.7vw);
    }
`

export const StyledInput = styled.input`

    width: 50%;
    height: 45%;
    padding: 2% 0;
    margin: 2% auto;
    
    text-align: center;
    font-size: calc(10px + 1.2vw);
    font-family: "Arial Rounded MT Bold", sans-serif;
    font-weight: bold;
    border: #36a2ef 6px solid;
    border-radius: 10px;
    background-color: white;
    color: #171717;

    @media screen and (max-width: 800px) {
        margin-bottom: 3%;
    }

`

export const StyledInputForm = styled.form`

    margin: 0 auto 0 auto;
    height: 100%;
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;
    
`

export const StyledSubHeading = styled.h3`

    margin: 2% auto;
    font-family: "Tahoma", Playbill, sans-serif;
    font-size: calc(8px + 1.3vw);
    color: #171717;
    

`

export const StyledSubHeadingForNumberInput = styled.h3`

    margin: 5% auto 5% auto;
    font-family: "Tahoma", Playbill, sans-serif;
    font-size: calc(8px + 1.3vw);
    color: #171717;
    @media screen and (max-width: 800px) {
        margin: 2% auto;
    }

`

export const StyledRowDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2% auto;
    background-color: rgb(126 219 255 / 0.79);
    border: 3px transparent;
    border-radius: 8px;
    width: 90%;
    height: 90%;
    
    

    

`

export const StyledRowDivBlock = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2% auto;
    background-color: rgb(126 219 255 / 0.79);
    border: 3px transparent;
    border-radius: 8px;
    width: 90%;

    @media screen and (max-width: 800px) {
        display: block;
        padding: 4%;
    }

`
export const StyledInputContainer = styled.div`

    display: flex;
    flex-direction: column;
    margin: 0 auto
`





export const FlightDataDiv = styled.div`

    background-color: #F0F8FF;
    border: dodgerblue 10px solid;
    border-radius: 10px;
    text-align: center;
    width: 90%;
    margin: 2% auto;
    height: 100%;
    padding: 2%;
    
`

export const AirlineName = styled.h3`
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: calc(13px + 1.2vw);
    margin: auto;
    color: #171717;

`

export const IataText = styled.p`
    text-align: center;
    font-family: "Arial Black", sans-serif;
    font-weight: bold;
    font-size: calc(17px + 1.2vw);
    margin: auto;
    width: 100%;
    color: #171717;

`

export const FlightDate = styled.p`
    font-family: "Arial Narrow" , sans-serif;
    font-size: calc(12px + 1.2vw);
    font-weight: bold;
    margin: auto;
    width: 100%;
    color: #171717;

`

export const AirportName = styled.p`
 font-family: Arial, Helvetica, sans-serif;
    font-size: calc(9px + 1.2vw);
    color: #171717;
    
`

export const DataText= styled.p`
    
    font-family: Tahoma, sans-serif;
    font-size: calc(6px + 1.2vw);
    margin: 1% 0;
    color: #171717;
`

export const FlightDataElement = styled.div`
    text-align: center;
    background-color: rgb(126 219 255 / 0.79);
    border: transparent;
    border-radius: 20px;
    height: 90%;
    width: 47%;
    margin: auto;
    padding: 2%;
    color: #171717;
    
`

export const DelayedElement = styled.div`
    text-align: center;
    color: #171717;
    height: 30%;
    width: 45%;
    background-color: #f8dea7;
    border: orange solid 5px;
    border-radius: 20px;
    margin: auto;
    padding: 2%;
    font-family: "Arial Narrow", sans-serif;
    font-weight: bold;
    font-size: calc(9px + 1.2vw);

`

export const OnTimeElement = styled.div`
    text-align: center;
    color: #171717;
    height: 30%;
    width: 45%;
    background-color: #b8ecb4;
    border: #32cb00 solid 5px;
    border-radius: 20px;
    margin: auto;
    padding: 2%;
    font-family: "Arial Narrow", sans-serif;
    font-weight: bold;
    font-size: calc(9px + 1.2vw);


`

export const FlightDataRow = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    margin: 2% auto
    

`


export const StyledInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1%;
    margin: 1% auto;
    width: 60%;
    height: 90%;
`


export const StyledPlaneImage = styled.img`
    height: 20%;
    width: 20%;
    max-width: 100%;
    margin: auto;

`

export const ErrorStyling = styled.div`

    background-color: rgb(255 66 66 / 0.78);
    border: mediumvioletred 5px solid;
    border-radius: 10px;
    width: 45%;
    height: 20%;
    margin: 7% auto;
    padding: 2%;
    color: #ffffff;
    font-family: Cambria, sans-serif;
    font-size: calc(8px + 1.2vw);
    
    @media screen and (max-width: 800px) {
        
        width: 70%
    }
    
`

export const HelpfulTipsDiv = styled.div`
    text-align: center;
    background-color: rgb(198 235 255);
    border: dodgerblue 10px solid;
    border-radius: 20px;
    height: 90%;
    width: 70%;
    margin: 4% auto;
    padding: 2%;
    color: #171717;


`

