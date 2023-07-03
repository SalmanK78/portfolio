import React from "react";

const PersonalInfo = () => {
    const info = [
        {
            name:'Name',
            info:'Salman Hossen'
        },
        {
            name:'Age',
            info:'20'
        },
        {
            name:'Email',
            info:'salmanhossen743@gmail.com'
        },
        {
            name:'Address',
            info:'Dhaka,Bangladesh'
        },
        {
            name:'Phone',
            info:'+8801858437473'
        },
        {
            name:'Birthday',
            info:'15,September,2003'
        }
    ]
  return (
    <div>
        <div className=" grid md:grid-cols-2 gap-x-20 gap-y-2 px-5 pb-7 max-w-5xl mx-auto">
            {
                info.map(({name,info})=>
                <div key={name}>
                    <div className="flex pb-2 justify-between border-b border-gray-600">
                        <p className="text-lg font-bold">{name}</p>
                        <p className="text-gray-400">{info}</p>
                    </div>
                </div>
                )
            }
        </div>
    </div>
  );
};

export default PersonalInfo;