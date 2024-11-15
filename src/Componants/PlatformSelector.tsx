import usePlatform from "../hooks/usePlatform";

const PlatformSelector = () => {
  const { data } = usePlatform();
  return (
    <>
      <select className="bg-blackish2 cursor-pointer text-white p-3  rounded custom-icon">
        <option value="">Platforms</option>
        {data.map((plateform) => (
          <option value={plateform.slug} key={plateform.id}>
            {plateform.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default PlatformSelector;
