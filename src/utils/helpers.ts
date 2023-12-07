/**
 * Shuffle function taken from here: https://javascript.info/task/shuffle
 * @param array
 */

const shuffleArray = (array: any[]) => {
  const tempArray = array.slice();

  for (let i = tempArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
  }

  return tempArray;
};

export default shuffleArray;
