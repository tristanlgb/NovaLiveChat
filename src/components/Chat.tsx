import { useEffect, useRef, useState } from 'react'
import { io, type Socket } from 'socket.io-client'

type ChatMessage = {
  id: string
  text: string
  sender: 'me' | 'server'
  timestamp: string
  clientId?: string
}

function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      text: 'Hola, ¿en qué te podemos ayudar hoy?',
      sender: 'server',
      timestamp: 'ahora',
    },
  ])
  const [input, setInput] = useState('')
  const [onlineUsers, setOnlineUsers] = useState(0)
  const [status, setStatus] = useState<'connecting' | 'connected' | 'disconnected'>('connecting')
  const socketRef = useRef<Socket | null>(null)

  useEffect(() => {
    const socket = io('http://localhost:8080', {
      transports: ['websocket'],
      reconnectionAttempts: 3,
    })

    socketRef.current = socket

    socket.on('connect', () => {
      setStatus('connected')
    })

    socket.on('disconnect', () => {
      setStatus('disconnected')
    })

    socket.on('onlineUsers', (count: number) => {
      setOnlineUsers(count)
    })

    socket.on('receiveMessage', (payload: ChatMessage | string) => {
      if (typeof payload === 'string') {
        setMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}-${Math.random()}`,
            text: payload,
            sender: 'server',
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          },
        ])
        return
      }

      if (payload.clientId === socket.id) {
        return
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-${Math.random()}`,
          text: payload.text,
          sender: 'server',
          timestamp: payload.timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ])
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  const sendMessage = (event: React.FormEvent) => {
    event.preventDefault()

    if (!input.trim() || !socketRef.current) {
      return
    }

    const message = {
      id: `${Date.now()}-${Math.random()}`,
      text: input.trim(),
      sender: 'me' as const,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      clientId: socketRef.current.id,
    }

    setMessages((prev) => [...prev, message])
    socketRef.current.emit('sendMessage', message)
    setInput('')
  }

  return (
    <section id="chat" className="section py-5">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="eyebrow">💬 Chat en vivo</span>
          <h2>Conecta con nosotros al instante</h2>
          <p className="section-intro">
            Un canal simple y rápido para consultar disponibilidad, hacer preguntas o recibir asesoramiento en tiempo real.
          </p>
        </div>

        <div className="chat-card fade-in-up delay-1">
          <div className="chat-header">
            <div>
              <h3>Asistente Aquario Studio</h3>
              <p>{onlineUsers} personas conectadas ahora</p>
            </div>
            <span className={`chat-status ${status}`}>{status === 'connected' ? 'Online' : status === 'connecting' ? 'Conectando...' : 'Desconectado'}</span>
          </div>

          <div className="chat-body">
            {messages.map((message) => (
              <div key={message.id} className={`chat-bubble ${message.sender}`}>
                <div>{message.text}</div>
                <small>{message.timestamp}</small>
              </div>
            ))}
          </div>

          <form className="chat-footer" onSubmit={sendMessage}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Escribe tu mensaje..."
              aria-label="Mensaje"
            />
            <button type="submit" disabled={status !== 'connected'}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Chat
