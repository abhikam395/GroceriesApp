const COLORS = [
  {light: '#f0f4c3', dark: '#c0ca33'},
  {light: '#fff8e1', dark: '#ffb300'},
  {light: '#fbe9e7', dark: '#ff5722'},
  {light: '#e3f2fd', dark: '#64b5f6'},
  {light: '#f3e5f5', dark: '#ba68c8'},
  {light: '#fce4ec', dark: '#f06292'},
  {light: '#e8f5e9', dark: '#4caf50'},
];

export default function getRandomColor() {
  return COLORS[Math.floor(Math.random() * 7)];
}
