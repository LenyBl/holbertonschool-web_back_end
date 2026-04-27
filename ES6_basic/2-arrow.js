export default function getNeighborhood(friends) {
  this.sanFrancisco = 'San Francisco';
  this.losAngeles = 'Los Angeles';

  return friends.map((friend) => `${friend} is in ${this.sanFrancisco}`);
}
