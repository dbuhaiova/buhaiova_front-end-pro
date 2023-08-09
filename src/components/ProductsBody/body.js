import './body.css'
import { BiSortAlt2 } from 'react-icons/bi';
import { BsFillPencilFill } from 'react-icons/bs';
import { BiBox } from 'react-icons/bi';
const Body = () => {
  const productData = [
    {
      ID: 0,
      Category: 'PC',
      Name: 'Lenovo Y50-70',
      Quantity: 5,
      Price: '25,000.00',
    },
    {
      ID: 1,
      Category: 'Clothes',
      Name: 'Nike M Nk Df Acd21',
      Quantity: 22,
      Price: '4,000.00',
    },
    {
      ID: 2,
      Category: 'Plumbing',
      Name: 'CERSANIT MITO 17',
      Quantity: 1337,
      Price: '5,000.00',
    },
  ];
    return (
      <div className="table-center">
        <p className="title">Products</p>
        <table>
          <thead>
            <tr>
              <th>
                ID <BiSortAlt2 /> 
              </th>
              <th>
                Category <BiSortAlt2 /> 
              </th>
              <th>
                Name <BiSortAlt2 /> 
              </th>
              <th>
               Quantity <BiSortAlt2 /> 
              </th>
              <th>
                Price (₴) <BiSortAlt2 /> 
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr key={product.ID}>
                <td>{product.ID}</td>
                <td>{product.Category}</td>
                <td>{product.Name}</td>
                <td>{product.Quantity}</td>
                <td>{product.Price}</td>
                <td>
                  <BsFillPencilFill className="icon" />
                  <BiBox className="icon"/> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Body;
  