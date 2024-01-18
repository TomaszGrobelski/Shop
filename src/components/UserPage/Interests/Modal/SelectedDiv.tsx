import { SelectedDivProps } from '../../../../types/UserPage/userPage.types';
import { SelectedInput } from '../../../../styles/UserPage/SelectedDiv.styles';
import { SelectedLabel } from '../../../../styles/UserPage/SelectedDiv.styles';
import { SelectedList } from '../../../../styles/UserPage/SelectedDiv.styles';

function SelectedDiv({ selectedList }: SelectedDivProps) {
  return (
    <div>
      <SelectedList>
        {selectedList.map((item, index) => (
          <SelectedLabel htmlFor={`checkbox-${index}`} key={index}>
            <span>{item.name}</span>
            <SelectedInput id={`checkbox-${index}`} type='checkbox' />
          </SelectedLabel>
        ))}
      </SelectedList>
    </div>
  );
}

export default SelectedDiv;
