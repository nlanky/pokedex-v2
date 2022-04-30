// REACT
import { FC } from 'react';

// LOCAL FILES
// Styling
import 'features/common/components/Wave.css';
// Utility Functions
import { range } from 'features/common/utils';

interface WaveProps {
  color?: string;
  numberOfColumns?: number;
  columnWidth?: number;
  gutterWidth?: number;
  reverse?: boolean;
  scaleYEnd?: number;
  scaleYStart?: number;
  size?: number;
}

export const Wave: FC<WaveProps> = ({
  color = '#fff',
  numberOfColumns = 5,
  columnWidth = '20%',
  gutterWidth = 1,
  reverse = false,
  size = 22,
}) => {
  const columns = reverse
    ? range(0, numberOfColumns).reverse()
    : range(0, numberOfColumns);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: 0.8 * size,
        width: size,
      }}
    >
      {columns.map((index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            height: '100%',
            width: columnWidth,
            marginRight: index !== numberOfColumns ? gutterWidth : 0,
            animation: `wave 1.2s ease-in-out -${
              index / 10
            }s infinite`,
          }}
        />
      ))}
    </div>
  );
};
