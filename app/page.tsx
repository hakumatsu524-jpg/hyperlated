'use client'

import { useState } from 'react'
import {
  Activity,
  ArrowDown,
  ArrowUp,
  BarChart3,
  BookOpen,
  ChevronDown,
  CircleHelp,
  Copy,
  Crosshair,
  Gauge,
  Menu,
  Moon,
  PanelLeft,
  Settings,
  ShieldCheck,
  Star,
  Wallet,
  Zap,
} from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a3ecf2ae-8a69-485e-a553-0c442bc6ae21-H1MV6W2mQki2cWdx9oDb6NNKMrO7pp.png'

const markets = [
  ['SOL-PERP', '176.42', '+4.82%', 'teal'],
  ['BTC-PERP', '118,406', '+1.64%', 'blue'],
  ['ETH-PERP', '4,285.10', '+2.18%', 'violet'],
  ['JUP-PERP', '0.7824', '-0.92%', 'orange'],
  ['BONK-PERP', '0.000027', '+8.41%', 'pink'],
]

const orderBook = [
  ['176.58', '1,240.8', '12%'], ['176.54', '842.1', '8%'], ['176.51', '2,109.4', '20%'], ['176.48', '638.2', '6%'], ['176.45', '1,384.0', '13%'],
]
const bids = [['176.39', '982.2', '10%'], ['176.35', '1,846.7', '18%'], ['176.31', '710.4', '7%'], ['176.28', '2,304.1', '23%'], ['176.21', '1,126.8', '11%']]

function Stat({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return <div><p className="text-[10px] uppercase tracking-[0.14em] text-zinc-500">{label}</p><p className={`mt-1 text-sm font-medium ${accent ?? 'text-zinc-100'}`}>{value}</p></div>
}

function Chart() {
  return <div className="relative h-full min-h-[300px] overflow-hidden bg-[#0a0a0d]">
    <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'linear-gradient(#27242f 1px, transparent 1px), linear-gradient(90deg, #27242f 1px, transparent 1px)', backgroundSize: '58px 48px' }} />
    <div className="absolute left-4 top-4 flex items-center gap-5 text-[11px] text-zinc-500"><span className="text-zinc-200">1H</span><span>4H</span><span>1D</span><span>1W</span><span className="ml-3 text-zinc-600">Indicators</span></div>
    <svg className="absolute inset-x-5 bottom-8 top-12 h-[calc(100%-80px)] w-[calc(100%-45px)]" viewBox="0 0 800 280" preserveAspectRatio="none" aria-label="SOL price chart">
      <defs><linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#7c3aed" stopOpacity=".24"/><stop offset="1" stopColor="#7c3aed" stopOpacity="0"/></linearGradient></defs>
      <path d="M0 222 L28 214 46 228 64 205 82 212 102 184 118 198 136 173 151 190 169 168 183 176 201 151 216 160 235 135 251 149 267 112 284 128 301 94 319 106 336 82 353 120 369 100 389 116 404 92 421 104 440 84 455 92 473 62 489 77 506 56 522 66 542 48 558 71 577 45 593 62 610 36 629 54 648 40 665 54 682 24 698 44 718 18 738 32 758 10 800 4 L800 280 0 280Z" fill="url(#chartFill)" />
      <path d="M0 222 L28 214 46 228 64 205 82 212 102 184 118 198 136 173 151 190 169 168 183 176 201 151 216 160 235 135 251 149 267 112 284 128 301 94 319 106 336 82 353 120 369 100 389 116 404 92 421 104 440 84 455 92 473 62 489 77 506 56 522 66 542 48 558 71 577 45 593 62 610 36 629 54 648 40 665 54 682 24 698 44 718 18 738 32 758 10 800 4" fill="none" stroke="#a78bfa" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      <path d="M0 232 L800 232" stroke="#6366f1" strokeDasharray="4 6" opacity=".5" vectorEffect="non-scaling-stroke" />
    </svg>
    <div className="absolute right-2 top-[30%] rounded bg-violet-500 px-2 py-1 text-[10px] font-medium text-white">$176.42</div>
    <div className="absolute bottom-2 left-4 right-4 flex justify-between text-[10px] text-zinc-600"><span>10:00</span><span>12:00</span><span>14:00</span><span>16:00</span><span>18:00</span></div>
  </div>
}

