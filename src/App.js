import logo from './logo.svg';
import './App.css';
import { useState } from "react";

const allBrands = [
  { id: "1", brandName: "Puma" },
  { id: "2", brandName: "Adidas" },
  { id: "3", brandName: "Fila" },
  { id: "4", brandName: "Reebok" },
  { id: "5", brandName: "Nike" },
];

function App() {
  const [selectedBrand, setselectedBrand] = useState([]);

  const onAddTocartClick = (id) => {
    const selectedItem = allBrands.find(item => item.id === id);

    if (!selectedBrand.some(item => item.id === id)) {
      setselectedBrand([...selectedBrand, selectedItem]);
    }
  };

  const onRemoveFromCartClick = (id) => {
    const updatedCart = selectedBrand.filter(item => item.id !== id);
    setselectedBrand(updatedCart);
  };

  return (
    <>
      <div>
        <p><strong>Add brand to your cart:</strong></p>
        {allBrands.map(brand => (
          <div key={brand.id}>
            <span>{brand.brandName}</span>
            <button onClick={() => onAddTocartClick(brand.id)}>
              Add to cart
            </button>
          </div>
        ))}
      </div>

      <div>
        <p><strong>Your Cart:</strong></p>
        {selectedBrand.length > 0 ? (
          <ul>
            {selectedBrand.map(brand => (
              <li key={brand.id}>
                {brand.brandName}
                <button
                  onClick={() => onRemoveFromCartClick(brand.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Cart is empty.</p>
        )}
      </div>
    </>
  );
}

export default App;
