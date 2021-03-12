const COLORS = ['#fce4ec', '#e1f5fe', '#e8eaf6', '#dcedc8'];

export default function getRandomColor() {
  return COLORS[Math.floor(Math.random() * 4)];
}
