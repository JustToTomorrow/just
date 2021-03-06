const isDate = <T>(val: T) => { 
  return val instanceof Date && !isNaN(val.getTime())
}

export default isDate
