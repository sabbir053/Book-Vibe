import React, { useContext } from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { BookProviderContext } from '../../context/BookContext';

const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} 
     ${x + width / 2},${y + height / 3} 
     ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} 
     ${x + (2 * width) / 3},${y + height} 
     ${x + width}, ${y + height}
     Z`;

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    if (x == null || y == null || width == null || height == null) {
        return null;
    }

    return <path d={getPath(x, y, width, height)} fill={fill} />;
};

const PageToReload = () => {

    const { storedBook } = useContext(BookProviderContext);

    const chartData = storedBook.map(book => ({
        name: book.bookName,
        pages: book.totalPages,
        rating: book.rating
    }));

    return (
        <div className="flex justify-center mt-10">
            <BarChart width={850} height={400} data={chartData}>
                
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />

                <YAxis 
                    yAxisId="left" 
                    tickFormatter={(value) => `${value}`} 
                />

                <YAxis 
                    yAxisId="right" 
                    orientation="right" 
                    domain={[0, 5]} 
                    tickCount={6}
                />

                <Tooltip />
                <Legend />

                <Bar
                    yAxisId="left"
                    dataKey="pages"
                    fill="#22c55e"
                    shape={<TriangleBar />}
                />

                <Bar
                    yAxisId="right"
                    dataKey="rating"
                    fill="#3b82f6"
                    shape={<TriangleBar />}
                />

            </BarChart>
        </div>
    );
};

export default PageToReload;