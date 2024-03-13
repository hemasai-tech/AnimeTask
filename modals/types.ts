import {NavigationProp} from '@react-navigation/native';

export type IPropsStackNavigation = {
  AnimeCard: undefined;
  AnimeContent: {contentLoad: {mainImage: string}};
};

export type IPropsAnimeCard = {
  navigation: NavigationProp<any>; // Adjust this type according to your navigation library
};

export interface IPropsContent {
  logo: string;
  title?: string;
  subTitle?: string;
  text?: string;
  mainImage?: string;
}

export type IPropsViewContent = {
  content: IPropsContent;
  onRefreshClick: () => void;
  loading?: boolean;
};

export interface IAnime {
  id: number;
  logo: string;
  mainImage: string;
  subTitle: string;
  text: string;
  thumbNailImage: string;
  title: string;
  userName: string;
}

export interface IButtonCompProps {
  onRefreshClick: () => void;
}

export interface IContent {
  text?: string;
}

export interface IDetailsViewProps {
  content: IPropsContent;
  width: number;
}

export interface IFooterProps {
  content: IPropsContent;
  onRefreshClick: () => void;
}

export interface IAnimeContent {
  mainImage: string;
}

export interface IAnimeContentProps {
  navigation: any; // Adjust the type according to your navigation library
  route: {
    params: {
      contentLoad: IPropsContent;
    };
  };
}

export interface IContentViewProps {
  content: IPropsContent | null;
  onRefreshClick: () => void;
  loading: boolean;
}

export interface IAnimeCardContent {
  logo: string;
  mainImage?: string;
}

export interface IAnimeCardProps {
  navigation: {
    navigate: (
      screen: string,
      params: {contentLoad: IAnimeCardContent},
    ) => void;
  };
  route: any;
}
