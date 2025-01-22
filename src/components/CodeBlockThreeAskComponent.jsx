import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlockThreeAskComponent = () => {
  const codeString = `
    interface WalletBalance {
      currency: string;
      amount: number;
    }
    interface FormattedWalletBalance {
      currency: string;
      amount: number;
      formatted: string;
    }

    interface Props extends BoxProps {

    }
    const WalletPage: React.FC<Props> = (props: Props) => {
      const { children, ...rest } = props;
      const balances = useWalletBalances();
      const prices = usePrices();

      const getPriority = (blockchain: any): number => {
        switch (blockchain) {
          case 'Osmosis':
            return 100
          case 'Ethereum':
            return 50
          case 'Arbitrum':
            return 30
          case 'Zilliqa':
            return 20
          case 'Neo':
            return 20
          default:
            return -99
        }
      }

      const sortedBalances = useMemo(() => {
        return balances.filter((balance: WalletBalance) => {
          const balancePriority = getPriority(balance.blockchain);
          if (lhsPriority > -99) {
            if (balance.amount <= 0) {
              return true;
            }
          }
          return false
        }).sort((lhs: WalletBalance, rhs: WalletBalance) => {
          const leftPriority = getPriority(lhs.blockchain);
          const rightPriority = getPriority(rhs.blockchain);
          if (leftPriority > rightPriority) {
            return -1;
          } else if (rightPriority > leftPriority) {
            return 1;
          }
        });
      }, [balances, prices]);

      const formattedBalances = sortedBalances.map((balance: WalletBalance) => {
        return {
          ...balance,
          formatted: balance.amount.toFixed()
        }
      })

      const rows = sortedBalances.map((balance: FormattedWalletBalance, index: number) => {
        const usdValue = prices[balance.currency] * balance.amount;
        return (
          <WalletRow 
            className={classes.row}
            key={index}
            amount={balance.amount}
            usdValue={usdValue}
            formattedAmount={balance.formatted}
          />
        )
      })

      return (
        <div {...rest}>
          {rows}
        </div>
      )
    }

  `;

  return (
    <div>
      <div className="md:max-w-3xl mx-auto md:p-6">
        <h1 className="text-3xl font-semibold mb-4">Task</h1>
        <p className="text-lg mb-4">
          List out the computational inefficiencies and anti-patterns found in
          the code block below.
        </p>

        <div className="text-white">
          <h1 className="uppercase text-orange-300 text-xl sm:text-4xl">
            Code Instructions
          </h1>

          <div className="mt-4">
            <h3 className="text-xl font-medium">
              1. This code block uses:
            </h3>
            <ul className="list-decimal list-inside pl-5">
              <li>ReactJS with TypeScript.</li>
              <li>Functional components.</li>
              <li>React Hooks.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-medium">
              2. Additional Requirements:
            </h3>
            <p className="mb-2 ml-5">
              You should also provide a refactored version of the code, but more
              points are awarded to accurately stating the issues and explaining
              correctly how to improve them.
            </p>
          </div>
        </div>
        <div className="md:h-[500px] overflow-auto">
          <SyntaxHighlighter language="javascript" style={solarizedlight}>
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeBlockThreeAskComponent;
