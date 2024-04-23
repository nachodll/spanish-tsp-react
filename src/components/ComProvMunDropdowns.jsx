import { useEffect, useState } from "react"
import { getProvincias, getComunidades, getMunicipios } from "../utils/geoapi.js"

export function ComProvMunDropdowns() {
  let [comunidades, setComunidades] = useState(null)
  let [provincias, setProvincias] = useState(null)
  let [municipios, setMunicipios] = useState(null)
  let [selectedComunidad, setSelectedComunidad] = useState(null)
  let [selectedProvincia, setSelectedProvincia] = useState(null)
  let [selectedMunicipio, setSelectedMunicipio] = useState(null)

  useEffect(()=>{
    getComunidades()
      .then(comunidades => setComunidades(comunidades))
  }, [])

  useEffect(()=>{
    if (selectedComunidad !== null){
      getProvincias(selectedComunidad.id)
        .then(provincias => setProvincias(provincias))
    }
    setSelectedProvincia(null)
    setMunicipios(null)
  }, [selectedComunidad])

  useEffect(()=>{
    if (selectedProvincia !== null){
      getMunicipios(selectedProvincia.id)
        .then(municipios => setMunicipios(municipios))
    }
    setSelectedMunicipio(null)
  }, [selectedProvincia])

  const handleChangeComunidad = e => {
    setSelectedComunidad({
      id: e.target.value, 
      name: e.target.options[e.target.selectedIndex].textContent
    })
  }

  const handleChangeProvincia = e => {
    setSelectedProvincia({
      id: e.target.value, 
      name: e.target.options[e.target.selectedIndex].textContent
    })
  }

  const handleChangeMunicipio = e => {
    setSelectedMunicipio({
      id: e.target.value, 
      name: e.target.options[e.target.selectedIndex].textContent
    })
  }

  return (
    <div className="dropdownsContainer">
      <select onChange={handleChangeComunidad}>
        {!selectedComunidad && <option value="">--selecciona comunidad--</option>}
        { comunidades &&
          comunidades.map(comunidad => (
            <option key={comunidad.id} value={comunidad.id}>
              {comunidad.name}
            </option>
          ))
        }
      </select>

      <select disabled={selectedComunidad===null} onChange={handleChangeProvincia}>
        {!selectedProvincia && <option value="">--selecciona provincia--</option>}
        { provincias &&
          provincias.map(provincia => (
            <option key={provincia.id} value={provincia.id}>
              {provincia.name}
            </option>
          ))
        }
      </select>

      <select disabled ={selectedProvincia===null} onChange={handleChangeMunicipio}>
        {!selectedMunicipio && <option value="">--selecciona municipio--</option>}
        { municipios &&
          municipios.map(municipio => (
            <option key={municipio.id} value={municipio.id}>
              {municipio.name}
            </option>
          ))
        }
      </select>

      <style>{`
        .dropdownsContainer {
          select {
            width: 400px;
            text-align: center;
          }
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }
      `}</style>
    </div>
  )
}
