
import {FlightInterface} from "@/types"
import {
    AirlineName, AirportName, DataText, DelayedElement, OnTimeElement,
    FlightDataDiv, FlightDataElement, FlightDataRow, FlightDate, IataText,
} from "../Styles"
export default function FlightDataComp({ data }: { data: FlightInterface}){
// I used slice in the returns. I know we never learned it in class but I found out it was very useful to slice up just the actual time from the time attributes I am displaying.
    // It had a bunch of other time data shown for sch, est and actual times. I just wanted the 24hr 4 digit time.
    // Also a small note I did ? before the .slice for est and actual because of the fact that they may be null. (As shown in my interface)
    // The ?? is used to reason if the data element on the left is null, then the fallback is on the right.
    // I used this a lot to include a fallback explanation string in case the data was null at the time of fetch.

    // For example my hometown the data for terminal is never specifief because there are only 2 terminals in my International Airport or ELP.
    // So Terminal is never specified.
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
                        <DataText>Estimated Departure: {data.departure.estimated?.slice(11,16) ?? "Not Determined"} </DataText>
                        <DataText>Actual Departure: {data.departure.actual?.slice(11,16) ?? "Not Determined Yet"} </DataText>
                    </FlightDataElement>

                    <FlightDataElement>
                        <AirportName>{data.arrival.airport}</AirportName>
                        <DataText>Terminal: {data.arrival.terminal ?? "No Terminal Specified"}</DataText>
                        <DataText>Gate: {data.arrival.gate ?? "No Gate Specified"}</DataText>
                        <DataText>Scheduled Arrival: {data.arrival.scheduled.slice(11,16) ?? "Scheduled Time N/A"} </DataText>
                        <DataText>Estimated Arrival: {data.arrival.estimated?.slice(11,16) ?? "Not Determined"} </DataText>
                        <DataText>Actual Arrival: {data.arrival.actual?.slice(11,16) ?? "Not Determined Yet"} </DataText>
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



