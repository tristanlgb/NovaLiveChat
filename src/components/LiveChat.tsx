import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('https://novalivechat.onrender.com')

type Message = {
  nickname: string
  text: string
  time: string
}

function LiveChat() {
  const [nickname, setNickname] = useState('')
  const [activeNickname, setActiveNickname] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [onlineUsers, setOnlineUsers] = useState(0)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    socket.on('connect', () => {
      setConnected(true)
    })

    socket.on('disconnect', () => {
      setConnected(false)
    })

    socket.on('onlineUsers', (count: number) => {
      setOnlineUsers(count)
    })

    socket.on('receiveMessage', (newMessage: Message) => {
      setMessages((prevMessages) => [...prevMessages, newMessage])
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('onlineUsers')
      socket.off('receiveMessage')
    }
  }, [])

  const handleJoinChat = (event: React.FormEvent) => {
    event.preventDefault()

    if (!nickname.trim()) return

    setActiveNickname(nickname.trim())
  }

  const handleSendMessage = (event: React.FormEvent) => {
    event.preventDefault()

    if (!message.trim() || !activeNickname) return

    const newMessage: Message = {
      nickname: activeNickname,
      text: message.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    socket.emit('sendMessage', newMessage)
    setMessage('')
  }

  return (
    <section className="section py-5">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="eyebrow">💬 Live Chat</span>
          <h2>Habla con otros usuarios en tiempo real</h2>
          <p className="section-intro">
            Un canal rápido para conversar, consultar y conectar con la comunidad.
          </p>
        </div>

        <div className="chat-card fade-in-up delay-1">
          <div className="chat-header">
            <div>
              <h3>Live Chat</h3>
              <p>{connected ? 'Conectado' : 'Desconectado'} • {onlineUsers} online</p>
            </div>
            <span className={`chat-status ${connected ? 'connected' : 'disconnected'}`}>
              {connected ? 'Online' : 'Offline'}
            </span>
          </div>

          <div className="chat-body">
            {!activeNickname ? (
              <form onSubmit={handleJoinChat} className="chat-join-form">
                <label className="form-label">Ingresá tu nickname</label>
                <input
                  className="form-control"
                  type="text"
                  value={nickname}
                  onChange={(event) => setNickname(event.target.value)}
                  placeholder="Ej: Tu nombre"
                />
                <button className="btn btn-primary" type="submit">
                  Entrar al chat
                </button>
              </form>
            ) : (
              <>
                <p className="chat-user-tag">
                  Chateando como: <strong>{activeNickname}</strong>
                </p>

                <div className="chat-messages">
                  {messages.length === 0 ? (
                    <p className="text-muted">Todavía no hay mensajes.</p>
                  ) : (
                    messages.map((msg, index) => (
                      <div key={`${msg.nickname}-${msg.time}-${index}`} className="chat-bubble server">
                        <div className="chat-message-meta">
                          <strong>{msg.nickname}</strong>
                          <small>{msg.time}</small>
                        </div>
                        <p>{msg.text}</p>
                      </div>
                    ))
                  )}
                </div>

                <form onSubmit={handleSendMessage} className="chat-footer">
                  <input
                    className="form-control"
                    type="text"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Escribí tu mensaje..."
                  />
                  <button className="btn btn-primary" type="submit">
                    Enviar
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveChat
