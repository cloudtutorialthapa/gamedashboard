import { Game } from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticsScore from './CriticsScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width={'300px'} borderRadius={10} overflow={'hidden'}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack marginBottom={3} justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticsScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl"> {game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
