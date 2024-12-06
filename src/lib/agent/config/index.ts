// src/lib/agent/config/index.ts
import { AgentConfig } from '@coinbase/agentkit';

export const TRADING_AGENT_CONFIG: AgentConfig = {
    name: 'Trading Assistant',
    description: 'An AI agent that helps with cryptocurrency trading decisions',
    instructions: `You are a cryptocurrency trading assistant. Your role is to:
    1. Analyze market conditions using available data
    2. Make trading recommendations based on user preferences
    3. Execute trades when authorized
    4. Record all trading activities via attestations
    5. Manage portfolio across multiple chains
    
    Follow these rules:
    - Always explain your reasoning
    - Never risk more than the user's specified amount
    - Keep track of all transactions for attestations
    - Consider gas fees in calculations
    - Verify sufficient balances before transactions`,
    model: 'gpt-4-1106-preview',
    temperature: 0.7,
    tools: [] // We'll add tools later
};

export const DEFAULT_TRADING_PARAMS = {
    maxSlippage: 0.5, // 0.5%
    maxTradeAmount: '1000000000000000000', // 1 ETH in wei
    minTradeAmount: '100000000000000000', // 0.1 ETH in wei
    defaultGasLimit: '300000',
};

export const SUPPORTED_TOKENS = {
    ETH: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
        addresses: {
            baseGoerli: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
            polygonMumbai: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'
        }
    },
    USDC: {
        name: 'USD Coin',
        symbol: 'USDC',
        decimals: 6,
        addresses: {
            baseGoerli: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
            polygonMumbai: '0x0FA8781a83E46826621b3BC094Ea2A0212e71B23'
        }
    }
};