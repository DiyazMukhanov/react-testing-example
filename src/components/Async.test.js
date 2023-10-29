import { render, screen } from "@testing-library/react"
import Async from "./Async";

describe('Async component', () => {
   test('renders posts if request succeeds', async () => {
      window.fetch = jest.fn();
      window.fetch.mockResolvedValueOnce({
        json: async () => [{id: 1, title: 'First post'}]
      });
      render(<Async />);

    //   const listItemElements = screen.getAllByRole('listitem'); //returns array
      const listItemElements = await screen.findAllByRole('listitem', {}) //all finds return a promise
      expect(listItemElements).not.toHaveLength(0);
   });
});