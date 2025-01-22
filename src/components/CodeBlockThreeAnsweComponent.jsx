import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlockThreeAnsweComponent = () => {
  const codeString = `
  
    interface WalletBalance {
    currency: string;
    amount: number;
    blockchain: string;
    }

    interface FormattedWalletBalance extends WalletBalance {
      formatted: string;
    }

    interface Props extends BoxProps {}

    const WalletPage: React.FC<Props> = ({ children, ...rest }) => {
      const balances = useWalletBalances();
      const prices = usePrices();

      // Define priority levels for each blockchain
      const PRIORITY_MAP: Record<string, number> = {
        Osmosis: 100,
        Ethereum: 50,
        Arbitrum: 30,
        Zilliqa: 20,
        Neo: 20,
      };

      // Function to get priority level (default priority is -99 if not found)
      const getPriority = (blockchain: string): number => 
        PRIORITY_MAP[blockchain] ?? -99;

      // Sort wallet balances according to priority logic
      const sortedBalances = useMemo(() => {
        return balances
          .filter((balance: WalletBalance) => 
            getPriority(balance.blockchain) > -99 && balance.amount > 0
          )
          .sort((lhs: WalletBalance, rhs: WalletBalance) => 
            getPriority(rhs.blockchain) - getPriority(lhs.blockchain)
          );
      }, [balances]);

      // Balance format
      const formattedBalances: FormattedWalletBalance[] = useMemo(() => {
        return sortedBalances.map((balance) => ({
          ...balance,
          formatted: balance.amount.toFixed(),
        }));
      }, [sortedBalances]);

      // Displays rows of wallet data
      const rows = formattedBalances.map((balance, index) => {
        const usdValue = prices[balance.currency] * balance.amount;
        return (
          <WalletRow
            key={index}
            className={classes.row}
            amount={balance.amount}
            usdValue={usdValue}
            formattedAmount={balance.formatted}
          />
        );
      });

      return <div {...rest}>{rows}</div>;
    };

  `;

  return (
    <div>
      <div className="md:mx-6 md:p-6">
        <h1 className="text-3xl font-semibold mb-4">Answer</h1>
        <p className="text-lg mb-4">Refactored version of the code. View Command line to take explaining correctly how to improve.</p>

        <div className="md: h-[830px] overflow-auto">
          <SyntaxHighlighter language="javascript" style={solarizedlight}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeBlockThreeAnsweComponent;
