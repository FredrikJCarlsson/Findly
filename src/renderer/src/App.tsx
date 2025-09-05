import Sidebar from './components/Sidebar'
import ChatArea from './components/ChatArea'

function App(): React.JSX.Element {
  return (
    <div className="flex h-full">
      <Sidebar />
      <ChatArea />
    </div>
  )
}

export default App
