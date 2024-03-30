import { useEffect } from "react";

type TInput = {
  value: string
  onChange: (e: any) => void
  name: string
}

const Input = ({ value, onChange, name }: TInput) => {

  useEffect(() => {
    let domInput;
    if (name) {
      domInput = document.getElementById(name) as any;
    }

    if (domInput && value !== undefined) {
      domInput.value = value;
    }
  }, [value, name]);


  return (
    <div>
      <label htmlFor="" className='block font-normal text-[16px] leading-[19.44px] mb-3 tracking-[1px] text-black'>Task Name</label>
      <input type="text" defaultValue={value} onChange={onChange} name={name} id={name} className='block px-6 border-[#CBCBCB] text-[20px] leading-[24.3px] font-normal bg-[#FDFDFD] border-2 text-[#0D2972] rounded-lg h-[69px] w-full' />
    </div>
  )
}

export default Input