import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "App";
import Back from "components/Back/Back";
import {
  ColumnCenterWrapper,
  ScreenContainer,
  Description,
} from "styles/shared";
import i18n from "../../i18n";
import BasicSwitch from "components/BasicSwitch/BasicSwitch";

type SettingsNotificationsProps = NativeStackScreenProps<
  RootStackParamList,
  "settingsNotifications"
>;

const { t } = i18n;

const SettingsNotifications = ({
  navigation,
}: SettingsNotificationsProps): JSX.Element => {
  const [isAllowNotificationsEnabled, setAllowNotificationsEnabled] =
    React.useState(false);

  return (
    <ScreenContainer>
      <ColumnCenterWrapper>
        <Back navigation={navigation} />
        <BasicSwitch
          label={t("pages.settings.notifications.manageHeader")}
          leftItemLabel={t("common.disable")}
          rightItemLabel={t("common.enable")}
          onClickLeftItem={() => setAllowNotificationsEnabled(false)}
          onClickRightItem={() => setAllowNotificationsEnabled(true)}
          activeItem={isAllowNotificationsEnabled ? "right" : "left"}
        />
        <Description style={{ marginTop: 10 }}>
          {t("pages.settings.notifications.manageDescription", {
            state: isAllowNotificationsEnabled
              ? t("pages.settings.notifications.notificationsEnabled")
              : t("pages.settings.notifications.notificationsDisabled"),
          })}
        </Description>
      </ColumnCenterWrapper>
    </ScreenContainer>
  );
};

export default SettingsNotifications;