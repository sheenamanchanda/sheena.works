export default function Aurora() {
  return (
    <>
      {/* Aurora Orbs */}
      <div className="aurora-orb aurora-orb-1"></div>
      <div className="aurora-orb aurora-orb-2"></div>
      <div className="aurora-orb aurora-orb-3"></div>
      
      {/* Additional floating particles */}
      <div className="fixed top-20 right-10 w-2 h-2 bg-sky-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="fixed top-1/3 left-20 w-1 h-1 bg-blue-300 rounded-full opacity-70 animate-pulse" style={{animationDelay: '3s'}}></div>
      <div className="fixed bottom-1/4 right-1/4 w-3 h-3 bg-sky-500 rounded-full opacity-50 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="fixed top-3/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-65 animate-pulse" style={{animationDelay: '4s'}}></div>
      <div className="fixed top-1/2 right-1/3 w-2 h-2 bg-sky-300 rounded-full opacity-55 animate-pulse" style={{animationDelay: '5s'}}></div>
    </>
  )
}