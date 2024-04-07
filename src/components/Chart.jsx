'use client'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, } from 'recharts';

const data = [
    { month: "January", price: 165 },
    { month: "February", price: 175 },
    { month: "March", price: 160 },
    { month: "April", price: 165 },
    { month: "May", price: 175 },
    { month: "June", price: 165 },
];

const CustomizedXAxisTick = (props) => {
    const { x, y, payload, width } = props;

    const intervalLinesCount = 25; 


    const spaceBetweenTicks = width / (data.length - 1);


    const spaceBetweenIntervalLines = spaceBetweenTicks / (intervalLinesCount + 1);

    const intervalLineLength = 10; 

    
    const intervalLineXCoords = Array.from({ length: intervalLinesCount }, (_, i) => x + (i + 1) * spaceBetweenIntervalLines);
  const topMargin = 6; 

    return (
        <g>
           
            <line x1={x} y1={y} x2={x} y2={y + 12} stroke="#ffffff" />
            
            {intervalLineXCoords.map((lineX, index) => (
                <line key={index} x1={lineX} y1={y + topMargin} x2={lineX} y2={y - intervalLineLength + 10} stroke="#ffffff" strokeWidth={1}  />
            ))}
        
            <text x={x} y={y + 24} textAnchor="middle" fill="#ffffff" fontSize={14}>
                {payload.value}
            </text>
        </g>
    );
};


const Barchart = () => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1.5">
                        <stop offset="5%" stopColor="#c2b9cc" stopOpacity={1} />
                        <stop offset="95%" stopColor="#8c422c" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="8" horizontalPoints={[170, 300]} vertical={false} />
                <text
                    x={"88%"}
                    y={"84%"}
                    className=' font-bold fill-[#777]  text-[10px] sm:text-[12px]'
                    width={200}
                    scaleToFit={true}
                    textAnchor='middle'
                    verticalAnchor='middle'
                >
                    PREVIOUS CLOSE
                </text>
                <text
                    x={"88%"}
                    y={"90%"}
                    className=' text-[18px] font-normal fill-white  sm:text-[23px]'
                    width={200}
                    scaleToFit={true}
                    textAnchor='middle'
                    verticalAnchor='middle'
                >
                    $168.82
                </text>
                <XAxis
                    tickLine={true}
                   
                    axisLine={{ stroke: 'white' }}
                    dataKey="month"
                    allowDuplicatedCategory={false}
                    className='font-Lexend'
                    tick={<CustomizedXAxisTick />}
                />
                <YAxis
                    dataKey="price"
                    domain={150}
                    
                    allowDuplicatedCategory={false}
                    axisLine={{ stroke: 'white' }}
                    ticks={[150, 165, 180]}
                    tickLine={{stroke:'#ffffff'}}
                    className='font-Lexend'
                    padding={{ top: 30, bottom: 43 }} // Add padding top and bottom
                    tick={{ fill: '#199692', fontSize: 14, fontWeight: 700 }}
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
