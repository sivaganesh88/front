import "./App.css";
import React from "react";
import nike from './images/nike_PNG7.png';
import img from './images/275155267037211.png';

function App () {
   
    
    return (
     
    <div className="bg-slate-900 flex flex-col w-screen h-screen ">
         <navbar className=" flex w-screen h-screen">
        <div className="flex flex-row items-center h-20 gap-24 w-screen">
         <img src={nike} className="bg-slate-900 w-10 h-10 ml-5 mt-3"></img>
         <ul className="flex flex-row gap-7 font-bold text-white ">
            <li className="hover:mt-5 duration-300">MENS</li>
            <li className="hover:mt-5 duration-300">Womens</li>
            <li className="hover:mt-5 duration-300">Kids</li>
            <li className="hover:mt-5 duration-300">Acesscories</li>
         </ul>
        </div>
        <input className="flex items-end justify-start h-7 mt-6 bg-transparent  mr-10 text-white font-bold underline hover:mt-5 decoration-4 duration-300" placeholder="enter the something!">
        </input>
        </navbar>
        <div className=" flex w-screen h-screen gap-5 flex-row ml-10 mt-[-200px] relative">
        <content >
        <h1 className="text-sm  font-bold text-orange-500 ml-32">{"NEW COLLECTION"}</h1>
        <h1 className="text-6xl text-white">NEW NIKE <br></br> RACT FLYKNIT</h1>
        <h1 className="w-[500px] text-slate-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde laboriosam labore reprehenderit maxime accusantium numquam velit, quis ab nobis tenetur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde laboriosam labore reprehenderit maxime </h1>
        <div className="flex gap-7 absolute ml-24 p-6 text-white">
        <button className="p-3 border-2 rounded-md px-5 active:border-orange-500 duration-150">QNT</button>
        <button className="p-3 border-2 rounded-md px-5 active:border-orange-500 duration-150">SIZE</button>
        <button className="p-3 border-2  rounded-md px-5 active:border-orange-500 duration-150">100$</button>
        </div>
        </content>
       <div className="flex mt-[-120px] ml-[130px]" >
        <img src={img} className="bg-cover w-[600px] h-96 mt-0"></img>
         </div>
        </div>
    </div>
     
    );
};
export default App;