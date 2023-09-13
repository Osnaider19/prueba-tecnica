import {BsSearch} from 'react-icons/bs'

export function Search() {
  return (
    <div className="w-full h-11 flex justify-center items-center px-4 bg-[#16181C] rounded-3xl overflow-hidden">
        <div className="flex justify-center items-center text-lg">
            <BsSearch/>
        </div>
      <input type="text" className="w-full h-full px-4 bg-[#16181C] outline-none" placeholder="buscar"/>
    </div>
  );
}
