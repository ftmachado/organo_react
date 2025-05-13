import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import {v4 as uuidv4} from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57c278',
    },
    {
      id: uuidv4(),
      nome: 'Fron-end',
      cor: '#82cffa',
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#a6d157',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#e06b69',
    },
    {
      id: uuidv4(),
      nome: 'Ux e Design',
      cor: '#db6ebf',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#ffba05',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#ff8a29',
    }
  ])

  const [colaboradores, setColaborador] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Fhabiana Machado',
      cargo: 'Desenvolvedor',
      imagem: 'https://github.com/ftmachado.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Guilherme Lima',
      cargo: 'Design',
      imagem: 'https://github.com/guilima.png',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Paulo Silveira',
      cargo: 'Hispter e CEO da Alura',
      imagem: 'https://github.com/paulosilva.png',
      time: times[6].nome
    },
  ])
  const novoColaborador = (colaborador) => {
    colaborador.id = uuidv4()
    colaborador.favorito = false
    setColaborador([...colaboradores, colaborador])
  }
  const deletarColaborador = (id) => {
    setColaborador(colaboradores.filter(colaborador => colaborador.id !== id))
  }
  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor
      }
      return time
    }))
  }

  const novoTime = (time) => {
    //1º um array com os times existentes, segundo um objeto com spread + id
    setTimes([...times, {...time, id: uuidv4() }])
  }

  const toggleFavorito = (id) => {
    setColaborador(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarTime={novoTime}
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador => novoColaborador(colaborador)}
      />
      {times.map(time => {
        return <Time 
                  key={time.nome}
                  time={time} 
                  colaboradores={colaboradores.filter( colab => colab.time === time.nome)}
                  aoDeletar={deletarColaborador}
                  aoFavoritar={toggleFavorito}
                  mudarCor={mudarCorDoTime}
                />
        })}
        <Rodape />
    </div>
  );
}

export default App;
