export default function Form() {
  const registerUser = async event => {
    event.preventDefault()
 
    const res = await fetch('/api/send', {
      body: JSON.stringify({
        email: event.target.email.value,
        message: event.target.message.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })
 
    const result = await res.json()
  }
 
  return (
    <div>
      <form onSubmit={registerUser}>
        <div >
          <label htmlFor="email">メールアドレス</label>
          <input id="email" name="email" type="email"  placeholder="name@example.com"/>
        </div>
        <div >
          <label htmlFor="message">問合せ内容</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <div>
          <button type="submit">送信</button>
        </div>
      </form>
    </div>
  )
}