export default function Page() {
  const [selected, setSelected] = useState('SOL-PERP')
  const [side, setSide] = useState<'long' | 'short'>('long')
  const [connected, setConnected] = useState(false)
  const [notice, setNotice] = useState('')

  function placeOrder() {
    setNotice(`${side === 'long' ? 'Long' : 'Short'} order staged — connect wallet to submit`)
  }

  return <main className="min-h-screen bg-[#08080a] text-zinc-100 selection:bg-violet-500/40">
    <header className="flex h-14 items-center justify-between border-b border-white/[0.07] bg-[#0b0b0e] px-4 lg:px-6">
      <div className="flex items-center gap-7"><button className="text-zinc-500 lg:hidden" aria-label="Open menu"><Menu size={18}/></button><div className="flex items-center gap-2"><div className="h-8 w-8 overflow-hidden rounded-lg border border-white/10 bg-black"><img src={logoUrl} alt="Hyperlated logo" className="h-full w-full object-cover object-center" /></div><span className="text-[17px] font-semibold tracking-tight">hyperlated</span><span className="rounded border border-violet-500/30 bg-violet-500/10 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-violet-300">beta</span></div><nav className="hidden items-center gap-6 text-xs text-zinc-500 lg:flex"><span className="text-zinc-100">Trade</span><span>Portfolio</span><span>Leaderboard</span><span>Docs</span></nav></div>
      <div className="flex items-center gap-3"><div className="hidden items-center gap-2 text-[11px] text-zinc-500 sm:flex"><span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_8px_#2dd4bf]"/>Solana mainnet</div><button className="rounded-md border border-white/10 p-2 text-zinc-500 hover:text-zinc-200" aria-label="Settings"><Settings size={15}/></button><button onClick={() => setConnected(!connected)} className={`flex items-center gap-2 rounded-md px-3 py-2 text-xs font-medium transition ${connected ? 'bg-teal-400/10 text-teal-300 ring-1 ring-teal-400/30' : 'bg-zinc-100 text-zinc-950 hover:bg-white'}`}><Wallet size={14}/>{connected ? '7x4...mQ2' : 'Connect wallet'}</button></div>
    </header>

    <div className="border-b border-white/[0.06] bg-[#0b0b0e] px-4 lg:px-6"><div className="flex gap-6 overflow-x-auto py-3 text-xs">{markets.map(([name, price, change, color]) => <button key={name} onClick={() => setSelected(name)} className={`flex shrink-0 items-center gap-3 ${selected === name ? 'text-zinc-100' : 'text-zinc-500'}`}><span className={`h-1.5 w-1.5 rounded-full bg-${color}-400`} /><span>{name}</span><span className="font-mono text-zinc-300">${price}</span><span className={change.startsWith('+') ? 'text-teal-400' : 'text-red-400'}>{change}</span></button>)}</div></div>

    <section className="border-b border-white/[0.06] px-4 py-4 lg:px-6"><div className="flex flex-wrap items-end justify-between gap-4"><div className="flex items-center gap-5"><div><div className="flex items-center gap-2"><h1 className="text-lg font-semibold">{selected}</h1><Star size={14} className="text-zinc-600"/><ChevronDown size={14} className="text-zinc-600"/></div><div className="mt-1 flex items-center gap-2"><span className="font-mono text-2xl tracking-tight">176.42</span><span className="text-xs text-teal-400">+4.82%</span></div></div><div className="hidden h-9 w-px bg-white/10 sm:block"/><div className="hidden gap-7 sm:flex"><Stat label="Mark price" value="$176.39"/><Stat label="24h volume" value="$842.6M"/><Stat label="Open interest" value="$1.24B"/><Stat label="Funding / 1h" value="0.0124%" accent="text-teal-400"/></div></div><div className="flex items-center gap-2 text-[11px] text-zinc-500"><Activity size={14} className="text-teal-400"/>System operational <span className="text-zinc-700">•</span> Last block 312,842,901</div></div></section>

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_330px]">
      <div className="border-r border-white/[0.06]"><div className="flex h-11 items-center gap-5 border-b border-white/[0.06] px-4 text-[11px] text-zinc-500"><span className="text-zinc-100">Chart</span><span>Depth</span><span>Trades</span><div className="ml-auto flex gap-3"><BarChart3 size={14}/><PanelLeft size={14}/><MaxIcon /></div></div><div className="h-[365px] border-b border-white/[0.06]"><Chart /></div><div className="border-b border-white/[0.06] px-4 py-3"><div className="mb-3 flex items-center gap-4 text-[11px] text-zinc-500"><span className="text-zinc-100">Positions (0)</span><span>Open orders (0)</span><span>Order history</span></div><div className="flex min-h-16 items-center justify-center rounded border border-dashed border-white/10 text-[11px] text-zinc-600">Connect your wallet to view positions and orders</div></div><div className="p-4"><div className="mb-3 flex items-center gap-2 text-xs font-medium"><BookOpen size={14} className="text-violet-400"/> How to use Hyperlated</div><div className="grid gap-3 text-[11px] leading-relaxed text-zinc-500 sm:grid-cols-3"><p><b className="text-zinc-300">1. Connect.</b> Link a Solana wallet to deposit collateral and unlock trading.</p><p><b className="text-zinc-300">2. Choose.</b> Select a market, set leverage, then enter size and limit or market price.</p><p><b className="text-zinc-300">3. Manage.</b> Monitor margin, funding, and liquidation price from your positions tab.</p></div></div></div>

      <aside className="bg-[#0b0b0e]"><div className="border-b border-white/[0.06] p-4"><div className="mb-4 flex items-center justify-between"><h2 className="text-sm font-semibold">Order book</h2><span className="font-mono text-[10px] text-zinc-600">0.01 USD</span></div><div className="grid grid-cols-3 gap-2 pb-2 text-[10px] uppercase tracking-wider text-zinc-600"><span>Price (USD)</span><span className="text-right">Size (SOL)</span><span className="text-right">Total</span></div><div className="space-y-1">{orderBook.map(([price, size, total]) => <div key={price} className="relative grid grid-cols-3 gap-2 text-[11px] font-mono"><div className="absolute right-0 top-0 h-full bg-red-400/[0.07]" style={{width: total}}/><span className="relative text-red-400/80">{price}</span><span className="relative text-right text-zinc-400">{size}</span><span className="relative text-right text-zinc-600">{total}</span></div>)}</div><div className="my-3 flex items-center gap-2 border-y border-white/[0.05] py-2 font-mono text-sm"><span className="text-teal-400">$176.42</span><span className="text-[10px] text-zinc-600">≈ $176.39 mark</span></div><div className="space-y-1">{bids.map(([price, size, total]) => <div key={price} className="relative grid grid-cols-3 gap-2 text-[11px] font-mono"><div className="absolute right-0 top-0 h-full bg-teal-400/[0.07]" style={{width: total}}/><span className="relative text-teal-400/80">{price}</span><span className="relative text-right text-zinc-400">{size}</span><span className="relative text-right text-zinc-600">{total}</span></div>)}</div></div>

        <div className="p-4"><div className="mb-4 flex items-center justify-between"><h2 className="text-sm font-semibold">Place order</h2><button className="text-zinc-600 hover:text-zinc-300" aria-label="Order help"><CircleHelp size={15}/></button></div><div className="mb-4 grid grid-cols-2 rounded-md bg-zinc-900 p-1 text-xs"><button onClick={() => setSide('long')} className={`rounded py-2 ${side === 'long' ? 'bg-teal-400/15 text-teal-300' : 'text-zinc-500'}`}>Long</button><button onClick={() => setSide('short')} className={`rounded py-2 ${side === 'short' ? 'bg-red-400/15 text-red-300' : 'text-zinc-500'}`}>Short</button></div><div className="mb-3 grid grid-cols-2 gap-2 text-[11px] text-zinc-500"><button className="rounded border border-violet-500/30 bg-violet-500/10 py-2 text-violet-300">Market</button><button className="rounded border border-white/10 py-2">Limit</button></div><label className="mb-2 block text-[10px] uppercase tracking-wider text-zinc-600">Size</label><div className="mb-3 flex items-center rounded border border-white/10 bg-zinc-900/50 px-3 py-2"><input aria-label="Order size" placeholder="0.00" className="w-full bg-transparent font-mono text-sm outline-none placeholder:text-zinc-700"/><span className="text-[11px] text-zinc-500">SOL</span></div><div className="mb-3 flex items-center justify-between text-[10px] text-zinc-600"><span>Available margin</span><span>—</span></div><div className="mb-4 flex items-center gap-2"><Gauge size={13} className="text-zinc-600"/><span className="text-[10px] text-zinc-500">Leverage</span><div className="ml-auto flex items-center gap-2 rounded border border-white/10 px-2 py-1 text-xs">5x <ChevronDown size={12}/></div></div><button onClick={placeOrder} className={`flex w-full items-center justify-center gap-2 rounded-md py-2.5 text-xs font-semibold transition ${side === 'long' ? 'bg-teal-400 text-[#071311] hover:bg-teal-300' : 'bg-red-400 text-[#170808] hover:bg-red-300'}`}><Zap size={14}/>{side === 'long' ? 'Connect to trade long' : 'Connect to trade short'}</button>{notice && <p className="mt-3 text-center text-[10px] text-violet-300">{notice}</p>}</div>
        <div className="border-t border-white/[0.06] p-4"><div className="flex items-start gap-2 text-[10px] leading-relaxed text-zinc-600"><ShieldCheck size={14} className="mt-0.5 shrink-0 text-teal-500"/> Non-custodial trading on Solana. Hyperlated never holds your funds. Verify every transaction in your wallet before signing.</div></div></aside>
    </div>
    <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] px-4 py-3 text-[10px] text-zinc-600 lg:px-6"><div className="flex items-center gap-4"><span>Hyperlated Protocol v0.1</span><span>Docs</span><span>Terms</span><span>Risk disclosure</span></div><div className="flex items-center gap-4"><span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-teal-400"/> All systems operational</span><Moon size={13}/></div></footer>
  </main>
}

function MaxIcon() { return <div className="h-3 w-3 border border-zinc-600" aria-hidden="true" /> }
void ArrowUp; void ArrowDown; void Copy; void Crosshair;
