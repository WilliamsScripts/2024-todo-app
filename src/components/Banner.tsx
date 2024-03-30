import trophy from '../assets/trophy.svg'


const Banner = () => {
  return (
    <div className='relative border-2 border-[#9EB031] h-[116px] bg-[#CDE53D] flex items-center px-5 shadow-lg gap-5'>
      <div className='absolute bg-[#071D55] w-[66.11px] h-[71px] flex items-center justify-center -top-1 right-7'>
        <h6 className='text-[#F2C94C] text-[18px] font-medium leading-[19.05px]'>$1</h6>
      </div>
      <img src={trophy} className='h-[40.89px] w-[53.1px]' alt="" />
      <h6 className='text-[18px] [text-shadow:0px_2px_1px_white] font-bold leading-[19.05px] text-[#071D55]'>Go Pro Upgrade Now</h6>
    </div>
  )
}

export default Banner