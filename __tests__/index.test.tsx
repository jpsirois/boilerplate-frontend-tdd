import { render, screen } from "@testing-library/react";

import Index from "../index";
import userEvent from "@testing-library/user-event";

test("should return true", () => {
    render(<Index />);

    expect(screen.getByText("Hello world!")).toBeInTheDocument()
});

test("should return false", () => {
    render(<Index />);

    expect(screen.queryByText("Holla")).not.toBeInTheDocument()
});

test("should be able to type in field", () => {
    render(<Index />);

    const input = screen.getByLabelText('username');
    userEvent.type(input, 'acbdef');

    expect(input).toHaveValue('acbdef')
});
