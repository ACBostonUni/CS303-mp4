import {StyledHeading, StyledMain, StyledPlaneImage, StyledSubHeading} from "@/app/Styles";
import PlaneImage from "@/Assets/images (2).png"
export default function Home() {
  return (
      <StyledMain>

        <StyledHeading>
          About This Site
        </StyledHeading>

        <StyledPlaneImage src={PlaneImage.src} alt={"Clipart of an airplane"} />

        <StyledSubHeading>
            This is a site where you are able to track a flight from the top 3 airlines!
        </StyledSubHeading>
          <StyledSubHeading>
              Simply click on an airline icon, enter in your flight number, and include the departure IATA and arrival IATA.
          </StyledSubHeading>

        <StyledSubHeading>

            Go over to the Track A Flight page when you are ready!


        </StyledSubHeading>


      </StyledMain>
  );
}
