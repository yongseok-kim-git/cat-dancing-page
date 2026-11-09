export default function Layout({ children }) {
  return (
    <div className="layout">
      <header className="header">
        <h1>춤추는 고양이 🐾</h1>
        <p>고양이를 누르거나 버튼으로 춤을 바꿔 보세요</p>
      </header>
      <main className="main">{children}</main>
      <footer className="footer">Made with React + CSS keyframes</footer>
    </div>
  )
}
