import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const futuresList = [
    { "label": "E-mini S&P 500 Futures", "year": "ES", "contract_size": 50, "tick_size": 0.25 },
    { "label": "E-mini Nasdaq 100 Futures", "year": "NQ", "contract_size": 20, "tick_size": 0.25 },
    { "label": "E-mini Dow Jones Futures", "year": "YM", "contract_size": 5, "tick_size": 1 },
    { "label": "Crude Oil Futures", "year": "CL", "contract_size": 1000, "tick_size": 0.01 },
    { "label": "Gold Futures", "year": "GC", "contract_size": 100, "tick_size": 0.10 },
    { "label": "Silver Futures", "year": "SI", "contract_size": 5000, "tick_size": 0.005 },
    { "label": "Natural Gas Futures", "year": "NG", "contract_size": 10000, "tick_size": 0.001 },
    { "label": "Euro FX Futures", "year": "6E", "contract_size": 125000, "tick_size": 0.0001 },
    { "label": "British Pound Futures", "year": "6B", "contract_size": 62500, "tick_size": 0.0001 },
    { "label": "Japanese Yen Futures", "year": "6J", "contract_size": 12500000, "tick_size": 0.000001 },
    { "label": "Eurodollar Futures", "year": "GE", "contract_size": 1000000, "tick_size": 0.0025 },
    { "label": "Russell 2000 E-Mini Futures", "year": "RTY", "contract_size": 50, "tick_size": 0.10 },
    { "label": "Australian Dollar Futures", "year": "6A", "contract_size": 100000, "tick_size": 0.0001 },
    { "label": "Canadian Dollar Futures", "year": "6C", "contract_size": 100000, "tick_size": 0.0001 },
    { "label": "Cocoa Futures", "year": "CC", "contract_size": 10, "tick_size": 1 },
    { "label": "Coffee Futures", "year": "KC", "contract_size": 37500, "tick_size": 0.05 },
    { "label": "Corn Futures", "year": "ZC", "contract_size": 5000, "tick_size": 0.25 },
    { "label": "Wheat Futures", "year": "ZW", "contract_size": 5000, "tick_size": 0.25 },
    { "label": "Soybeans Futures", "year": "ZS", "contract_size": 5000, "tick_size": 0.25 },
    { "label": "Soybean Oil Futures", "year": "ZL", "contract_size": 60000, "tick_size": 0.01 },
    { "label": "Soybean Meal Futures", "year": "ZM", "contract_size": 100, "tick_size": 0.10 },
    { "label": "Live Cattle Futures", "year": "LE", "contract_size": 40000, "tick_size": 0.025 },
    { "label": "Lean Hogs Futures", "year": "HE", "contract_size": 40000, "tick_size": 0.025 },
    { "label": "Coffee 'C' Futures", "year": "KC", "contract_size": 37500, "tick_size": 0.05 },
    { "label": "Cotton No. 2 Futures", "year": "CT", "contract_size": 50000, "tick_size": 0.01 },
    { "label": "Cocoa Futures", "year": "CC", "contract_size": 10, "tick_size": 1 },
    { "label": "Sugar No. 11 Futures", "year": "SB", "contract_size": 112000, "tick_size": 0.01 },
    { "label": "U.S. Dollar Index Futures", "year": "DX", "contract_size": 1000, "tick_size": 0.005 },
    { "label": "Swiss Franc Futures", "year": "6S", "contract_size": 125000, "tick_size": 0.0001 },
    { "label": "New Zealand Dollar Futures", "year": "6N", "contract_size": 100000, "tick_size": 0.0001 },
    { "label": "Copper Futures", "year": "HG", "contract_size": 25000, "tick_size": 0.0005 },
    { "label": "Palladium Futures", "year": "PA", "contract_size": 100, "tick_size": 0.05 },
    { "label": "Platinum Futures", "year": "PL", "contract_size": 50, "tick_size": 0.10 },
    { "label": "Gasoline Futures", "year": "RB", "contract_size": 42000, "tick_size": 0.0001 },
    { "label": "Heating Oil Futures", "year": "HO", "contract_size": 42000, "tick_size": 0.0001 },
    { "label": "Copper Futures", "year": "HG", "contract_size": 25000, "tick_size": 0.0005 },
    { "label": "Palladium Futures", "year": "PA", "contract_size": 100, "tick_size": 0.05 },
    { "label": "Platinum Futures", "year": "PL", "contract_size": 50, "tick_size": 0.10 },
    { "label": "Gasoline Futures", "year": "RB", "contract_size": 42000, "tick_size": 0.0001 },
    { "label": "Heating Oil Futures", "year": "HO", "contract_size": 42000, "tick_size": 0.0001 }
    // Add more contracts as needed
];
const categories = ['Stocks', 'Futures', 'Crypto'];

