import {
  List,
  Item,
  LinkWrapper,
  Img,
  VoteCircle,
  NameMovie,
} from './List.styled';

const ListMovie = function ({ movie }) {
  return (
    <>
      {movie === [] ? (
        <>пустий список</>
      ) : (
        <List>
          {movie.map(item => (
            <Item key={item.id}>
              <LinkWrapper to={`/movies/${item.id}`}>
                <Img
                  src={
                    item.poster_path === null
                      ? 'img/image_not_available.png'
                      : `https://image.tmdb.org/t/p/w500/${item.poster_path}`
                  }
                  alt={item.name}
                />
                <VoteCircle>{Math.round(item.vote_average)}</VoteCircle>
                <NameMovie>{item.title}</NameMovie>
              </LinkWrapper>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default ListMovie;
