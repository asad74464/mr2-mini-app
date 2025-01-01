import { ArrowDown, ArrowUp, Clock, Star } from 'lucide-react';
import TokenBalance from '../components/wallet/TokenBalance';
import WalletActions from '../components/wallet/WalletActions';

export default function WalletPage() {
  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-blue-400">UQA...auF</span>
            <span className="text-3xl font-bold">$1.56</span>
          </div>
        </div>
      </div>

      <WalletActions />

      <div className="bg-gray-800/50 p-4 rounded-lg mb-4">
        <div className="flex items-center gap-2 text-blue-400">
          <span>💎</span>
          <span>Only TON tokens are shown. Other tokens can't be spent here.</span>
          <span className="ml-auto">›</span>
        </div>
      </div>

      <div className="space-y-4">
        <TokenBalance
          name="Toncoin"
          symbol="TON"
          amount="0.27"
          value="1.56"
          icon="💎"
        />
        <TokenBalance
          name="Notcoin"
          symbol="NOT"
          amount="0"
          value="0"
          icon="⚠️"
        />
      </div>
    </div>
  );
}