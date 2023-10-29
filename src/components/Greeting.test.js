import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting"

describe('Greeting component', () => {
    test('renders Hello world', () => {
        // Arrange
       render(<Greeting />);
    
       //Act
    
       //Assert
       const helloWorldElement = screen.getByText('Hello World', { exact: false });
       expect(helloWorldElement).toBeInTheDocument();
    })

    test('renders Changed! onclick', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const changedText = screen.getByText('Changed!');
        expect(changedText).toBeInTheDocument();
    });

    test('does not render good to see you onclick', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        //Assert
        const outputElement = screen.queryByText('good to see', { exact: false }); //returns null
        expect(outputElement).toBeNull();
    })
});

