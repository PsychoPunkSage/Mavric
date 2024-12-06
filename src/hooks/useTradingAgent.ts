// src/hooks/useTradingAgent.ts
import { useState, useEffect } from 'react';
import { useAccount, useNetwork, useProvider } from 'wagmi';
import { TradingAgent } from '@/lib/agent/trading-agent';
import { ethers } from 'ethers';

export function useTradingAgent() {
    const { address } = useAccount();
    const { chain } = useNetwork();
    const provider = useProvider();
    const [agent, setAgent] = useState<TradingAgent | null>(null);

    useEffect(() => {
        if (!address || !chain || !provider) return;

        // In a real app, you'd need to handle private key management securely
        // This is just for demo purposes
        const demoPrivateKey = process.env.NEXT_PUBLIC_DEMO_PRIVATE_KEY;
        if (!demoPrivateKey) return;

        const newAgent = new TradingAgent(
            demoPrivateKey,
            provider as ethers.providers.Provider,
            chain.id
        );

        setAgent(newAgent);
    }, [address, chain, provider]);

    const analyzeTrade = async (tokenSymbol: string) => {
        if (!agent) throw new Error('Agent not initialized');
        return agent.analyzeTrade(tokenSymbol);
    };

    const recommendTrade = async (tokenA: string, tokenB: string, amount: string) => {
        if (!agent) throw new Error('Agent not initialized');
        return agent.recommendTrade(tokenA, tokenB, amount);
    };

    const executeTrade = async (
        tokenIn: string,
        tokenOut: string,
        amount: string,
        slippage?: number
    ) => {
        if (!agent) throw new Error('Agent not initialized');
        return agent.executeTrade(tokenIn, tokenOut, amount, slippage);
    };

    const analyzePortfolio = async () => {
        if (!agent) throw new Error('Agent not initialized');
        return agent.analyzePortfolio();
    };

    return {
        agent,
        analyzeTrade,
        recommendTrade,
        executeTrade,
        analyzePortfolio,
    };
}