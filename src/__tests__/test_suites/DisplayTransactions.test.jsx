import { render, screen } from '@testing-library/react';
import App from '../../components/App'

const transations = [
    {
        id: "1", date: "2026-10-01", description: "Payment from MrPrice", category:"Income", amount: 1000
    },
    {
        id: "2", date: "2026-10-02", description: "Payment to Naivas, Hotdog", category:"Expense", amount: -500

    }
]

describe('Display transactions', () => {
    it('shows transactions on startup', async () => {
        setFetchResponse(transations);
        render(<App />);

        expect(await screen.findByText("Payment from MrPrice")).toBeInTheDocument()
        expect(screen.getByText("Payment to Naivas, Hotdog")).toBeInTheDocument()
    })
})