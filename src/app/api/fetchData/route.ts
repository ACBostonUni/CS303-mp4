
// Import NextRequest// Next REspopnse from next-server

import {NextRequest, NextResponse} from "next/server"; // Info coming in REQ Info going out RESP



// ACtual Fetching //Export asunc // GET // Await//

export async function GET(req: NextRequest){

    const searchParams = req.nextUrl.searchParams;
    const airlineIata = searchParams.get("airlineIata");
    const flightNum = searchParams.get("flightNumber");
    const departureIata = searchParams.get("departureCity");
    const arrivalIata = searchParams.get("arrivalCity");

    const apiUrl = `https://api.aviationstack.com/v1/flights?access_key=${process.env.FLIGHT_API_KEY}&airline_iata=${airlineIata}&flight_number=${flightNum}&dep_iata=${departureIata}&arr_iata=${arrivalIata}`;

    const rawDt = await fetch(apiUrl);
    const actualData = await rawDt.json();




    return NextResponse.json(actualData);

}

// NextURL.searchparams.GET
// Where I call the .env

// serach Params

// url//

// respnse wait fetch url

// const data = ... .json

