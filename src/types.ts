
export interface FlightInterface {
    flight_date: string;

    airline: {
        name: string;
        iata: string;
    };

    flight: {
        number: string;
        iata: string;
    };

    departure: {
        airport: string;
        iata: string;
        terminal: string | null;
        gate: string | null;
        scheduled: string;
        actual: string | null;
        estimated: string | null;
        delay: number | null;
    };

    arrival: {
        airport: string;
        iata: string;
        terminal: string | null;
        gate: string | null;
        scheduled: string;
        actual: string | null;
        estimated: string | null;
        delay: number | null;
    };
}
