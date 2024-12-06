'use client';

import React, { useState } from 'react';
import { useTradingAgent } from '@/hooks/useTradingAgent';
import { Button } from '@/components/ui/button';
import { useAccount } from 'wagmi';

export function TradingInterface() {
    const { address } = useAccount();
    const { analyzeTrade, recommendTrade, executeTrade } = useTradingAgent();
    const [analysis, setAnalysis] = useState<string>('');
    const [recommendation, setRecommendation] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleAnalyze = async () => {
        try {
            setLoading(true);
            const result = await analyzeTrade('ETH');
            setAnalysis(result);
        } catch (error) {
            console.error('Analysis failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleRecommend = async () => {
        try {
            setLoading(true);
            const result = await recommendTrade('ETH', 'USDC', '1000000000000000000'); // 1 ETH
            setRecommendation(result);
        } catch (error) {
            console.error('Recommendation failed:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleExecuteTrade = async () => {
        try {
            setLoading(true);
            const result = await executeTrade('ETH', 'USDC', '1000000000000000000');
            if (result.success) {
                console.log('Trade executed:', result.txHash);
                console.log('Attestation recorded:', result.attestationId);
            } else {
                console.error('Trade failed:', result.error);
            }
        } catch (error) {
            console.error('Trade execution failed:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!address) {
        return (
            <div className="p-4 text-center">
                Please connect your wallet to use the trading interface.
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Trading Interface</h1>
            <div className="mb-4">
                <Button onClick={handleAnalyze} disabled={loading}>
                    Analyze Trade
                </Button>
                {analysis && <p className="mt-2">Analysis: {analysis}</p>}
            </div>
            <div className="mb-4">
                <Button onClick={handleRecommend} disabled={loading}>
                    Recommend Trade
                </Button>
                {recommendation && <p className="mt-2">Recommendation: {recommendation}</p>}
            </div>
            <div>
                <Button onClick={handleExecuteTrade} disabled={loading}>
                    Execute Trade
                </Button>
            </div>
        </div>
    );
}
