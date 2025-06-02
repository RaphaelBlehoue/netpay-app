import { ImageSourcePropType } from "react-native";
import { ICard } from "../Card/card.type";

export interface IOnboardingItem {
  headTitle?: string;
  headSubTitle?: string;
  title?: string;
  description?: string;
  source?: ImageSourcePropType;
  cartItems?: ICard[];
}