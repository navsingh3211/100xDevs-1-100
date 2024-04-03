export default function Layout({children}:{children:React.ReactNode}){
  return <div>
      <div className="p-4 border-b text-center">
        20% discount Medium website
      </div>
      {children}
  </div>
}