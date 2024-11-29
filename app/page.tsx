import Image from "next/image";
import dev from '@/public/images/DSC_7134-removebg-preview.png'
// import ''

export default function Home() {
  return (
    <>
    <div className="w-full h-full">
      <div className="w-full h-full ">
        <div className="flex items-center space-x-2 border-2 w-24 border-secondary rounded-full cursor-pointer hover:bg-secondary">
          <div className="status-wrapper w-2 h-2 m-2">
            <div className="status "></div>
            <div className="pulse "></div>
          </div>
          <h1 className="text-xs font-mono text pr-2">Available</h1>
        </div>
        <div className="justify-center mx-auto flex space-x-8"> 
          <div className=" w-52 h-52 justify-center items-center rounded-full border-secondary border-2">
            <Image src={dev} alt="developer" width={1400} height={1400} className="rounded-full items-center justify-center w-52 h-52 object-cover mx-auto p-1"/>
          </div>
          <div className="self-center font-sans space-y-2">
            <h1 className="text-4xl font-mono font-bold">Clarence Laria</h1>
            <h1>Software Developer</h1>
            <h1>Nairobi, Kenya</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
