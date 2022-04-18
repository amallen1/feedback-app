import SuggestionsHeader from "../components/Header/SuggestionsHeader";
import Subheader from "../components/Header/Subheader";
import FeedbackList from "../components/Feedback/FeedbackList";
import {
  HomeContainer,
  FirstSection,
  SecondSection,
} from "../styles/homeStyles";

export const Home = () => {
  return (
    <HomeContainer>
      <FirstSection>
        <SuggestionsHeader />
      </FirstSection>

      <SecondSection>
        <Subheader />
        <FeedbackList />
      </SecondSection>
    </HomeContainer>
  );
};
