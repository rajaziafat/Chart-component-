'use client'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Label } from 'recharts';

const data = [
    { month: "January", price: 165 },
    { month: "February", price: 175 },
    { month: "March", price: 160 },
    { month: "April", price: 165 },
    { month: "May", price: 175 },
    { month: "June", price: 165 },

];


const Barchart = () => {

    const startValue = 150;


    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
        

                data={data}
           
            >

                <defs>
                    <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1.5">
                        <stop offset="5%" stopColor="#c2b9cc" stopOpacity={1} />
                        <stop offset="95%" stopColor="#8c422c" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="8" horizontalPoints={[170, 300]} vertical={false} />

                <text
            
            
               
                className=' translate-x-[85%] xsm:translate-x-[90%]  translate-y-[84%] font-bold fill-[#777]  text-[10px] sm:text-[12px]'
                width={200}
                scaleToFit={true}
                textAnchor='middle'
                verticalAnchor='middle'
            >
                PREVIOUS CLOSE
            </text>
                <text
               
           
                className='translate-x-[85%] xsm:translate-x-[90%] translate-y-[90%] text-[18px] font-normal fill-white  sm:text-[23px]'
                width={200}
                scaleToFit={true}
                textAnchor='middle'
                verticalAnchor='middle'
            >
                $168.82
            </text>


                <XAxis tickLine={true} tick={{ fill: '#ffffff', fontSize: 14, fontWeight: 400 }}
                    axisLine={{ stroke: 'white' }}
                    dataKey="month"
                    allowDuplicatedCategory={false} />

               

                <YAxis
                    dataKey="price" domain={150}
                    allowDuplicatedCategory={false}
                    axisLine={{ stroke: 'white' }}
                    ticks={[150, 165, 180]}
                    padding={{ top: 30, bottom: 43 }} // Add padding top and bottom
                    tick={{ fill: '#aba4a4', fontSize: 14, fontWeight: 700 }}
                    tickFormatter={(value) => `$ ${value}`}
                />
                <Tooltip />

                <Area type="monotone" dataKey="price" stroke="#9586a3" fillOpacity={1} strokeWidth={3} fill="url(#chartColor)" />
                <ReferenceLine y={150} strokeWidth={1} stroke="white" strokeDasharray="0" />
                <ReferenceLine y={165} strokeWidth={1} stroke="white" strokeDasharray="0" />

            </AreaChart>

        </ResponsiveContainer>




    );
};

export default Barchart;
