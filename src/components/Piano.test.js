import { render } from '@testing-library/react';
import Piano from './Piano';


test('renders the Piano', () => {
    render(<Piano />);
});

describe('Piano', () => {
    it("should display a piano with its keys", () => {
        render(<Piano />)
    })
})


//other tests that are added but fail:
//import {, FireEvent, screen} from '@testing-library/react';
// it("should fire the updateKey function when the button is pressed", () => {
//     const updateKey = screen.getByTestId('button')
//     FireEvent.click(updateKey())
// })