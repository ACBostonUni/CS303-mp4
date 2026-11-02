
import {FlightInterface} from "@/types"
import {
    AirlineName, AirportName, DataText, DelayedElement, OnTimeElement,
    FlightDataDiv, FlightDataElement, FlightDataRow, FlightDate, IataText,
} from "../Styles"
export default function FlightDataComp({ data }: { data: FlightInterface}){

    return(
        <>
            <FlightDataDiv>

                <FlightDataRow>
                    <AirlineName>{data.airline.name} {"  "}{data.airline.iata}{data.flight.number}</AirlineName>

                </FlightDataRow>

                <FlightDataRow>
                    <IataText>{data.departure.iata} {'→'} {data.arrival.iata}</IataText>
                    <FlightDate>Flight Date: {data.flight_date}</FlightDate>
                </FlightDataRow>

                <FlightDataRow>

                    <FlightDataElement>
                        <AirportName>{data.departure.airport}</AirportName>
                        <DataText>Terminal: {data.departure.terminal ?? "No Terminal Specified"}</DataText>
                        <DataText>Gate: {data.departure.gate ?? "No Gate Specified"}</DataText>
                        <DataText>Scheduled Departure: {data.departure.scheduled.slice(11,16) ?? "Scheduled Time N/A"} </DataText>
                        <DataText>Estimated Departure: {data.departure.estimated?.slice(11,16) ?? "Est Time Not Determined"} </DataText>
                        <DataText>Actual Departure: {data.departure.actual?.slice(11,16) ?? "Actual Time Not Determined Yet"} </DataText>
                    </FlightDataElement>

                    <FlightDataElement>
                        <AirportName>{data.arrival.airport}</AirportName>
                        <DataText>Terminal: {data.arrival.terminal ?? "No Terminal Specified"}</DataText>
                        <DataText>Gate: {data.arrival.gate ?? "No Gate Specified"}</DataText>
                        <DataText>Scheduled Arrival: {data.arrival.scheduled.slice(11,16) ?? "Scheduled Time N/A"} </DataText>
                        <DataText>Estimated Arrival: {data.arrival.estimated?.slice(11,16) ?? "Est Time Not Determined"} </DataText>
                        <DataText>Actual Arrival: {data.arrival.actual?.slice(11,16) ?? "Actual Time Not Determined Yet"} </DataText>
                    </FlightDataElement>
                </FlightDataRow>

                <FlightDataRow>
                    {data.departure.delay ? <DelayedElement>Departure: Delayed </DelayedElement> : <OnTimeElement>Departure: On Time </OnTimeElement>}

                    {data.arrival.delay ? <DelayedElement>Arrival: Delayed </DelayedElement> : <OnTimeElement>Arrival: On Time </OnTimeElement>}

                </FlightDataRow>

            </FlightDataDiv>

        </>

    );


}



