"use client"
import {useState} from "react";
import {
    AirlineButton,
    AirlineButtonContainer,
    AirlinePicture,
    StyledAirlineText,
    StyledRowDiv,
    StyledHeading,
    StyledInput,
    StyledInputContainer,
    StyledInputForm,
    StyledMain,
    StyledSubHeading,
    DeltaAirlinePicture,
    GetButton,
    StyledInputDiv, StyledRowDivBlock, StyledSubHeadingForNumberInput, ErrorStyling
} from "@/app/Styles";
import SouthWestPhoto from "../../Assets/SWPhoto.png";
import AmericanAirPhoto from "../../Assets/AAPhoto.png";
import DeltaAirPhoto from "../../Assets/DeltaPhoto.png";

import FlightDataComp from "../Components/FlightDataComp";



// Call An fetch API when I have the Params to call it, If params correctly entered call anf fetch function which will pass in Params

// Pass the data off to another complnet

// Return element after I fetch it

// I need something to make sure that someone had selected a airline and ebters in text

import type {FlightInterface} from "@/types";

export default function Track() {
// Use a button div to select the Airline, Lets just use Southwest, American, and Delta for now
    // Button will change the airline. We need to filter

    const [selectedIata, setSelectedIata] = useState('');
    const [flightNumber, setFlightNumber] = useState('');
    const [departure, setDeparture] = useState('');
    const[arrival, setArrival] = useState('');

    const [flightData, setFlightData] = useState<FlightInterface | null>(null);

    const [error, setError] = useState("");

    async function fetchData(AirlineIata: string, FlightNumber: string, DepartCity: string, ArrivalCity: string) {
        const rawData = await fetch(
            `/api/fetchData?airlineIata=${AirlineIata}&flightNumber=${FlightNumber}&departureCity=${DepartCity}&arrivalCity=${ArrivalCity}`
        );

        const responseText = await rawData.text();

        console.log("API Response:", responseText);

        if (!rawData.ok) {
            throw new Error("An error occurred while fetching data");
        }
        const response = JSON.parse(responseText);

        const flight: FlightInterface | null =
            response.data.length > 1 // I am doing this becasue sometimes in the morning the flight tracker
                                    // returns 2 elements for the same flight number, dest iata, and arrival iata.
                                    // Crazy right? So this one takes the most current one. If one one returned (take that one)
                ? response.data[1] ?? null
                : response.data[0] ?? null;
        // The ?? Is used for if the response data is null, then we dont panic we just assign to null

        return flight;
    }


    // The purpose of this is to be set by the Checker so that way the rawData can be passed to the Flight Data component

    async function CheckerFunction(AirlineIata:string, FlightNumber: string, departure: string ,arrival: string)
    {
        if(AirlineIata == '' || FlightNumber == '' || departure == '' || arrival == ''){

            setError("It seems you have not filled in all fields, try again after filling out all fields. Make sure to select an airline.")
            // Then We can not go through with the request
        } else {
            setError(''); // If there was an error before now there isn't (Fixed a bug where the error div was still present on top of the valid data output
            const returnedData = await fetchData(AirlineIata, FlightNumber, departure, arrival);// Fetch the Data
            if (returnedData == null) {
                setError("No Data Found, Check That You Entered the Right Information")
            } else{
                setFlightData(returnedData); // Originally didn't have this in an else. slight mistake there
            }

        }

    }

    return (

        // Pass in whichever airline securely call it
    <>
        <StyledMain>

               <StyledHeading>
                   Track A Flight
               </StyledHeading>

                <StyledRowDivBlock>

               <AirlineButtonContainer>

                  <AirlineButton type="button" onClick={() => setSelectedIata('WN')}>
                      <div>
                          <AirlinePicture src={SouthWestPhoto.src} alt = "Southwest Airlines Logo"/>
                          <StyledAirlineText>Southwest</StyledAirlineText>
                      </div>


                  </AirlineButton>

                   <AirlineButton type="button" onClick={() => setSelectedIata('AA')}>
                       <div>
                           <AirlinePicture src={AmericanAirPhoto.src} alt = "American Airlines Logo"/>
                           <StyledAirlineText>American</StyledAirlineText>
                       </div>

                   </AirlineButton>

                   <AirlineButton type="button" onClick={() => setSelectedIata('DL')}>
                       <div>
                           <DeltaAirlinePicture src={DeltaAirPhoto.src} alt = "Delta Airlines Logo"/>
                           <StyledAirlineText>Delta</StyledAirlineText>
                       </div>

                   </AirlineButton>

               </AirlineButtonContainer>

                <StyledInputContainer>
                <StyledSubHeadingForNumberInput>
                    Enter Your Flight Number To Retrieve Details

                </StyledSubHeadingForNumberInput>

                <StyledInputForm>


                    <StyledInput value ={flightNumber} onChange={(event) => setFlightNumber(event.target.value)}/>
                    <GetButton
                        type="button"
                        onClick={() => CheckerFunction(selectedIata, flightNumber, departure, arrival)}
                    >Find Flight</GetButton>

                   </StyledInputForm>
                    </StyledInputContainer>
                </StyledRowDivBlock>
                <StyledRowDiv>

                    <StyledInputDiv>
                        <StyledSubHeading> Enter Departure City </StyledSubHeading>
                        <StyledInput value ={departure} onChange={(event) => setDeparture(event.target.value)}/>
                    </StyledInputDiv>
                   <StyledInputDiv>
                       <StyledSubHeading> Enter Arrival City </StyledSubHeading>
                       <StyledInput value ={arrival} onChange={(event) => setArrival(event.target.value)}/>
                   </StyledInputDiv>


                </StyledRowDiv>

            {error && <ErrorStyling>{error}</ErrorStyling>}

            {error == '' && flightData && <FlightDataComp data={flightData}/>}

        </StyledMain>


    </>

    )



}