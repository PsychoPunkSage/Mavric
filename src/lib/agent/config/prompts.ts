// src/lib/agent/config/prompts.ts
export const TRADING_PROMPTS = {
    ANALYZE_MARKET: `Analyze the current market conditions for {token}. Consider:
      1. Recent price movements
      2. Volume trends
      3. Market sentiment
      4. Technical indicators`,

    RECOMMEND_TRADE: `Based on the market analysis and user preferences, recommend a trade with:
      1. Trade direction (buy/sell)
      2. Token pair
      3. Amount
      4. Target price
      5. Stop loss
      Explain your reasoning for each recommendation.`,

    EXECUTE_TRADE: `Execute the trade with these parameters:
      1. Verify balance and allowance
      2. Check gas prices
      3. Calculate maximum slippage
      4. Prepare transaction
      5. Record details for attestation`,

    PORTFOLIO_ANALYSIS: `Analyze the current portfolio across chains:
      1. Asset distribution
      2. Performance metrics
      3. Risk assessment
      4. Rebalancing recommendations`
};