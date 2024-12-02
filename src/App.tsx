import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  return (
    <>
      <Input placeholder="Email" />
      <Button onClick={() => console.log('Нажали')}>Кнопка</Button>
      <Button appearance="big">Кнопка</Button>
    </>
  );
}

export default App;
