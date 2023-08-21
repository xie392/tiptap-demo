const Table: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-1">
      {Array.from({ length: 8 }).map(() => {
        return Array.from({ length: 8 }).map((_, index) => {
          return (
            <div
              key={index}
              className="w-[1.5rem] h-[1.5rem] flex items-center justify-center border border-[#ddd] cursor-pointer"
            >
              {index + 1}
            </div>
          )
        })
      })}
    </div>
  )
}

export default Table
