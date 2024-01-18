import { ModelFilterProps } from '../../../../types/ShoesPage/shoePage.types';
import modelsList from '../Lists/modelsList';
import { ModelButton, ModelFilterBox, ModelItem, ModelList } from '../../../../styles/ShoePage/ModelFilter.styles';

const ModelFilter: React.FC<ModelFilterProps> = ({ setFilterType }) => {
  return (
    <ModelFilterBox>
      <ModelList>
        {modelsList.map((model, index) => (
          <ModelItem key={index}>
            <ModelButton onClick={() => setFilterType(model.name)}>{model.name}</ModelButton>
          </ModelItem>
        ))}
      </ModelList>
    </ModelFilterBox>
  );
};

export default ModelFilter;
