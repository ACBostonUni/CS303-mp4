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

// Pass the data off to another component

// Return element after I fetch it

// I need something to make sure that someone had selected an airline and enters in text

import type {FlightInterface} from "@/types";

export default function Track() {
// Use a button div to select the Airline, Lets just use Southwest, American, and Delta for now
    // Button will change the airline we need to filter by

    const [selectedIata, setSelectedIata] = useState('');
    const [flightNumber, setFlightNumber] = useState('');
    const [departure, setDeparture] = useState('');
    const[arrival, setArrival] = useState('');

    const [flightData, setFlightData] = useState<FlightInterface | null>(null); // The flight interface useState set by the Checker and then the value is passed to the FlightDataComp

    const [error, setError] = useState(""); // Used to keep track if someone didn't enter the fields right, or if There is nothing to return from the API
                                                            // (Usually populated fields but nothing corresponding to that combination)

    async function fetchData(AirlineIata: string, FlightNumber: string, DepartCity: string, ArrivalCity: string) {
        const rawData = await fetch(
            `/api/fetchData?airlineIata=${AirlineIata}&flightNumber=${FlightNumber}&departureCity=${DepartCity}&arrivalCity=${ArrivalCity}`
        ); // grab the raw data

        const responseText = await rawData.text(); // text for the console.log

        console.log("API Response:", responseText); // Helpful Console.log

        if (!rawData.ok) {
            throw new Error("An error occurred while fetching data");
        }
        const response = JSON.parse(responseText);
        // I am doing it this way because if I did rawData.json then my data length checker would not work properly
        // This is because response.json would return a promise type, which I am not able to use in the code below .
        // I don't need anything async because the responseText is already populated at this point. We already have the API response
        // No Async is needed here. The opposite is needed really, because I need to immidiately parse the JSON, so I can do the checks below.

        const flight: FlightInterface | null =
            response.data.length > 1 // I am doing this because sometimes in the morning the flight tracker
                                    // returns 2 elements for the same flight number, dest iata, and arrival iata.
                                    // Crazy right? So this one takes the most current one. If only one returned (take that one)
                ? response.data[1] ?? null
                : response.data[0] ?? null;
        // The ?? Is used for if the response data is null, then we don't panic we just assign null

        return flight;
    }



    async function CheckerFunction(AirlineIata:string, FlightNumber: string, departure: string ,arrival: string)
    {
        if(AirlineIata == '' || FlightNumber == '' || departure == '' || arrival == ''){ // Check if any fields left blank

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