interface props {
  rating: number;
}

const Emoji = ({ rating }: props) => {
  const emoji: { [key: number]: string } = {
    3: "😑",
    4: "👍",
    5: "🎯",
  };

  const selectedEmoji = emoji[rating] || "";

  return <h1 className="text-2xl mt-3">{selectedEmoji}</h1>;
};

export default Emoji;
