
interface InfoProps {
    availableBalance: number;
    currency: string;
}

export default function Info(props: InfoProps): JSX.Element{
    const { availableBalance, currency ='$$' } = props;
    return (
      <div>
        <p className='text-sm text-[#222222] mb-2'>Available balance</p>
        <div className='flex gap-3 items-center'>
          <span className='text-xs bg-brand px-1 py-px rounded text-white'>
            {currency}
          </span>
          <p className='text-lg font-bold'>{Intl.NumberFormat('en-US').format(availableBalance)}</p>
        </div>
      </div>
    );
}