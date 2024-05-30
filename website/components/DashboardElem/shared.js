import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';
import { color } from 'd3';


const Title = styled(Typography)(({ theme }) => ({
    fontSize: 24,
    fontWeight: 'bold',
    padding: '2vh',
    // center
    textAlign: 'Left', // Correct property to center the text horizontally
    width: '100%',
  }));


  const Legend = styled(Typography)(({ theme }) => ({
    fontSize: 16,
    fontWeight: 'bold',
    padding: '2vh',
    textAlign: 'center', // Correct property to center the text horizontally
    width: '100%',
    color: '#808080'
  }));

const colors = [  
  "#FF6384",
  "#4682B4",
  "#4BC0C0",
  "#FFCE56",
  "#36A2EB",
  "#9966FF",
  "#FF9F40",
  "#FFCD56",
  "#4DC0C0",
  "#C36F8C",
  "#32CD32",
  "#A9A9A9",
  "#6495ED",
  "#FF4500",
  "#DA70D6",
  "#00FA9A",
  "#FFD700",
]
const ColorCollection = (ls) => ls.map((item, index) => {
    item.color = colors[index]
    return item
})

const default_formatter = (v) => {
  if (v === null) return ''
  if (v.hasOwnProperty('value')) return v.value
  if (v.hasOwnProperty('label')) return v.label
  if (v.hasOwnProperty('y')) return v.y
  return v
}

const sales_formatter=(v) => (v === null ? '' : `${default_formatter(v)} sales`)
const usd_formatter=(v) => (v === null ? '' : `$${default_formatter(v)}`)
const users_formatter=(v) => (v === null ? '' : `${default_formatter(v)} users`)

export { Title, Legend, ColorCollection, colors, 
  sales_formatter,  usd_formatter, users_formatter };
