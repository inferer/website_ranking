
export const TableCell = ({
  children,
  className
}) => {
  return (
    <div className={` px-5 flex items-center font-dbold text-sm leading-[21px] text-[#3F4664] ${className}`}>
      { children }
    </div>
  )
}

export const TableHeadCell = ({
  children,
  className
}) => {
  return (
    <div className={` px-5 flex items-center font-fbold text-sm leading-[21px] text-[rgba(0,0,0,0.6)] ${className}`}>
      { children }
    </div>
  )
}

export const TableRow = ({
  children,
}) => {
  return (
    <div className="flex justify-between items-center h-[64px] table__row">
      { children }
    </div>
  )
}

export const TableBody = ({
  children,
}) => {
  return (
    <div className="table__body">
      { children }
    </div>
  )
}

export const TableHead = ({
  children,
}) => {
  return (
    <div className="bg-[rgba(198,217,255,0.3)] flex justify-between h-[37px] items-center">
      { children }
    </div>
  )
}

export const Table = ({ children }) => {
  return (
    <div className="mt-3">
      { children }
    </div>
  )
}