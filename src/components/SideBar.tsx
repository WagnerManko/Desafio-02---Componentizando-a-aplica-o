import { Button } from '../components/Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}


interface SideBarProps {
  states: {
    genres: GenreResponseProps[];
    selectedGenreId: Number;
  };

  handleClickButton: Function;
}

export function SideBar(props: SideBarProps) {
  // Complete aqui
  return (
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {props.states.genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => props.handleClickButton(genre.id)}
              selected={props.states.selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}