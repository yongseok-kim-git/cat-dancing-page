import Layout from './components/Layout.jsx'
import DancingCat from './components/DancingCat.jsx'
import AnimationControls from './components/AnimationControls.jsx'
import useAnimation from './hooks/useAnimation.js'

export default function App() {
  const anim = useAnimation()
  return (
    <Layout>
      <DancingCat isPlaying={anim.isPlaying} move={anim.move} speed={anim.speed} onToggle={anim.toggle} />
      <AnimationControls {...anim} onToggle={anim.toggle} />
    </Layout>
  )
}
