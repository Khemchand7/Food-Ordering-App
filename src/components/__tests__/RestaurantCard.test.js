import { render,screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";



it("should load restaurant card for mock data",() => {
    render(<ResturantCard resdata={MOCK_DATA}/>);
    
    const restaurantName = screen.getByText("Subway");
    expect(restaurantName).toBeInTheDocument();
});