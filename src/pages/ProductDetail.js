import { Link, useParams } from 'react-router-dom';

function ProdcutDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Detail</h1>
      <p>{params.id}</p>
      <p>
        <Link to='..' relative='path'>Back</Link>
      </p>
    </>
  );
}

export default ProdcutDetailPage;
