import React from 'react';
import {View} from 'react-native';
import RenderHTML from 'react-native-render-html';
import { IDetailsViewProps } from '../../../modals/types';

const DetailsView:React.FC<IDetailsViewProps> = ({content, width}) => {
  return (
    <View>
      {content.text && (
        <RenderHTML
          enableExperimentalMarginCollapsing={true}
          contentWidth={width}
          source={{html: content.text}}
          tagsStyles={{
            p: {marginBottom: 10, lineHeight: 20, paddingHorizontal: 10},
          }}
        />
      )}
    </View>
  );
};

export default DetailsView;
