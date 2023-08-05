import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../App.css';

function Table() {
  const { filtered } = useContext(AppContext);

  return (
    <div className="table">
      <table>
        <thead>
          <tr className="tr">
            <th className="medium-column">Name</th>
            <th className="small-column">Rotation Period</th>
            <th className="small-column">Orbital Period</th>
            <th className="small-column">Diameter</th>
            <th className="medium-column">Climate</th>
            <th className="medium-column">Gravity</th>
            <th className="medium-column">Terrain</th>
            <th className="small-column">Surface Water</th>
            <th className="medium-column">Population</th>
            <th className="bigger-column">Films</th>
            <th className="big-column">Created</th>
            <th className="big-column">Edited</th>
            <th className="big-column">URL</th>
          </tr>
        </thead>
        <tbody>
          { filtered.map((obj) => (
            <tr key={ obj.name }>
              <td className="medium-column">{ obj.name }</td>
              <td className="small-column">{ obj.rotation_period }</td>
              <td className="small-column">{ obj.orbital_period }</td>
              <td className="small-column">{ obj.diameter }</td>
              <td className="medium-column">{ obj.climate }</td>
              <td className="medium-column">{ obj.gravity }</td>
              <td className="medium-column">{ obj.terrain }</td>
              <td className="small-column">{ obj.surface_water }</td>
              <td className="medium-column">{ obj.population }</td>
              <td className="bigger-column">{ obj.films }</td>
              <td className="big-column">{ obj.created }</td>
              <td className="big-column">{ obj.edited }</td>
              <td className="big-column">{ obj.url }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
