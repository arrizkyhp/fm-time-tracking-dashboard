import { render, screen, fireEvent } from '@testing-library/react';
import Home from '..';

beforeEach(() => {
    render(<Home />);
})
describe("Homepage", () => {
    test("should render cardMenu", async () => {
        const imgProfile =  screen.queryByAltText(/profile/i);
        expect(imgProfile).toBeInTheDocument();
    })

    test("should render one card", () => {
        const headingElement =  screen.queryByRole("heading", { name: /self care/i});
        expect(headingElement).toBeInTheDocument();
    })

    test("should render 6 card", () => {
        const lastWeekText = screen.queryAllByText(/last week/i);
        expect(lastWeekText.length).toBe(6);
    })
})

describe("Functionality", () => {

    test("should render correct active menu", async () => {
        const listMenu = screen.getAllByRole("listitem");
        const dailyButton = screen.getByRole("button", { name: "Daily" });
        expect(listMenu[1]).toHaveClass('active');

        fireEvent.click(dailyButton)

        expect(listMenu[1]).not.toHaveClass('active')
        expect(listMenu[0]).toHaveClass('active')

    })

    test("should render correct period weekly to daily", async () => {

        const listMenu = screen.getByRole("button", { name: "Daily" });
        const lastWeekWeekly = screen.getAllByText(/last week/i);

        expect(listMenu).toBeInTheDocument();
        expect(lastWeekWeekly.length).toBe(6);

        fireEvent.click(listMenu);
        const yesterdayDaily = screen.getAllByText(/yesterday/i);

        expect(yesterdayDaily.length).toBe(6);

    })
})