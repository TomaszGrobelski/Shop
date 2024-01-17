import { ModelFilterProps } from '../../../../types/ShoesPage/shoePage.types';
import modelsList from '../Lists/modelsList';

const ModelFilter: React.FC<ModelFilterProps> = ({ setFilterType }) => {
  return (
    <div className='border-b-[1px]  border-t-[1px] border-gray-200 '>
      <ul className='my-10 flex flex-col gap-4'>
        {modelsList.map((model, index) => (
          <li key={index}>
            <button
              onClick={() => setFilterType(model.name)}
              className=' hover:opacity-80'>
              {model.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModelFilter;
