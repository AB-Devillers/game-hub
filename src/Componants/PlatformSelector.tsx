import usePlatform, { Platform } from "../hooks/usePlatform";

interface props {
  onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({ onSelectPlatform }: props) => {
  const { data, error } = usePlatform();
  if (error) return null;
  return (
    <>
      <select
        className="bg-blackish2 cursor-pointer text-white p-3 rounded custom-icon"
        onChange={(e) => {
          const selectedPlatform = JSON.parse(e.target.value);
          onSelectPlatform(selectedPlatform);
        }}
      >
        <option value="">Platforms</option>
        {data.map((platform) => (
          <option value={JSON.stringify(platform)} key={platform.id}>
            {platform.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default PlatformSelector;
