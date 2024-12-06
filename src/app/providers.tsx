'use client'

import { Chain, createConfig, configureChains, WagmiConfig } from 'wagmi'
import { baseGoerli, polygonMumbai } from 'viem/chains'
import { publicProvider } from 'wagmi/providers/public'
import { Web3Modal } from '@web3modal/react'
import { EthereumClient, w3mConnectors } from '@web3modal/ethereum'
import { createPublicClient, http } from 'viem'

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!

if (!projectId) {
    throw new Error('You need to provide NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID env variable')
}

const { chains, publicClient } = configureChains(
    [baseGoerli, polygonMumbai],
    [publicProvider()]
)

const config = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({
        chains,
        projectId,
        version: 2
    }),
    publicClient
})

const ethereumClient = new EthereumClient(config, { chains })

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <WagmiConfig config={config}>
                {children}
            </WagmiConfig>
            <Web3Modal
                projectId={projectId}
                ethereumClient={ethereumClient}
            />
        </>
    )
}