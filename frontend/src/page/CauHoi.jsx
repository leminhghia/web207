import { useParams } from 'react-router-dom';
const CauHoi = () => {
    const { id } = useParams();
    console.log(id);
    
  return (
    <div>
      abc
    </div>
  )
}

export default CauHoi
