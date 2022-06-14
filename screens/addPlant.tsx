import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../App";
import Back from "../components/Back/Back";
import { ScreenContainer } from "../styles/shared";

type AddPlantProps = NativeStackScreenProps<RootStackParamList, "addPlant">;

const AddPlant = ({ navigation }: AddPlantProps): JSX.Element => {
  return (
    <ScreenContainer>
      add
      <Back navigation={navigation} />
    </ScreenContainer>
  );
};

export default AddPlant;
