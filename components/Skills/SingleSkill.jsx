const SingleSkill = ({ skill }) => {
    const { Icon, name } = skill;
    return (
      <div className="flex flex-col items-center justify-center mb-10  dark:bg-gray-900 rounded-lg shadow-lg dark:shadow-none p-4">
        <div className="p-4 bg-primary dark:bg-gray-900 rounded-lg
        shadow-lg dark:shadow-none &:hover
        dark:bg-gray-900 
        dark:hover:bg-gray-900 dark:hover:shadow-lg
        dark:hover:text-gray-100
        dark:hover:scale-110
        dark:hover:rotate-180
        dark:hover:transition-all
        dark:hover:duration-500
        dark:hover:ease-in-out
        dark:hover:transform

        ">
          <Icon size={40} className="text-gray-900 dark:text-gray-100" />
        </div>
        <p className="mt-2 text-gray-900 dark:text-gray-100">{name}</p>
      </div>
    );
  };
  
  export default SingleSkill;
  