import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { fetchPlanets,
    filteredByName,
    setfilteredByName,
    changeSearch } = useContext(AppContext);

  useEffect(() => {
    const newArray = fetchPlanets.filter((obj) => obj.name.toLowerCase()
      .includes(changeSearch));

    setfilteredByName(newArray);
  }, [changeSearch]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { filteredByName.length > 0 ? filteredByName.map((obj) => (
          <tr key={ obj.name }>
            <td>{ obj.name }</td>
            <td>{ obj.rotation_period }</td>
            <td>{ obj.orbital_period }</td>
            <td>{ obj.diameter }</td>
            <td>{ obj.climate }</td>
            <td>{ obj.gravity }</td>
            <td>{ obj.terrain }</td>
            <td>{ obj.surface_water }</td>
            <td>{ obj.population }</td>
            <td>{ obj.films }</td>
            <td>{ obj.created }</td>
            <td>{ obj.edited }</td>
            <td>{ obj.url }</td>
          </tr>
        )) : fetchPlanets.map((obj) => (
          <tr key={ obj.name }>
            <td>{ obj.name }</td>
            <td>{ obj.rotation_period }</td>
            <td>{ obj.orbital_period }</td>
            <td>{ obj.diameter }</td>
            <td>{ obj.climate }</td>
            <td>{ obj.gravity }</td>
            <td>{ obj.terrain }</td>
            <td>{ obj.surface_water }</td>
            <td>{ obj.population }</td>
            <td>{ obj.films }</td>
            <td>{ obj.created }</td>
            <td>{ obj.edited }</td>
            <td>{ obj.url }</td>
          </tr>
        )) }
      </tbody>
    </table>
  );
}

export default Table;