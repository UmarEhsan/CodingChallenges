
import React from 'react';

export const Bestsellers = (props) => {
  const { sellers, label } = props;
  return (
    <div className="best-sellers">
      <div className="sellers">
        <h4 className="label">{label}</h4>

        {sellers.map((elem, idx) => {
          return (
            <div class="container-seller">


              <div className={elem.isSelected ? 'selected' : 'notSelected'}>
                <div className="image">
                  <img alt={elem.name} src="https://pbs.twimg.com/profile_images/1327904134452948992/IVlyKOel_bigger.jpg" />
                </div>
                <div className="details">
                  <p style={{ color: '#FE9C80' }}><b>{elem.name}</b></p>
                  <p style={{ color: '#EAE1E1' }}>{elem.shortDesc}</p>
                  <p><b>${elem.price}</b></p>
                </div>

              </div>
            </div>



          )
        }

        )}

      </div>
    </div>
  )
};