const stocksList = [
    { label: 'Apple Inc.', symbol: 'AAPL' },
    { label: 'Microsoft Corporation', symbol: 'MSFT' },
    // ... (add more stocks)
];

const cryptoList = [
    { label: 'Bitcoin', year: 'BTC', contract_size: 1, tick_size: 0.01 },
    { label: 'Ethereum', year: 'ETH', contract_size: 1, tick_size: 0.01 },
    // ... (add more cryptocurrencies)
];

const ProfitLossCalculator = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedContract, setSelectedContract] = useState(null);
    const [numContracts, setNumContracts] = useState(1);
    const [entryPrice, setEntryPrice] = useState(0);
    const [exitPrice, setExitPrice] = useState(0);
    const [profitLoss, setProfitLoss] = useState(0);

    const getContractList = () => {
        switch (selectedCategory) {
            case 'Stocks':
                return stocksList;
            case 'Futures':
                return futuresList;
            case 'Crypto':
                return cryptoList;
            default:
                return [];
        }
    };

    const calculateCryptoPnL = (entryPrice, exitPrice, numContracts, contractSize, tickSize, leverage) => {
        const pnlWithoutLeverage = (exitPrice - entryPrice) * numContracts * contractSize * tickSize;
        return pnlWithoutLeverage * leverage;
    };

    const calculateFuturesPnL = (entryPrice, exitPrice, numContracts, contractSize, tickSize) => {
        return (exitPrice - entryPrice) * numContracts * contractSize * tickSize;
    };

    const calculateStocksPnL = (entryPrice, exitPrice, numContracts) => {
        return (exitPrice - entryPrice) * numContracts;
    };

    const calculateProfitLoss = () => {
        if (!selectedCategory || !selectedContract) {
            // Handle error or display a message for the user
            return;
        }

        const { contract_size, tick_size } = selectedContract;

        switch (selectedCategory) {
            case 'Stocks':
                setProfitLoss(calculateStocksPnL(entryPrice, exitPrice, numContracts));
                break;
            case 'Futures':
                setProfitLoss(calculateFuturesPnL(entryPrice, exitPrice, numContracts, contract_size, tick_size));
                break;
            case 'Crypto':
                // Assuming the crypto contracts also have a 'leverage' property
                setProfitLoss(
                    calculateCryptoPnL(entryPrice, exitPrice, numContracts, contract_size, tick_size, selectedContract.leverage)
                );
                break;
            default:
                setProfitLoss(NaN);
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
            <Grid item xs={10} sm={8} md={6} lg={4}>
                <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        Profit/Loss Calculator
                    </Typography>

                    <Autocomplete
                        options={categories}
                        getOptionLabel={(option) => option}
                        style={{ width: '100%', marginTop: '20px' }}
                        renderInput={(params) => <TextField {...params} label="Select Category" />}
                        onChange={(event, value) => {
                            setSelectedCategory(value);
                            setSelectedContract(null);
                        }}
                    />

                    <Autocomplete
                        options={getContractList()}
                        getOptionLabel={(option) => option.label}
                        style={{ width: '100%', marginTop: '20px' }}
                        renderInput={(params) => <TextField {...params} label="Select Contract" />}
                        onChange={(event, value) => setSelectedContract(value)}
                    />

                    <TextField
                        label="Number of Contracts"
                        type="number"
                        value={numContracts}
                        onChange={(e) => setNumContracts(e.target.value)}
                        fullWidth
                        style={{ marginTop: '20px' }}
                    />

                    <TextField
                        label="Entry Price"
                        type="number"
                        value={entryPrice}
                        onChange={(e) => setEntryPrice(e.target.value)}
                        fullWidth
                        style={{ marginTop: '20px' }}
                    />

                    <TextField
                        label="Exit Price"
                        type="number"
                        value={exitPrice}
                        onChange={(e) => setExitPrice(e.target.value)}
                        fullWidth
                        style={{ marginTop: '20px' }}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={calculateProfitLoss}
                        fullWidth
                        style={{ marginTop: '20px' }}
                    >
                        Calculate Profit/Loss
                    </Button>

                    {profitLoss !== 0 && (
                        <div style={{ marginTop: '20px' }}>
                            <Typography variant="h5">Profit/Loss: ${Number.parseInt(profitLoss)}</Typography>
                        </div>
                    )}
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ProfitLossCalculator;