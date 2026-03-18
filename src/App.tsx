import TodoHeader from './components/TodoHeader';
import IconSun from '/images/icon-sun.svg';

function App() {

  return (
    <main className="bg-dark-navy-950 h-lvh">
      <div className="bg-[url('./images/bg-desktop-dark.jpg')] h-80 bg-cover bg-center">
          <TodoHeader></TodoHeader>
      </div>
    </main>
  )
}

export default App
