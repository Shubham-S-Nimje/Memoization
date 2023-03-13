import React, {useMemo} from 'react'
import'./Demolist.css'

const Demolist = (props) => {
  const {items} = props;
  const {sortTitle} = props;

  const sortedList = useMemo(() => {
    console.log('Items sorted')
    return (sortTitle === 'Change to Decending Order'?items.sort((a,b) => a - b):items.sort((a,b) => b - a))
  },[items,sortTitle])
  console.log('DEMO LIST RUNNING')

  return (
    <div className='list'>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      </div>
  )
}

export default React.memo(Demolist);
