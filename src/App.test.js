import { render, screen } from "@testing-library/react";
import App from "./App";

test('first-test',()=>{

    //Rendering
    render(<App />)
    const Element =screen.getByText(/hello/i)
    expect(Element).toBeInTheDocument();
});


