import { useState } from 'react'
import './App.css';
import Datable from './components/Datable';
import { useFetch } from './hooks/useFetch';
//import { useAxios } from './hooks/useAxios';
import  SimpleTable from './components/SimpleTable';

function App() {
  // open apis
  // https://apilist.fun
  // https://swapi.dev
  // https://dados.gov.br/dataset/dinheiro-em-circulao
  // https://olinda.bcb.gov.br/olinda/servico/mecir_dinheiro_em_circulacao/versao/v1/odata/informacoes_diarias_com_categoria?$top=100&$format=json
  // https://www.mockaroo.com/ ((https://www.youtube.com/watch?v=iALQ_YQ5dg0&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=2))
  
  // https://dev.to/nicomartin/the-right-way-to-fetch-data-with-react-hooks-48gc
  // https://www.digitalocean.com/community/tutorials/creating-a-custom-usefetch-react-hook
  // useFetch muito bom
  // https://www.youtube.com/watch?v=LfCF7gWwcds
  // boa explicacao o async/await
  // https://codewithnico.com/react-wait-axios-to-render/


  //const url = 'https://swapi.dev/api/planets';
  const url = 'https://olinda.bcb.gov.br/olinda/servico/mecir_dinheiro_em_circulacao/versao/v1/odata/informacoes_diarias_com_categoria?$top=100&$format=json'
  const [isLoading, data] = useFetch(url, {});
  
  // devmentor
  // https://www.youtube.com/watch?v=d1r0aK5awWk
  
  const  [query, setQuery] = useState('');
  
  function search(rows){
    const columns = rows[0] && Object.keys(rows[0]);
    return rows.filter( (row) =>
      columns.some( 
        (column) => row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1 
      )
    )
  }

  return (
    <>
    <center>
      <Datable asciiEmoji=':)' sevenLetters='datable' />
    </center>
    <div>
        <input type='"text' value={query} onChange={ (event) => setQuery(event.target.value) }/>
    </div>
    <hr />
    { 
      (isLoading) ? <div>loading...</div> : <SimpleTable data={search(data.value)} />
    }
  </>
  );
}

export default App;
